
import { Search, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartSidebar from './ShoppingCartSidebar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="glass-card sticky top-0 z-50 border-b border-white/10 mx-16 mt-4 rounded-2xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-modern-gradient rounded-xl flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-sm">AS</span>
              </div>
              <h1 className="text-xl font-bold text-foreground hidden sm:block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AnimeSeason</h1>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/current-season" className="text-muted-foreground hover:text-primary font-medium transition-all duration-200 hover:glow-effect px-3 py-2 rounded-lg">Aktuelle Season</Link>
            <Link to="/categories" className="text-muted-foreground hover:text-primary font-medium transition-all duration-200 hover:glow-effect px-3 py-2 rounded-lg">Kategorien</Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Anime, Charaktere, Merchandise..."
                className="modern-input pl-10 pr-4 py-2 w-full rounded-full"
              />
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="lg:hidden hover:glow-effect">
              <Search className="w-5 h-5" />
            </Button>
            <ShoppingCartSidebar />
            <Button variant="ghost" size="sm" className="hover:glow-effect">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 py-4">
            <nav className="flex flex-col space-y-3">
              <Link to="/current-season" className="text-muted-foreground hover:text-primary font-medium">Aktuelle Season</Link>
              <Link to="/categories" className="text-muted-foreground hover:text-primary font-medium">Kategorien</Link>
            </nav>
            <div className="mt-4 lg:hidden">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Anime, Charaktere, Merchandise..."
                  className="modern-input pl-10 pr-4 py-2 w-full rounded-full"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
