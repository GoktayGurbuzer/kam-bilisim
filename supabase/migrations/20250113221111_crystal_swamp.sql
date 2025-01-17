/*
  # Add New Products with Filtering Support

  1. New Products
    - ASUS ROG Flow X13 (Gaming Laptop)
    - ASUS ProArt StudioBook Pro (Workstation Laptop)
    - ASUS ExpertBook B9 (Business Laptop)
    - Microsoft Visual Studio Enterprise 2024
    - ESET Smart Security Premium 2024

  2. Product Details
    - Complete specifications
    - Attribute values for filtering
    - Product images
*/

-- Add new ASUS products
INSERT INTO products (
  brand_id,
  category_id,
  sku,
  name,
  slug,
  description,
  short_description,
  price,
  sale_price,
  stock_status,
  stock_quantity,
  status
) VALUES
(
  (SELECT id FROM brands WHERE slug = 'asus'),
  (SELECT id FROM brand_categories WHERE slug = 'laptop'),
  'ROG-FLOW-X13-2024',
  'ROG Flow X13 (2024)',
  'rog-flow-x13-2024',
  'The ROG Flow X13 redefines gaming versatility with its convertible design. Powered by AMD Ryzen 9 7940HS and NVIDIA RTX 4070, this 13-inch powerhouse delivers desktop-class gaming in an ultraportable form factor. Features a 13.4-inch 165Hz QHD+ display with touch support.',
  'Convertible gaming laptop with RTX 4070',
  1999.99,
  1899.99,
  true,
  30,
  'published'
),
(
  (SELECT id FROM brands WHERE slug = 'asus'),
  (SELECT id FROM brand_categories WHERE slug = 'laptop'),
  'PROART-STUDIOBOOK-PRO-2024',
  'ProArt StudioBook Pro (2024)',
  'proart-studiobook-pro-2024',
  'The ProArt StudioBook Pro is engineered for professional content creators. With Intel Xeon processors, NVIDIA RTX A5000 graphics, and a color-accurate 4K OLED display, it''s the ultimate mobile workstation for demanding creative workflows.',
  'Professional workstation laptop',
  3499.99,
  null,
  true,
  20,
  'published'
),
(
  (SELECT id FROM brands WHERE slug = 'asus'),
  (SELECT id FROM brand_categories WHERE slug = 'laptop'),
  'EXPERTBOOK-B9-2024',
  'ExpertBook B9 (2024)',
  'expertbook-b9-2024',
  'The ExpertBook B9 is the world''s lightest 14-inch business laptop. Featuring Intel Core i7 vPro processors, 32GB RAM, and up to 2TB SSD storage, it''s designed for business professionals who demand performance and portability.',
  'Ultra-light business laptop',
  1799.99,
  1699.99,
  true,
  40,
  'published'
);

-- Add new Microsoft product
INSERT INTO products (
  brand_id,
  category_id,
  sku,
  name,
  slug,
  description,
  short_description,
  price,
  stock_status,
  stock_quantity,
  status
) VALUES
(
  (SELECT id FROM brands WHERE slug = 'microsoft'),
  (SELECT id FROM brand_categories WHERE slug = 'office'),
  'VS-ENT-2024',
  'Visual Studio Enterprise 2024',
  'visual-studio-enterprise-2024',
  'Visual Studio Enterprise 2024 is the most comprehensive IDE for .NET and C++ developers. Includes advanced debugging, profiling, and DevOps features, plus access to Azure DevOps and Azure credits.',
  'Professional development IDE',
  2999.99,
  true,
  999,
  'published'
);

-- Add new ESET product
INSERT INTO products (
  brand_id,
  category_id,
  sku,
  name,
  slug,
  description,
  short_description,
  price,
  stock_status,
  stock_quantity,
  status
) VALUES
(
  (SELECT id FROM brands WHERE slug = 'eset'),
  (SELECT id FROM brand_categories WHERE slug = 'security'),
  'ESET-SSP-2024',
  'ESET Smart Security Premium 2024',
  'eset-smart-security-premium-2024',
  'ESET Smart Security Premium offers comprehensive digital security with advanced features including password management, secure data encryption, and premium parental controls.',
  'Premium internet security suite',
  79.99,
  true,
  999,
  'published'
);

-- Add product images
INSERT INTO product_images (product_id, url, alt_text, is_primary) VALUES
(
  (SELECT id FROM products WHERE slug = 'rog-flow-x13-2024'),
  'https://images.unsplash.com/photo-1611078489935-0cb964de46d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  'ROG Flow X13 Convertible Gaming Laptop',
  true
),
(
  (SELECT id FROM products WHERE slug = 'proart-studiobook-pro-2024'),
  'https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  'ProArt StudioBook Pro Workstation',
  true
),
(
  (SELECT id FROM products WHERE slug = 'expertbook-b9-2024'),
  'https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  'ExpertBook B9 Business Laptop',
  true
),
(
  (SELECT id FROM products WHERE slug = 'visual-studio-enterprise-2024'),
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  'Visual Studio Enterprise 2024',
  true
),
(
  (SELECT id FROM products WHERE slug = 'eset-smart-security-premium-2024'),
  'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  'ESET Smart Security Premium 2024',
  true
);

-- Add attribute values for ROG Flow X13
INSERT INTO product_attribute_values (product_id, attribute_id, value)
SELECT 
  p.id,
  a.id,
  CASE a.code
    WHEN 'processor' THEN 'amd-r9'
    WHEN 'ram' THEN '32gb'
    WHEN 'storage' THEN 'ssd-1tb'
    WHEN 'os' THEN 'win11-pro'
  END
FROM products p
CROSS JOIN product_attributes a
WHERE p.slug = 'rog-flow-x13-2024'
AND a.code IN ('processor', 'ram', 'storage', 'os');

-- Add attribute values for ProArt StudioBook Pro
INSERT INTO product_attribute_values (product_id, attribute_id, value)
SELECT 
  p.id,
  a.id,
  CASE a.code
    WHEN 'processor' THEN 'intel-i9'
    WHEN 'ram' THEN '64gb'
    WHEN 'storage' THEN 'ssd-2tb'
    WHEN 'os' THEN 'win11-pro'
  END
FROM products p
CROSS JOIN product_attributes a
WHERE p.slug = 'proart-studiobook-pro-2024'
AND a.code IN ('processor', 'ram', 'storage', 'os');

-- Add attribute values for ExpertBook B9
INSERT INTO product_attribute_values (product_id, attribute_id, value)
SELECT 
  p.id,
  a.id,
  CASE a.code
    WHEN 'processor' THEN 'intel-i7'
    WHEN 'ram' THEN '32gb'
    WHEN 'storage' THEN 'ssd-2tb'
    WHEN 'os' THEN 'win11-pro'
  END
FROM products p
CROSS JOIN product_attributes a
WHERE p.slug = 'expertbook-b9-2024'
AND a.code IN ('processor', 'ram', 'storage', 'os');