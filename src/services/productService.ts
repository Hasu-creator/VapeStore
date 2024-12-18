import axios from 'axios';
import type { AxiosError } from 'axios';
import { Product } from '../types/Product';

// Định nghĩa interface response
interface ProductsResponse {
  products: Product[];
  total: number;
  page: number;
}

// Hàm kiểm tra lỗi Axios
function isAxiosError(error: unknown): error is AxiosError {
  return (
    error !== null &&
    typeof error === 'object' &&
    'isAxiosError' in error &&
    error.isAxiosError === true
  );
}

class ProductService {
  // Xử lý lỗi chung
  private static handleError(error: unknown): never {
    if (isAxiosError(error)) {
      console.error('Axios error:', error.response?.data);
      throw new Error(
        error.response?.data?.message || 
        error.message || 
        'Đã có lỗi xảy ra'
      );
    } else {
      console.error('Unexpected error:', error);
      throw new Error('Đã có lỗi không xác định');
    }
  }

  // Lấy danh sách sản phẩm
  static async getProducts(params?: {
    page?: number;
    limit?: number;
    category?: string;
    sortBy?: string;
  }): Promise<ProductsResponse> {
    try {
      const response = await axios.get<ProductsResponse>('/api/products', { params });
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        console.error('Chi tiết lỗi:', {
          status: error.response?.status,
          data: error.response?.data,
          message: error.message
        });

        // Xử lý các trường hợp lỗi cụ thể
        switch (error.response?.status) {
          case 404:
            console.error('Không tìm thấy danh sách sản phẩm');
            break;
          case 500:
            console.error('Lỗi máy chủ');
            break;
          default:
            console.error('Lỗi không xác định');
        }
      }
      
      // Trả về giá trị mặc định khi lỗi
      return { products: [], total: 0, page: 1 };
    }
  }

  // Chi tiết sản phẩm
  static async getProductById(id: string): Promise<Product | null> {
    try {
      const response = await axios.get<Product>(`/api/products/${id}`);
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        console.error('Chi tiết lỗi chi tiết sản phẩm:', {
          status: error.response?.status,
          data: error.response?.data,
          message: error.message
        });

        // Xử lý các trường hợp lỗi cụ thể
        switch (error.response?.status) {
          case 404:
            console.error(`Không tìm thấy sản phẩm có ID: ${id}`);
            break;
          case 400:
            console.error('Yêu cầu không hợp lệ');
            break;
        }
      }
      
      return null;
    }
  }

  // Thêm sản phẩm mới
  static async createProduct(productData: Omit<Product, 'id'>): Promise<Product | null> {
    try {
      const response = await axios.post<Product>('/api/products', productData);
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        console.error('Chi tiết lỗi tạo sản phẩm:', {
          status: error.response?.status,
          data: error.response?.data,
          message: error.message
        });

        // Xử lý các trường hợp lỗi cụ thể
        switch (error.response?.status) {
          case 400:
            console.error('Dữ liệu sản phẩm không hợp lệ');
            break;
          case 409:
            console.error('Sản phẩm đã tồn tại');
            break;
        }
      }
      
      return null;
    }
  }

  // Cập nhật sản phẩm
  static async updateProduct(id: string, productData: Partial<Product>): Promise<Product | null> {
    try {
      const response = await axios.put<Product>(`/api/products/${id}`, productData);
      return response.data;
    } catch (error) {
      if (isAxiosError(error)) {
        console.error('Chi tiết lỗi cập nhật sản phẩm:', {
          status: error.response?.status,
          data: error.response?.data,
          message: error.message
        });

        // Xử lý các trường hợp lỗi cụ thể
        switch (error.response?.status) {
          case 404:
            console.error(`Không tìm thấy sản phẩm để cập nhật: ${id}`);
            break;
          case 400:
            console.error('Dữ liệu cập nhật không hợp lệ');
            break;
        }
      }
      
      return null;
    }
  }

  // Xóa sản phẩm
  static async deleteProduct(id: string): Promise<boolean> {
    try {
      await axios.delete(`/api/products/${id}`);
      return true;
    } catch (error) {
      if (isAxiosError(error)) {
        console.error('Chi tiết lỗi xóa sản phẩm:', {
          status: error.response?.status,
          data: error.response?.data,
          message: error.message
        });

        // Xử lý các trường hợp lỗi cụ thể
        switch (error.response?.status) {
          case 404:
            console.error(`Không tìm thấy sản phẩm để xóa: ${id}`);
            break;
          case 403:
            console.error('Không có quyền xóa sản phẩm');
            break;
        }
      }
      
      return false;
    }
  }
}

export default ProductService;