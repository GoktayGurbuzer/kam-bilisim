/*
  # Initial brands schema setup

  1. New Tables
    - `brands`
      - `id` (uuid, primary key)
      - `name` (text)
      - `slug` (text, unique)
      - `description` (text)
      - `logo_url` (text)
      - `website_url` (text)
      - `founding_date` (date)
      - `headquarters` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `brand_categories`
      - `id` (uuid, primary key)
      - `name` (text)
      - `slug` (text, unique)
      - `created_at` (timestamptz)
    
    - `brand_category_relations`
      - `brand_id` (uuid, foreign key)
      - `category_id` (uuid, foreign key)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
*/

-- Create brands table
CREATE TABLE IF NOT EXISTS brands (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text,
  logo_url text,
  website_url text,
  founding_date date,
  headquarters text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create brand categories table
CREATE TABLE IF NOT EXISTS brand_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create brand category relations table
CREATE TABLE IF NOT EXISTS brand_category_relations (
  brand_id uuid REFERENCES brands(id) ON DELETE CASCADE,
  category_id uuid REFERENCES brand_categories(id) ON DELETE CASCADE,
  PRIMARY KEY (brand_id, category_id)
);

-- Enable RLS
ALTER TABLE brands ENABLE ROW LEVEL SECURITY;
ALTER TABLE brand_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE brand_category_relations ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access on brands"
  ON brands FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access on brand categories"
  ON brand_categories FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access on brand category relations"
  ON brand_category_relations FOR SELECT
  TO public
  USING (true);

-- Insert initial data
INSERT INTO brands (name, slug, description, logo_url, website_url, founding_date, headquarters)
VALUES
  ('ASUS', 'asus', 'Leading provider of high-performance computing solutions', 'https://example.com/asus-logo.png', 'https://www.asus.com', '1989-04-02', 'Taipei, Taiwan'),
  ('Microsoft', 'microsoft', 'Global leader in software and cloud solutions', 'https://example.com/microsoft-logo.png', 'https://www.microsoft.com', '1975-04-04', 'Redmond, Washington, USA'),
  ('ESET', 'eset', 'Advanced cybersecurity solutions provider', 'https://example.com/eset-logo.png', 'https://www.eset.com', '1992-01-01', 'Bratislava, Slovakia')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO brand_categories (name, slug)
VALUES
  ('Laptop', 'laptop'),
  ('AIO', 'aio'),
  ('Desktop', 'desktop'),
  ('Office', 'office'),
  ('Operating System', 'os'),
  ('Security', 'security')
ON CONFLICT (slug) DO NOTHING;