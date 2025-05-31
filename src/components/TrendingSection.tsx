import { TrendingUp, Star, Eye, Heart, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TrendingSection = () => {
  const trendingItems = [
    {
      id: 1,
      title: "Nezuko Kamado Figur",
      anime: "Demon Slayer",
      price: "€89.99",
      originalPrice: "€109.99",
      image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      reviews: 234,
      trending: "+15%",
      badge: "Bestseller"
    },
    {
      id: 2,
      title: "Survey Corps Jacke",
      anime: "Attack on Titan",
      price: "€79.99",
      originalPrice: "€99.99",
      image: "https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 189,
      trending: "+23%",
      badge: "Limitiert"
    },
    {
      id: 3,
      title: "Sukuna Finger Replica",
      anime: "Jujutsu Kaisen",
      price: "€34.99",
      originalPrice: "€44.99",
      image: "https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      reviews: 156,
      trending: "+31%",
      badge: "Neu"
    },
    {
      id: 4,
      title: "Anime Poster Set",
      anime: "Mixed Collection",
      price: "€24.99",
      originalPrice: "€34.99",
      image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.6,
      reviews: 98,
      trending: "+18%",
      badge: "Bundle"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-r from-green-500/30 to-emerald-500/30 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-r from-orange-500/30 to-red-500/30 rounded-full blur-3xl floating-element"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-white/10 mb-4">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-green-300">Trending Now</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Beliebteste Artikel
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Entdecke die heißesten Merchandise-Artikel, die gerade von der Community geliebt werden
            </p>
          </div>
          <Button className="hidden md:flex modern-button text-white">
            Alle Trends ansehen
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Trending Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingItems.map((item, index) => (
            <div key={item.id} className="glass-card-hover group relative overflow-hidden">
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-xs font-bold text-white">
                {item.badge}
              </div>

              {/* Trending Indicator */}
              <div className="absolute top-4 right-4 z-10 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-lg text-xs font-medium text-green-400 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                {item.trending}
              </div>

              {/* Image */}
              <div className="relative h-48 overflow-hidden rounded-t-2xl">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover product-image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Quick Actions */}
                <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <Button size="sm" className="flex-1 bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30">
                    <Eye className="w-4 h-4 mr-1" />
                    Ansehen
                  </Button>
                  <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 px-3">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Anime Tag */}
                <div className="text-xs text-violet-400 font-medium mb-2 uppercase tracking-wider">
                  {item.anime}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-gradient transition-all">
                  {item.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{item.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">({item.reviews} Bewertungen)</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-gradient">{item.price}</span>
                    <span className="text-sm text-muted-foreground line-through">{item.originalPrice}</span>
                  </div>
                  <div className="text-xs text-green-400 font-medium">
                    {Math.round(((parseFloat(item.originalPrice.replace('€', '')) - parseFloat(item.price.replace('€', ''))) / parseFloat(item.originalPrice.replace('€', ''))) * 100)}% Rabatt
                  </div>
                </div>

                {/* Add to Cart Button */}
                <Button className="w-full mt-4 modern-button text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  In den Warenkorb
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="text-center mt-8 md:hidden">
          <Button className="modern-button text-white">
            Alle Trends ansehen
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Verkaufte Artikel heute", value: "1,234", icon: TrendingUp, color: "from-green-500 to-emerald-500" },
            { label: "Aktive Nutzer", value: "5,678", icon: Eye, color: "from-blue-500 to-cyan-500" },
            { label: "Positive Bewertungen", value: "98%", icon: Star, color: "from-yellow-500 to-orange-500" },
            { label: "Wunschlisten", value: "2,345", icon: Heart, color: "from-pink-500 to-rose-500" }
          ].map((stat, index) => (
            <div key={index} className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300">
              <div className={`w-12 h-12 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-gradient mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
