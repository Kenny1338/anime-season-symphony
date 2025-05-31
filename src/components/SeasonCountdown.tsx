
import { useState, useEffect } from 'react';
import { Calendar, Clock, Star, Zap } from 'lucide-react';

const SeasonCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Next season start (Summer 2025)
    const nextSeason = new Date('2025-07-01T00:00:00');
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = nextSeason.getTime() - now;
      
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl floating-element"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-pink-500/10 to-rose-500/10 rounded-full blur-3xl floating-element"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full border border-white/10 mb-6">
            <Star className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium text-violet-300">Nächste Season</span>
            <Zap className="w-4 h-4 text-violet-400" />
          </div>
          <h2 className="section-title">
            Summer Season 2025
          </h2>
          <p className="section-subtitle">
            Bereite dich auf die heißesten neuen Anime vor und sichere dir exklusive Merchandise-Artikel
          </p>
        </div>

        {/* Countdown */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-12">
          {[
            { label: 'Tage', value: timeLeft.days, icon: Calendar },
            { label: 'Stunden', value: timeLeft.hours, icon: Clock },
            { label: 'Minuten', value: timeLeft.minutes, icon: Clock },
            { label: 'Sekunden', value: timeLeft.seconds, icon: Clock }
          ].map((item, index) => (
            <div key={item.label} className="glass-card p-6 md:p-8 group hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-center space-y-3">
                <div className="p-3 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-2xl group-hover:from-violet-500/30 group-hover:to-purple-500/30 transition-all">
                  <item.icon className="w-6 h-6 text-violet-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gradient font-mono">
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="modern-button text-white font-semibold">
            Frühe Vorbestellungen
          </button>
          <button className="px-8 py-4 rounded-2xl font-semibold border border-white/20 text-foreground hover:bg-white/5 transition-all duration-300 backdrop-blur-xl">
            Season Preview
          </button>
        </div>

        {/* Featured Upcoming Anime */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Demon Slayer S4",
              studio: "Ufotable",
              image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
              title: "Attack on Titan Final",
              studio: "WIT Studio",
              image: "https://images.pexels.com/photos/8088495/pexels-photo-8088495.jpeg?auto=compress&cs=tinysrgb&w=400"
            },
            {
              title: "Jujutsu Kaisen S3",
              studio: "MAPPA",
              image: "https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=400"
            }
          ].map((anime, index) => (
            <div key={index} className="glass-card p-6 group hover:scale-105 transition-all duration-300">
              <div className="aspect-video rounded-2xl overflow-hidden mb-4 bg-gradient-to-br from-violet-500/20 to-purple-500/20">
                <img 
                  src={anime.image} 
                  alt={anime.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-lg font-bold text-gradient mb-1">{anime.title}</h3>
              <p className="text-sm text-muted-foreground">{anime.studio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeasonCountdown;
