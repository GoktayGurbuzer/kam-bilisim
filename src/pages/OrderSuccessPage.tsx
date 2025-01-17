import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { dbHelpers } from '../lib/db';
import { Order } from '../types/order';

export function OrderSuccessPage() {
  const { orderId } = useParams();
  const [order, setOrder] = React.useState<Order | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadOrder() {
      try {
        if (!orderId) return;
        const data = await dbHelpers.getOrder(orderId);
        setOrder(data);
      } catch (error) {
        console.error('Failed to load order:', error);
      } finally {
        setLoading(false);
      }
    }

    loadOrder();
  }, [orderId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Order Not Found</h1>
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-700"
        >
          Return to Home
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Order Successfully Placed!
        </h1>
        <p className="text-gray-600">
          Thank you for your order. Our team will contact you shortly.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Order Details</h2>
        <dl className="grid grid-cols-2 gap-4">
          <div>
            <dt className="text-sm text-gray-600">Order Number</dt>
            <dd className="text-sm font-medium text-gray-900">{order.id}</dd>
          </div>
          <div>
            <dt className="text-sm text-gray-600">Total Amount</dt>
            <dd className="text-sm font-medium text-gray-900">
              ${order.totalAmount.toLocaleString()}
            </dd>
          </div>
          <div>
            <dt className="text-sm text-gray-600">Customer Name</dt>
            <dd className="text-sm font-medium text-gray-900">
              {order.customerName} {order.customerSurname}
            </dd>
          </div>
          <div>
            <dt className="text-sm text-gray-600">Company</dt>
            <dd className="text-sm font-medium text-gray-900">{order.companyName}</dd>
          </div>
          <div>
            <dt className="text-sm text-gray-600">Email</dt>
            <dd className="text-sm font-medium text-gray-900">{order.email}</dd>
          </div>
          <div>
            <dt className="text-sm text-gray-600">Phone</dt>
            <dd className="text-sm font-medium text-gray-900">{order.phone}</dd>
          </div>
        </dl>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Order Items</h2>
        <div className="space-y-4">
          {order.items.map((item) => (
            <div key={item.id} className="flex justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">{item.productName}</p>
                <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">
                ${(item.price * item.quantity).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-8">
        <Link
          to="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-700"
        >
          Continue Shopping
          <ArrowRight className="ml-2 w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}