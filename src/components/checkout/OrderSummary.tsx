import React from 'react';
import { useCart } from '../../contexts/CartContext';

export function OrderSummary() {
  const { items } = useCart();

  const subtotal = items.reduce(
    (sum, item) => sum + (item.product.salePrice || item.product.price) * item.quantity,
    0
  );

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
      
      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">{item.product.name}</p>
              <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
            </div>
            <p className="text-sm font-medium text-gray-900">
              ${((item.product.salePrice || item.product.price) * item.quantity).toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-200 pt-4">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>${subtotal.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}