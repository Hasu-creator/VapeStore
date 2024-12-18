// hooks/useProduct.ts
import { useState, useCallback } from 'react';
import { Product } from '../types/Product';
import ProductService from '../services/productService';

export const useProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentProduct, setCurrentProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    limit: 10
  });

  // Lấy danh sách sản phẩm
  const fetchProducts = useCallback(async (params?: {
    page?: number;
    limit?: number;
    category?: string;
    sortBy?: string;
  }) => {
    setLoading(true);
    setError(null);

    try {
      const result = await ProductService.getProducts(params);
      setProducts(result.products);
      setPagination({
        total: result.total,
        page: result.page,
        limit: params?.limit || 10
      });
    } catch (err) {
      setError('Lỗi tải sản phẩm');
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Lấy chi tiết sản phẩm
  const fetchProductById = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);

    try {
      const product = await ProductService.getProductById(id);
      setCurrentProduct(product);
    } catch (err) {
      setError('Lỗi tải chi tiết sản phẩm');
      setCurrentProduct(null);
    } finally {
      setLoading(false);
    }
  }, []);

  // Thêm sản phẩm mới
  const createProduct = useCallback(async (productData: Omit<Product, 'id'>) => {
    setLoading(true);
    setError(null);

    try {
      const newProduct = await ProductService.createProduct(productData);
      if (newProduct) {
        setProducts(prev => [...prev, newProduct]);
        return newProduct;
      }
      return null;
    } catch (err) {
      setError('Lỗi tạo sản phẩm');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  // Cập nhật sản phẩm
  const updateProduct = useCallback(async (id: string, productData: Partial<Product>) => {
    setLoading(true);
    setError(null);

    try {
      const updatedProduct = await ProductService.updateProduct(id, productData);
      if (updatedProduct) {
        setProducts(prev => 
          prev.map(product => 
            product.id === id ? updatedProduct : product
          )
        );
        return updatedProduct;
      }
      return null;
    } catch (err) {
      setError('Lỗi cập nhật sản phẩm');
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  // Xóa sản phẩm
  const deleteProduct = useCallback(async (id: string) => {
    setLoading(true);
    setError(null);

    try {
      const success = await ProductService.deleteProduct(id);
      if (success) {
        setProducts(prev => prev.filter(product => product.id !== id));
        return true;
      }
      return false;
    } catch (err) {
      setError('Lỗi xóa sản phẩm');
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    products,
    currentProduct,
    loading,
    error,
    pagination,
    fetchProducts,
    fetchProductById,
    createProduct,
    updateProduct,
    deleteProduct
  };
};