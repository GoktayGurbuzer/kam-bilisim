import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Minus, Plus, ShoppingCart } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

export function CartDrawer() {
  const navigate = useNavigate();
  const { items, isOpen, totalItems, closeCart, removeItem, updateQuantity } = useCart();

  if (!isOpen) return null;

  const total = items.reduce(
    (sum, item) => sum + (item.product.salePrice || item.product.price) * item.quantity,
    0
  );

  const handleCheckout = () => {
    closeCart();
    navigate('/checkout');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={closeCart}
      />

      {/* Drawer */}
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="relative w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-xl">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-6 bg-gray-50">
              <div className="flex items-center">
                <ShoppingCart className="w-6 h-6 text-gray-600 mr-2" />
                <h2 className="text-lg font-medium text-gray-900">
                  Shopping Cart ({totalItems})
                </h2>
              </div>
              <button
                onClick={closeCart}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto py-6 px-4">
              {items.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center">
                      {/* Product Image */}
                      <img
                        src={item.product.images.find(img => img.isPrimary)?.url || item.product.images[0]?.url}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />

                      {/* Product Details */}
                      <div className="ml-4 flex-1">
                        <h3 className="text-sm font-medium text-gray-900">
                          {item.product.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          ${(item.product.salePrice || item.product.price).toLocaleString()}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                            className="text-gray-500 hover:text-gray-600"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="mx-2 text-gray-600">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="text-gray-500 hover:text-gray-600"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="ml-4 text-red-500 hover:text-red-600"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-gray-200 px-4 py-6">
                <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                  <p>Subtotal</p>
                  <p>${total.toLocaleString()}</p>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}