// interfaces/index.ts
export type PropertyProps = {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;       // kept as string to match your sample values like "3"
    shower: string;
    occupants: string; // values like "4-6"
  };
  image: string;
  discount: string;    // empty string when no discount, or "30" etc.
};