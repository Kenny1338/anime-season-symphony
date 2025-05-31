import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, Star, Filter } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Accessoires = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedMaterial, setSelectedMaterial] = useState('all');
  const [sortBy, setSortBy] = useState('all');

  const categories = ['Taschen', 'Schmuck', 'Keychains', 'Uhren', 'Caps', 'Schals'];
  const materials = ['Metall', 'Stoff', 'Kunstleder', 'Silikon', 'Acryl', 'Holz'];

  const products = [
    {
      id: '1',
      name: 'One Piece Straw Hat Replica',
      anime: 'One Piece',
      price: 24.99,
      originalPrice: 29.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 203,
      category: 'Caps',
      material: 'Stoff',
      variants: ['Strohhut Style', 'Premium Edition', 'Vintage Look']
    },
    {
      id: '2',
      name: 'Naruto Kunai Keychain Set',
      anime: 'Naruto',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
      rating: 4.5,
      reviews: 127,
      category: 'Keychains',
      material: 'Metall',
      variants: ['3er Set', '5er Set', 'Einzeln']
    },
    {
      id: '3',
      name: 'Attack on Titan Wings of Freedom Tasche',
      anime: 'Attack on Titan',
      price: 34.99,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 156,
      category: 'Taschen',
      material: 'Kunstleder',
      variants: ['Umhängetasche', 'Rucksack', 'Gürteltasche']
    },
    {
      id: '4',
      name: 'Dragon Ball Z Scouter Replica',
      anime: 'Dragon Ball Z',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 89,
      category: 'Schmuck',
      material: 'Acryl',
      variants: ['Grün', 'Rot', 'Blau', 'Limitierte Gold Edition']
    }
  ];

  const filteredProducts = products.filter(product => {
    if (selectedCategory !== 'all' && product.category !== selectedCategory) return false;
    if (selectedMaterial !== 'all' && product.material !== selectedMaterial) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent mb-2">Accessoires</h1>
          <p className="text-muted-foreground text-lg">
            Taschen, Schmuck, Keychains und andere coole Accessoires für echte Anime-Fans
          </p>
        </div>

        {/* Filter Section */}
        <div className="glass-card border-white/20 rounded-xl p-6 mb-8 shadow-glow">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Filter</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Category Filter */}
            <div>
              <label className="text-sm font-medium mb-2 block text-foreground">Kategorie</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="border-white/20 bg-background/50 hover:bg-background/80 transition-colors">
                  <SelectValue placeholder="Alle Kategorien" />
                </SelectTrigger>
                <SelectContent className="glass-card border-white/20">
                  <SelectItem value="all">Alle Kategorien</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Material Filter */}
            <div>
              <label className="text-sm font-medium mb-2 block text-foreground">Material</label>
              <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
                <SelectTrigger className="border-white/20 bg-background/50 hover:bg-background/80 transition-colors">
                  <SelectValue placeholder="Alle Materialien" />
                </SelectTrigger>
                <SelectContent className="glass-card border-white/20">
                  <SelectItem value="all">Alle Materialien</SelectItem>
                  {materials.map(material => (
                    <SelectItem key={material} value={material}>{material}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Sort */}
            <div>
              <label className="text-sm font-medium mb-2 block text-foreground">Sortieren nach</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="border-white/20 bg-background/50 hover:bg-background/80 transition-colors">
                  <SelectValue placeholder="Auswählen..." />
                </SelectTrigger>
                <SelectContent className="glass-card border-white/20">
                  <SelectItem value="all">Standard</SelectItem>
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
                  setSelectedCategory('all');
                  setSelectedMaterial('all');
                  setSortBy('all');
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
                  <div className="flex gap-1 mb-1">
                    <Badge variant="secondary" className="text-xs bg-primary/20 text-primary border-primary/30">{product.category}</Badge>
                    <Badge variant="outline" className="text-xs border-white/20">{product.material}</Badge>
                  </div>
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

                {/* Available Variants */}
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Verfügbare Varianten:</p>
                  <div className="flex flex-wrap gap-1">
                    {product.variants.slice(0, 2).map(variant => (
                      <Badge key={variant} variant="outline" className="text-xs border-white/20">{variant}</Badge>
                    ))}
                    {product.variants.length > 2 && (
                      <Badge variant="outline" className="text-xs border-white/20">+{product.variants.length - 2} weitere</Badge>
                    )}
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
                setSelectedCategory('all');
                setSelectedMaterial('all');
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

export default Accessoires;
