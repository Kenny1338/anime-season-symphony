import { Search, User, Menu, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartSidebar from './ShoppingCartSidebar';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="glass-card sticky top-4 z-50 mx-4 md:mx-8 lg:mx-16 mb-8 backdrop-blur-strong">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden hover:bg-white/10 rounded-xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-pulse"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold text-gradient">AnimeSeason</h1>
                <p className="text-xs text-muted-foreground/60 -mt-1">Premium Merchandise</p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            <Link to="/current-season" className="nav-link">
              Aktuelle Season
            </Link>
            <Link to="/categories" className="nav-link">
              Kategorien
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-lg mx-8">
            <div className="relative w-full group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground/60 w-5 h-5 group-focus-within:text-primary transition-colors" />
              <Input
                placeholder="Suche nach Anime, Charakteren, Merchandise..."
                className="modern-input pl-12 pr-6 py-4 w-full rounded-2xl text-sm font-medium"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <kbd className="px-2 py-1 text-xs bg-muted/30 rounded-lg border border-white/10">⌘K</kbd>
              </div>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="lg:hidden hover:bg-white/10 rounded-xl p-3">
              <Search className="w-5 h-5" />
            </Button>
            <ShoppingCartSidebar />
            <Button variant="ghost" size="sm" className="hover:bg-white/10 rounded-xl p-3 relative group">
              <User className="w-5 h-5" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 py-6 animate-slide-up">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/current-season" 
                className="text-muted-foreground hover:text-foreground font-medium py-3 px-4 rounded-xl hover:bg-white/5 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Aktuelle Season
              </Link>
              <Link 
                to="/categories" 
                className="text-muted-foreground hover:text-foreground font-medium py-3 px-4 rounded-xl hover:bg-white/5 transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Kategorien
              </Link>
            </nav>
            <div className="mt-6 lg:hidden">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground/60 w-5 h-5" />
                <Input
                  placeholder="Suche nach Anime, Charakteren..."
                  className="modern-input pl-12 pr-4 py-4 w-full rounded-2xl"
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
