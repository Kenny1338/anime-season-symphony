
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Play, Calendar, Users } from 'lucide-react';
import { useAnimeList } from '@/hooks/useAnime';
import { Skeleton } from '@/components/ui/skeleton';

const FunctionalFeaturedAnime = () => {
  const { data: animeList, isLoading, error } = useAnimeList(6);

  if (error) {
    console.error('Error loading anime:', error);
    return (
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Featured Anime</h2>
            <p className="section-subtitle">
              Fehler beim Laden der Anime-Serien. Bitte versuchen Sie es später erneut.
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title">Featured Anime</h2>
            <p className="section-subtitle">
              Entdecke die beliebtesten Anime-Serien dieser Saison
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <Card key={i} className="glass-card overflow-hidden">
                <Skeleton className="w-full h-64" />
                <CardContent className="p-6">
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full mb-4" />
                  <div className="flex items-center gap-2 mb-4">
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="h-5 w-20" />
                  </div>
                  <Skeleton className="h-10 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Featured Anime</h2>
          <p className="section-subtitle">
            Entdecke die beliebtesten Anime-Serien dieser Saison
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {animeList?.map((anime) => (
            <Card key={anime.id} className="glass-card-hover overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={anime.image_url || 'https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=400'} 
                  alt={anime.name}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                    <Star className="w-3 h-3 mr-1 fill-yellow-400 text-yellow-400" />
                    {anime.rating}
                  </Badge>
                  {anime.year && (
                    <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
                      <Calendar className="w-3 h-3 mr-1" />
                      {anime.year}
                    </Badge>
                  )}
                </div>
                <Button 
                  size="icon" 
                  className="absolute bottom-4 right-4 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                >
                  <Play className="w-4 h-4" />
                </Button>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {anime.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {anime.description || 'Keine Beschreibung verfügbar.'}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  {anime.studio && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{anime.studio}</span>
                    </div>
                  )}
                  <Badge variant="outline" className="text-xs">
                    {anime.status || 'Ongoing'}
                  </Badge>
                </div>
                
                <Button className="w-full modern-button">
                  Merchandise ansehen
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunctionalFeaturedAnime;
