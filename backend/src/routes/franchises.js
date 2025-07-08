const express = require('express');
const router = express.Router();

// Get all franchises
router.get('/', async (req, res) => {
  try {
    const [rows] = await req.db.execute(
      'SELECT * FROM franchises ORDER BY created_at DESC'
    );
    res.json(rows);
  } catch (error) {
    console.error('Error fetching franchises:', error);
    res.status(500).json({ error: 'Failed to fetch franchises' });
  }
});

// Get franchise by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await req.db.execute(
      'SELECT * FROM franchises WHERE id = ?',
      [id]
    );
    
    if (rows.length === 0) {
      return res.status(404).json({ error: 'Franchise not found' });
    }
    
    res.json(rows[0]);
  } catch (error) {
    console.error('Error fetching franchise:', error);
    res.status(500).json({ error: 'Failed to fetch franchise' });
  }
});

// Create new franchise
router.post('/', async (req, res) => {
  try {
    const { 
      name, 
      owner_name, 
      owner_email, 
      owner_phone, 
      location, 
      address, 
      investment_amount, 
      package_type 
    } = req.body;
    
    const [result] = await req.db.execute(
      'INSERT INTO franchises (name, owner_name, owner_email, owner_phone, location, address, investment_amount, package_type, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, "active")',
      [name, owner_name, owner_email, owner_phone, location, address, investment_amount, package_type]
    );
    
    res.status(201).json({ 
      message: 'Franchise created successfully',
      franchise_id: result.insertId 
    });
  } catch (error) {
    console.error('Error creating franchise:', error);
    res.status(500).json({ error: 'Failed to create franchise' });
  }
});

// Update franchise
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { 
      name, 
      owner_name, 
      owner_email, 
      owner_phone, 
      location, 
      address, 
      investment_amount, 
      package_type, 
      status 
    } = req.body;
    
    const [result] = await req.db.execute(
      'UPDATE franchises SET name = ?, owner_name = ?, owner_email = ?, owner_phone = ?, location = ?, address = ?, investment_amount = ?, package_type = ?, status = ? WHERE id = ?',
      [name, owner_name, owner_email, owner_phone, location, address, investment_amount, package_type, status, id]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Franchise not found' });
    }
    
    res.json({ message: 'Franchise updated successfully' });
  } catch (error) {
    console.error('Error updating franchise:', error);
    res.status(500).json({ error: 'Failed to update franchise' });
  }
});

// Delete franchise
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    const [result] = await req.db.execute(
      'UPDATE franchises SET status = "inactive" WHERE id = ?',
      [id]
    );
    
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: 'Franchise not found' });
    }
    
    res.json({ message: 'Franchise deleted successfully' });
  } catch (error) {
    console.error('Error deleting franchise:', error);
    res.status(500).json({ error: 'Failed to delete franchise' });
  }
});

module.exports = router;