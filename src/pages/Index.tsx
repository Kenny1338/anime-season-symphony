
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SeasonCountdown from '@/components/SeasonCountdown';
import FunctionalFeaturedAnime from '@/components/FunctionalFeaturedAnime';
import FunctionalProductGrid from '@/components/FunctionalProductGrid';
import TrendingSection from '@/components/TrendingSection';
import FunctionalNewsletterSection from '@/components/FunctionalNewsletterSection';
import AIChat from '@/components/AIChat';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TrendingSection />
      <SeasonCountdown />
      <FunctionalFeaturedAnime />
      <FunctionalProductGrid />
      <FunctionalNewsletterSection />
      <Footer />
      <AIChat />
    </div>
  );
};

export default Index;
