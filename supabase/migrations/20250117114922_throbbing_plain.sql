/*
  # Add content field to products table

  1. Changes
    - Add 'content' column to products table for storing HTML content
    - Add 'content_updated_at' column to track content updates
    - Add validation to ensure content is valid HTML

  2. Security
    - Maintain existing RLS policies
*/

-- Add content column to products table
ALTER TABLE products
ADD COLUMN IF NOT EXISTS content text,
ADD COLUMN IF NOT EXISTS content_updated_at timestamptz;

-- Create a function to validate HTML-like content
CREATE OR REPLACE FUNCTION is_valid_html(content text)
RETURNS boolean AS $$
BEGIN
  -- Basic validation: check for balanced tags
  -- This is a simple check and can be enhanced based on requirements
  RETURN (
    content IS NULL OR
    (
      content LIKE '%<%>%' AND
      (
        char_length(content) - char_length(replace(content, '<', '')) =
        char_length(content) - char_length(replace(content, '>', ''))
      )
    )
  );
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- Add constraint to ensure content is valid HTML
ALTER TABLE products
ADD CONSTRAINT valid_html_content
CHECK (is_valid_html(content));

-- Update the updated_at timestamp when content is modified
CREATE OR REPLACE FUNCTION update_content_timestamp()
RETURNS trigger AS $$
BEGIN
  NEW.content_updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_product_content_timestamp
  BEFORE UPDATE OF content
  ON products
  FOR EACH ROW
  EXECUTE FUNCTION update_content_timestamp();

-- Add some sample content to existing products
UPDATE products
SET content = CASE
  WHEN slug = 'rog-strix-g15-2024' THEN
    '<div class="product-content">
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Ultimate Gaming Performance</h2>
        <p>Experience gaming like never before with the ROG Strix G15. Powered by the latest Intel Core i9 processor and NVIDIA RTX 4080 graphics, this laptop delivers exceptional performance for both gaming and content creation.</p>
      </section>
      
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Advanced Cooling System</h2>
        <p>The ROG Intelligent Cooling system combines liquid metal thermal compound with redesigned fans and heatsinks to maintain optimal performance under heavy loads.</p>
        <ul class="list-disc pl-6 mt-4">
          <li>ROG Intelligent Cooling thermal system</li>
          <li>Liquid metal thermal compound</li>
          <li>Arc Flow fans with 84 blades</li>
          <li>6 heat pipes and 4 heatsinks</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Immersive Display</h2>
        <p>The 240Hz QHD display provides crystal-clear visuals and smooth gameplay, while Adaptive-Sync eliminates screen tearing for a seamless gaming experience.</p>
      </section>
    </div>'
  WHEN slug = 'zenbook-pro-14-2024' THEN
    '<div class="product-content">
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Professional-Grade Display</h2>
        <p>The ZenBook Pro 14 features a stunning 14-inch 2.8K OLED display, delivering true-to-life colors and deep blacks. With 100% DCI-P3 color gamut coverage and PANTONE Validation, it''s perfect for creative professionals.</p>
      </section>
      
      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Powerful Performance</h2>
        <p>Equipped with an Intel Core i7 processor and NVIDIA RTX 3050 Ti graphics, the ZenBook Pro 14 handles demanding creative workloads with ease.</p>
        <ul class="list-disc pl-6 mt-4">
          <li>Intel Core i7-13700H processor</li>
          <li>NVIDIA RTX 3050 Ti graphics</li>
          <li>16GB LPDDR5 RAM</li>
          <li>1TB PCIe 4.0 NVMe SSD</li>
        </ul>
      </section>

      <section class="mb-8">
        <h2 class="text-2xl font-bold mb-4">Professional Design</h2>
        <p>The all-metal design combines durability with sophistication, while the ErgoLift hinge provides an optimized typing position and improved cooling.</p>
      </section>
    </div>'
  ELSE content
END
WHERE slug IN ('rog-strix-g15-2024', 'zenbook-pro-14-2024');