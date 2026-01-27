import React from 'react';
import { ShoppingBag, Minus, Plus, Trash2, X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { useCartStore } from '@/lib/store';
interface CartSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
export function CartSheet({ open, onOpenChange }: CartSheetProps) {
  const items = useCartStore((s) => s.items);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const removeItem = useCartStore((s) => s.removeItem);
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex w-full flex-col sm:max-w-md bg-parchment/30 backdrop-blur-xl border-l-stone-200">
        <SheetHeader className="px-1">
          <SheetTitle className="font-display text-2xl flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-merlot" /> Votre Panier
          </SheetTitle>
        </SheetHeader>
        <div className="flex-1 overflow-hidden py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center space-y-4 text-center">
              <div className="rounded-full bg-stone-100 p-6">
                <ShoppingBag className="h-12 w-12 text-stone-300" />
              </div>
              <h3 className="font-display text-xl font-medium">Votre panier est vide</h3>
              <p className="text-sm text-muted-foreground max-w-[200px]">
                Découvrez nos délices artisanaux pour commencer vos achats.
              </p>
              <Button variant="outline" onClick={() => onOpenChange(false)}>
                Retour à la boutique
              </Button>
            </div>
          ) : (
            <ScrollArea className="h-full pr-4">
              <div className="space-y-6">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-stone-200 bg-stone-50">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <div className="flex justify-between font-serif text-base font-medium text-foreground">
                          <h4 className="line-clamp-1">{item.name}</h4>
                          <p className="ml-4">{(item.price * item.quantity).toFixed(2)}€</p>
                        </div>
                        <p className="mt-1 text-sm text-muted-foreground">{item.category}</p>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center rounded-md border border-stone-200 bg-white">
                          <button
                            className="p-1 hover:bg-stone-50 disabled:opacity-50"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            className="p-1 hover:bg-stone-50"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <button
                          type="button"
                          className="font-medium text-merlot hover:text-merlot/80 flex items-center gap-1"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          )}
        </div>
        {items.length > 0 && (
          <div className="space-y-4 pt-6">
            <Separator />
            <div className="space-y-1.5">
              <div className="flex justify-between text-base font-medium">
                <span>Sous-total</span>
                <span>{subtotal.toFixed(2)}€</span>
              </div>
              <p className="text-xs text-muted-foreground italic">
                TVA incluse. Frais de port calculés à l'étape suivante.
              </p>
            </div>
            <SheetFooter>
              <Button className="w-full bg-merlot hover:bg-merlot/90 h-12 text-lg font-serif">
                Passer à la Caisse
              </Button>
            </SheetFooter>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}