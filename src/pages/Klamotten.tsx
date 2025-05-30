
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, Star, Filter } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Klamotten = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [sortBy, setSortBy] = useState('');

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const colors = [
    { name: 'Schwarz', value: 'black', hex: '#000000' },
    { name: 'Weiß', value: 'white', hex: '#FFFFFF' },
    { name: 'Grau', value: 'gray', hex: '#6B7280' },
    { name: 'Blau', value: 'blue', hex: '#3B82F6' },
    { name: 'Rot', value: 'red', hex: '#EF4444' },
    { name: 'Grün', value: 'green', hex: '#10B981' }
  ];

  const products = [
    {
      id: '1',
      name: 'Attack on Titan Survey Corps Hoodie',
      anime: 'Attack on Titan',
      price: 39.99,
      originalPrice: 49.99,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 89,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['black', 'gray', 'blue'],
      category: 'Hoodie'
    },
    {
      id: '2',
      name: 'My Hero Academia All Might T-Shirt',
      anime: 'My Hero Academia',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      rating: 4.4,
      reviews: 156,
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['white', 'black', 'red'],
      category: 'T-Shirt'
    },
    {
      id: '3',
      name: 'Demon Slayer Zenitsu Jacke',
      anime: 'Demon Slayer',
      price: 69.99,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 203,
      sizes: ['M', 'L', 'XL'],
      colors: ['black', 'gray'],
      category: 'Jacke'
    },
    {
      id: '4',
      name: 'One Piece Straw Hat Pirates Pullover',
      anime: 'One Piece',
      price: 34.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 127,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['red', 'blue', 'black'],
      category: 'Pullover'
    }
  ];

  const filteredProducts = products.filter(product => {
    if (selectedSize && !product.sizes.includes(selectedSize)) return false;
    if (selectedColor && !product.colors.includes(selectedColor)) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Klamotten</h1>
          <p className="text-muted-foreground text-lg">
            T-Shirts, Hoodies, Jacken und mehr von deinen Lieblings-Anime
          </p>
        </div>

        {/* Filter Section */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5" />
            <h2 className="text-lg font-semibold">Filter</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Size Filter */}
            <div>
              <label className="text-sm font-medium mb-2 block">Größe</label>
              <div className="flex flex-wrap gap-2">
                {sizes.map(size => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSize(selectedSize === size ? '' : size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Color Filter */}
            <div>
              <label className="text-sm font-medium mb-2 block">Farbe</label>
              <div className="flex flex-wrap gap-2">
                {colors.map(color => (
                  <button
                    key={color.value}
                    className={`w-8 h-8 rounded-full border-2 ${selectedColor === color.value ? 'border-primary' : 'border-border'}`}
                    style={{ backgroundColor: color.hex }}
                    onClick={() => setSelectedColor(selectedColor === color.value ? '' : color.value)}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Sort */}
            <div>
              <label className="text-sm font-medium mb-2 block">Sortieren nach</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Auswählen..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-asc">Preis: Niedrig bis Hoch</SelectItem>
                  <SelectItem value="price-desc">Preis: Hoch bis Niedrig</SelectItem>
                  <SelectItem value="rating">Bewertung</SelectItem>
                  <SelectItem value="newest">Neueste</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Clear Filters */}
            <div className="flex items-end">
              <Button 
                variant="outline" 
                onClick={() => {
                  setSelectedSize('');
                  setSelectedColor('');
                  setSortBy('');
                }}
              >
                Filter zurücksetzen
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 bg-background/80 hover:bg-background text-muted-foreground"
                >
                  <Heart className="w-4 h-4" />
                </Button>

                <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    In den Warenkorb
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="mb-2">
                  <Badge variant="secondary" className="text-xs mb-1">{product.category}</Badge>
                  <p className="text-sm text-primary font-medium">{product.anime}</p>
                  <h3 className="font-semibold text-foreground line-clamp-2">{product.name}</h3>
                </div>
                
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">({product.reviews})</span>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-bold text-foreground">€{product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">€{product.originalPrice.toFixed(2)}</span>
                  )}
                </div>

                {/* Available Sizes */}
                <div className="mb-2">
                  <p className="text-xs text-muted-foreground mb-1">Verfügbare Größen:</p>
                  <div className="flex gap-1">
                    {product.sizes.map(size => (
                      <Badge key={size} variant="outline" className="text-xs">{size}</Badge>
                    ))}
                  </div>
                </div>

                {/* Available Colors */}
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Verfügbare Farben:</p>
                  <div className="flex gap-1">
                    {product.colors.map(colorValue => {
                      const color = colors.find(c => c.value === colorValue);
                      return (
                        <div
                          key={colorValue}
                          className="w-4 h-4 rounded-full border border-border"
                          style={{ backgroundColor: color?.hex }}
                          title={color?.name}
                        />
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">Keine Produkte mit den gewählten Filtern gefunden.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSelectedSize('');
                setSelectedColor('');
              }}
            >
              Filter zurücksetzen
            </Button>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Klamotten;
