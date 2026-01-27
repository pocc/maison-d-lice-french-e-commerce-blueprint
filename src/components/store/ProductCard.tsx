import React, { type Ref } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCartStore } from '@/lib/store';
import type { Product } from '@shared/types';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
}

export const ProductCard = React.forwardRef((props: ProductCardProps, ref: Ref<HTMLDivElement>) => {
  const { product, onViewDetails } = props;
  const addItem = useCartStore((s) => s.addItem);
  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addItem(product);
    toast.success(`${product.name} ajouté au panier`);
  };
  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="group"
    >
      <Card className="overflow-hidden border-stone-200 bg-white/50 backdrop-blur-sm transition-shadow hover:shadow-xl">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
          <Badge className="absolute left-3 top-3 bg-merlot text-white border-none font-serif">
            {product.category}
          </Badge>
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 px-3 opacity-0 translate-y-4 transition-all group-hover:opacity-100 group-hover:translate-y-0">
            <Button
              size="sm"
              variant="secondary"
              className="bg-white/90 backdrop-blur"
              onClick={() => onViewDetails(product)}
            >
              Détails
            </Button>
            <Button
              size="sm"
              className="bg-merlot hover:bg-merlot/90"
              onClick={handleAdd}
            >
              <ShoppingBag className="mr-2 h-4 w-4" /> Panier
            </Button>
          </div>
        </div>
        <CardContent className="p-4">
          <h3 className="font-display text-xl font-bold text-foreground line-clamp-1">{product.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground line-clamp-2 italic">{product.description}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t border-stone-100 bg-stone-50/50 p-4">
          <span className="font-serif text-lg font-bold text-merlot">{product.price.toFixed(2)}€</span>
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Artisanat Français</span>
        </CardFooter>
      </Card>
    </motion.div>
  );
});

ProductCard.displayName = 'ProductCard';