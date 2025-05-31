import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, Star, Filter, Package } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Figuren = () => {
  const [selectedSize, setSelectedSize] = useState('all');
  const [selectedPackaging, setSelectedPackaging] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [sortBy, setSortBy] = useState('all');

  const sizes = ['1/12', '1/10', '1/8', '1/7', '1/6', '1/4'];
  const packagingTypes = ['Standard Box', 'Window Box', 'Blister Pack', 'Premium Box', 'Collector Edition'];
  const figureTypes = ['Nendoroid', 'Figma', 'Scale Figure', 'Prize Figure', 'Statue', 'Model Kit'];

  const products = [
    {
      id: '1',
      name: 'Demon Slayer Tanjiro Kamado Nendoroid',
      anime: 'Demon Slayer',
      price: 49.99,
      originalPrice: 59.99,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 156,
      size: '1/10',
      packaging: 'Window Box',
      type: 'Nendoroid',
      combinations: ['Einzeln', 'Mit Nezuko Set', 'Komplett Set (4 Figuren)'],
      isLimited: true
    },
    {
      id: '2',
      name: 'Attack on Titan Levi Ackerman Figma',
      anime: 'Attack on Titan',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 203,
      size: '1/8',
      packaging: 'Premium Box',
      type: 'Figma',
      combinations: ['Einzeln', 'Mit Equipment Set', 'Deluxe Edition'],
      isLimited: false
    },
    {
      id: '3',
      name: 'One Piece Monkey D. Luffy Gear 5 Statue',
      anime: 'One Piece',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
      rating: 5.0,
      reviews: 89,
      size: '1/6',
      packaging: 'Collector Edition',
      type: 'Statue',
      combinations: ['Einzeln', 'Limited Gold Edition'],
      isLimited: true
    },
    {
      id: '4',
      name: 'My Hero Academia Deku Scale Figure',
      anime: 'My Hero Academia',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 127,
      size: '1/7',
      packaging: 'Standard Box',
      type: 'Scale Figure',
      combinations: ['Einzeln', 'Hero Costume Ver.', 'School Uniform Ver.'],
      isLimited: false
    }
  ];

  const filteredProducts = products.filter(product => {
    if (selectedSize !== 'all' && product.size !== selectedSize) return false;
    if (selectedPackaging !== 'all' && product.packaging !== selectedPackaging) return false;
    if (selectedType !== 'all' && product.type !== selectedType) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Figuren</h1>
          <p className="text-muted-foreground text-lg">
            Hochwertige Sammelfiguren, Nendoroids und Statuen deiner Lieblings-Charaktere
          </p>
        </div>

        {/* Filter Section */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5" />
            <h2 className="text-lg font-semibold">Filter</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Size Filter */}
            <div>
              <label className="text-sm font-medium mb-2 block">Maßstab</label>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger>
                  <SelectValue placeholder="Alle Größen" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle Größen</SelectItem>
                  {sizes.map(size => (
                    <SelectItem key={size} value={size}>{size}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Type Filter */}
            <div>
              <label className="text-sm font-medium mb-2 block">Figurentyp</label>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Alle Typen" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle Typen</SelectItem>
                  {figureTypes.map(type => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Packaging Filter */}
            <div>
              <label className="text-sm font-medium mb-2 block">Verpackung</label>
              <Select value={selectedPackaging} onValueChange={setSelectedPackaging}>
                <SelectTrigger>
                  <SelectValue placeholder="Alle Verpackungen" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Alle Verpackungen</SelectItem>
                  {packagingTypes.map(packaging => (
                    <SelectItem key={packaging} value={packaging}>{packaging}</SelectItem>
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
                  setSelectedSize('all');
                  setSelectedPackaging('all');
                  setSelectedType('all');
                  setSortBy('all');
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
                
                {/* Badges */}
                <div className="absolute top-2 left-2 flex flex-col gap-1">
                  {product.isLimited && <Badge className="bg-red-500 text-white hover:bg-red-600">Limitiert</Badge>}
                  <Badge className="bg-blue-500 text-white hover:bg-blue-600">{product.size}</Badge>
                </div>

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
                    <Badge variant="secondary" className="text-xs">{product.type}</Badge>
                    <Badge variant="outline" className="text-xs flex items-center gap-1">
                      <Package className="w-3 h-3" />
                      {product.packaging}
                    </Badge>
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

                {/* Available Combinations */}
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Verfügbare Kombinationen:</p>
                  <div className="flex flex-wrap gap-1">
                    {product.combinations.slice(0, 2).map(combination => (
                      <Badge key={combination} variant="outline" className="text-xs">{combination}</Badge>
                    ))}
                    {product.combinations.length > 2 && (
                      <Badge variant="outline" className="text-xs">+{product.combinations.length - 2} weitere</Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">Keine Figuren mit den gewählten Filtern gefunden.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => {
                setSelectedSize('all');
                setSelectedPackaging('all');
                setSelectedType('all');
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

export default Figuren;
