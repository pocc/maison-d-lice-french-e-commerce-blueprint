export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}
export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Vin' | 'Fromage' | 'Boulangerie';
  image: string;
  description: string;
  pairing: string;
}
export interface CartItem extends Product {
  quantity: number;
}
export interface User {
  id: string;
  name: string;
}