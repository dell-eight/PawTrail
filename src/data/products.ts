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
    name: "RoamSip Portable Pet Water Bottle + Travel Bowl",
    originalProductType: "2-in-1 portable pet water bottle with travel bowl",
    category: "Pet hydration",
    bestFor: "Hydrate",
    shortDescription:
      "A walk-ready water bottle with an attached travel bowl for calm hydration breaks outside the home.",
    longDescription:
      "RoamSip helps pet parents carry water and offer quick drinks without packing a separate bowl. It is designed for everyday walks, park visits, errands, and travel days where simple hydration matters.",
    price: "₱599",
    mainBenefit:
      "Offers water breaks without carrying a separate bowl.",
    painPoint:
      "Your pet gets thirsty outside, but packing a bottle and separate bowl can feel messy or inconvenient.",
    sellingAngle: "Hydration made easy outside.",
    features: [
      "Built-in travel bowl for quick water breaks",
      "Compact carry shape for walks, parks, and car rides",
      "Simple hydration support for daily outdoor routines",
      "Easy to rinse after outdoor use",
    ],
    whatsIncluded: [
      "1 RoamSip portable pet water bottle",
      "Attached travel bowl area",
    ],
    careNotes: [
      "Rinse after outdoor use",
      "Clean with mild soap as needed",
      "Let dry fully before storing",
    ],
    idealCustomer:
      "Pet parents who take daily walks, park breaks, quick errands, or short outdoor trips with their pet.",
    productPageHeadline: "Water breaks without the extra bowl.",
    productPageSubheadline:
      "Keep your pet refreshed during walks, travel, and outdoor breaks with one simple bottle-and-bowl setup.",
    ctaText: "Add to Cart — Hydrate On the Go",
    trustElements: [
      "Built for water breaks",
      "Travel bowl included",
      "Made for daily walks",
    ],
    images: {
      primary: {
        src: "/images/products/walksip-portable-dog-water-bottle.svg",
        alt: "RoamSip portable pet water bottle with attached travel bowl",
      },
      gallery: [
        {
          src: "/images/products/walksip-bottle-detail.svg",
          alt: "RoamSip bottle detail showing the attached bowl area",
        },
        {
          src: "/images/products/walksip-outdoor-use.svg",
          alt: "RoamSip pet water bottle prepared for an outdoor walk",
        },
      ],
    },
  },
  {
    id: "foldbowl-collapsible-pet-travel-bowl",
    slug: "foldbowl-collapsible-pet-travel-bowl",
    name: "CleanPaws After-Walk Cleaning Wipes",
    originalProductType: "Pet cleaning product for after walks and travel",
    category: "Pet cleanup",
    bestFor: "Clean",
    shortDescription:
      "A compact cleanup essential for wiping away everyday outdoor mess after walks, parks, and travel stops.",
    longDescription:
      "CleanPaws gives pet parents a simple way to handle light after-walk mess before getting back in the car, stepping inside, or settling after a trip. It is positioned as a practical cleanup helper, not a medical or sanitizing product.",
    price: "₱299",
    mainBenefit:
      "Helps clean up everyday outdoor mess before it follows you home.",
    painPoint:
      "Paws, small spills, and travel stops can get messy when you do not have a simple cleanup option nearby.",
    sellingAngle: "A cleaner return after every outing.",
    features: [
      "Easy to keep in a walk bag, car kit, or travel pouch",
      "Useful after parks, errands, outdoor dining, and road trips",
      "Supports quick cleanup before entering the car or home",
      "Simple companion for daily walks and longer travel days",
    ],
    whatsIncluded: [
      "1 CleanPaws after-walk cleaning pack",
      "Travel-friendly cleanup wipes",
    ],
    careNotes: [
      "Close the pack after use",
      "Store in a cool, dry place",
      "Use for everyday cleanup only; confirm supplier instructions before launch",
    ],
    idealCustomer:
      "Pet parents who want a quick cleanup option after daily walks, parks, travel stops, car rides, or outdoor errands.",
    productPageHeadline: "Clean up before the mess comes home.",
    productPageSubheadline:
      "Keep a compact cleanup helper ready for paws, outdoor stops, and everyday travel mess.",
    ctaText: "Add to Cart — Keep Walks Cleaner",
    trustElements: [
      "After-walk cleanup",
      "Travel-bag friendly",
      "Everyday mess support",
    ],
    images: {
      primary: {
        src: "/images/products/foldbowl-collapsible-pet-travel-bowl.svg",
        alt: "CleanPaws after-walk cleaning wipes for pet travel cleanup",
      },
      gallery: [
        {
          src: "/images/products/foldbowl-folded-view.svg",
          alt: "CleanPaws compact pack ready for a walk bag",
        },
        {
          src: "/images/products/foldbowl-clipped-to-bag.svg",
          alt: "CleanPaws cleanup pack prepared for outdoor travel",
        },
      ],
    },
  },
  {
    id: "trailpack-2-in-1-pet-water-treat-bottle",
    slug: "trailpack-2-in-1-pet-water-treat-bottle",
    name: "RoamPack Pet Essentials Carry Pouch",
    originalProductType: "Pet essentials carrying product for walks and trips",
    category: "Pet carry",
    bestFor: "Carry",
    shortDescription:
      "A compact carry pouch for keeping walk and travel essentials organized instead of scattered through your bag.",
    longDescription:
      "RoamPack helps pet parents keep small outing essentials together, from cleanup items to lightweight accessories. It is designed for daily walks, car rides, park visits, and travel days when a simpler carry setup matters.",
    price: "₱649",
    mainBenefit:
      "Keeps pet outing essentials organized in one easy-to-grab pouch.",
    painPoint:
      "Loose pet items can scatter across bags, cars, and leash setups when you are trying to leave quickly.",
    sellingAngle: "Everything small, together.",
    features: [
      "Compact pouch format for daily walks and trips",
      "Helps group small accessories and cleanup items",
      "Easy to move between leash area, bag, and car",
      "Supports a calmer grab-and-go routine",
    ],
    whatsIncluded: [
      "1 RoamPack pet essentials carry pouch",
      "Compact storage space for small walk and travel items",
    ],
    careNotes: [
      "Empty after outings",
      "Wipe clean as needed",
      "Let dry fully before storing with other essentials",
    ],
    idealCustomer:
      "Pet parents who want a tidy place for small walk, park, car, and travel essentials.",
    productPageHeadline: "A calmer way to carry the small stuff.",
    productPageSubheadline:
      "Keep the pieces you reach for most in one compact pouch before heading out.",
    ctaText: "Add to Cart — Carry Smarter",
    trustElements: [
      "Organized carry",
      "Walk-bag friendly",
      "Good for longer outings",
    ],
    images: {
      primary: {
        src: "/images/products/trailpack-2-in-1-pet-water-treat-bottle.svg",
        alt: "RoamPack pet essentials carry pouch for walks and trips",
      },
      gallery: [
        {
          src: "/images/products/trailpack-compartments.svg",
          alt: "RoamPack pouch detail showing organized space for small essentials",
        },
        {
          src: "/images/products/trailpack-travel-use.svg",
          alt: "RoamPack carry pouch prepared for a pet travel day",
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
