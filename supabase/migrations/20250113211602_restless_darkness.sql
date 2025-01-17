/*
  # Add More Verified Brands

  1. New Data
    - Adds more verified brands to the brands table
    - Adds new brand categories
    - Creates brand-category relationships

  2. Changes
    - Adds verified and active status columns to brands table
    - Adds ordering column for custom sort

  3. Security
    - Maintains existing RLS policies
*/

-- Add new columns to brands table
ALTER TABLE brands 
ADD COLUMN IF NOT EXISTS is_verified boolean DEFAULT false,
ADD COLUMN IF NOT EXISTS is_active boolean DEFAULT true,
ADD COLUMN IF NOT EXISTS sort_order integer DEFAULT 0;

-- Add new brand categories
INSERT INTO brand_categories (name, slug)
VALUES
  ('Networking', 'networking'),
  ('Storage', 'storage'),
  ('Cloud', 'cloud'),
  ('Enterprise', 'enterprise')
ON CONFLICT (slug) DO NOTHING;

-- Add more verified brands
INSERT INTO brands (name, slug, description, is_verified, is_active, sort_order)
VALUES
  ('Dell', 'dell', 'Global technology solutions provider', true, true, 4),
  ('HP', 'hp', 'Leading provider of computers, printers, and IT services', true, true, 5),
  ('Cisco', 'cisco', 'Worldwide leader in networking technology', true, true, 6),
  ('VMware', 'vmware', 'Cloud computing and virtualization technology company', true, true, 7),
  ('Intel', 'intel', 'World''s largest semiconductor chip manufacturer', true, true, 8),
  ('Lenovo', 'lenovo', 'Global technology company specializing in PCs and smart devices', true, true, 9),
  ('IBM', 'ibm', 'Global technology and consulting company', true, true, 10)
ON CONFLICT (slug) DO NOTHING;

-- Update existing brands
UPDATE brands
SET is_verified = true,
    is_active = true,
    sort_order = CASE 
      WHEN slug = 'asus' THEN 1
      WHEN slug = 'microsoft' THEN 2
      WHEN slug = 'eset' THEN 3
    END
WHERE slug IN ('asus', 'microsoft', 'eset');

-- Create brand-category relationships
INSERT INTO brand_category_relations (brand_id, category_id)
SELECT b.id, c.id
FROM brands b
CROSS JOIN brand_categories c
WHERE 
  (b.slug = 'dell' AND c.slug IN ('laptop', 'desktop', 'storage', 'enterprise')) OR
  (b.slug = 'hp' AND c.slug IN ('laptop', 'desktop', 'enterprise')) OR
  (b.slug = 'cisco' AND c.slug IN ('networking', 'enterprise')) OR
  (b.slug = 'vmware' AND c.slug IN ('cloud', 'enterprise')) OR
  (b.slug = 'intel' AND c.slug IN ('desktop', 'enterprise')) OR
  (b.slug = 'lenovo' AND c.slug IN ('laptop', 'desktop')) OR
  (b.slug = 'ibm' AND c.slug IN ('cloud', 'enterprise'))
ON CONFLICT DO NOTHING;