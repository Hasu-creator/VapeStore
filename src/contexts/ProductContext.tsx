import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Image } from 'react-image'; // Import the Image component

// Define Product interface
interface Product {
  id: string;
  name: string;
  image: string;
  imageAlt?: string;
  price: number;
  color?: string;
}

// Define ProductContextType interface
interface ProductContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

// Create ProductContext
const ProductContext = createContext<ProductContextType | undefined>(undefined);

// Custom hook to use ProductContext
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
};

// ProductProvider component
export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      name: 'Fabulous',
      image: 'https://i.imgur.com/kNgPV1s.png',
      imageAlt: "Strong impact with strong battery",
      price: 35000,
      color: 'Black',
    },
    {
      id: '2',
      name: 'Stylish',
      image: 'https://i.imgur.com/Qf6qHpr.png',
      imageAlt: "Stylish design with great features",
      price: 25000,
      color: 'Red',
    },
    {
      id: '3',
      name: 'Elegant',
      image: 'https://i.imgur.com/WtpyEGA.png',
      imageAlt: "Elegant look with premium quality",
      price: 45000,
      color: 'Blue',
    },
    // Add more products if needed
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};