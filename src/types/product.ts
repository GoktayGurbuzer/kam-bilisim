export interface Product {
  id: string;
  brandId: string;
  categoryId: string;
  sku: string;
  name: string;
  slug: string;
  description?: string;
  shortDescription?: string;
  price: number;
  salePrice?: number;
  stockStatus: boolean;
  stockQuantity: number;
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  schemaMarkup?: Record<string, any>;
  status: 'draft' | 'published' | 'archived';
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  attributes: ProductAttributeValue[];
  variants: ProductVariant[];
  images: ProductImage[];
  content: string;
}

export interface ProductCategory {
  id: string;
  parentId?: string;
  name: string;
  slug: string;
  description?: string;
  metaTitle?: string;
  metaDescription?: string;
  schemaMarkup?: Record<string, any>;
  sortOrder: number;
  attributes: ProductAttribute[];
}

export interface ProductAttribute {
  id: string;
  categoryId: string;
  name: string;
  code: string;
  description?: string;
  dataType: 'text' | 'number' | 'boolean' | 'date' | 'json' | 'array';
  isRequired: boolean;
  isFilterable: boolean;
  isSearchable: boolean;
  validationRules?: Record<string, any>;
  defaultValue?: string;
  sortOrder: number;
}

export interface ProductAttributeValue {
  id: string;
  productId: string;
  attributeId: string;
  value: string;
}

export interface ProductVariant {
  id: string;
  productId: string;
  sku: string;
  name: string;
  price: number;
  salePrice?: number;
  stockQuantity: number;
  isDefault: boolean;
  attributes: Record<string, any>;
}

export interface ProductImage {
  id: string;
  productId: string;
  variantId?: string;
  url: string;
  altText?: string;
  title?: string;
  sortOrder: number;
  isPrimary: boolean;
}