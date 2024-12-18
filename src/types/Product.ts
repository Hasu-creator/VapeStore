// types/Product.ts
export interface Product {
    imageAlt: string | undefined;
    id: string;
    name: string;
    price: number;
    description?: string;
    image?: string | string[];
    category?: string;
    brand?: string;
    stock?: number; // Thêm thuộc tính stock
  }
  
  // Mẫu sản phẩm
  export const sampleProducts: Product[] = [
    {
      id: '1',
      name: 'Sản phẩm 1',
      price: 100000,
      description: 'Mô tả sản phẩm 1',
      image: ['https://i.imgur.com/8KYzJP0.png', 'https://i.imgur.com/faAYOkQ.png'],
      category: 'category1',
      brand: 'Brand A',
      stock: 10
    },
    {
      id: '2',
      name: 'Sản phẩm 2',
      price: 200000,
      description: 'Mô tả sản phẩm 2',
      image: 'https://i.imgur.com/faAYOkQ.png',
      category: 'category2',
      brand: 'Brand B',
      stock: 5
    },
    // Thêm các sản phẩm khác...
  ];