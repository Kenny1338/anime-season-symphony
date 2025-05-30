
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const SeasonCountdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Define season dates
  const seasons = [
    { name: 'Spring 2025', start: new Date('2025-04-01'), end: new Date('2025-06-30') },
    { name: 'Summer 2025', start: new Date('2025-07-01'), end: new Date('2025-09-30') },
    { name: 'Fall 2025', start: new Date('2025-10-01'), end: new Date('2025-12-31') },
    { name: 'Winter 2026', start: new Date('2026-01-01'), end: new Date('2026-03-31') }
  ];

  const getCurrentAndNextSeason = () => {
    const now = new Date();
    const currentSeason = seasons.find(season => now >= season.start && now <= season.end);
    
    if (currentSeason) {
      return {
        current: currentSeason,
        next: seasons[seasons.findIndex(s => s === currentSeason) + 1] || seasons[0]
      };
    }
    
    // If no current season, find the next upcoming one
    const nextSeason = seasons.find(season => now < season.start) || seasons[0];
    return {
      current: { name: 'Winter 2025', start: new Date('2025-01-01'), end: new Date('2025-03-31') },
      next: nextSeason
    };
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const { next } = getCurrentAndNextSeason();
      const now = new Date().getTime();
      const targetTime = next.start.getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const { current, next } = getCurrentAndNextSeason();

  return (
    <div className="bg-modern-gradient text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-500/20 to-pink-500/20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 animate-float">Aktuelle Season: {current.name}</h2>
          <p className="text-white/90 text-lg">Limitierte Kollektionen nur für diese Season verfügbar!</p>
        </div>
        
        <Card className="gradient-card border-white/20 text-white max-w-2xl mx-auto shadow-modern-xl">
          <div className="p-8 text-center">
            <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
              Nächste Season: {next.name}
            </h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-purple-gradient rounded-2xl p-4 shadow-glow animate-glow">
                <div className="text-3xl font-bold">{timeLeft.days}</div>
                <div className="text-sm opacity-90">Tage</div>
              </div>
              <div className="bg-blue-gradient rounded-2xl p-4 shadow-glow animate-glow animation-delay-200">
                <div className="text-3xl font-bold">{timeLeft.hours}</div>
                <div className="text-sm opacity-90">Stunden</div>
              </div>
              <div className="bg-pink-gradient rounded-2xl p-4 shadow-glow animate-glow animation-delay-400">
                <div className="text-3xl font-bold">{timeLeft.minutes}</div>
                <div className="text-sm opacity-90">Minuten</div>
              </div>
              <div className="bg-modern-gradient rounded-2xl p-4 shadow-glow animate-glow animation-delay-600">
                <div className="text-3xl font-bold">{timeLeft.seconds}</div>
                <div className="text-sm opacity-90">Sekunden</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SeasonCountdown;
