
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-card/80 via-card/60 to-background/80 backdrop-blur-xl border-t border-white/10 py-12 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-blue-500/5 to-pink-500/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-modern-gradient rounded-xl flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-sm">AS</span>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">AnimeSeason</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Der exklusive Shop für saisonales Anime Merchandise. 
              Limitierte Kollektionen nur für die aktuelle Season.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:glow-effect transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:glow-effect transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:glow-effect transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary hover:glow-effect transition-all duration-300">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-all duration-200 hover:glow-effect">Aktuelle Season</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-all duration-200 hover:glow-effect">Figuren</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-all duration-200 hover:glow-effect">Kleidung</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-all duration-200 hover:glow-effect">Accessoires</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-all duration-200 hover:glow-effect">Poster & Prints</a></li>
            </ul>
          </div>

          {/* Kundenservice */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">Kundenservice</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-all duration-200 hover:glow-effect">Kontakt</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-all duration-200 hover:glow-effect">Versand & Rückgabe</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-all duration-200 hover:glow-effect">Größentabelle</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-all duration-200 hover:glow-effect">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-all duration-200 hover:glow-effect">Bewertungen</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Newsletter</h4>
            <p className="text-muted-foreground mb-4">
              Erhalte Updates zu neuen Seasons und exklusiven Angeboten.
            </p>
            <Card className="glass-card border-white/20 p-4 hover:shadow-glow transition-all duration-300">
              <div className="flex space-x-2">
                <Input 
                  placeholder="E-Mail Adresse"
                  className="modern-input bg-background/50 border-white/20 focus:border-primary/50"
                />
                <Button className="modern-button">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2025 AnimeSeason. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-all duration-200 hover:glow-effect">Datenschutz</a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-all duration-200 hover:glow-effect">AGB</a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-all duration-200 hover:glow-effect">Impressum</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
