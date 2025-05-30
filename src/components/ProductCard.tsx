
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
      className="group material-card overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {isNew && <Badge className="bg-green-500 text-white">Neu</Badge>}
          {isLimited && <Badge className="bg-red-500 text-white">Limitiert</Badge>}
        </div>
        
        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="sm"
          className={`absolute top-2 right-2 bg-white/80 hover:bg-white ${isFavorite ? 'text-red-500' : 'text-gray-600'}`}
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
        </Button>

        {/* Quick Add to Cart - appears on hover */}
        <div className={`absolute bottom-2 left-2 right-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <Button className="w-full material-button bg-primary-500 hover:bg-primary-600 text-white">
            <ShoppingCart className="w-4 h-4 mr-2" />
            In den Warenkorb
          </Button>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="mb-2">
          <p className="text-sm text-primary-600 font-medium">{anime}</p>
          <h3 className="font-semibold text-gray-900 line-clamp-2">{name}</h3>
        </div>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600">({reviews})</span>
        </div>
        
        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">€{price.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">€{originalPrice.toFixed(2)}</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
