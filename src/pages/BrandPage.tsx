import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ProductGrid } from '../components/brands/ProductGrid';
import { BrandFilter } from '../components/brands/BrandFilter';
import { dbHelpers } from '../lib/db';
import { Brand, Product } from '../types';
import { FilterAttribute, FilterValue, ActiveFilter } from '../types/filters';

export function BrandPage() {
  const { brandSlug } = useParams();
  const [brand, setBrand] = useState<Brand | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [attributes, setAttributes] = useState<FilterAttribute[]>([]);
  const [activeFilters, setActiveFilters] = useState<ActiveFilter[]>([
    {
      attributeId: 'all',
      attributeName: 'All Products',
      values: ['all']
    }
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load brand and initial products
  useEffect(() => {
    async function loadBrandAndProducts() {
      try {
        setLoading(true);
        setError(null); // Reset error state

        if (!brandSlug) {
          throw new Error('Brand slug is required');
        }

        // Load brand details
        const brandData = await dbHelpers.getBrandBySlug(brandSlug);
        if (!brandData) {
          throw new Error('Brand not found');
        }
        setBrand(brandData);

        // Load filter attributes and products in parallel
        const [attributesData, productsData] = await Promise.all([
          dbHelpers.getProductAttributes(brandData.id),
          dbHelpers.getFilteredProducts(brandData.id, []) // Load all products initially
        ]);

        setAttributes(attributesData);
        setProducts(productsData);
      } catch (err) {
        console.error('Error loading brand and products:', err);
        setError(
          err instanceof Error 
            ? err.message 
            : 'Failed to load brand information. Please try again later.'
        );
        setBrand(null);
        setProducts([]);
        setAttributes([]);
      } finally {
        setLoading(false);
      }
    }

    loadBrandAndProducts();
    // Reset to "All" filter when brand changes
    setActiveFilters([{
      attributeId: 'all',
      attributeName: 'All Products',
      values: ['all']
    }]);
  }, [brandSlug]);

  // Handle filter changes
  useEffect(() => {
    async function applyFilters() {
      if (!brand) return;

      try {
        setLoading(true);
        setError(null);

        // If "All" filter is active or no filters are selected, show all products
        const isShowingAll = activeFilters.some(f => f.attributeId === 'all') || activeFilters.length === 0;
        
        const filterValues: FilterValue[] = isShowingAll 
          ? [] // Empty array to get all products
          : activeFilters.map(filter => ({
              attributeId: filter.attributeId,
              values: filter.values
            }));

        const filteredProducts = await dbHelpers.getFilteredProducts(brand.id, filterValues);
        setProducts(filteredProducts);
      } catch (err) {
        console.error('Error applying filters:', err);
        setError(
          err instanceof Error 
            ? err.message 
            : 'Failed to apply filters. Please try again.'
        );
      } finally {
        setLoading(false);
      }
    }

    applyFilters();
  }, [activeFilters, brand]);

  const handleFilterChange = (attributeId: string, values: string[]) => {
    setActiveFilters(current => {
      // If selecting "All", clear other filters
      if (attributeId === 'all' && values.length > 0) {
        return [{
          attributeId: 'all',
          attributeName: 'All Products',
          values: ['all']
        }];
      }

      // If selecting another filter, remove "All" filter
      let newFilters = current.filter(f => f.attributeId !== 'all' && f.attributeId !== attributeId);

      // Remove the filter if values is empty
      if (values.length === 0) {
        // If no filters remain, show all products
        return newFilters.length === 0 ? [{
          attributeId: 'all',
          attributeName: 'All Products',
          values: ['all']
        }] : newFilters;
      }

      // Find the attribute name
      const attribute = attributes.find(a => a.id === attributeId);
      if (!attribute) return current;

      // Add the new filter
      newFilters.push({
        attributeId,
        attributeName: attribute.name,
        values
      });

      return newFilters;
    });
  };

  const handleClearFilters = () => {
    // Reset to "All" filter instead of empty
    setActiveFilters([{
      attributeId: 'all',
      attributeName: 'All Products',
      values: ['all']
    }]);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || !brand) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
            <span className="text-2xl">⚠️</span>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Something went wrong</h2>
          <p className="text-gray-600 mb-4">{error || 'Brand not found'}</p>
          <button 
            onClick={() => window.location.reload()}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <Breadcrumbs
        items={[
          { label: 'Brands', path: '/brands' },
          { label: brand.name, path: `/brands/${brand.slug}` },
        ]}
      />

      {/* Brand Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{brand.name} Products</h1>
        <p className="text-xl text-gray-600">{brand.description}</p>
      </div>

      <div className="grid grid-cols-4 gap-8">
        {/* Filters Sidebar */}
        {attributes.length > 0 && (
          <div className="col-span-1">
            <BrandFilter
              attributes={attributes}
              activeFilters={activeFilters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
              loading={loading}
            />
          </div>
        )}

        {/* Products Grid */}
        <div className={attributes.length > 0 ? 'col-span-3' : 'col-span-4'}>
          {products.length > 0 ? (
            <ProductGrid products={products} brandSlug={brand.slug} />
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <p className="text-gray-600">
                {activeFilters.length > 0
                  ? 'No products match your selected filters.'
                  : 'No products available for this brand.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}