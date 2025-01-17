export interface Category {
  id: string;
  name: string;
}

export interface Brand {
  id: string;
  name: string;
  categories: Category[];
}

export interface Product {
  id: string;
  name: string;
  brandId: string;
  categoryId: string;
  description: string;
  price: number;
  image: string;
  specs?: Record<string, string>;
  features?: string[];
  stock?: number;
  rating?: number;
  reviews?: Review[];
  content?: string;
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