
import Header from '@/components/Header';
import SeasonCountdown from '@/components/SeasonCountdown';
import FeaturedAnime from '@/components/FeaturedAnime';
import ProductGrid from '@/components/ProductGrid';
import AIChat from '@/components/AIChat';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SeasonCountdown />
      <FeaturedAnime />
      <ProductGrid />
      <Footer />
      <AIChat />
    </div>
  );
};

export default Index;
