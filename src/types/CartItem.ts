// src/types/CartItem.ts
import type { Product } from './Product';
export interface Product {
    id: string;
    name: string;
    price: number;
    description?: string;
    image?: string;
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }