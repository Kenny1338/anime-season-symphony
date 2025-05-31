import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingCart, Star, Filter, Grid, List } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Figuren = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popular');

  const products = [
    {
      id: 'fig-001',
      name: 'Demon Slayer Tanjiro Premium Figur',
      anime: 'Demon Slayer',
      price: 89.99,
      originalPrice: 119.99,
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      reviews: 234,
      isNew: true,
      isLimited: true,
      scale: '1/8',
      height: '24cm'
    },
    {
      id: 'fig-002',
      name: 'One Piece Luffy Gear 5 Figur',
      anime: 'One Piece',
      price: 199.99,
      image: 'https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5.0,
      reviews: 67,
      isNew: true,
      isLimited: true,
      scale: '1/6',
      height: '30cm'
    },
    {
      id: 'fig-003',
      name: 'Attack on Titan Eren Titan Form',
      anime: 'Attack on Titan',
      price: 149.99,
      originalPrice: 179.99,
      image: 'https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 145,
      isNew: false,
      isLimited: false,
      scale: '1/10',
      height: '20cm'
    },
    {
      id: 'fig-004',
      name: 'Jujutsu Kaisen Gojo Satoru Nendoroid',
      anime: 'Jujutsu Kaisen',
      price: 54.99,
      originalPrice: 64.99,
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      reviews: 189,
      isNew: false,
      isLimited: false,
      scale: 'Nendoroid',
      height: '10cm'
    },
    {
      id: 'fig-005',
      name: 'My Hero Academia All Might Figur',
      anime: 'My Hero Academia',
      price: 129.99,
      image: 'https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      reviews: 98,
      isNew: true,
      isLimited: false,
      scale: '1/8',
      height: '26cm'
    },
    {
      id: 'fig-006',
      name: 'Naruto Uzumaki Sage Mode Figur',
      anime: 'Naruto',
      price: 109.99,
      originalPrice: 139.99,
      image: 'https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 167,
      isNew: false,
      isLimited: true,
      scale: '1/8',
      height: '23cm'
    }
  ];

  const ProductCard = ({ product }: { product: typeof products[0] }) => (
    <Card className="group glass-card overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-modern-xl">
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </Link>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && <Badge className="bg-green-500/90 text-white hover:bg-green-600 backdrop-blur-sm">Neu</Badge>}
          {product.isLimited && <Badge className="bg-red-500/90 text-white hover:bg-red-600 backdrop-blur-sm">Limitiert</Badge>}
          {product.originalPrice && (
            <Badge className="bg-pink-500/90 text-white hover:bg-pink-600 backdrop-blur-sm">
              -{Math.round((1 - product.price / product.originalPrice) * 100)}%
            </Badge>
          )}
        </div>
        
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background/90 rounded-xl text-muted-foreground transition-all duration-200"
        >
          <Heart className="w-4 h-4" />
        </Button>

        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <Link to={`/product/${product.id}`}>
            <Button className="w-full modern-button text-white backdrop-blur-sm">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Details ansehen
            </Button>
          </Link>
        </div>
      </div>
      
      <CardContent className="p-5">
        <div className="mb-3">
          <p className="text-sm text-primary font-medium bg-primary/10 px-2 py-1 rounded-lg inline-block mb-2">{product.anime}</p>
          <Link to={`/product/${product.id}`}>
            <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-gradient transition-all duration-300 cursor-pointer">{product.name}</h3>
          </Link>
        </div>
        
        <div className="flex items-center gap-2 mb-3">
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
          <span className="text-lg font-bold text-foreground">€{product.price}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through bg-muted/30 px-2 py-0.5 rounded">€{product.originalPrice}</span>
          )}
        </div>

        <div className="text-xs text-muted-foreground">
          {product.scale} • {product.height}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link to="/categories" className="hover:text-foreground transition-colors">Kategorien</Link>
          <span>/</span>
          <span className="text-foreground">Figuren</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Anime Figuren</h1>
          <p className="text-muted-foreground text-lg">
            Hochwertige Sammelfiguren und Nendoroids
          </p>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center mb-8">
          <div className="flex gap-4">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 bg-background border border-border rounded-lg text-sm"
            >
              <option value="popular">Beliebtheit</option>
              <option value="price-low">Preis: Niedrig → Hoch</option>
              <option value="price-high">Preis: Hoch → Niedrig</option>
              <option value="newest">Neueste</option>
              <option value="rating">Bewertung</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">{products.length} Produkte</span>
            <div className="flex border border-border rounded-lg overflow-hidden">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
                className="rounded-none"
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
                className="rounded-none"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 mb-12 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" className="px-12 py-4 rounded-2xl border-white/20 hover:bg-white/5 backdrop-blur-xl font-semibold">
            Mehr Produkte laden
          </Button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Figuren;
