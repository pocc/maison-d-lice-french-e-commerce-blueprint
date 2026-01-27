import React from 'react';
import { ShoppingBag, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useCartStore } from '@/lib/store';
interface NavbarProps {
  onCartOpen: () => void;
}
export function Navbar({ onCartOpen }: NavbarProps) {
  const items = useCartStore((s) => s.items);
  const count = items.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-stone-200 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2">
              <span className="font-display text-2xl font-black tracking-tighter text-merlot">
                MAISON <span className="text-navy">DÉLICE</span>
              </span>
            </a>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
              <a href="#" className="hover:text-merlot transition-colors">Vins</a>
              <a href="#" className="hover:text-merlot transition-colors">Fromages</a>
              <a href="#" className="hover:text-merlot transition-colors">Boulangerie</a>
              <a href="#" className="hover:text-merlot transition-colors">Cadeaux</a>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center mr-2">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5 text-muted-foreground" />
              </Button>
              <ThemeToggle className="static" />
            </div>
            <Button
              variant="outline"
              size="lg"
              className="relative h-11 border-merlot/20 bg-merlot/5 hover:bg-merlot/10"
              onClick={onCartOpen}
            >
              <ShoppingBag className="h-5 w-5 text-merlot mr-2" />
              <span className="font-serif font-bold text-merlot">Panier</span>
              {count > 0 && (
                <Badge 
                  className="absolute -top-2 -right-2 h-6 w-6 flex items-center justify-center p-0 bg-merlot text-white border-2 border-white"
                >
                  {count}
                </Badge>
              )}
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}