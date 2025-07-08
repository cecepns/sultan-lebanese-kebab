const express = require('express');
const router = express.Router();

// Get all menu items
router.get('/', async (req, res) => {
  try {
    const [rows] = await req.db.execute(
      'SELECT * FROM menu_items WHERE status = "active" ORDER BY category, name'
    );
    res.json(rows);
  } catch (error) {
    console.error('Error fetching menu items:', error);
    res.status(500).json({ error: 'Failed to fetch menu items' });
  }
});

// Get menu items by category
router.get('/category/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const [rows] = await req.db.execute(
      'SELECT * FROM menu_items WHERE category = ? AND status = "active" ORDER BY name',
      [category]
    );
    res.json(rows);
  } catch (error) {
    console.error('Error fetching menu items by category:', error);
    res.status(500).json({ error: 'Failed to fetch menu items' });
  }
});

// Get single menu item
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await req.db.execute(
      'SELECT * FROM menu_items WHERE id = ? AND status = "active"',
      [id]
    );
    
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Menu item not found' });
    }
    
    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching menu item:', error);
    res.status(500).json({ error: 'Failed to fetch menu item' });
  }
});

// Add new menu item (admin only)
router.post('/', async (req, res) => {
  try {
    const { name, category, description, price, image, stock } = req.body;
    
    const [result] = await req.db.execute(
      'INSERT INTO menu_items (name, category, description, price, image, stock, status) VALUES (?, ?, ?, ?, ?, ?, "active")',
      [name, category, description, price, image, stock]
    );
    
    res.status(201).json({ 
      message: 'Menu item added successfully',
      id: result.insertId 
    });
  } catch (error) {
    console.error('Error adding menu item:', error);
    res.status(500).json({ error: 'Failed to add menu item' });
  }
});

// Update menu item (admin only)
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, category, description, price, image, stock, status } = req.body;
    
    const [result] = await req.db.execute(
      'UPDATE menu_items SET name = ?, category = ?, description = ?, price = ?, image = ?, stock = ?, status = ? WHERE id = ?',
      [name, category, description, price, image, stock, status, id]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Menu item not found' });
    }
    
    res.json({ message: 'Menu item updated successfully' });
  } catch (error) {
    console.error('Error updating menu item:', error);
    res.status(500).json({ error: 'Failed to update menu item' });
  }
});

// Delete menu item (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const [result] = await req.db.execute(
      'UPDATE menu_items SET status = "inactive" WHERE id = ?',
      [id]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Menu item not found' });
    }
    
    res.json({ message: 'Menu item deleted successfully' });
  } catch (error) {
    console.error('Error deleting menu item:', error);
    res.status(500).json({ error: 'Failed to delete menu item' });
  }
});

module.exports = router;