const express = require('express');
const router = express.Router();

// Get dashboard statistics
router.get('/dashboard', async (req, res) => {
  try {
    // Get total orders
    const [orderCount] = await req.db.execute('SELECT COUNT(*) as count FROM orders');
    
    // Get total revenue
    const [revenue] = await req.db.execute('SELECT SUM(total_amount) as total FROM orders WHERE status = "completed"');
    
    // Get total customers
    const [customerCount] = await req.db.execute('SELECT COUNT(*) as count FROM customers');
    
    // Get total franchises
    const [franchiseCount] = await req.db.execute('SELECT COUNT(*) as count FROM franchises WHERE status = "active"');
    
    // Get total products
    const [productCount] = await req.db.execute('SELECT COUNT(*) as count FROM menu_items WHERE status = "active"');
    
    // Get recent orders
    const [recentOrders] = await req.db.execute(`
      SELECT o.id, o.total_amount, o.status, o.created_at, c.name as customer_name
      FROM orders o
      LEFT JOIN customers c ON o.customer_id = c.id
      ORDER BY o.created_at DESC
      LIMIT 5
    `);
    
    // Get order status distribution
    const [orderStatusStats] = await req.db.execute(`
      SELECT status, COUNT(*) as count
      FROM orders
      GROUP BY status
    `);
    
    res.json({
      stats: {
        totalOrders: orderCount[0].count,
        totalRevenue: revenue[0].total || 0,
        totalCustomers: customerCount[0].count,
        totalFranchises: franchiseCount[0].count,
        totalProducts: productCount[0].count
      },
      recentOrders,
      orderStatusStats
    });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({ error: 'Failed to fetch dashboard data' });
  }
});

// Get sales report
router.get('/reports/sales', async (req, res) => {
  try {
    const { startDate, endDate } = req.query;
    
    let query = `
      SELECT 
        DATE(created_at) as date,
        COUNT(*) as order_count,
        SUM(total_amount) as total_sales
      FROM orders
      WHERE status = "completed"
    `;
    
    const params = [];
    
    if (startDate && endDate) {
      query += ' AND DATE(created_at) BETWEEN ? AND ?';
      params.push(startDate, endDate);
    }
    
    query += ' GROUP BY DATE(created_at) ORDER BY date DESC';
    
    const [rows] = await req.db.execute(query, params);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching sales report:', error);
    res.status(500).json({ error: 'Failed to fetch sales report' });
  }
});

// Get popular items
router.get('/reports/popular-items', async (req, res) => {
  try {
    const [rows] = await req.db.execute(`
      SELECT 
        mi.name,
        mi.category,
        SUM(oi.quantity) as total_ordered,
        SUM(oi.quantity * oi.price) as total_revenue
      FROM order_items oi
      JOIN menu_items mi ON oi.menu_item_id = mi.id
      JOIN orders o ON oi.order_id = o.id
      WHERE o.status = "completed"
      GROUP BY mi.id, mi.name, mi.category
      ORDER BY total_ordered DESC
      LIMIT 10
    `);
    
    res.json(rows);
  } catch (error) {
    console.error('Error fetching popular items:', error);
    res.status(500).json({ error: 'Failed to fetch popular items' });
  }
});

// Get franchise performance
router.get('/reports/franchise-performance', async (req, res) => {
  try {
    const [rows] = await req.db.execute(`
      SELECT 
        f.name as franchise_name,
        f.location,
        f.investment_amount,
        COUNT(o.id) as total_orders,
        SUM(o.total_amount) as total_revenue
      FROM franchises f
      LEFT JOIN orders o ON f.id = o.franchise_id AND o.status = "completed"
      WHERE f.status = "active"
      GROUP BY f.id, f.name, f.location, f.investment_amount
      ORDER BY total_revenue DESC
    `);
    
    res.json(rows);
  } catch (error) {
    console.error('Error fetching franchise performance:', error);
    res.status(500).json({ error: 'Failed to fetch franchise performance' });
  }
});

module.exports = router;