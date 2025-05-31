
import { useMutation } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export const useNewsletter = () => {
  const subscribeMutation = useMutation({
    mutationFn: async ({ email, name }: { email: string; name?: string }) => {
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .insert({
          email,
          name,
        })
        .select();

      if (error) {
        if (error.code === '23505') {
          throw new Error('Diese E-Mail-Adresse ist bereits für den Newsletter registriert');
        }
        throw error;
      }

      return data;
    },
    onSuccess: () => {
      toast.success('Erfolgreich für den Newsletter angemeldet!');
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Fehler bei der Newsletter-Anmeldung');
    },
  });

  return {
    subscribe: subscribeMutation.mutate,
    isSubscribing: subscribeMutation.isPending,
  };
};
