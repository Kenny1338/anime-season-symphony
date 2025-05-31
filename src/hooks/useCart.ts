
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from 'sonner';

export interface CartItem {
  id: string;
  product_id: string;
  quantity: number;
  selected_size?: string;
  selected_color?: string;
  product: {
    id: string;
    name: string;
    price: number;
    image_url?: string;
  };
}

export const useCart = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const cartQuery = useQuery({
    queryKey: ['cart', user?.id],
    queryFn: async () => {
      if (!user) return [];

      const { data, error } = await supabase
        .from('cart_items')
        .select(`
          *,
          product:products(id, name, price, image_url)
        `)
        .eq('user_id', user.id);

      if (error) {
        console.error('Error fetching cart:', error);
        throw error;
      }

      return data as CartItem[];
    },
    enabled: !!user,
  });

  const addToCartMutation = useMutation({
    mutationFn: async ({
      productId,
      quantity = 1,
      selectedSize,
      selectedColor,
    }: {
      productId: string;
      quantity?: number;
      selectedSize?: string;
      selectedColor?: string;
    }) => {
      if (!user) {
        throw new Error('User must be logged in');
      }

      const { data, error } = await supabase
        .from('cart_items')
        .upsert({
          user_id: user.id,
          product_id: productId,
          quantity,
          selected_size: selectedSize,
          selected_color: selectedColor,
        })
        .select();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart', user?.id] });
      toast.success('Produkt zum Warenkorb hinzugefügt!');
    },
    onError: (error) => {
      toast.error('Fehler beim Hinzufügen zum Warenkorb');
      console.error('Error adding to cart:', error);
    },
  });

  const updateQuantityMutation = useMutation({
    mutationFn: async ({ id, quantity }: { id: string; quantity: number }) => {
      if (quantity <= 0) {
        const { error } = await supabase
          .from('cart_items')
          .delete()
          .eq('id', id);
        if (error) throw error;
        return null;
      }

      const { data, error } = await supabase
        .from('cart_items')
        .update({ quantity })
        .eq('id', id)
        .select();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart', user?.id] });
    },
    onError: (error) => {
      toast.error('Fehler beim Aktualisieren der Menge');
      console.error('Error updating quantity:', error);
    },
  });

  const removeFromCartMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart', user?.id] });
      toast.success('Produkt aus Warenkorb entfernt');
    },
    onError: (error) => {
      toast.error('Fehler beim Entfernen aus dem Warenkorb');
      console.error('Error removing from cart:', error);
    },
  });

  return {
    cart: cartQuery.data || [],
    isLoading: cartQuery.isLoading,
    addToCart: addToCartMutation.mutate,
    updateQuantity: updateQuantityMutation.mutate,
    removeFromCart: removeFromCartMutation.mutate,
    isAddingToCart: addToCartMutation.isPending,
  };
};
