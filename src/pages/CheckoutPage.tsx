import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { CheckoutForm } from '../components/checkout/CheckoutForm';
import { OrderSummary } from '../components/checkout/OrderSummary';
import { OrderFormData } from '../types/order';
import { dbHelpers } from '../lib/db';

export function CheckoutPage() {
  const navigate = useNavigate();
  const { items, totalItems, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (totalItems === 0) {
      navigate('/');
    }
  }, [totalItems, navigate]);

  const handleSubmit = async (formData: OrderFormData) => {
    try {
      setIsSubmitting(true);
      const order = await dbHelpers.createOrder({
        ...formData,
        items: items.map(item => ({
          productId: item.product.id,
          quantity: item.quantity,
          price: item.product.salePrice || item.product.price,
          productName: item.product.name
        }))
      });
      
      // Clear the cart after successful order creation
      clearCart();
      
      // Navigate to success page
      navigate(`/checkout/success/${order.id}`);
    } catch (error) {
      console.error('Failed to create order:', error);
      // Handle error
    } finally {
      setIsSubmitting(false);
    }
  };

  if (totalItems === 0) {
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Checkout Form */}
        <div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6">Customer Information</h2>
            <CheckoutForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}