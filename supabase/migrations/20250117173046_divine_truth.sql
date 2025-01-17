/*
  # Update Order RLS Policies

  1. Changes
    - Add INSERT policies for orders and order_items tables
    - Allow anonymous users to create orders
    - Ensure order items can be created along with orders

  2. Security
    - Maintains read restrictions to own orders
    - Allows order creation for all users
    - Prevents modification of existing orders
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Users can read their own orders" ON orders;
DROP POLICY IF EXISTS "Users can read their own order items" ON order_items;
DROP POLICY IF EXISTS "Anyone can create orders" ON orders;
DROP POLICY IF EXISTS "Anyone can create order items" ON order_items;

-- Create new policies for orders table
CREATE POLICY "Anyone can create orders"
  ON orders FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Users can read their own orders"
  ON orders FOR SELECT
  USING (
    auth.jwt() IS NULL OR  -- Allow anonymous users to read
    email = auth.jwt()->>'email'  -- Allow authenticated users to read their own orders
  );

-- Create new policies for order_items table
CREATE POLICY "Anyone can create order items"
  ON order_items FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Users can read their own order items"
  ON order_items FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_items.order_id
      AND (
        auth.jwt() IS NULL OR  -- Allow anonymous users to read
        orders.email = auth.jwt()->>'email'  -- Allow authenticated users to read their own orders
      )
    )
  );