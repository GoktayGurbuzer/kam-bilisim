import React from 'react';
import { Star, ShoppingCart, Package, Shield, Truck } from 'lucide-react';
import { Product } from '../types/product';
import { useCart } from '../contexts/CartContext';

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = React.useState(
    product.images.find(img => img.isPrimary)?.url || product.images[0]?.url
  );
  const [quantity, setQuantity] = React.useState(1);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  const renderRatingStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Product Images and Basic Info */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Left Column - Images */}
        <div>
          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-96 object-contain"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((img) => (
              <button
                key={img.id}
                onClick={() => setSelectedImage(img.url)}
                className={`bg-white rounded-lg p-2 border-2 ${
                  selectedImage === img.url ? 'border-blue-500' : 'border-transparent'
                }`}
              >
                <img 
                  src={img.url} 
                  alt={img.altText || `${product.name} thumbnail`} 
                  className="w-full h-20 object-contain" 
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column - Basic Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            {product.rating && (
              <div className="flex items-center mb-2">
                <div className="flex mr-2">
                  {renderRatingStars(product.rating)}
                </div>
                <span className="text-gray-600">
                  ({product.reviews?.length || 0} reviews)
                </span>
              </div>
            )}
            {product.shortDescription && (
              <p className="text-gray-600">{product.shortDescription}</p>
            
            )}
          </div>

          <div className="border-t border-b py-4">
            <div className="text-3xl font-bold text-gray-900">
              ${product.salePrice?.toLocaleString() || product.price.toLocaleString()}
              {product.salePrice && (
                <span className="ml-2 text-lg text-gray-500 line-through">
                  ${product.price.toLocaleString()}
                </span>
              )}
            </div>
            {product.stockQuantity > 0 ? (
              <p className="text-green-600 mt-2">In Stock ({product.stockQuantity} available)</p>
            ) : (
              <p className="text-red-600 mt-2">Out of Stock</p>
            )}
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">About this item</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            {product.features && (
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            )}
          </div>

          {/* Add to Cart Section */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center space-x-4 mb-4">
              <label className="text-gray-700">Quantity:</label>
              <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="border rounded-md px-3 py-2"
              >
                {[...Array(Math.min(10, product.stockQuantity))].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>
            <button 
              onClick={handleAddToCart}
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 mb-4 disabled:bg-gray-400"
              disabled={!product.stockStatus || product.stockQuantity === 0}
            >
              <div className="flex items-center justify-center space-x-2">
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </div>
            </button>
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Package className="w-4 h-4" />
                <span>Free shipping on orders over $35</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Secure transaction</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="w-4 h-4" />
                <span>Ships from and sold by Kam Informatics</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Content Section */}
      {product.content && (
        <div className="mt-12 bg-white rounded-lg shadow-md p-8">
          <div 
            className="prose prose-blue max-w-none"
            dangerouslySetInnerHTML={{ __html: product.content }}
          />
        </div>
      )}

      {/* Reviews Section */}
      {product.reviews && product.reviews.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
          <div className="space-y-6">
            {product.reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center">
                      {renderRatingStars(review.rating)}
                    </div>
                    <h3 className="text-lg font-semibold mt-2">{review.title}</h3>
                  </div>
                  <div className="text-sm text-gray-600">
                    <p>By {review.userName}</p>
                    <p>{review.date}</p>
                    {review.verified && (
                      <p className="text-green-600">Verified Purchase</p>
                    )}
                  </div>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Technical Specifications */}
      {product.specs && Object.keys(product.specs).length > 0 && (
        <div className="my-12">
          <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <tbody className="divide-y divide-gray-200">
                {Object.entries(product.specs).map(([key, value], index) => (
                  <tr key={key} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-6 py-4 w-1/3">
                      <div className="text-sm font-medium text-gray-900">{key}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-600">{value}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}