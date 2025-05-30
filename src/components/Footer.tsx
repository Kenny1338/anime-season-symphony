
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AS</span>
              </div>
              <h3 className="text-xl font-bold">AnimeSeason</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Der exklusive Shop für saisonales Anime Merchandise. 
              Limitierte Kollektionen nur für die aktuelle Season.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Aktuelle Season</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Figuren</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Kleidung</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Accessoires</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Poster & Prints</a></li>
            </ul>
          </div>

          {/* Kundenservice */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kundenservice</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Kontakt</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Versand & Rückgabe</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Größentabelle</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Bewertungen</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Erhalte Updates zu neuen Seasons und exklusiven Angeboten.
            </p>
            <Card className="bg-gray-800 border-gray-700 p-4">
              <div className="flex space-x-2">
                <Input 
                  placeholder="E-Mail Adresse"
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
                <Button className="bg-primary-500 hover:bg-primary-600">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 AnimeSeason. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Datenschutz</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">AGB</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Impressum</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
