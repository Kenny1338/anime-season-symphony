
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface AnimeSeries {
  id: string;
  name: string;
  description?: string;
  image_url?: string;
  rating: number;
  status?: string;
  studio?: string;
  year?: number;
  created_at: string;
  updated_at: string;
}

export const useAnimeList = (limit?: number) => {
  return useQuery({
    queryKey: ['anime-series', limit],
    queryFn: async () => {
      let query = supabase
        .from('anime_series')
        .select('*')
        .order('rating', { ascending: false });

      if (limit) {
        query = query.limit(limit);
      }

      const { data, error } = await query;
      
      if (error) {
        console.error('Error fetching anime series:', error);
        throw error;
      }
      
      return data as AnimeSeries[];
    },
  });
};

export const useAnimeSeries = (id: string) => {
  return useQuery({
    queryKey: ['anime-series', id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('anime_series')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) {
        console.error('Error fetching anime series:', error);
        throw error;
      }
      
      return data as AnimeSeries;
    },
    enabled: !!id,
  });
};
