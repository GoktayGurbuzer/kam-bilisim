/*
  # Add Sample Products

  1. New Data
    - Sample products for ASUS, Microsoft, and ESET
    - Product attributes and values
    - Product images
    
  2. Products Added
    - ASUS:
      - ROG Strix G15 (Gaming Laptop)
      - ZenBook Pro 14 (Professional Laptop)
    - Microsoft:
      - Microsoft 365 Business Premium
      - Windows 11 Pro
    - ESET:
      - ESET Internet Security
      - ESET Endpoint Protection Advanced
*/

-- Insert ASUS Products
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
  'ROG-STRIX-G15-2024',
  'ROG Strix G15 (2024)',
  'rog-strix-g15-2024',
  'Experience unrivaled gaming performance with the ROG Strix G15, featuring the latest Intel Core i9 processor and NVIDIA RTX 4080 graphics. With its 240Hz QHD display and advanced cooling system, this laptop delivers the ultimate gaming experience.',
  'Premium gaming laptop with RTX 4080 graphics',
  2499.99,
  2299.99,
  true,
  50,
  'published'
),
(
  (SELECT id FROM brands WHERE slug = 'asus'),
  (SELECT id FROM brand_categories WHERE slug = 'laptop'),
  'ZENBOOK-PRO-14-2024',
  'ZenBook Pro 14 OLED (2024)',
  'zenbook-pro-14-2024',
  'The ZenBook Pro 14 OLED combines powerful performance with stunning visuals. Featuring a 14-inch 2.8K OLED display, Intel Core i7 processor, and NVIDIA RTX 3050 Ti graphics, it''s perfect for creative professionals.',
  'Premium ultrabook with OLED display',
  1799.99,
  1699.99,
  true,
  75,
  'published'
);

-- Insert Microsoft Products
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
  'MS365-BUS-PREM-2024',
  'Microsoft 365 Business Premium',
  'microsoft-365-business-premium',
  'Microsoft 365 Business Premium provides a complete solution for businesses, including Office applications, advanced security features, and device management capabilities. Includes desktop and mobile versions of Office apps, Exchange Online, SharePoint Online, and Teams.',
  'Complete business productivity suite',
  22.00,
  true,
  999,
  'published'
),
(
  (SELECT id FROM brands WHERE slug = 'microsoft'),
  (SELECT id FROM brand_categories WHERE slug = 'os'),
  'WIN11-PRO-2024',
  'Windows 11 Pro',
  'windows-11-pro',
  'Windows 11 Pro is designed for businesses and professionals, offering advanced security features, virtualization capabilities, and domain join. Includes BitLocker device encryption, Windows Information Protection, and Remote Desktop.',
  'Professional operating system for business',
  199.99,
  true,
  999,
  'published'
);

-- Insert ESET Products
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
  'ESET-IS-2024',
  'ESET Internet Security 2024',
  'eset-internet-security-2024',
  'ESET Internet Security provides comprehensive protection for your digital life. Features include advanced heuristic detection, ransomware shield, banking protection, and network attack protection.',
  'Complete internet security solution',
  49.99,
  true,
  999,
  'published'
),
(
  (SELECT id FROM brands WHERE slug = 'eset'),
  (SELECT id FROM brand_categories WHERE slug = 'security'),
  'ESET-EPA-2024',
  'ESET Endpoint Protection Advanced',
  'eset-endpoint-protection-advanced',
  'ESET Endpoint Protection Advanced delivers comprehensive IT security for businesses. Includes endpoint protection, server security, and remote management capabilities.',
  'Advanced business endpoint security',
  239.99,
  true,
  999,
  'published'
);

-- Insert product images
INSERT INTO product_images (product_id, url, alt_text, is_primary) VALUES
(
  (SELECT id FROM products WHERE slug = 'rog-strix-g15-2024'),
  'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  'ROG Strix G15 Gaming Laptop',
  true
),
(
  (SELECT id FROM products WHERE slug = 'zenbook-pro-14-2024'),
  'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  'ZenBook Pro 14 OLED Laptop',
  true
),
(
  (SELECT id FROM products WHERE slug = 'microsoft-365-business-premium'),
  'https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  'Microsoft 365 Business Premium',
  true
),
(
  (SELECT id FROM products WHERE slug = 'windows-11-pro'),
  'https://images.unsplash.com/photo-1624571409108-e9d6c6436ab87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  'Windows 11 Pro',
  true
),
(
  (SELECT id FROM products WHERE slug = 'eset-internet-security-2024'),
  'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  'ESET Internet Security 2024',
  true
),
(
  (SELECT id FROM products WHERE slug = 'eset-endpoint-protection-advanced'),
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  'ESET Endpoint Protection Advanced',
  true
);