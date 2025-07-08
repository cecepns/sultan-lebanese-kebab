const express = require('express');
const router = express.Router();

// Get all orders
router.get('/', async (req, res) => {
  try {
    const [rows] = await req.db.execute(`
      SELECT o.*, c.name as customer_name, c.email as customer_email, c.phone as customer_phone
      FROM orders o
      LEFT JOIN customers c ON o.customer_id = c.id
      ORDER BY o.created_at DESC
    `);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

// Get order by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [orderRows] = await req.db.execute(`
      SELECT o.*, c.name as customer_name, c.email as customer_email, c.phone as customer_phone
      FROM orders o
      LEFT JOIN customers c ON o.customer_id = c.id
      WHERE o.id = ?
    `, [id]);
    
    if (orderRows.length === 0) {
      return res.status(404).json({ error: 'Order not found' });
    }
    
    // Get order items
    const [itemRows] = await req.db.execute(`
      SELECT oi.*, mi.name as item_name, mi.price as item_price
      FROM order_items oi
      JOIN menu_items mi ON oi.menu_item_id = mi.id
      WHERE oi.order_id = ?
    `, [id]);
    
    const order = orderRows[0];
    order.items = itemRows;
    
    res.json(order);
  } catch (error) {
    console.error('Error fetching order:', error);
    res.status(500).json({ error: 'Failed to fetch order' });
  }
});

// Create new order
router.post('/', async (req, res) => {
  try {
    const { customer_id, items, total_amount, delivery_address, notes } = req.body;
    
    // Start transaction
    await req.db.execute('START TRANSACTION');
    
    // Insert order
    const [orderResult] = await req.db.execute(
      'INSERT INTO orders (customer_id, total_amount, delivery_address, notes, status) VALUES (?, ?, ?, ?, "pending")',
      [customer_id, total_amount, delivery_address, notes]
    );
    
    const orderId = orderResult.insertId;
    
    // Insert order items
    for (const item of items) {
      await req.db.execute(
        'INSERT INTO order_items (order_id, menu_item_id, quantity, price) VALUES (?, ?, ?, ?)',
        [orderId, item.menu_item_id, item.quantity, item.price]
      );
      
      // Update stock
      await req.db.execute(
        'UPDATE menu_items SET stock = stock - ? WHERE id = ?',
        [item.quantity, item.menu_item_id]
      );
    }
    
    // Commit transaction
    await req.db.execute('COMMIT');
    
    res.status(201).json({ 
      message: 'Order created successfully',
      order_id: orderId 
    });
  } catch (error) {
    // Rollback transaction
    await req.db.execute('ROLLBACK');
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
});

// Update order status
router.put('/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    
    const [result] = await req.db.execute(
      'UPDATE orders SET status = ? WHERE id = ?',
      [status, id]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Order not found' });
    }
    
    res.json({ message: 'Order status updated successfully' });
  } catch (error) {
    console.error('Error updating order status:', error);
    res.status(500).json({ error: 'Failed to update order status' });
  }
});

// Get orders by customer
router.get('/customer/:customer_id', async (req, res) => {
  try {
    const { customer_id } = req.params;
    const [rows] = await req.db.execute(
      'SELECT * FROM orders WHERE customer_id = ? ORDER BY created_at DESC',
      [customer_id]
    );
    res.json(rows);
  } catch (error) {
    console.error('Error fetching customer orders:', error);
    res.status(500).json({ error: 'Failed to fetch customer orders' });
  }
});

module.exports = router;