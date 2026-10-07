export type Colorway = { name: string; hex: string; accent: string };

export type Product = {
  id: string;
  name: string;
  type: "tee" | "jeans";
  price: number;
  tag?: string;
  detail: string;
  colors: Colorway[];
};

export const products: Product[] = [
  {
    id: "tee-oversized",
    name: "Oversized Tee",
    type: "tee",
    price: 48,
    tag: "Core",
    detail: "Premium fabric · Dense weave",
    colors: [
      { name: "Black", hex: "#0c0c0c", accent: "#e6e6e6" },
      { name: "Light Stone", hex: "#e9e4da", accent: "#111111" },
    ],
  },
  {
    id: "jeans-relaxed",
    name: "Relaxed Jeans",
    type: "jeans",
    price: 98,
    tag: "Core",
    detail: "14oz denim · Signature hardware",
    colors: [
      { name: "Washed Black", hex: "#1b1b1d", accent: "#9a9a9a" },
      { name: "Stone", hex: "#d9d3c7", accent: "#3a3a3a" },
    ],
  },
  {
    id: "tee-signature",
    name: "Signature Logo Tee",
    type: "tee",
    price: 56,
    tag: "New",
    detail: "Precision print · Metallic finish",
    colors: [
      { name: "Black", hex: "#0c0c0c", accent: "#d4d4d4" },
      { name: "Chrome", hex: "#c6c6c6", accent: "#0c0c0c" },
    ],
  },
  {
    id: "jeans-wide",
    name: "Wide Leg Jeans",
    type: "jeans",
    price: 104,
    tag: "New",
    detail: "Dropped rise · Reinforced seams",
    colors: [
      { name: "Ink", hex: "#121316", accent: "#8d8d94" },
      { name: "Ash", hex: "#8c8c8c", accent: "#111111" },
    ],
  },
  {
    id: "tee-boxy",
    name: "Boxy Tee",
    type: "tee",
    price: 52,
    detail: "Cropped length · Drop shoulder",
    colors: [
      { name: "Slate", hex: "#5a5c60", accent: "#f0f0f0" },
      { name: "Black", hex: "#0c0c0c", accent: "#e6e6e6" },
    ],
  },
  {
    id: "jeans-straight",
    name: "Straight Jeans",
    type: "jeans",
    price: 92,
    detail: "Classic cut · Woven patch",
    colors: [
      { name: "Charcoal", hex: "#2e2e31", accent: "#b0b0b0" },
      { name: "Bone", hex: "#e5e0d6", accent: "#444444" },
    ],
  },
  {
    id: "tee-heavy",
    name: "Heavyweight Tee",
    type: "tee",
    price: 58,
    detail: "280gsm cotton · Garment dyed",
    colors: [
      { name: "Stone", hex: "#d8d2c6", accent: "#111111" },
      { name: "Graphite", hex: "#2a2a2a", accent: "#e6e6e6" },
    ],
  },
  {
    id: "jeans-carpenter",
    name: "Carpenter Jeans",
    type: "jeans",
    price: 110,
    detail: "Utility pockets · Hammer loop",
    colors: [
      { name: "Black", hex: "#0f0f10", accent: "#c2c2c2" },
      { name: "Light Stone", hex: "#e2ddd2", accent: "#222222" },
    ],
  },
];
