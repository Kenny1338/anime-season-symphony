
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Shirt, Watch, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Categories = () => {
  const categories = [
    {
      id: 'klamotten',
      title: 'Klamotten',
      description: 'T-Shirts, Hoodies, Jacken und mehr von deinen Lieblings-Anime',
      icon: Shirt,
      itemCount: 156,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop',
      color: 'bg-blue-500',
      path: '/categories/klamotten'
    },
    {
      id: 'accessoires',
      title: 'Accessoires',
      description: 'Taschen, Schmuck, Keychains und andere coole Accessoires',
      icon: Watch,
      itemCount: 89,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop',
      color: 'bg-green-500',
      path: '/categories/accessoires'
    },
    {
      id: 'figuren',
      title: 'Figuren',
      description: 'Hochwertige Sammelfiguren und Nendoroids',
      icon: User,
      itemCount: 67,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      color: 'bg-purple-500',
      path: '/categories/figuren'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Kategorien</h1>
          <p className="text-muted-foreground text-lg">
            Entdecke unser komplettes Anime-Merchandise sortiert nach Kategorien
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className={`absolute top-4 left-4 ${category.color} p-2 rounded-lg`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <span className="text-sm font-medium">{category.itemCount} Artikel</span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <ShoppingBag className="w-4 h-4" />
                      <span className="text-sm">{category.itemCount} Produkte</span>
                    </div>
                    <Link to={category.path}>
                      <Button size="sm" className="group-hover:bg-primary/90">
                        Entdecken
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">Nicht das Richtige gefunden?</h2>
            <p className="text-muted-foreground mb-6">
              Stöbere durch alle unsere Produkte oder nutze die Suchfunktion, um genau das zu finden, was du suchst.
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline">
                Alle Produkte anzeigen
              </Button>
              <Link to="/current-season">
                <Button>
                  Aktuelle Season ansehen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Categories;
