import { ShoppingCart, Plus, Minus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { useState } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  anime: string;
}

const ShoppingCartSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Demon Slayer Tanjiro Kamado Figure',
      price: 49.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
      anime: 'Demon Slayer'
    },
    {
      id: '2',
      name: 'Attack on Titan Survey Corps Hoodie',
      price: 39.99,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
      anime: 'Attack on Titan'
    }
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="relative hover:glow-effect transition-all duration-200">
          <ShoppingCart className="w-5 h-5" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center shadow-glow animate-pulse">
              {totalItems}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[400px] sm:w-[540px] p-0 glass-card border-white/20">
        <SheetHeader className="p-6 pb-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-b border-white/10">
          <SheetTitle className="flex items-center gap-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            <ShoppingCart className="w-5 h-5 text-primary" />
            Warenkorb ({totalItems} Artikel)
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto px-6 bg-gradient-to-b from-background/60 to-background/80">
            {cartItems.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingCart className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Dein Warenkorb ist leer</p>
              </div>
            ) : (
              <div className="space-y-4 py-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 glass-card border-white/20 rounded-xl hover:shadow-glow transition-all duration-300">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm line-clamp-2 text-foreground">{item.name}</h4>
                      <p className="text-xs text-primary font-medium bg-primary/10 px-2 py-0.5 rounded mt-1 inline-block">{item.anime}</p>
                      <p className="font-semibold text-primary bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">€{item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="h-6 w-6 p-0 hover:bg-red-500/20 hover:text-red-400 transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </Button>
                      <div className="flex items-center gap-1">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-6 w-6 p-0 border-white/20 hover:bg-purple-500/20 hover:border-purple-400/50"
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-6 w-6 p-0 border-white/20 hover:bg-purple-500/20 hover:border-purple-400/50"
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {cartItems.length > 0 && (
            <div className="border-t border-white/10 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm p-6 space-y-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span className="text-foreground">Gesamt:</span>
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">€{totalPrice.toFixed(2)}</span>
              </div>
              <Button className="w-full modern-button" size="lg">
                Zur Kasse
              </Button>
              <Button variant="outline" className="w-full border-white/20 hover:bg-white/10 transition-colors">
                Weiter einkaufen
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartSidebar;
