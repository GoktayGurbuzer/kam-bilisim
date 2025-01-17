export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  quantity: number;
  price: number;
  productName: string;
}

export interface Order {
  id: string;
  customerName: string;
  customerSurname: string;
  companyName: string;
  email: string;
  phone: string;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  totalAmount: number;
  items: OrderItem[];
  createdAt: string;
}

export interface OrderFormData {
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phone: string;
}