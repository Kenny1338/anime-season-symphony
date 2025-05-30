
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AS</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">AnimeSeason</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Der exklusive Shop für saisonales Anime Merchandise. 
              Limitierte Kollektionen nur für die aktuelle Season.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Aktuelle Season</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Figuren</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Kleidung</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Accessoires</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Poster & Prints</a></li>
            </ul>
          </div>

          {/* Kundenservice */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Kundenservice</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Kontakt</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Versand & Rückgabe</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Größentabelle</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Bewertungen</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Newsletter</h4>
            <p className="text-muted-foreground mb-4">
              Erhalte Updates zu neuen Seasons und exklusiven Angeboten.
            </p>
            <Card className="border p-4">
              <div className="flex space-x-2">
                <Input 
                  placeholder="E-Mail Adresse"
                  className="bg-background"
                />
                <Button className="bg-primary hover:bg-primary/90">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2025 AnimeSeason. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Datenschutz</a>
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">AGB</a>
              <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Impressum</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
