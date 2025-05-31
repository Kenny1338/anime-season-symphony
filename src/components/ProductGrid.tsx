import { ShoppingCart, Heart, Star, Zap, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Demon Slayer Tanjiro Figur",
      price: 89.99,
      originalPrice: 119.99,
      image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Figuren",
      rating: 4.9,
      reviews: 234,
      isNew: true,
      isLimited: false,
      discount: 25
    },
    {
      id: 2,
      name: "Attack on Titan Survey Corps Mantel",
      price: 149.99,
      originalPrice: null,
      image: "https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Kleidung",
      rating: 4.8,
      reviews: 156,
      isNew: false,
      isLimited: true,
      discount: 0
    },
    {
      id: 3,
      name: "Jujutsu Kaisen Gojo Sonnenbrille",
      price: 59.99,
      originalPrice: 79.99,
      image: "https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Accessoires",
      rating: 4.7,
      reviews: 89,
      isNew: false,
      isLimited: false,
      discount: 25
    },
    {
      id: 4,
      name: "Naruto Hokage Stirnband Set",
      price: 34.99,
      originalPrice: 49.99,
      image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Accessoires",
      rating: 4.6,
      reviews: 312,
      isNew: false,
      isLimited: false,
      discount: 30
    },
    {
      id: 5,
      name: "One Piece Luffy Premium Figur",
      price: 199.99,
      originalPrice: null,
      image: "https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Figuren",
      rating: 5.0,
      reviews: 67,
      isNew: true,
      isLimited: true,
      discount: 0
    },
    {
      id: 6,
      name: "My Hero Academia Deku Hoodie",
      price: 79.99,
      originalPrice: 99.99,
      image: "https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Kleidung",
      rating: 4.8,
      reviews: 198,
      isNew: false,
      isLimited: false,
      discount: 20
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-pink-500/40 to-rose-500/40 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r from-cyan-500/40 to-blue-500/40 rounded-full blur-3xl floating-element"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full border border-white/10 mb-6">
            <Gift className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium text-violet-300">Premium Collection</span>
          </div>
          <h2 className="section-title">
            Beliebte Produkte
          </h2>
          <p className="section-subtitle">
            Entdecke unsere handverlesene Auswahl an hochwertigen Anime-Merchandise-Artikeln
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="product-card group">
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl mb-6 bg-gradient-to-br from-violet-500/10 to-purple-500/10">
                {/* Badges */}
                <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                  {product.isNew && (
                    <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 px-3 py-1">
                      <Zap className="w-3 h-3 mr-1" />
                      NEU
                    </Badge>
                  )}
                  {product.isLimited && (
                    <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0 px-3 py-1">
                      LIMITED
                    </Badge>
                  )}
                  {product.discount > 0 && (
                    <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white border-0 px-3 py-1">
                      -{product.discount}%
                    </Badge>
                  )}
                </div>

                {/* Wishlist Button */}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <Heart className="w-4 h-4" />
                </Button>

                {/* Product Image */}
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover product-image"
                  />
                </div>

                {/* Quick Add Overlay */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <Button className="modern-button text-white transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    In den Warenkorb
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                {/* Category */}
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs border-white/20 text-muted-foreground">
                    {product.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>
                </div>

                {/* Product Name */}
                <h3 className="font-bold text-lg text-foreground group-hover:text-gradient transition-all duration-300">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-gradient">
                    €{product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      €{product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <Button className="w-full modern-button text-white group-hover:shadow-2xl">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  In den Warenkorb
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-16">
          <Button variant="outline" className="px-12 py-4 rounded-2xl border-white/20 hover:bg-white/5 backdrop-blur-xl font-semibold">
            Mehr Produkte laden
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
