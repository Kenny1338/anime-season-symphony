import { Star, Heart, Eye, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturedAnime = () => {
  const featuredAnime = [
    {
      id: 1,
      title: "Demon Slayer: Kimetsu no Yaiba",
      subtitle: "Hashira Training Arc",
      rating: 9.2,
      popularity: "98%",
      image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=800",
      genre: ["Action", "Supernatural", "Historical"],
      description: "Tanjiro und seine Freunde bereiten sich auf den finalen Kampf vor. Exklusive Merchandise-Artikel jetzt verfügbar!",
      merchandise: ["Figuren", "Katanas", "Cosplay"],
      trending: true
    },
    {
      id: 2,
      title: "Jujutsu Kaisen",
      subtitle: "Shibuya Incident",
      rating: 9.0,
      popularity: "95%",
      image: "https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=800",
      genre: ["Action", "School", "Supernatural"],
      description: "Die dunkelste Arc der Serie bringt intensive Kämpfe und emotionale Momente. Limitierte Editionen verfügbar.",
      merchandise: ["Figuren", "Kleidung", "Accessoires"],
      trending: false
    },
    {
      id: 3,
      title: "Attack on Titan",
      subtitle: "The Final Season",
      rating: 9.4,
      popularity: "97%",
      image: "https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=800",
      genre: ["Action", "Drama", "Fantasy"],
      description: "Das epische Finale einer Legende. Sammle die letzten exklusiven Merchandise-Artikel dieser ikonischen Serie.",
      merchandise: ["Figuren", "Poster", "Replicas"],
      trending: true
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-500/30 to-purple-500/30 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl floating-element"></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full border border-white/10 mb-6">
            <TrendingUp className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium text-violet-300">Trending Now</span>
          </div>
          <h2 className="section-title">
            Featured Anime
          </h2>
          <p className="section-subtitle">
            Entdecke die beliebtesten Anime der Saison und ihre exklusiven Merchandise-Kollektionen
          </p>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredAnime.map((anime, index) => (
            <div key={anime.id} className={`glass-card-hover group ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
              <div className="relative overflow-hidden rounded-2xl">
                {/* Trending Badge */}
                {anime.trending && (
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full text-xs font-bold text-white flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" />
                    TRENDING
                  </div>
                )}

                {/* Image */}
                <div className={`relative ${index === 0 ? 'h-80 lg:h-96' : 'h-64'} overflow-hidden`}>
                  <img 
                    src={anime.image} 
                    alt={anime.title}
                    className="w-full h-full object-cover product-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  {/* Genre Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {anime.genre.map((g) => (
                      <span key={g} className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-medium">
                        {g}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className={`font-bold text-gradient mb-1 ${index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'}`}>
                    {anime.title}
                  </h3>
                  <p className="text-sm text-gray-300 mb-3">{anime.subtitle}</p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{anime.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4 text-blue-400" />
                      <span className="text-sm font-medium">{anime.popularity}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4 text-red-400" />
                      <span className="text-sm font-medium">Favorit</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`text-gray-300 mb-4 ${index === 0 ? 'text-base' : 'text-sm'}`}>
                    {anime.description}
                  </p>

                  {/* Merchandise Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {anime.merchandise.map((item) => (
                      <span key={item} className="px-3 py-1 bg-gradient-to-r from-violet-500/30 to-purple-500/30 backdrop-blur-sm rounded-full text-xs font-medium border border-white/20">
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button className="modern-button flex-1 text-white">
                      Merchandise ansehen
                    </Button>
                    <Button variant="outline" className="px-4 py-2 border-white/30 text-white hover:bg-white/10 rounded-xl backdrop-blur-sm">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button className="modern-button text-white px-12 py-4">
            Alle Featured Anime ansehen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAnime;
