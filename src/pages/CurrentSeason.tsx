
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Calendar, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CurrentSeason = () => {
  const currentSeasonAnime = [
    {
      id: 1,
      title: "Ore dake Level Up na Ken Season 2 - Arise from the Shadows",
      genres: ["Action", "Adventure", "Fantasy"],
      rating: 8.98,
      type: "TV (JP)",
      status: "Released",
      releaseDate: "Jan 4, 2025 at 4:00pm CET",
      studio: "A-1 Pictures",
      episodes: "13 eps × 24m",
      description: "Jinwoo has become a formidable necromancer with an army of loyal shadows at his command. But he must master these abilities while keeping them hidden from other hunters, all while racing against the clock to save his mother.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      merchandiseCount: 24,
      format: "Light Novel"
    },
    {
      id: 2,
      title: "Re:Zero kara Hajimeru Isekai Seikatsu 3rd Season",
      genres: ["Drama", "Fantasy", "Isekai", "Psychological", "Suspense", "Time Travel"],
      rating: 8.53,
      type: "TV (JP)",
      status: "Released",
      releaseDate: "Began Fall 2024",
      studio: "WHITE FOX",
      episodes: "16 eps × 24m",
      description: "A year has passed since Subaru's victory at the Sanctuary. He savors a life of fulfillment while Emilia's camp stands united for the royal selection.",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop",
      merchandiseCount: 18,
      format: "Light Novel"
    },
    {
      id: 3,
      title: "Kusuriya no Hitorigoto 2nd Season",
      genres: ["Drama", "Historical", "Medical", "Mystery"],
      rating: 8.46,
      type: "EIGA, TV (JP)",
      status: "Released",
      releaseDate: "Jan 10, 2025 at 3:40pm CET",
      studio: "TOHO animation STUDIO × OLM",
      episodes: "24 eps × 24m",
      description: "When a favored concubine becomes pregnant, Maomao is put to the test as her food taster. She must keep her wits sharp, not only to protect the concubine but also against rising dangers in the palace.",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
      merchandiseCount: 32,
      format: "Light Novel"
    },
    {
      id: 4,
      title: "SAKAMOTO DAYS",
      genres: ["Action", "Adult Cast", "Comedy", "Organized Crime"],
      rating: 8.05,
      type: "Streaming (JP), NETX",
      status: "Released",
      releaseDate: "Jan 11, 2025 at 3:00pm CET",
      studio: "TMS Entertainment",
      episodes: "11 eps × 24m",
      description: "Taro Sakamoto was once a legendary hit man feared throughout the criminal underworld. But now he's living the quiet life as the owner of a neighborhood store.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      merchandiseCount: 16,
      format: "Manga"
    },
    {
      id: 5,
      title: "Arifureta Shokugyou de Sekai Saikyou 3rd Season",
      genres: ["Action", "Adventure", "Fantasy", "Harem", "Isekai", "Magic"],
      rating: 7.91,
      type: "TV (JP)",
      status: "Released",
      releaseDate: "Began Fall 2024",
      studio: "asread.",
      episodes: "16 eps × 24m",
      description: "After repelling demonic invaders, Princess Liliana leaves the Heiligh Kingdom in search of aid. Hajime decides to join her before tackling the two remaining Great Labyrinths.",
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop",
      merchandiseCount: 12,
      format: "Light Novel"
    },
    {
      id: 6,
      title: "Shangri-La Frontier 2nd Season",
      genres: ["Action", "Adventure", "Fantasy", "Video Game"],
      rating: 8.38,
      type: "TV (JP)",
      status: "Released",
      releaseDate: "Began Fall 2024",
      studio: "C2C",
      episodes: "25 eps × 24m",
      description: "No synopsis has been added to this title.",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
      merchandiseCount: 8,
      format: "Manga"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Released':
        return 'bg-green-500 hover:bg-green-600';
      case 'Airing':
        return 'bg-blue-500 hover:bg-blue-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Winter Season 2025</h1>
          <p className="text-muted-foreground text-lg">
            Die aktuellen Anime der Winter Season mit verfügbarem Merchandise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentSeasonAnime.map((anime) => (
            <Card key={anime.id} className="group overflow-hidden material-card hover:shadow-material-lg transition-all duration-300">
              <div className="relative">
                <img 
                  src={anime.image} 
                  alt={anime.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  <Badge className={`${getStatusColor(anime.status)} text-white text-xs`}>
                    {anime.status}
                  </Badge>
                  <Badge variant="secondary" className="bg-background/80 text-foreground text-xs">
                    {anime.type}
                  </Badge>
                </div>
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-background/80 text-foreground px-2 py-1 rounded">
                  <Star className="w-3 h-3 fill-current text-yellow-400" />
                  <span className="text-xs font-medium">{anime.rating}</span>
                </div>
              </div>
              
              <CardContent className="p-4">
                <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">{anime.title}</h3>
                
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">{anime.episodes}</span>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {anime.genres.slice(0, 3).map((genre) => (
                    <Badge key={genre} variant="outline" className="text-xs">
                      {genre}
                    </Badge>
                  ))}
                  {anime.genres.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{anime.genres.length - 3}
                    </Badge>
                  )}
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {anime.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <ShoppingBag className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">
                      {anime.merchandiseCount} Artikel
                    </span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {anime.format}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <Button className="w-full" size="sm">
                    Merchandise ansehen
                  </Button>
                  <Button variant="outline" className="w-full" size="sm">
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CurrentSeason;
