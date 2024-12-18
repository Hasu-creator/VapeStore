// src/contexts/ProductContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Color {
  name: string;
  class: string;
  selectedClass: string;
}

interface Size {
  name: string;
  inStock: boolean;
}

interface Product {
  id: string;
  name: string;
  image: string;
  imageAlt?: string;
  price: number;
  colors: Color[];
  sizes: Size[];
}

interface ProductContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Fabulous',
      image: 'https://i.imgur.com/qpWqQfl.png',
      imageAlt: "Strong impact with strong battery",
      price: 35000,
      colors: [
        { name: 'Black', class: 'bg-black', selectedClass: 'ring ring-offset-2 ring-indigo-500' },
        { name: 'White', class: 'bg-white', selectedClass: 'ring ring-offset-2 ring-indigo-500' },
      ],
      sizes: [
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: false },
      ],
    },
    {
      id: '2',
      name: 'Stylish',
      image: 'https://i.imgur.com/xyz123.png',
      imageAlt: "Stylish design with great features",
      price: 25000,
      colors: [
        { name: 'Red', class: 'bg-red-500', selectedClass: 'ring ring-offset-2 ring-indigo-500' },
      ],
      sizes: [
        { name: 'M', inStock: true },
        { name: 'L', inStock: false },
      ],
    },
    {
      id: '3',
      name: 'Elegant',
      image: 'https://i.imgur.com/abc456.png',
      imageAlt: "Elegant look with premium quality",
      price: 45000,
      colors: [
        { name: 'Blue', class: 'bg-blue-500', selectedClass: 'ring ring-offset-2 ring-indigo-500' },
      ],
      sizes: [
        { name: 'S', inStock: false },
        { name: 'M', inStock: true },
      ],
    },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};