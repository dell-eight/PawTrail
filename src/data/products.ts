export type ProductImage = {
  src: string;
  alt: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  originalProductType: string;
  category: string;
  bestFor: string;
  shortDescription: string;
  longDescription: string;
  price: string;
  compareAtPrice?: string;
  mainBenefit: string;
  painPoint: string;
  sellingAngle: string;
  features: string[];
  whatsIncluded: string[];
  careNotes: string[];
  idealCustomer: string;
  productPageHeadline: string;
  productPageSubheadline: string;
  ctaText: string;
  trustElements: string[];
  images: {
    primary: ProductImage;
    gallery: ProductImage[];
  };
};

export const products: Product[] = [
  {
    id: "walksip-portable-dog-water-bottle",
    slug: "walksip-portable-dog-water-bottle",
    name: "WalkSip Portable Dog Water Bottle",
    originalProductType: "Portable Dog Water Bottle with Built-In Bowl",
    category: "Pet hydration",
    bestFor: "Best for daily walks",
    shortDescription:
      "A travel-friendly water bottle with a built-in drinking bowl for easy hydration during walks, parks, and car rides.",
    longDescription:
      "WalkSip helps pet parents carry water and offer quick drinks without packing a separate bowl. It is designed for everyday walks, park visits, and short trips where simple hydration matters.",
    price: "₱599",
    mainBenefit:
      "Gives your dog water anywhere without carrying a separate bowl.",
    painPoint:
      "Your pet gets thirsty outside, but carrying a bottle and bowl can feel messy or inconvenient.",
    sellingAngle: "Hydration made easy anywhere.",
    features: [
      "Built-in drinking bowl for quick water breaks",
      "Portable shape for walks, parks, and car rides",
      "Easy-to-carry design for daily outdoor routines",
      "Simple option for keeping hydration close by",
    ],
    whatsIncluded: [
      "1 WalkSip portable dog water bottle",
      "Built-in drinking bowl area",
    ],
    careNotes: [
      "Rinse after outdoor use",
      "Clean with mild soap as needed",
      "Let dry fully before storing",
    ],
    idealCustomer:
      "Dog owners who take daily walks, park breaks, quick errands, or short outdoor trips with their pet.",
    productPageHeadline: "Hydration made easy anywhere.",
    productPageSubheadline:
      "Keep your dog refreshed during walks, travel, and outdoor breaks with one simple bottle.",
    ctaText: "Add to Cart — Keep My Dog Hydrated",
    trustElements: [
      "Travel-friendly hydration",
      "No separate bowl needed",
      "Made for everyday walks",
    ],
    images: {
      primary: {
        src: "/images/products/walksip-portable-dog-water-bottle.svg",
        alt: "WalkSip portable dog water bottle with built-in drinking bowl",
      },
      gallery: [
        {
          src: "/images/products/walksip-bottle-detail.svg",
          alt: "WalkSip bottle detail showing the built-in bowl area",
        },
        {
          src: "/images/products/walksip-outdoor-use.svg",
          alt: "WalkSip dog water bottle prepared for an outdoor walk",
        },
      ],
    },
  },
  {
    id: "trailpack-2-in-1-pet-water-treat-bottle",
    slug: "trailpack-2-in-1-pet-water-treat-bottle",
    name: "TrailPack 2-in-1 Pet Water & Treat Bottle",
    originalProductType: "2-in-1 Water Bottle + Food/Treat Container",
    category: "Pet travel storage",
    bestFor: "Best for longer trips",
    shortDescription:
      "A compact travel bottle that carries both water and snacks for longer walks, road trips, and weekend outings.",
    longDescription:
      "TrailPack combines water and treat storage in one convenient travel bottle, helping pet parents stay prepared without packing multiple small containers.",
    price: "₱699",
    mainBenefit:
      "Combines water and treats in one convenient travel container.",
    painPoint:
      "Longer outings often require both water and snacks, which can clutter your bag or leash setup.",
    sellingAngle: "Water and treats in one travel bottle.",
    features: [
      "Separate space for water and treats",
      "Compact carry format for longer walks and road trips",
      "Helps reduce extra containers in your travel kit",
      "Useful for parks, errands, and weekend outings",
    ],
    whatsIncluded: [
      "1 TrailPack 2-in-1 pet water and treat bottle",
      "Separate storage areas for water and small treats",
    ],
    careNotes: [
      "Empty food or treats after outings",
      "Rinse water-contact areas after use",
      "Let all parts dry before storing",
    ],
    idealCustomer:
      "Pet owners who take longer walks, road trips, park days, or weekend outings and want water and snacks in one place.",
    productPageHeadline: "Water and treats in one travel bottle.",
    productPageSubheadline:
      "Stay prepared for longer walks, car rides, and outdoor moments with one compact pet travel essential.",
    ctaText: "Add to Cart — Pack Smarter",
    trustElements: [
      "Two essentials in one",
      "Easy travel packing",
      "Good for longer outings",
    ],
    images: {
      primary: {
        src: "/images/products/trailpack-2-in-1-pet-water-treat-bottle.svg",
        alt: "TrailPack 2-in-1 pet water and treat bottle for longer outings",
      },
      gallery: [
        {
          src: "/images/products/trailpack-compartments.svg",
          alt: "TrailPack detail showing separate water and treat compartments",
        },
        {
          src: "/images/products/trailpack-travel-use.svg",
          alt: "TrailPack bottle packed for a pet travel day",
        },
      ],
    },
  },
  {
    id: "foldbowl-collapsible-pet-travel-bowl",
    slug: "foldbowl-collapsible-pet-travel-bowl",
    name: "FoldBowl Collapsible Pet Travel Bowl",
    originalProductType: "Collapsible Silicone Travel Bowl",
    category: "Pet travel bowl",
    bestFor: "Best budget add-on",
    shortDescription:
      "A lightweight foldable bowl for food or water that clips to your bag, leash, or travel kit.",
    longDescription:
      "FoldBowl gives pets a simple place for food or water while staying compact between uses. It is a practical add-on for walks, parks, car rides, and travel bags.",
    price: "₱199",
    mainBenefit:
      "Gives your pet a bowl anywhere without taking up space.",
    painPoint:
      "Traditional bowls take up room, and improvised bowls can be inconvenient when you are away from home.",
    sellingAngle: "A bowl that fits in your pocket.",
    features: [
      "Collapsible shape for compact storage",
      "Works for food or water breaks",
      "Clips to a bag, leash, or travel kit",
      "Lightweight backup bowl for outdoor routines",
    ],
    whatsIncluded: [
      "1 FoldBowl collapsible pet travel bowl",
      "Compact bowl for food or water breaks",
    ],
    careNotes: [
      "Rinse after food or water use",
      "Clean with mild soap as needed",
      "Dry before folding into a bag or kit",
    ],
    idealCustomer:
      "Pet owners who want a lightweight backup bowl for quick walks, travel bags, park visits, or budget-friendly outdoor prep.",
    productPageHeadline: "A pet bowl that fits in your pocket.",
    productPageSubheadline:
      "Lightweight, foldable, and easy to bring for walks, parks, cafes, and travel days.",
    ctaText: "Add to Cart — Bring a Bowl Anywhere",
    trustElements: [
      "Compact carry",
      "Food or water ready",
      "Easy travel backup",
    ],
    images: {
      primary: {
        src: "/images/products/foldbowl-collapsible-pet-travel-bowl.svg",
        alt: "FoldBowl collapsible pet travel bowl for food or water breaks",
      },
      gallery: [
        {
          src: "/images/products/foldbowl-folded-view.svg",
          alt: "FoldBowl travel bowl shown in its compact folded shape",
        },
        {
          src: "/images/products/foldbowl-clipped-to-bag.svg",
          alt: "FoldBowl clipped to a bag for walks and travel days",
        },
      ],
    },
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductSlugs() {
  return products.map((product) => product.slug);
}
