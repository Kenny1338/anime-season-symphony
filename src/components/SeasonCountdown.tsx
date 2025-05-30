
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
    <div style={{ background: '#a58973' }} className="text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Aktuelle Season: {current.name}</h2>
          <p className="text-white/80">Limitierte Kollektionen nur für diese Season verfügbar!</p>
        </div>
        
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white max-w-2xl mx-auto">
          <div className="p-6 text-center">
            <h3 className="text-lg font-semibold mb-4">Nächste Season: {next.name}</h3>
            <div className="grid grid-cols-4 gap-4">
              <div style={{ backgroundColor: '#c1966c' }} className="rounded-lg p-3">
                <div className="text-2xl font-bold">{timeLeft.days}</div>
                <div className="text-sm opacity-80">Tage</div>
              </div>
              <div style={{ backgroundColor: '#c1966c' }} className="rounded-lg p-3">
                <div className="text-2xl font-bold">{timeLeft.hours}</div>
                <div className="text-sm opacity-80">Stunden</div>
              </div>
              <div style={{ backgroundColor: '#c1966c' }} className="rounded-lg p-3">
                <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                <div className="text-sm opacity-80">Minuten</div>
              </div>
              <div style={{ backgroundColor: '#c1966c' }} className="rounded-lg p-3">
                <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                <div className="text-sm opacity-80">Sekunden</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SeasonCountdown;
