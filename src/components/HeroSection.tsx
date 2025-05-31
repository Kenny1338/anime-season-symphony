import { Play, Star, TrendingUp, Sparkles, ArrowRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroSlides = [
    {
      id: 1,
      title: "Demon Slayer",
      subtitle: "Hashira Training Arc",
      description: "Erlebe die epische Fortsetzung mit exklusiven Merchandise-Artikeln",
      image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200",
      badge: "Neu verfügbar",
      color: "from-red-500 to-orange-500"
    },
    {
      id: 2,
      title: "Attack on Titan",
      subtitle: "Final Season Complete",
      description: "Die legendäre Serie endet - sichere dir die letzten Sammlerstücke",
      image: "https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=1200",
      badge: "Limitiert",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Jujutsu Kaisen",
      subtitle: "Shibuya Incident",
      description: "Dunkle Magie und intensive Kämpfe - jetzt als Premium Merchandise",
      image: "https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=1200",
      badge: "Trending",
      color: "from-purple-500 to-violet-500"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentHero = heroSlides[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
        <img 
          src={currentHero.image}
          alt={currentHero.title}
          className="w-full h-full object-cover scale-110 transition-transform duration-[10s] ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl floating-element"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full blur-2xl floating-element"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="text-white space-y-8 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500/30 to-purple-500/30 rounded-full border border-white/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-violet-300" />
              <span className="text-sm font-medium">{currentHero.badge}</span>
            </div>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-gradient bg-gradient-to-r from-white via-violet-200 to-purple-300">
                  {currentHero.title}
                </span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-violet-300">
                {currentHero.subtitle}
              </h2>
            </div>

            {/* Description */}
            <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
              {currentHero.description}
            </p>

            {/* Stats */}
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-lg font-semibold">9.2</span>
                <span className="text-gray-400">Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-lg font-semibold">98%</span>
                <span className="text-gray-400">Beliebtheit</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-400" />
                <span className="text-lg font-semibold">2.5M</span>
                <span className="text-gray-400">Fans</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="modern-button text-white text-lg px-8 py-4 group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Jetzt entdecken
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10 rounded-2xl backdrop-blur-sm">
                Merchandise ansehen
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">500+</div>
                <div className="text-sm text-gray-400">Produkte</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">50+</div>
                <div className="text-sm text-gray-400">Anime Serien</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gradient">10K+</div>
                <div className="text-sm text-gray-400">Zufriedene Kunden</div>
              </div>
            </div>
          </div>

          {/* Right Content - Featured Products Preview */}
          <div className="hidden lg:block space-y-6 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="glass-card p-6 group hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Premium Figuren</h3>
                  <p className="text-gray-400">Hochwertige Sammlerstücke</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-white/10"></div>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 group hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Exklusive Kleidung</h3>
                  <p className="text-gray-400">Limitierte Editionen</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-white/10"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
