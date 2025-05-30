
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, Star, Filter } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Accessoires = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [sortBy, setSortBy] = useState('');

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
    if (selectedCategory && product.category !== selectedCategory) return false;
    if (selectedMaterial && product.material !== selectedMaterial) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Accessoires</h1>
          <p className="text-muted-foreground text-lg">
            Taschen, Schmuck, Keychains und andere coole Accessoires für echte Anime-Fans
          </p>
        </div>

        {/* Filter Section */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5" />
            <h2 className="text-lg font-semibold">Filter</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Category Filter */}
            <div>
              <label className="text-sm font-medium mb-2 block">Kategorie</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Alle Kategorien" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Alle Kategorien</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Material Filter */}
            <div>
              <label className="text-sm font-medium mb-2 block">Material</label>
              <Select value={selectedMaterial} onValueChange={setSelectedMaterial}>
                <SelectTrigger>
                  <SelectValue placeholder="Alle Materialien" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Alle Materialien</SelectItem>
                  {materials.map(material => (
                    <SelectItem key={material} value={material}>{material}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
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
                  setSelectedCategory('');
                  setSelectedMaterial('');
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
                  <div className="flex gap-1 mb-1">
                    <Badge variant="secondary" className="text-xs">{product.category}</Badge>
                    <Badge variant="outline" className="text-xs">{product.material}</Badge>
                  </div>
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

                {/* Available Variants */}
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Verfügbare Varianten:</p>
                  <div className="flex flex-wrap gap-1">
                    {product.variants.slice(0, 2).map(variant => (
                      <Badge key={variant} variant="outline" className="text-xs">{variant}</Badge>
                    ))}
                    {product.variants.length > 2 && (
                      <Badge variant="outline" className="text-xs">+{product.variants.length - 2} weitere</Badge>
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
              className="mt-4"
              onClick={() => {
                setSelectedCategory('');
                setSelectedMaterial('');
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
