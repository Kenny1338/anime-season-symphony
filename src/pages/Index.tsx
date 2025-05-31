import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SeasonCountdown from '@/components/SeasonCountdown';
import FeaturedAnime from '@/components/FeaturedAnime';
import ProductGrid from '@/components/ProductGrid';
import TrendingSection from '@/components/TrendingSection';
import NewsletterSection from '@/components/NewsletterSection';
import AIChat from '@/components/AIChat';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <TrendingSection />
      <SeasonCountdown />
      <FeaturedAnime />
      <ProductGrid />
      <NewsletterSection />
      <Footer />
      <AIChat />
    </div>
  );
};

export default Index;
