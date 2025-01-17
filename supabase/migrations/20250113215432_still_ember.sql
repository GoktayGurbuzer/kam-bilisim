/*
  # Add ASUS Product Attributes

  1. New Attributes
    - Add attribute values for ASUS laptops including:
      - Processor specifications
      - RAM configurations
      - Storage details
      - Operating system options

  2. Changes
    - Add attribute values for existing ASUS products
    - Update product specifications with detailed information

  3. Security
    - Maintain existing RLS policies
*/

-- Add attribute values for ROG Strix G15
INSERT INTO product_attribute_values (
  product_id,
  attribute_id,
  value
) VALUES
(
  (SELECT id FROM products WHERE slug = 'rog-strix-g15-2024'),
  (SELECT id FROM product_attributes WHERE code = 'processor'),
  'intel-i9'
),
(
  (SELECT id FROM products WHERE slug = 'rog-strix-g15-2024'),
  (SELECT id FROM product_attributes WHERE code = 'ram'),
  '32gb'
),
(
  (SELECT id FROM products WHERE slug = 'rog-strix-g15-2024'),
  (SELECT id FROM product_attributes WHERE code = 'storage'),
  'ssd-2tb'
),
(
  (SELECT id FROM products WHERE slug = 'rog-strix-g15-2024'),
  (SELECT id FROM product_attributes WHERE code = 'os'),
  'win11-pro'
);

-- Add attribute values for ZenBook Pro 14
INSERT INTO product_attribute_values (
  product_id,
  attribute_id,
  value
) VALUES
(
  (SELECT id FROM products WHERE slug = 'zenbook-pro-14-2024'),
  (SELECT id FROM product_attributes WHERE code = 'processor'),
  'intel-i7'
),
(
  (SELECT id FROM products WHERE slug = 'zenbook-pro-14-2024'),
  (SELECT id FROM product_attributes WHERE code = 'ram'),
  '16gb'
),
(
  (SELECT id FROM products WHERE slug = 'zenbook-pro-14-2024'),
  (SELECT id FROM product_attributes WHERE code = 'storage'),
  'ssd-1tb'
),
(
  (SELECT id FROM products WHERE slug = 'zenbook-pro-14-2024'),
  (SELECT id FROM product_attributes WHERE code = 'os'),
  'win11-home'
);

-- Update product descriptions with detailed specifications
UPDATE products
SET description = 'Experience unrivaled gaming performance with the ROG Strix G15, featuring the latest Intel Core i9-13900H processor and NVIDIA GeForce RTX 4080 graphics. With its 240Hz QHD display, 32GB DDR5 RAM, and advanced cooling system, this laptop delivers the ultimate gaming experience. The 2TB NVMe SSD ensures lightning-fast load times, while Windows 11 Pro provides advanced security and management features.'
WHERE slug = 'rog-strix-g15-2024';

UPDATE products
SET description = 'The ZenBook Pro 14 OLED combines powerful performance with stunning visuals. Featuring a 14-inch 2.8K OLED display, Intel Core i7-13700H processor, and NVIDIA RTX 3050 Ti graphics, it''s perfect for creative professionals. With 16GB DDR5 RAM, 1TB NVMe SSD, and Windows 11 Home, this ultrabook delivers exceptional performance in a compact form factor.'
WHERE slug = 'zenbook-pro-14-2024';