import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Checkbox } from '@/components/ui/checkbox';
interface FilterSidebarProps {
  categories: string[];
  selectedCategories: string[];
  onCategoryChange: (category: string) => void;
  sortBy: string;
  onSortChange: (value: string) => void;
}
export function FilterSidebar({
  categories,
  selectedCategories,
  onCategoryChange,
  sortBy,
  onSortChange,
}: FilterSidebarProps) {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="font-display text-lg font-bold mb-4">Catégories</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`cat-${category}`}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => onCategoryChange(category)}
              />
              <Label
                htmlFor={`cat-${category}`}
                className="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>
      <Separator />
      <div>
        <h3 className="font-display text-lg font-bold mb-4">Trier par</h3>
        <RadioGroup value={sortBy} onValueChange={onSortChange}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="newest" id="newest" />
            <Label htmlFor="newest">Plus récent</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="price-asc" id="price-asc" />
            <Label htmlFor="price-asc">Prix croissant</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="price-desc" id="price-desc" />
            <Label htmlFor="price-desc">Prix décroissant</Label>
          </div>
        </RadioGroup>
      </div>
      <Separator />
      <div className="bg-merlot/5 p-4 rounded-lg border border-merlot/10">
        <p className="text-xs text-merlot font-serif italic text-center">
          "Le vin est de la lumière retenue par de l'eau."<br/>
          — Galilée
        </p>
      </div>
    </div>
  );
}