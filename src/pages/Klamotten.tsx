
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
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent mb-2">Klamotten</h1>
          <p className="text-muted-foreground text-lg">
            T-Shirts, Hoodies, Jacken und mehr von deinen Lieblings-Anime
          </p>
        </div>

        {/* Filter Section */}
        <div className="glass-card border-white/20 rounded-xl p-6 mb-8 shadow-glow">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Filter</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Size Filter */}
            <div>
              <label className="text-sm font-medium mb-2 block text-foreground">Größe</label>
              <div className="flex flex-wrap gap-2">
                {sizes.map(size => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSize(selectedSize === size ? '' : size)}
                    className={selectedSize === size ? "modern-button" : "border-white/20 hover:bg-white/10 hover:glow-effect transition-all"}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Color Filter */}
            <div>
              <label className="text-sm font-medium mb-2 block text-foreground">Farbe</label>
              <div className="flex flex-wrap gap-2">
                {colors.map(color => (
                  <button
                    key={color.value}
                    className={`w-8 h-8 rounded-full border-2 transition-all duration-200 hover:scale-110 ${selectedColor === color.value ? 'border-primary shadow-glow' : 'border-white/20'}`}
                    style={{ backgroundColor: color.hex }}
                    onClick={() => setSelectedColor(selectedColor === color.value ? '' : color.value)}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Sort */}
            <div>
              <label className="text-sm font-medium mb-2 block text-foreground">Sortieren nach</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="border-white/20 bg-background/50 hover:bg-background/80 transition-colors">
                  <SelectValue placeholder="Auswählen..." />
                </SelectTrigger>
                <SelectContent className="glass-card border-white/20">
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
                className="border-white/20 hover:bg-white/10 hover:glow-effect transition-all"
              >
                Filter zurücksetzen
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <Card key={product.id} className="group glass-card border-white/20 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute top-2 right-2 bg-background/80 hover:bg-background/90 text-muted-foreground hover:text-red-400 transition-all duration-200 backdrop-blur-sm rounded-xl"
                >
                  <Heart className="w-4 h-4" />
                </Button>

                <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="w-full modern-button backdrop-blur-sm">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    In den Warenkorb
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-4">
                <div className="mb-2">
                  <Badge variant="secondary" className="text-xs mb-1 bg-primary/20 text-primary border-primary/30">{product.category}</Badge>
                  <p className="text-sm text-primary font-medium bg-primary/10 px-2 py-1 rounded-lg inline-block">{product.anime}</p>
                  <h3 className="font-semibold text-foreground line-clamp-2 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">{product.name}</h3>
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
                  <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-full">({product.reviews})</span>
                </div>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-lg font-bold text-foreground">€{product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through bg-muted/30 px-2 py-0.5 rounded">€{product.originalPrice.toFixed(2)}</span>
                  )}
                </div>

                {/* Available Sizes */}
                <div className="mb-2">
                  <p className="text-xs text-muted-foreground mb-1">Verfügbare Größen:</p>
                  <div className="flex gap-1">
                    {product.sizes.map(size => (
                      <Badge key={size} variant="outline" className="text-xs border-white/20">{size}</Badge>
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
                          className="w-4 h-4 rounded-full border border-white/20"
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
              className="mt-4 border-white/20 hover:bg-white/10 hover:glow-effect transition-all"
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
