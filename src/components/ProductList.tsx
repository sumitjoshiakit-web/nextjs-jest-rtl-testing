import React, { useState, useEffect } from 'react';
import { Button } from './Button';

export interface Product {
  title: string;
  price: number;
}

export interface ProductListProps {
  apiUrl?: string;
  autoFetch?: boolean;
}

export const ProductList: React.FC<ProductListProps> = ({
  apiUrl = 'https://api.example.com/products',
  autoFetch = true,
}) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProduct = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`Failed to fetch product data (HTTP ${response.status})`);
      }
      const data: Product = await response.json();
      setProduct(data);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Network error occurred';
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (autoFetch) {
      fetchProduct();
    }
  }, [apiUrl, autoFetch]);

  return (
    <div
      data-testid="product-list-container"
      className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm space-y-4 max-w-md"
    >
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <h4 className="font-semibold text-slate-900 text-sm">Product Catalogue</h4>
        <span className="text-xs font-mono text-slate-500">Network Mocking Audit</span>
      </div>

      {loading && (
        <div data-testid="product-loading" className="text-sm text-slate-600 py-4 text-center">
          Loading products...
        </div>
      )}

      {error && !loading && (
        <div data-testid="product-error" role="alert" className="p-3 rounded-lg bg-rose-50 text-rose-700 text-xs space-y-2">
          <p>{error}</p>
          <Button variant="danger" onClick={fetchProduct} data-testid="retry-btn">
            Retry Fetch
          </Button>
        </div>
      )}

      {product && !loading && !error && (
        <div data-testid="product-details" className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs text-slate-500">Product Title:</span>
            <span data-testid="product-title" className="font-bold text-slate-900 text-base">
              {product.title}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs text-slate-500">Price:</span>
            <span data-testid="product-price" className="font-mono font-bold text-emerald-600 text-base">
              ₹{product.price}
            </span>
          </div>
        </div>
      )}

      <div className="pt-2 flex justify-end">
        <Button variant="outline" onClick={fetchProduct} disabled={loading} data-testid="refetch-btn">
          {loading ? 'Fetching...' : 'Refetch Product'}
        </Button>
      </div>
    </div>
  );
};

export default ProductList;
