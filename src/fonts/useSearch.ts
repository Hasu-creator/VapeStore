// hooks/useSearch.ts
import { useState, useCallback } from 'react';
import { Product } from '../types/Product';
import SearchService from '../services/searchService';

export const useSearch = () => {
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState({
    total: 0,
    page: 1,
    limit: 10
  });

  const searchProducts = useCallback(async (
    query: string, 
    options: {
      page?: number,
      limit?: number,
      category?: string,
      minPrice?: number,
      maxPrice?: number
    } = {}
  ) => {
    setLoading(true);
    setError(null);

    try {
      const searchResult = await SearchService.searchProducts(query, options);
      
      setResults(searchResult.products);
      setPagination({
        total: searchResult.total,
        page: searchResult.page,
        limit: options.limit || 10
      });
    } catch (err) {
      setError('Tìm kiếm thất bại');
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const advancedSearch = useCallback(async (params: {
    name?: string,
    category?: string,
    brand?: string,
    minPrice?: number,
    maxPrice?: number
  }) => {
    setLoading(true);
    setError(null);

    try {
      const searchResults = await SearchService.advancedSearch(params);
      setResults(searchResults);
    } catch (err) {
      setError('Tìm kiếm nâng cao thất bại');
      setResults([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    results,
    loading,
    error,
    pagination,
    searchProducts,
    advancedSearch
  };
};