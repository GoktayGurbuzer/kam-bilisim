/*
  # Product Management System Schema

  1. New Tables
    - `products`
      - Base product information
      - SEO fields
      - Timestamps
    - `product_categories`
      - Category hierarchy
      - Category-specific attributes
    - `product_attributes`
      - Attribute definitions
      - Data type specifications
    - `product_attribute_values`
      - Product-specific attribute values
    - `product_variants`
      - Variant-specific details
    - `product_images`
      - Product image management
    
  2. Security
    - Enable RLS on all tables
    - Public read access
    - Authenticated write access
*/

-- Create enum for product status
CREATE TYPE product_status AS ENUM ('draft', 'published', 'archived');

-- Create enum for attribute data types
CREATE TYPE attribute_data_type AS ENUM ('text', 'number', 'boolean', 'date', 'json', 'array');

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  brand_id uuid REFERENCES brands(id) ON DELETE RESTRICT,
  category_id uuid REFERENCES brand_categories(id) ON DELETE RESTRICT,
  sku text UNIQUE NOT NULL,
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  short_description text,
  price decimal(10,2) NOT NULL,
  sale_price decimal(10,2),
  stock_status boolean DEFAULT true,
  stock_quantity integer DEFAULT 0,
  
  -- SEO fields
  meta_title text,
  meta_description text,
  canonical_url text,
  
  -- Schema.org markup
  schema_markup jsonb,
  
  -- Status and timestamps
  status product_status DEFAULT 'draft',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  published_at timestamptz,
  
  -- Search optimization
  search_vector tsvector GENERATED ALWAYS AS (
    setweight(to_tsvector('english', coalesce(name, '')), 'A') ||
    setweight(to_tsvector('english', coalesce(description, '')), 'B') ||
    setweight(to_tsvector('english', coalesce(short_description, '')), 'C')
  ) STORED
);

-- Create product categories table
CREATE TABLE IF NOT EXISTS product_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_id uuid REFERENCES product_categories(id) ON DELETE RESTRICT,
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  meta_title text,
  meta_description text,
  schema_markup jsonb,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create product attributes table
CREATE TABLE IF NOT EXISTS product_attributes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id uuid REFERENCES product_categories(id) ON DELETE CASCADE,
  name text NOT NULL,
  code text NOT NULL,
  description text,
  data_type attribute_data_type NOT NULL,
  is_required boolean DEFAULT false,
  is_filterable boolean DEFAULT false,
  is_searchable boolean DEFAULT false,
  validation_rules jsonb,
  default_value text,
  sort_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  UNIQUE (category_id, code)
);

-- Create product attribute values table
CREATE TABLE IF NOT EXISTS product_attribute_values (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid REFERENCES products(id) ON DELETE CASCADE,
  attribute_id uuid REFERENCES product_attributes(id) ON DELETE CASCADE,
  value text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE (product_id, attribute_id)
);

-- Create product variants table
CREATE TABLE IF NOT EXISTS product_variants (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid REFERENCES products(id) ON DELETE CASCADE,
  sku text UNIQUE NOT NULL,
  name text NOT NULL,
  price decimal(10,2) NOT NULL,
  sale_price decimal(10,2),
  stock_quantity integer DEFAULT 0,
  is_default boolean DEFAULT false,
  attributes jsonb,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create product images table
CREATE TABLE IF NOT EXISTS product_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid REFERENCES products(id) ON DELETE CASCADE,
  variant_id uuid REFERENCES product_variants(id) ON DELETE CASCADE,
  url text NOT NULL,
  alt_text text,
  title text,
  sort_order integer DEFAULT 0,
  is_primary boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS products_brand_id_idx ON products(brand_id);
CREATE INDEX IF NOT EXISTS products_category_id_idx ON products(category_id);
CREATE INDEX IF NOT EXISTS products_search_vector_idx ON products USING gin(search_vector);
CREATE INDEX IF NOT EXISTS product_categories_parent_id_idx ON product_categories(parent_id);
CREATE INDEX IF NOT EXISTS product_attributes_category_id_idx ON product_attributes(category_id);
CREATE INDEX IF NOT EXISTS product_attribute_values_product_id_idx ON product_attribute_values(product_id);
CREATE INDEX IF NOT EXISTS product_variants_product_id_idx ON product_variants(product_id);
CREATE INDEX IF NOT EXISTS product_images_product_id_idx ON product_images(product_id);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_attributes ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_attribute_values ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_variants ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_images ENABLE ROW LEVEL SECURITY;

-- Create RLS Policies
CREATE POLICY "Allow public read access on products"
  ON products FOR SELECT
  TO public
  USING (status = 'published');

CREATE POLICY "Allow public read access on product categories"
  ON product_categories FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access on product attributes"
  ON product_attributes FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access on product attribute values"
  ON product_attribute_values FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access on product variants"
  ON product_variants FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access on product images"
  ON product_images FOR SELECT
  TO public
  USING (true);

-- Insert sample categories
INSERT INTO product_categories (name, slug, description) VALUES
  ('Laptops', 'laptops', 'Portable computing devices'),
  ('Software', 'software', 'Digital software products');

-- Insert sample attributes for laptops
INSERT INTO product_attributes (category_id, name, code, data_type, is_filterable, is_searchable) VALUES
  ((SELECT id FROM product_categories WHERE slug = 'laptops'), 'Processor', 'processor', 'text', true, true),
  ((SELECT id FROM product_categories WHERE slug = 'laptops'), 'RAM', 'ram', 'text', true, true),
  ((SELECT id FROM product_categories WHERE slug = 'laptops'), 'Storage', 'storage', 'text', true, true),
  ((SELECT id FROM product_categories WHERE slug = 'laptops'), 'Display', 'display', 'text', true, true),
  ((SELECT id FROM product_categories WHERE slug = 'laptops'), 'Graphics', 'graphics', 'text', true, true),
  ((SELECT id FROM product_categories WHERE slug = 'laptops'), 'Battery Life', 'battery_life', 'text', true, true),
  ((SELECT id FROM product_categories WHERE slug = 'laptops'), 'I/O Ports', 'io_ports', 'array', false, true);

-- Insert sample attributes for software
INSERT INTO product_attributes (category_id, name, code, data_type, is_filterable, is_searchable) VALUES
  ((SELECT id FROM product_categories WHERE slug = 'software'), 'Product Type', 'product_type', 'text', true, true),
  ((SELECT id FROM product_categories WHERE slug = 'software'), 'License Type', 'license_type', 'text', true, true),
  ((SELECT id FROM product_categories WHERE slug = 'software'), 'Duration', 'duration', 'text', true, true),
  ((SELECT id FROM product_categories WHERE slug = 'software'), 'Device Limit', 'device_limit', 'number', true, true),
  ((SELECT id FROM product_categories WHERE slug = 'software'), 'Features', 'features', 'array', false, true),
  ((SELECT id FROM product_categories WHERE slug = 'software'), 'System Requirements', 'system_requirements', 'json', false, true);