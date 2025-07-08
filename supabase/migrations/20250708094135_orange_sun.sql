-- Sultan Lebanese Kebab Database Schema
-- Created: 2024
-- Description: Complete database schema for Sultan Lebanese Kebab website

CREATE DATABASE IF NOT EXISTS sultan_kebab;
USE sultan_kebab;

-- Users table for authentication
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'customer', 'franchise_owner') DEFAULT 'customer',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Customers table
CREATE TABLE customers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    address TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Menu items table
CREATE TABLE menu_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category ENUM('kebab', 'burger', 'hotdough', 'minuman', 'dessert') NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    image VARCHAR(500),
    stock INT DEFAULT 0,
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Orders table
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id INT,
    franchise_id INT DEFAULT NULL,
    total_amount DECIMAL(10, 2) NOT NULL,
    status ENUM('pending', 'processing', 'completed', 'cancelled') DEFAULT 'pending',
    delivery_address TEXT,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
);

-- Order items table
CREATE TABLE order_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    menu_item_id INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(id) ON DELETE CASCADE,
    FOREIGN KEY (menu_item_id) REFERENCES menu_items(id) ON DELETE CASCADE
);

-- Franchises table
CREATE TABLE franchises (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    owner_name VARCHAR(255) NOT NULL,
    owner_email VARCHAR(255) NOT NULL,
    owner_phone VARCHAR(20),
    location VARCHAR(255) NOT NULL,
    address TEXT,
    investment_amount DECIMAL(12, 2) NOT NULL,
    package_type ENUM('starter', 'premium', 'master') NOT NULL,
    status ENUM('active', 'inactive', 'pending') DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Testimonials table
CREATE TABLE testimonials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    customer_location VARCHAR(255),
    rating INT DEFAULT 5,
    comment TEXT NOT NULL,
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Gallery table
CREATE TABLE gallery (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    image_url VARCHAR(500) NOT NULL,
    category ENUM('makanan', 'minuman', 'dessert', 'restoran', 'tim', 'pelanggan') NOT NULL,
    description TEXT,
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Promos table
CREATE TABLE promos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    discount_percentage DECIMAL(5, 2),
    discount_amount DECIMAL(10, 2),
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Contact messages table
CREATE TABLE contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    status ENUM('new', 'read', 'replied') DEFAULT 'new',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Insert sample data

-- Insert admin user
INSERT INTO users (name, email, password, role) VALUES 
('Admin', 'admin@sultanlebanese.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'admin');

-- Insert sample customers
INSERT INTO customers (name, email, phone, address) VALUES 
('Ahmad Rizki', 'ahmad@email.com', '081234567890', 'Jl. Sudirman No. 123, Jakarta'),
('Sari Dewi', 'sari@email.com', '081234567891', 'Jl. Braga No. 456, Bandung'),
('Budi Santoso', 'budi@email.com', '081234567892', 'Jl. Pemuda No. 789, Surabaya');

-- Insert sample menu items
INSERT INTO menu_items (name, category, description, price, image, stock) VALUES 
-- Kebab items
('Kebab Lamb Original', 'kebab', 'Kebab daging domba dengan bumbu khas Lebanon', 25000, 'https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg', 50),
('Kebab Chicken Spicy', 'kebab', 'Kebab ayam dengan sambal pedas', 22000, 'https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg', 45),
('Kebab Beef Cheese', 'kebab', 'Kebab daging sapi dengan keju mozzarella', 28000, 'https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg', 40),
('Kebab Mix Meat', 'kebab', 'Kombinasi daging sapi dan ayam', 30000, 'https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg', 35),

-- Burger items
('Lebanese Burger', 'burger', 'Burger khas Lebanon dengan patty daging sapi', 30000, 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg', 30),
('Chicken Burger Deluxe', 'burger', 'Burger ayam dengan topping lengkap', 28000, 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg', 25),
('Spicy Beef Burger', 'burger', 'Burger daging sapi dengan sambal pedas', 32000, 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg', 28),
('Cheese Burger Supreme', 'burger', 'Burger dengan double cheese dan bacon', 35000, 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg', 22),

-- Hotdough items
('Hotdough Original', 'hotdough', 'Hotdough klasik dengan isian daging ayam', 18000, 'https://images.pexels.com/photos/4518607/pexels-photo-4518607.jpeg', 60),
('Hotdough Cheese', 'hotdough', 'Hotdough dengan isian keju mozzarella', 20000, 'https://images.pexels.com/photos/4518607/pexels-photo-4518607.jpeg', 55),
('Hotdough Spicy', 'hotdough', 'Hotdough dengan sambal pedas', 22000, 'https://images.pexels.com/photos/4518607/pexels-photo-4518607.jpeg', 50),
('Hotdough Combo', 'hotdough', 'Hotdough dengan kombinasi daging dan keju', 25000, 'https://images.pexels.com/photos/4518607/pexels-photo-4518607.jpeg', 45),

-- Minuman items
('Lebanese Tea', 'minuman', 'Teh khas Lebanon dengan mint', 8000, 'https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg', 100),
('Fresh Orange Juice', 'minuman', 'Jus jeruk segar tanpa gula tambahan', 12000, 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg', 80),
('Lemon Mint', 'minuman', 'Minuman segar lemon dengan mint', 10000, 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg', 90),
('Arabic Coffee', 'minuman', 'Kopi khas Arab dengan rempah', 15000, 'https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg', 70),

-- Dessert items
('Baklava', 'dessert', 'Kue manis khas Lebanon dengan madu', 20000, 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg', 40),
('Kunafa', 'dessert', 'Dessert keju dengan sirup gula', 22000, 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg', 35),
('Mamoul', 'dessert', 'Kue kering isi kurma dan kacang', 15000, 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg', 50),
('Muhallabia', 'dessert', 'Pudding susu dengan rose water', 18000, 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg', 45);

-- Insert sample orders
INSERT INTO orders (customer_id, total_amount, status, delivery_address, notes) VALUES 
(1, 50000, 'pending', 'Jl. Sudirman No. 123, Jakarta', 'Tolong jangan terlalu pedas'),
(2, 30000, 'completed', 'Jl. Braga No. 456, Bandung', 'Antar ke kantor'),
(3, 60000, 'processing', 'Jl. Pemuda No. 789, Surabaya', 'Pakai kantong plastik');

-- Insert sample order items
INSERT INTO order_items (order_id, menu_item_id, quantity, price) VALUES 
(1, 1, 2, 25000),
(2, 5, 1, 30000),
(3, 10, 3, 20000);

-- Insert sample franchises
INSERT INTO franchises (name, owner_name, owner_email, owner_phone, location, address, investment_amount, package_type, status) VALUES 
('Sultan Kebab Jakarta', 'PT. Kuliner Nusantara', 'jakarta@sultanlebanese.com', '02112345678', 'Jakarta Pusat', 'Jl. Thamrin No. 100, Jakarta', 125000000, 'premium', 'active'),
('Sultan Kebab Bandung', 'CV. Makanan Sehat', 'bandung@sultanlebanese.com', '02223456789', 'Bandung', 'Jl. Dago No. 200, Bandung', 75000000, 'starter', 'active'),
('Sultan Kebab Surabaya', 'UD. Berkah Jaya', 'surabaya@sultanlebanese.com', '03134567890', 'Surabaya', 'Jl. Pemuda No. 300, Surabaya', 200000000, 'master', 'active');

-- Insert sample testimonials
INSERT INTO testimonials (customer_name, customer_location, rating, comment) VALUES 
('Ahmad Rizki', 'Jakarta', 5, 'Kebab terenak yang pernah saya makan! Dagingnya empuk dan bumbunya pas banget.'),
('Sari Dewi', 'Bandung', 5, 'Pelayanan ramah dan kebabnya sangat autentik. Pasti akan balik lagi!'),
('Budi Santoso', 'Surabaya', 5, 'Franchise yang sangat menguntungkan. Support dari pusat sangat membantu.');

-- Insert sample gallery items
INSERT INTO gallery (title, image_url, category, description) VALUES 
('Kebab Delicious', 'https://images.pexels.com/photos/4551832/pexels-photo-4551832.jpeg', 'makanan', 'Kebab dengan daging berkualitas tinggi'),
('Burger Special', 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg', 'makanan', 'Burger dengan cita rasa Lebanon'),
('Hotdough Fresh', 'https://images.pexels.com/photos/4518607/pexels-photo-4518607.jpeg', 'makanan', 'Hotdough segar dan lezat'),
('Lebanese Tea', 'https://images.pexels.com/photos/230477/pexels-photo-230477.jpeg', 'minuman', 'Teh khas Lebanon dengan mint segar'),
('Restaurant Interior', 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg', 'restoran', 'Suasana interior yang nyaman');

-- Insert sample promos
INSERT INTO promos (title, description, discount_percentage, start_date, end_date) VALUES 
('Promo Bulan Ini', 'Diskon 30% untuk semua paket combo', 30.00, '2024-01-01', '2024-01-31'),
('Promo Franchise', 'Diskon investasi awal untuk franchise baru', 20.00, '2024-01-01', '2024-03-31'),
('Promo Akhir Tahun', 'Cashback hingga 50% untuk pembelian tertentu', 25.00, '2024-12-01', '2024-12-31');

-- Create indexes for better performance
CREATE INDEX idx_orders_customer_id ON orders(customer_id);
CREATE INDEX idx_orders_status ON orders(status);
CREATE INDEX idx_orders_created_at ON orders(created_at);
CREATE INDEX idx_menu_items_category ON menu_items(category);
CREATE INDEX idx_menu_items_status ON menu_items(status);
CREATE INDEX idx_order_items_order_id ON order_items(order_id);
CREATE INDEX idx_order_items_menu_item_id ON order_items(menu_item_id);
CREATE INDEX idx_franchises_status ON franchises(status);
CREATE INDEX idx_gallery_category ON gallery(category);
CREATE INDEX idx_testimonials_status ON testimonials(status);
CREATE INDEX idx_promos_dates ON promos(start_date, end_date);
CREATE INDEX idx_contact_messages_status ON contact_messages(status);

-- Create views for common queries
CREATE VIEW active_menu_items AS
SELECT * FROM menu_items WHERE status = 'active';

CREATE VIEW completed_orders AS
SELECT * FROM orders WHERE status = 'completed';

CREATE VIEW active_franchises AS
SELECT * FROM franchises WHERE status = 'active';

CREATE VIEW active_testimonials AS
SELECT * FROM testimonials WHERE status = 'active';

CREATE VIEW current_promos AS
SELECT * FROM promos 
WHERE status = 'active' 
AND start_date <= CURRENT_DATE 
AND end_date >= CURRENT_DATE;

-- Add triggers for automatic updates
DELIMITER //

CREATE TRIGGER update_order_timestamp 
BEFORE UPDATE ON orders 
FOR EACH ROW 
BEGIN 
    SET NEW.updated_at = CURRENT_TIMESTAMP;
END//

CREATE TRIGGER update_menu_item_timestamp 
BEFORE UPDATE ON menu_items 
FOR EACH ROW 
BEGIN 
    SET NEW.updated_at = CURRENT_TIMESTAMP;
END//

CREATE TRIGGER update_franchise_timestamp 
BEFORE UPDATE ON franchises 
FOR EACH ROW 
BEGIN 
    SET NEW.updated_at = CURRENT_TIMESTAMP;
END//

DELIMITER ;

-- Grant permissions (adjust as needed)
-- CREATE USER 'sultan_user'@'localhost' IDENTIFIED BY 'sultan_password';
-- GRANT SELECT, INSERT, UPDATE, DELETE ON sultan_kebab.* TO 'sultan_user'@'localhost';
-- FLUSH PRIVILEGES;