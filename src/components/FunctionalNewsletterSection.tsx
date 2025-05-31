
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Gift, Sparkles } from 'lucide-react';
import { useNewsletter } from '@/hooks/useNewsletter';

const FunctionalNewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const { subscribe, isSubscribing } = useNewsletter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      subscribe({ email, name: name || undefined });
      setEmail('');
      setName('');
    }
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-purple-900/20 to-indigo-900/20" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl floating-element" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl floating-element" style={{ animationDelay: '2s' }} />
      
      <div className="container mx-auto relative z-10">
        <Card className="glass-card max-w-4xl mx-auto">
          <CardContent className="p-12">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Mail className="w-8 h-8 text-violet-400" />
                <Sparkles className="w-6 h-6 text-purple-400" />
                <Gift className="w-8 h-8 text-indigo-400" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-6">
                Bleib auf dem Laufenden
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Erhalte exklusive Angebote, limitierte Editionen und sei der Erste, der über neue 
                Anime-Merchandise und saisonale Kollektionen erfährt.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <div className="space-y-3">
                <Input
                  type="text"
                  placeholder="Dein Name (optional)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="modern-input h-12 text-center"
                />
                <Input
                  type="email"
                  placeholder="Deine E-Mail-Adresse"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="modern-input h-12 text-center"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full modern-button h-12 text-lg"
                disabled={isSubscribing}
              >
                {isSubscribing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                    Anmeldung läuft...
                  </>
                ) : (
                  <>
                    <Mail className="w-5 h-5 mr-2" />
                    Kostenlos anmelden
                  </>
                )}
              </Button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                🎁 Als Willkommensgeschenk erhältst du 10% Rabatt auf deine erste Bestellung
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-violet-500/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Exklusive Angebote</h3>
                <p className="text-sm text-muted-foreground">
                  Erhalte Zugang zu Insider-Deals und limitierten Editionen
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Anime News</h3>
                <p className="text-sm text-muted-foreground">
                  Bleib auf dem neuesten Stand der Anime-Welt
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-500/20 flex items-center justify-center">
                  <Gift className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Früher Zugang</h3>
                <p className="text-sm text-muted-foreground">
                  Sichere dir neue Produkte vor allen anderen
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FunctionalNewsletterSection;
