import { supabase } from '../supabase';
import { Order, OrderFormData } from '../../types/order';

export const orderHelpers = {
  async createOrder(data: OrderFormData & { items: { productId: string; quantity: number; price: number; productName: string; }[] }): Promise<Order> {
    try {
      // Insert order
      const { data: orderData, error: orderError } = await supabase
        .from('orders')
        .insert({
          customer_name: data.firstName,
          customer_surname: data.lastName,
          company_name: data.companyName,
          email: data.email,
          phone: data.phone,
          total_amount: data.items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        })
        .select()
        .single();

      if (orderError) throw orderError;

      // Insert order items
      const { error: itemsError } = await supabase
        .from('order_items')
        .insert(
          data.items.map(item => ({
            order_id: orderData.id,
            product_id: item.productId,
            quantity: item.quantity,
            price: item.price,
            product_name: item.productName
          }))
        );

      if (itemsError) throw itemsError;

      return {
        id: orderData.id,
        customerName: orderData.customer_name,
        customerSurname: orderData.customer_surname,
        companyName: orderData.company_name,
        email: orderData.email,
        phone: orderData.phone,
        status: orderData.status,
        totalAmount: orderData.total_amount,
        items: data.items.map(item => ({
          id: '', // We don't need the individual item IDs for the response
          orderId: orderData.id,
          productId: item.productId,
          quantity: item.quantity,
          price: item.price,
          productName: item.productName
        })),
        createdAt: orderData.created_at
      };
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  },

  async getOrder(orderId: string): Promise<Order> {
    try {
      const { data: order, error: orderError } = await supabase
        .from('orders')
        .select(`
          *,
          order_items (
            id,
            product_id,
            quantity,
            price,
            product_name
          )
        `)
        .eq('id', orderId)
        .single();

      if (orderError) throw orderError;
      if (!order) throw new Error('Order not found');

      return {
        id: order.id,
        customerName: order.customer_name,
        customerSurname: order.customer_surname,
        companyName: order.company_name,
        email: order.email,
        phone: order.phone,
        status: order.status,
        totalAmount: order.total_amount,
        items: order.order_items.map(item => ({
          id: item.id,
          orderId: order.id,
          productId: item.product_id,
          quantity: item.quantity,
          price: item.price,
          productName: item.product_name
        })),
        createdAt: order.created_at
      };
    } catch (error) {
      console.error('Error loading order:', error);
      throw error;
    }
  }
};