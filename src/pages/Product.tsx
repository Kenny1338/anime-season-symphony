import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Heart, 
  ShoppingCart, 
  Star, 
  Minus, 
  Plus, 
  Share2, 
  Truck, 
  Shield, 
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Zap,
  Gift,
  Users,
  MessageCircle
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';

interface Product {
  id: string;
  name: string;
  anime: string;
  price: number;
  originalPrice?: number;
  images: string[];
  rating: number;
  reviews: number;
  description: string;
  features: string[];
  specifications: { [key: string]: string };
  category: string;
  isNew?: boolean;
  isLimited?: boolean;
  inStock: number;
  sizes?: string[];
  colors?: string[];
}

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);

  // Mock product data - in real app, fetch from API
  useEffect(() => {
    const mockProduct: Product = {
      id: id || '1',
      name: 'Demon Slayer Tanjiro Premium Figur',
      anime: 'Demon Slayer',
      price: 89.99,
      originalPrice: 119.99,
      images: [
        'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800'
      ],
      rating: 4.9,
      reviews: 234,
      description: 'Diese hochwertige Tanjiro Figur aus der beliebten Anime-Serie Demon Slayer ist ein absolutes Must-Have für jeden Fan. Mit liebevollen Details und hochwertiger Verarbeitung bringt sie den Charakter perfekt zur Geltung.',
      features: [
        'Hochwertige PVC-Verarbeitung',
        'Detailgetreue Bemalung',
        'Bewegliche Gelenke',
        'Inklusive Zubehör und Schwert',
        'Sammlerwürdige Qualität',
        'Offiziell lizenziert'
      ],
      specifications: {
        'Höhe': '24 cm',
        'Material': 'PVC, ABS',
        'Hersteller': 'Good Smile Company',
        'Serie': 'Demon Slayer',
        'Charakter': 'Tanjiro Kamado',
        'Erscheinungsjahr': '2024',
        'Artikelnummer': 'GSC-DS-001'
      },
      category: 'Figuren',
      isNew: true,
      isLimited: true,
      inStock: 15,
      sizes: ['Standard'],
      colors: ['Original']
    };
    setProduct(mockProduct);
  }, [id]);

  const relatedProducts = [
    {
      id: '2',
      name: 'Nezuko Kamado Figur',
      anime: 'Demon Slayer',
      price: 79.99,
      originalPrice: 99.99,
      image: 'https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 156,
      isNew: false,
      isLimited: true
    },
    {
      id: '3',
      name: 'Zenitsu Agatsuma Figur',
      anime: 'Demon Slayer',
      price: 84.99,
      image: 'https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      reviews: 89,
      isNew: true,
      isLimited: false
    },
    {
      id: '4',
      name: 'Inosuke Hashibira Figur',
      anime: 'Demon Slayer',
      price: 89.99,
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.6,
      reviews: 112,
      isNew: false,
      isLimited: false
    }
  ];

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Produkt wird geladen...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <span>/</span>
          <Link to="/categories" className="hover:text-foreground transition-colors">Kategorien</Link>
          <span>/</span>
          <Link to={`/categories/${product.category.toLowerCase()}`} className="hover:text-foreground transition-colors">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-500/10 to-purple-500/10 aspect-square">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              
              {/* Image Navigation */}
              <Button
                variant="ghost"
                size="sm"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
                onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : product.images.length - 1)}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20"
                onClick={() => setSelectedImage(selectedImage < product.images.length - 1 ? selectedImage + 1 : 0)}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.isNew && (
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                    <Zap className="w-3 h-3 mr-1" />
                    NEU
                  </Badge>
                )}
                {product.isLimited && (
                  <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                    LIMITED
                  </Badge>
                )}
                {product.originalPrice && (
                  <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white">
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </Badge>
                )}
              </div>
            </div>

            {/* Thumbnail Images */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === index 
                      ? 'border-primary shadow-lg scale-105' 
                      : 'border-white/20 hover:border-white/40'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className="border-primary/20 text-primary">
                  {product.anime}
                </Badge>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviews} Bewertungen)</span>
                </div>
              </div>
              
              <h1 className="text-3xl font-bold text-foreground mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-bold text-gradient">€{product.price}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">€{product.originalPrice}</span>
                )}
              </div>
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/20 rounded-xl">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-green-400 font-medium">
                {product.inStock > 10 ? 'Auf Lager' : `Nur noch ${product.inStock} verfügbar`}
              </span>
            </div>

            {/* Options */}
            {product.sizes && product.sizes.length > 1 && (
              <div>
                <label className="block text-sm font-medium mb-2">Größe</label>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <Button
                      key={size}
                      variant={selectedSize === size ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedSize(size)}
                      className="min-w-[3rem]"
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {product.colors && product.colors.length > 1 && (
              <div>
                <label className="block text-sm font-medium mb-2">Farbe</label>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <Button
                      key={color}
                      variant={selectedColor === color ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium mb-2">Anzahl</label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.min(product.inStock, quantity + 1))}
                  disabled={quantity >= product.inStock}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <Button className="flex-1 modern-button text-white h-12">
                <ShoppingCart className="w-5 h-5 mr-2" />
                In den Warenkorb - €{(product.price * quantity).toFixed(2)}
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                className="h-12 px-4"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current text-red-500' : ''}`} />
              </Button>
              
              <Button variant="outline" size="sm" className="h-12 px-4">
                <Share2 className="w-5 h-5" />
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3 bg-card/50 rounded-xl">
                <Truck className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-sm">Kostenloser Versand</p>
                  <p className="text-xs text-muted-foreground">ab 50€</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-card/50 rounded-xl">
                <Shield className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-sm">2 Jahre Garantie</p>
                  <p className="text-xs text-muted-foreground">Herstellergarantie</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-card/50 rounded-xl">
                <RotateCcw className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-sm">30 Tage Rückgabe</p>
                  <p className="text-xs text-muted-foreground">Kostenlos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Card className="glass-card mb-16">
          <CardContent className="p-8">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="description">Beschreibung</TabsTrigger>
                <TabsTrigger value="specifications">Spezifikationen</TabsTrigger>
                <TabsTrigger value="reviews">Bewertungen</TabsTrigger>
                <TabsTrigger value="shipping">Versand</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-4">Produktbeschreibung</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>
                  
                  <h4 className="font-semibold mb-3">Features:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="specifications">
                <div>
                  <h3 className="text-xl font-bold mb-4">Technische Daten</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between p-3 bg-card/30 rounded-lg">
                        <span className="font-medium">{key}:</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews">
                <div>
                  <h3 className="text-xl font-bold mb-4">Kundenbewertungen</h3>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl font-bold">{product.rating}</div>
                    <div>
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}`}
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground">{product.reviews} Bewertungen</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="p-4 bg-card/30 rounded-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center">
                            <Users className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-medium">Anime Fan {i + 1}</p>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, j) => (
                                <Star key={j} className="w-3 h-3 text-yellow-400 fill-current" />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground">
                          Absolut fantastische Qualität! Die Details sind unglaublich und die Figur sieht genauso aus wie im Anime.
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="shipping">
                <div>
                  <h3 className="text-xl font-bold mb-4">Versand & Lieferung</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-card/30 rounded-lg">
                      <h4 className="font-semibold mb-2">Standardversand (kostenlos ab 50€)</h4>
                      <p className="text-muted-foreground">3-5 Werktage • €4.99</p>
                    </div>
                    <div className="p-4 bg-card/30 rounded-lg">
                      <h4 className="font-semibold mb-2">Expressversand</h4>
                      <p className="text-muted-foreground">1-2 Werktage • €9.99</p>
                    </div>
                    <div className="p-4 bg-card/30 rounded-lg">
                      <h4 className="font-semibold mb-2">Overnight Express</h4>
                      <p className="text-muted-foreground">Nächster Werktag • €19.99</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Related Products */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Gift className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Ähnliche Produkte</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} to={`/product/${relatedProduct.id}`}>
                <ProductCard {...relatedProduct} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Product;
