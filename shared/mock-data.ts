import type { Product } from './types';
export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'w1',
    name: 'Château Margaux 2015',
    price: 850,
    category: 'Vin',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&auto=format&fit=crop',
    description: 'A legendary Premier Cru Classé from the Margaux appellation. Complex and elegant.',
    pairing: 'Ideal with roast lamb or mature Brie.'
  },
  {
    id: 'w2',
    name: 'Bordeaux Supérieur',
    price: 45,
    category: 'Vin',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&auto=format&fit=crop',
    description: 'Deep ruby color with notes of blackcurrant and subtle oak.',
    pairing: 'Pairs perfectly with beef tartare.'
  },
  {
    id: 'c1',
    name: 'Camembert de Normandie',
    price: 18,
    category: 'Fromage',
    image: 'https://images.unsplash.com/photo-1634487359989-3e90c9432133?q=80&w=800&auto=format&fit=crop',
    description: 'Artisanal raw milk Camembert, aged to perfection.',
    pairing: 'Best enjoyed with a crisp baguette and cider.'
  },
  {
    id: 'c2',
    name: 'Roquefort Papillon',
    price: 24,
    category: 'Fromage',
    image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=800&auto=format&fit=crop',
    description: 'The king of blue cheeses, aged in the natural Combalou caves.',
    pairing: 'Try it with a sweet Sauternes wine.'
  },
  {
    id: 'b1',
    name: 'Baguette Tradition',
    price: 4.5,
    category: 'Boulangerie',
    image: 'https://images.unsplash.com/photo-1597079910443-60c43fc4f729?q=80&w=800&auto=format&fit=crop',
    description: 'Crispy crust and airy interior, made using traditional methods.',
    pairing: 'The foundation for any French meal.'
  },
  {
    id: 'b2',
    name: 'Pain au Chocolat',
    price: 3.5,
    category: 'Boulangerie',
    image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=800&auto=format&fit=crop',
    description: 'Buttery, flaky pastry with two bars of dark chocolate.',
    pairing: 'Essential with morning café au lait.'
  },
  {
    id: 'w3',
    name: 'Sancerre Blanc',
    price: 55,
    category: 'Vin',
    image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=800&auto=format&fit=crop',
    description: 'Fresh, mineral Sauvignon Blanc from the Loire Valley.',
    pairing: 'The ultimate match for goat cheese.'
  },
  {
    id: 'c3',
    name: 'Comté Réserve (24m)',
    price: 32,
    category: 'Fromage',
    image: 'https://images.unsplash.com/photo-1552767059-ce182ead6c1b?q=80&w=800&auto=format&fit=crop',
    description: 'Nutty and crystalline, aged for 24 months in Jura mountains.',
    pairing: 'Exquisite with walnuts and Jura white wine.'
  },
  {
    id: 'b3',
    name: 'Macarons de Paris',
    price: 28,
    category: 'Boulangerie',
    image: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?q=80&w=800&auto=format&fit=crop',
    description: 'Box of 12 delicate almond meringue cookies.',
    pairing: 'Perfect for an afternoon tea or as a gift.'
  }
];