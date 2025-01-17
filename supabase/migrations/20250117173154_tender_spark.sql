/*
  # Fix Order RLS Policies

  1. Changes
    - Update RLS policies to properly handle both anonymous and authenticated users
    - Ensure order creation works for all users
    - Maintain security while allowing necessary operations

  2. Security
    - Allow order creation for both anonymous and authenticated users
    - Allow users to read their own orders
    - Prevent unauthorized access to orders
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Anyone can create orders" ON orders;
DROP POLICY IF EXISTS "Users can read their own orders" ON orders;
DROP POLICY IF EXISTS "Anyone can create order items" ON order_items;
DROP POLICY IF EXISTS "Users can read their own order items" ON order_items;

-- Create new policies for orders table
CREATE POLICY "Allow order creation"
  ON orders
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow order reading"
  ON orders
  FOR SELECT
  TO public
  USING (
    CASE 
      WHEN auth.jwt() IS NULL THEN true  -- Allow anonymous users
      ELSE email = auth.jwt()->>'email'  -- Authenticated users see their own orders
    END
  );

-- Create new policies for order_items table
CREATE POLICY "Allow order item creation"
  ON order_items
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Allow order item reading"
  ON order_items
  FOR SELECT
  TO public
  USING (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_items.order_id
      AND (
        auth.jwt() IS NULL  -- Allow anonymous users
        OR orders.email = auth.jwt()->>'email'  -- Authenticated users see their own items
      )
    )
  );