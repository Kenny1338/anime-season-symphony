import { Mail, Gift, Star, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-full blur-3xl floating-element"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl floating-element"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Newsletter Card */}
          <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-full blur-2xl"></div>

            {/* Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full border border-white/10 mb-6">
                <Gift className="w-4 h-4 text-violet-400" />
                <span className="text-sm font-medium text-violet-300">Exklusive Vorteile</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
                Bleib auf dem Laufenden
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Erhalte exklusive Angebote, frühen Zugang zu neuen Produkten und die neuesten Anime-News direkt in dein Postfach
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  icon: Gift,
                  title: "15% Willkommensrabatt",
                  description: "Sofort nach der Anmeldung",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: Star,
                  title: "Früher Zugang",
                  description: "Zu limitierten Editionen",
                  color: "from-yellow-500 to-orange-500"
                },
                {
                  icon: Zap,
                  title: "Exklusive Deals",
                  description: "Nur für Newsletter-Abonnenten",
                  color: "from-purple-500 to-violet-500"
                }
              ].map((benefit, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Newsletter Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground/60 w-5 h-5" />
                  <Input
                    type="email"
                    placeholder="Deine E-Mail-Adresse"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="modern-input pl-12 pr-4 py-4 text-center sm:text-left"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="modern-button text-white px-8 py-4 group"
                  disabled={isSubscribed}
                >
                  {isSubscribed ? (
                    <>
                      <Star className="w-5 h-5 mr-2" />
                      Angemeldet!
                    </>
                  ) : (
                    <>
                      Anmelden
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Keine Sorge, wir spammen nicht. Du kannst dich jederzeit abmelden.
              </p>
            </form>

            {/* Success Message */}
            {isSubscribed && (
              <div className="mt-6 p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl border border-green-500/30 animate-slide-up">
                <p className="text-green-400 font-medium">
                  🎉 Willkommen! Prüfe deine E-Mails für deinen 15% Rabattcode.
                </p>
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { label: "Newsletter-Abonnenten", value: "25K+" },
              { label: "Durchschnittliche Ersparnis", value: "€45" },
              { label: "Exklusive Angebote/Monat", value: "12+" },
              { label: "Zufriedenheitsrate", value: "98%" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
