import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Calendar, ShoppingBag, Play } from 'lucide-react';
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
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=300&fit=crop",
      merchandise: {
        klamotten: 8,
        accessoires: 12,
        figuren: 4
      },
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
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200&h=300&fit=crop",
      merchandise: {
        klamotten: 6,
        accessoires: 8,
        figuren: 4
      },
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
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=300&fit=crop",
      merchandise: {
        klamotten: 15,
        accessoires: 12,
        figuren: 5
      },
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
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=300&fit=crop",
      merchandise: {
        klamotten: 5,
        accessoires: 7,
        figuren: 4
      },
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
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=200&h=300&fit=crop",
      merchandise: {
        klamotten: 4,
        accessoires: 5,
        figuren: 3
      },
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
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=300&fit=crop",
      merchandise: {
        klamotten: 3,
        accessoires: 3,
        figuren: 2
      },
      format: "Manga"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground mb-2">Winter Season 2025</h1>
          <p className="text-muted-foreground">
            Die aktuellen Anime der Winter Season mit verfügbarem Merchandise
          </p>
        </div>

        <div className="space-y-4">
          {currentSeasonAnime.map((anime) => (
            <div key={anime.id} className="bg-card border border-border rounded-lg p-4 hover:bg-accent/5 transition-colors">
              <div className="flex gap-4">
                {/* Anime Cover */}
                <div className="flex-shrink-0">
                  <img 
                    src={anime.image} 
                    alt={anime.title}
                    className="w-16 h-24 object-cover rounded border"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground line-clamp-1 mb-1">{anime.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <span>{anime.studio}</span>
                        <span>•</span>
                        <span>{anime.episodes}</span>
                        <span>•</span>
                        <span>{anime.format}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-current text-yellow-400" />
                        <span className="text-sm font-medium text-foreground">{anime.rating}</span>
                      </div>
                      <Badge variant={anime.status === 'Released' ? 'default' : 'secondary'} className="text-purple-200">
                        {anime.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-2">
                    {anime.genres.slice(0, 4).map((genre) => (
                      <Badge key={genre} variant="outline" className="text-purple-300 border-purple-500/50">
                        {genre}
                      </Badge>
                    ))}
                    {anime.genres.length > 4 && (
                      <Badge variant="outline" className="text-purple-300 border-purple-500/50">
                        +{anime.genres.length - 4}
                      </Badge>
                    )}
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {anime.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-primary">
                        <ShoppingBag className="w-4 h-4" />
                        <span className="text-sm font-medium">
                          {anime.merchandise.klamotten + anime.merchandise.accessoires + anime.merchandise.figuren} Artikel verfügbar
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{anime.releaseDate}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Play className="w-4 h-4 mr-1" />
                        Trailer
                      </Button>
                      <Button size="sm">
                        Merchandise ansehen
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default CurrentSeason;
