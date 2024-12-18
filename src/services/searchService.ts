// services/searchService.ts
import { Product, sampleProducts } from '../types/Product';

class SearchService {
  // Mô phỏng API search
  static async searchProducts(query: string, options: {
    page?: number,
    limit?: number,
    category?: string,
    minPrice?: number,
    maxPrice?: number
  } = {}): Promise<{
    products: Product[],
    total: number,
    page: number
  }> {
    try {
      // Lọc sản phẩm dựa trên query và các điều kiện
      let filteredProducts = sampleProducts.filter((product: Product) => 
        product.name.toLowerCase().includes(query.toLowerCase())
      );

      // Lọc theo category nếu có
      if (options.category) {
        filteredProducts = filteredProducts.filter(
          (product: Product) => product.category === options.category
        );
      }

      // Lọc theo khoảng giá nếu có
      if (options.minPrice !== undefined) {
        filteredProducts = filteredProducts.filter(
          (product: Product) => product.price >= options.minPrice!
        );
      }

      if (options.maxPrice !== undefined) {
        filteredProducts = filteredProducts.filter(
          (product: Product) => product.price <= options.maxPrice!
        );
      }

      // Phân trang
      const page = options.page || 1;
      const limit = options.limit || 10;
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;

      return {
        products: filteredProducts.slice(startIndex, endIndex),
        total: filteredProducts.length,
        page: page
      };
    } catch (error) {
      console.error('Search error:', error);
      return {
        products: [],
        total: 0,
        page: 1
      };
    }
  }

  // Tìm kiếm nâng cao với nhiều điều kiện
  static async advancedSearch(params: {
    name?: string,
    category?: string,
    brand?: string,
    minPrice?: number,
    maxPrice?: number
  }): Promise<Product[]> {
    try {
      let filteredProducts = sampleProducts;

      // Lọc theo tên
      if (params.name) {
        filteredProducts = filteredProducts.filter((product: Product) => 
          product.name.toLowerCase().includes(params.name!.toLowerCase())
        );
      }

      // Lọc theo danh mục
      if (params.category) {
        filteredProducts = filteredProducts.filter(
          (product: Product) => product.category === params.category
        );
      }

      // Lọc theo thương hiệu
      if (params.brand) {
        filteredProducts = filteredProducts.filter(
          (product: Product) => product.brand === params.brand
        );
      }

      // Lọc theo khoảng giá
      if (params.minPrice !== undefined) {
        filteredProducts = filteredProducts.filter(
          (product: Product) => product.price >= params.minPrice!
        );
      }

      if (params.maxPrice !== undefined) {
        filteredProducts = filteredProducts.filter(
          (product: Product) => product.price <= params.maxPrice!
        );
      }

      return filteredProducts;
    } catch (error) {
      console.error('Advanced search error:', error);
      return [];
    }
  }

  // Thêm phương thức lọc theo nhiều điều kiện
  static async filterProducts(filters: {
    categories?: string[],
    brands?: string[],
    minPrice?: number,
    maxPrice?: number,
    sortBy?: 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc'
  }): Promise<Product[]> {
    try {
      let filteredProducts = sampleProducts;

      // Lọc theo danh mục
      if (filters.categories && filters.categories.length > 0) {
        filteredProducts = filteredProducts.filter(
          (product: Product) => filters.categories!.includes(product.category!)
        );
      }

      // Lọc theo thương hiệu
      if (filters.brands && filters.brands.length > 0) {
        filteredProducts = filteredProducts.filter(
          (product: Product) => filters.brands!.includes(product.brand!)
        );
      }

      // Lọc theo khoảng giá
      if (filters.minPrice !== undefined) {
        filteredProducts = filteredProducts.filter(
          (product: Product) => product.price >= filters.minPrice!
        );
      }

      if (filters.maxPrice !== undefined) {
        filteredProducts = filteredProducts.filter(
          (product: Product) => product.price <= filters.maxPrice!
        );
      }

      // Sắp xếp
      switch (filters.sortBy) {
        case 'price-asc':
          filteredProducts.sort((a, b) => a.price - b.price);
          break;
        case 'price-desc':
          filteredProducts.sort((a, b) => b.price - a.price);
          break;
        case 'name-asc':
          filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case 'name-desc':
          filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
          break;
      }

      return filteredProducts;
    } catch (error) {
      console.error('Filter products error:', error);
      return [];
    }
  }
}

export default SearchService;