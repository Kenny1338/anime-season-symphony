
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  original_price?: number;
  image_url?: string;
  stock_quantity: number;
  is_featured: boolean;
  is_trending: boolean;
  is_new: boolean;
  is_limited: boolean;
  rating: number;
  review_count: number;
  sizes?: string[];
  colors?: string[];
  scale?: string;
  height?: string;
  material?: string;
  category?: {
    id: string;
    name: string;
    type: string;
  };
  anime_series?: {
    id: string;
    name: string;
    image_url?: string;
  };
}

export const useProducts = (filters?: {
  category?: string;
  featured?: boolean;
  trending?: boolean;
  limit?: number;
}) => {
  return useQuery({
    queryKey: ['products', filters],
    queryFn: async () => {
      let query = supabase
        .from('products')
        .select(`
          *,
          category:categories(id, name, type),
          anime_series:anime_series(id, name, image_url)
        `);

      if (filters?.category) {
        query = query.eq('categories.type', filters.category);
      }
      
      if (filters?.featured) {
        query = query.eq('is_featured', true);
      }
      
      if (filters?.trending) {
        query = query.eq('is_trending', true);
      }
      
      if (filters?.limit) {
        query = query.limit(filters.limit);
      }

      const { data, error } = await query;
      
      if (error) {
        console.error('Error fetching products:', error);
        throw error;
      }
      
      return data as Product[];
    },
  });
};

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ['product', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select(`
          *,
          category:categories(id, name, type),
          anime_series:anime_series(id, name, image_url),
          reviews(id, rating, title, comment, profiles(first_name, last_name))
        `)
        .eq('id', id)
        .single();
      
      if (error) {
        console.error('Error fetching product:', error);
        throw error;
      }
      
      return data;
    },
    enabled: !!id,
  });
};
