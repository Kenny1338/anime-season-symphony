
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, ShoppingCart, Zap } from 'lucide-react';
import { useProducts } from '@/hooks/useProducts';
import { useCart } from '@/hooks/useCart';
import { useAuth } from '@/contexts/AuthContext';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

const FunctionalProductGrid = () => {
  const { data: products, isLoading, error } = useProducts({ featured: true, limit: 8 });
  const { addToCart, isAddingToCart } = useCart();
  const { user } = useAuth();

  const handleAddToCart = (productId: string) => {
    if (!user) {
      toast.error('Bitte melden Sie sich an, um Produkte zum Warenkorb hinzuzufügen');
      return;
    }
    addToCart({ productId });
  };

  if (error) {
    console.error('Error loading products:', error);
    return (
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Featured Products</h2>
            <p className="section-subtitle">
              Fehler beim Laden der Produkte. Bitte versuchen Sie es später erneut.
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Featured Products</h2>
            <p className="section-subtitle">
              Entdecke unsere beliebtesten Anime-Merchandise-Artikel
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <Card key={i} className="glass-card overflow-hidden">
                <Skeleton className="w-full h-64" />
                <CardContent className="p-4">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <div className="flex items-center justify-between mb-4">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-5 w-12" />
                  </div>
                  <Skeleton className="h-10 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">
            Entdecke unsere beliebtesten Anime-Merchandise-Artikel
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products?.map((product) => (
            <Card key={product.id} className="glass-card-hover overflow-hidden group product-card">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image_url || 'https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=400'} 
                  alt={product.name}
                  className="w-full h-64 object-cover product-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.is_new && (
                    <Badge className="bg-green-500 hover:bg-green-600">
                      <Zap className="w-3 h-3 mr-1" />
                      Neu
                    </Badge>
                  )}
                  {product.is_limited && (
                    <Badge variant="destructive">
                      Limitiert
                    </Badge>
                  )}
                </div>
                
                <div className="absolute top-3 right-3">
                  <Button 
                    size="icon" 
                    variant="secondary"
                    className="rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    className="w-full modern-button text-sm py-2"
                    onClick={() => handleAddToCart(product.id)}
                    disabled={isAddingToCart || product.stock_quantity === 0}
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {product.stock_quantity === 0 ? 'Ausverkauft' : 'In Warenkorb'}
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  {product.rating > 0 && (
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-muted-foreground">
                        {product.rating} ({product.review_count})
                      </span>
                    </div>
                  )}
                </div>
                
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-semibold text-foreground mb-2 hover:text-primary transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                </Link>
                
                {product.anime_series && (
                  <p className="text-sm text-muted-foreground mb-3">
                    {product.anime_series.name}
                  </p>
                )}
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-foreground">
                      €{product.price}
                    </span>
                    {product.original_price && product.original_price > product.price && (
                      <span className="text-sm text-muted-foreground line-through">
                        €{product.original_price}
                      </span>
                    )}
                  </div>
                  
                  {product.category && (
                    <Badge variant="outline" className="text-xs">
                      {product.category.name}
                    </Badge>
                  )}
                </div>
                
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={() => handleAddToCart(product.id)}
                  disabled={isAddingToCart || product.stock_quantity === 0}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {product.stock_quantity === 0 ? 'Ausverkauft' : 'In Warenkorb'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/categories">
            <Button size="lg" className="modern-button">
              Alle Produkte ansehen
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FunctionalProductGrid;
