import { Heart, Mail, Phone, MapPin, Instagram, Twitter, Youtube, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="relative mt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-500/30 to-purple-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl"></div>
      </div>

      <div className="glass-card mx-4 md:mx-8 lg:mx-16 mb-8 relative z-10">
        <div className="container mx-auto px-8 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-violet-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">AS</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gradient">AnimeSeason</h3>
                  <p className="text-xs text-muted-foreground">Premium Merchandise</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Deine erste Adresse für hochwertiges Anime-Merchandise. Von limitierten Figuren bis hin zu exklusiver Kleidung - wir bringen deine Lieblings-Anime in dein Leben.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Instagram, href: "#", color: "from-pink-500 to-rose-500" },
                  { icon: Twitter, href: "#", color: "from-blue-400 to-blue-600" },
                  { icon: Youtube, href: "#", color: "from-red-500 to-red-600" },
                  { icon: Github, href: "#", color: "from-gray-600 to-gray-800" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 rounded-xl bg-gradient-to-r ${social.color} flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-foreground mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: "Aktuelle Season", href: "/current-season" },
                  { name: "Alle Kategorien", href: "/categories" },
                  { name: "Figuren", href: "/categories/figuren" },
                  { name: "Kleidung", href: "/categories/klamotten" },
                  { name: "Accessoires", href: "/categories/accessoires" }
                ].map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="text-lg font-bold text-foreground mb-6">Kundenservice</h4>
              <ul className="space-y-3">
                {[
                  "Versand & Rückgabe",
                  "Größentabelle",
                  "FAQ",
                  "Kontakt",
                  "Garantie",
                  "Datenschutz"
                ].map((item) => (
                  <li key={item}>
                    <a 
                      href="#"
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold text-foreground mb-6">Kontakt</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-violet-500/20 to-purple-500/20 flex items-center justify-center mt-1">
                    <MapPin className="w-4 h-4 text-violet-400" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Anime Street 123<br />
                      12345 Otaku City<br />
                      Deutschland
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-blue-400" />
                  </div>
                  <p className="text-sm text-muted-foreground">+49 123 456 7890</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-green-400" />
                  </div>
                  <p className="text-sm text-muted-foreground">info@animeseason.de</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="border-t border-white/10 pt-12 mb-12">
            <div className="max-w-2xl mx-auto text-center">
              <h4 className="text-2xl font-bold text-gradient mb-4">
                Bleib auf dem Laufenden
              </h4>
              <p className="text-muted-foreground mb-6">
                Erhalte exklusive Angebote, neue Produktankündigungen und Anime-News direkt in dein Postfach
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Deine E-Mail-Adresse"
                  className="modern-input flex-1 text-center sm:text-left"
                />
                <button className="modern-button text-white px-8 py-4 whitespace-nowrap">
                  Abonnieren
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© 2024 AnimeSeason. Alle Rechte vorbehalten.</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>für die Anime-Community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
