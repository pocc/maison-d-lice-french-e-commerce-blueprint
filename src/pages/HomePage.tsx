import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Filter, Wine, Croissant, Pizza } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/store/Navbar';
import { ProductCard } from '@/components/store/ProductCard';
import { FilterSidebar } from '@/components/store/FilterSidebar';
import { CartSheet } from '@/components/store/CartSheet';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { MOCK_PRODUCTS } from '@shared/mock-data';
import { Product } from '@shared/types';
import { Toaster } from 'sonner';
export function HomePage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('newest');
  const categories = useMemo(() => {
    return Array.from(new Set(MOCK_PRODUCTS.map((p) => p.category)));
  }, []);
  const filteredProducts = useMemo(() => {
    let result = [...MOCK_PRODUCTS];
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }
    return result;
  }, [selectedCategories, sortBy]);
  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };
  return (
    <div className="min-h-screen bg-parchment/10">
      <Navbar onCartOpen={() => setIsCartOpen(true)} />
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2000&auto=format&fit=crop"
            alt="French Vineyard"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 max-w-4xl px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-serif text-lg tracking-[0.3em] uppercase mb-4 block">L'Art de Vivre</span>
            <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 leading-none">
              Maison <span className="italic text-parchment">Délice</span>
            </h1>
            <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto text-parchment/90">
              Goutez l'excellence du terroir français. Vins d'exception, fromages affinés et boulangerie artisanale.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-merlot hover:bg-merlot/90 text-lg px-8 py-6 font-serif h-auto">
                Découvrir la Collection <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white/80 bg-white/5 hover:bg-white/20 drop-shadow-xl shadow-black/30 text-lg px-8 py-6 h-auto">
                Nos Producteurs
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Desktop Filters */}
          <aside className="hidden md:block w-64 flex-shrink-0">
            <FilterSidebar
              categories={categories}
              selectedCategories={selectedCategories}
              onCategoryChange={toggleCategory}
              sortBy={sortBy}
              onSortChange={setSortBy}
            />
          </aside>
          {/* Mobile Filter Trigger */}
          <div className="md:hidden mb-8">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full h-12 flex items-center justify-center gap-2">
                  <Filter className="h-4 w-4" /> Filtres & Tri
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <SheetHeader>
                  <SheetTitle className="font-display text-2xl">Affiner la sélection</SheetTitle>
                </SheetHeader>
                <div className="py-8">
                  <FilterSidebar
                    categories={categories}
                    selectedCategories={selectedCategories}
                    onCategoryChange={toggleCategory}
                    sortBy={sortBy}
                    onSortChange={setSortBy}
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>
          {/* Product Grid */}
          <main className="flex-1">
            <div className="mb-12 flex items-center justify-between">
              <div>
                <h2 className="font-display text-4xl font-bold">L'Étalage</h2>
                <p className="text-muted-foreground mt-2">
                  {filteredProducts.length} trésors trouvés dans nos régions.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}
              </AnimatePresence>
            </div>
            {filteredProducts.length === 0 && (
              <div className="text-center py-24 bg-stone-50 rounded-2xl border-2 border-dashed border-stone-200">
                <p className="text-xl font-display text-muted-foreground">Aucun délice ne correspond à vos critères.</p>
                <Button 
                  variant="link" 
                  className="mt-2 text-merlot"
                  onClick={() => {
                    setSelectedCategories([]);
                    setSortBy('newest');
                  }}
                >
                  Réinitialiser les filtres
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <span className="font-display text-3xl font-black tracking-tighter">MAISON DÉLICE</span>
            <p className="text-navy-foreground/80 leading-relaxed font-light">
              Ambassadeur de la gastronomie française depuis 1924. Nous sélectionnons le meilleur de nos terroirs pour votre plaisir.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-serif text-xl font-bold mb-6">Collections</h4>
            <ul className="space-y-3 text-navy-foreground/70">
              <li><a href="#" className="hover:text-white transition-colors">Vins de Bordeaux</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Fromages du Terroir</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pâtisseries Fines</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Coffrets Dégustation</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-serif text-xl font-bold mb-6">Newsletter</h4>
            <p className="text-navy-foreground/70 mb-4">Inscrivez-vous pour recevoir nos sélections saisonnières.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="bg-white/10 border border-white/20 rounded-md px-4 py-2 flex-1 focus:outline-none focus:ring-1 focus:ring-merlot"
              />
              <Button className="bg-merlot hover:bg-merlot/90">S'inscrire</Button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 pt-8 border-t border-white/10 text-center text-navy-foreground/50 text-sm">
          <p>© 2024 Maison Délice. Fait avec passion pour le go��t.</p>
        </div>
      </footer>
      <CartSheet open={isCartOpen} onOpenChange={setIsCartOpen} />
      <Toaster richColors position="top-center" />
    </div>
  );
}