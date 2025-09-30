-- Creating the products table
CREATE TABLE products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock INTEGER NOT NULL,
    image VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);

-- Inserting initial data
INSERT INTO products (name, category, price, stock, image, description) VALUES
('Blue T-Shirt', 'Clothing', 19.99, 50, 'images/blue-tshirt.jpeg', 'Comfortable cotton t-shirt'),
('Black Jeans', 'Clothing', 39.99, 30, 'images/black-jeans.jpeg', 'Slim fit black jeans'),
('Backpack', 'Bags', 50.00, 20, 'images/backpack.jpeg', 'Durable backpack for daily use'),
('Tote Bag', 'Bags', 30.00, 25, 'images/tote-bag.jpeg', 'Stylish canvas tote bag'),
('Messenger Bag', 'Bags', 40.00, 15, 'images/messenger-bag.jpeg', 'Leather messenger bag'),
('Vintage Rock T-Shirt', 'Clothing', 25.00, 40, 'images/vintage-rock-tshirt.jpeg', 'Retro rock band t-shirt'),
('Vintage Graphic Tee', 'Clothing', 22.00, 35, 'images/vintage-graphic-tee.jpeg', 'Graphic print vintage tee'),
('Wool Sweater', 'Clothing', 45.00, 25, 'images/wool-sweater.jpeg', 'Warm wool sweater'),
('Cashmere Sweater', 'Clothing', 60.00, 20, 'images/cashmere-sweater.jpeg', 'Soft cashmere sweater'),
('Zip Hoodie', 'Clothing', 35.00, 30, 'images/zip-hoodie.jpeg', 'Comfortable zip-up hoodie'),
('Pullover Hoodie', 'Clothing', 30.00, 40, 'images/pullover-hoodie.jpeg', 'Casual pullover hoodie'),
('Sneakers', 'Shoes', 70.00, 15, 'images/sneakers.jpeg', 'Stylish running sneakers'),
('Boots', 'Shoes', 80.00, 10, 'images/boots.jpeg', 'Rugged leather boots'),
('Classic Watch', 'Accessories', 100.00, 20, 'images/watch.jpeg', 'Elegant wrist watch'),
('Silver Necklace', 'Accessories', 50.00, 25, 'images/necklace.jpeg', 'Silver chain necklace'),
('Beaded Bracelet', 'Accessories', 30.00, 30, 'images/bracelet.jpeg', 'Beaded bracelet'),
('Luxury Oud Perfume', 'Perfumes', 120.00, 15, 'images/oud-perfume.jpeg', 'Rich oriental oud fragrance'),
('Floral Essence Perfume', 'Perfumes', 90.00, 20, 'images/floral-perfume.jpeg', 'Light floral luxury scent'),
('AirPods Pro', 'Electronics', 249.00, 10, 'images/airpods-pro.jpeg', 'Wireless noise-canceling earbuds'),
('Wired Earphones', 'Electronics', 29.00, 50, 'images/earphones.jpeg', 'High-quality wired earphones'),
('Apple Headphones', 'Electronics', 199.00, 12, 'images/apple-headphones.jpeg', 'Over-ear wireless headphones'),
('Nike Crew Socks', 'Clothing', 15.00, 60, 'images/nike-socks.jpeg', 'Comfortable cotton crew socks'),
('Nike Headband', 'Accessories', 10.00, 40, 'images/headband.jpeg', 'Sweat-absorbing sports headband'),
('Classy Sunglasses', 'Accessories', 80.00, 25, 'images/sunglasses.jpeg', 'Stylish polarized sunglasses');