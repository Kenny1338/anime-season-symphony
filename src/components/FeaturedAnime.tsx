
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star } from 'lucide-react';

const FeaturedAnime = () => {
  const featuredAnime = [
    {
      title: 'Demon Slayer: Kimetsu no Yaiba',
      rating: 9.1,
      status: 'Aktuell',
      episode: 'Episode 12',
      description: 'Tanjiro und seine Gefährten kämpfen gegen mächtige Dämonen.',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
      merchandiseCount: 24
    },
    {
      title: 'Attack on Titan: Final Season',
      rating: 9.3,
      status: 'Finale',
      episode: 'Episode 28',
      description: 'Das epische Ende der Geschichte um Eren und die Titanen.',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=400&fit=crop',
      merchandiseCount: 18
    },
    {
      title: 'Jujutsu Kaisen Season 2',
      rating: 8.9,
      status: 'Aktuell',
      episode: 'Episode 8',
      description: 'Yuji und seine Freunde stellen sich neuen Herausforderungen.',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop',
      merchandiseCount: 16
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400 bg-clip-text text-transparent">
              Featured Anime
            </span>
            <br />
            <span className="text-2xl md:text-3xl font-normal text-muted-foreground">
              der Winter Season
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Die beliebtesten Anime der aktuellen Season mit exklusivem Merchandise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredAnime.map((anime, index) => (
            <Card key={index} className="group overflow-hidden glass-card hover:shadow-modern-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in">
              <div className="relative">
                <img 
                  src={anime.image} 
                  alt={anime.title}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className={`${anime.status === 'Finale' ? 'bg-red-500/90 hover:bg-red-600' : 'bg-green-500/90 hover:bg-green-600'} text-white backdrop-blur-sm neon-border`}>
                    {anime.status}
                  </Badge>
                  <Badge variant="secondary" className="bg-background/80 text-foreground backdrop-blur-sm">
                    {anime.episode}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-background/90 text-foreground px-3 py-1.5 rounded-xl backdrop-blur-sm">
                  <Star className="w-4 h-4 fill-current text-yellow-400" />
                  <span className="text-sm font-medium">{anime.rating}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {anime.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{anime.description}</p>
                
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-muted-foreground">
                    {anime.merchandiseCount} Artikel verfügbar
                  </span>
                  <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    Bis März 2025
                  </span>
                </div>
                
                <Button className="w-full modern-button text-white hover:shadow-glow-lg group-hover:animate-glow">
                  Merchandise ansehen
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedAnime;
