
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const products = [
    {
      id: '1',
      name: 'Demon Slayer Tanjiro Kamado Figure',
      anime: 'Demon Slayer',
      price: 49.99,
      originalPrice: 59.99,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 156,
      isNew: true,
      isLimited: false
    },
    {
      id: '2',
      name: 'Attack on Titan Survey Corps Hoodie',
      anime: 'Attack on Titan',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 89,
      isNew: false,
      isLimited: true
    },
    {
      id: '3',
      name: 'One Piece Luffy Straw Hat',
      anime: 'One Piece',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 203,
      isNew: false,
      isLimited: false
    },
    {
      id: '4',
      name: 'Naruto Uzumaki Headband',
      anime: 'Naruto',
      price: 19.99,
      originalPrice: 24.99,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
      rating: 4.5,
      reviews: 127,
      isNew: true,
      isLimited: true
    },
    {
      id: '5',
      name: 'My Hero Academia All Might T-Shirt',
      anime: 'My Hero Academia',
      price: 19.99,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
      rating: 4.4,
      reviews: 78,
      isNew: false,
      isLimited: false
    },
    {
      id: '6',
      name: 'Dragon Ball Z Goku Training Weights',
      anime: 'Dragon Ball Z',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 312,
      isNew: true,
      isLimited: true
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Winter 2025 Kollektion</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Entdecke exklusive Merchandise-Artikel zu den beliebtesten Anime der aktuellen Season.
            Nur solange die Season läuft verfügbar!
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
