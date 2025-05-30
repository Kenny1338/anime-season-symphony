
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  anime: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  isNew?: boolean;
  isLimited?: boolean;
}

const ProductCard = ({ 
  name, 
  anime, 
  price, 
  originalPrice, 
  image, 
  rating, 
  reviews,
  isNew = false,
  isLimited = false
}: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="group glass-card overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-modern-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && <Badge className="bg-green-500/90 text-white hover:bg-green-600 backdrop-blur-sm neon-border">Neu</Badge>}
          {isLimited && <Badge className="bg-red-500/90 text-white hover:bg-red-600 backdrop-blur-sm neon-border animate-glow">Limitiert</Badge>}
        </div>
        
        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="sm"
          className={`absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background/90 rounded-xl ${isFavorite ? 'text-red-500 glow-effect' : 'text-muted-foreground'} transition-all duration-200`}
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
        </Button>

        {/* Quick Add to Cart - appears on hover */}
        <div className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <Button className="w-full modern-button text-white backdrop-blur-sm">
            <ShoppingCart className="w-4 h-4 mr-2" />
            In den Warenkorb
          </Button>
        </div>
      </div>
      
      <CardContent className="p-5">
        <div className="mb-3">
          <p className="text-sm text-primary font-medium bg-primary/10 px-2 py-1 rounded-lg inline-block mb-2">{anime}</p>
          <h3 className="font-semibold text-foreground line-clamp-2 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{name}</h3>
        </div>
        
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-full">({reviews})</span>
        </div>
        
        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-foreground">€{price.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through bg-muted/30 px-2 py-0.5 rounded">€{originalPrice.toFixed(2)}</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
