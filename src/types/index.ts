export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  description?: string;
  logoUrl?: string;
  categories: Category[];
}

export interface ProductAttribute {
  name: string;
  code: string;
  value: string;
}

export interface ProductImage {
  id: string;
  url: string;
  altText?: string;
  isPrimary: boolean;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description?: string;
  shortDescription?: string;
  content?: string;
  price: number;
  salePrice?: number;
  stockStatus: boolean;
  stockQuantity: number;
  status: string;
  images: ProductImage[];
  attributes?: ProductAttribute[];
  specs?: Record<string, string>;
  features?: string[];
  rating?: number;
  reviews?: Review[];
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  title: string;
  comment: string;
  date: string;
  verified?: boolean;
}