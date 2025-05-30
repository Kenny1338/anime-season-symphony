
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Anime der Winter Season</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Die beliebtesten Anime der aktuellen Season mit exklusivem Merchandise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredAnime.map((anime, index) => (
            <Card key={index} className="group overflow-hidden material-card hover:shadow-material-lg transition-all duration-300">
              <div className="relative">
                <img 
                  src={anime.image} 
                  alt={anime.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge className={`${anime.status === 'Finale' ? 'bg-red-500' : 'bg-green-500'} text-white`}>
                    {anime.status}
                  </Badge>
                  <Badge variant="secondary" className="bg-black/70 text-white">
                    {anime.episode}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded">
                  <Star className="w-4 h-4 fill-current text-yellow-400" />
                  <span className="text-sm font-medium">{anime.rating}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{anime.title}</h3>
                <p className="text-gray-600 mb-4">{anime.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">
                    {anime.merchandiseCount} Artikel verfügbar
                  </span>
                  <span className="text-sm font-medium text-primary-600">
                    Bis März 2025
                  </span>
                </div>
                
                <Button className="w-full material-button bg-primary-500 hover:bg-primary-600 text-white">
                  Merchandise ansehen
                  <ArrowRight className="w-4 h-4 ml-2" />
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
