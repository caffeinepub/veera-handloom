export interface Product {
  id: string;
  name: string;
  collection: string;
  fabric: string;
  price: number;
  originalPrice?: number;
  description: string;
  details: string[];
  careInstructions: string;
  colors: string[];
  featured: boolean;
  gradient: string;
}

export const collections = [
  {
    id: "maheshwari-silk",
    name: "Maheshwari Silk Sarees",
    description:
      "Exquisite silk sarees woven with centuries-old Maheshwari tradition",
  },
  {
    id: "handloom-cotton",
    name: "Handloom Cotton Sarees",
    description:
      "Breathable, elegant cotton sarees perfect for everyday luxury",
  },
  {
    id: "festive",
    name: "Festive Saree Collection",
    description:
      "Resplendent sarees crafted for your most cherished celebrations",
  },
  {
    id: "bridal",
    name: "Bridal Maheshwari Sarees",
    description: "Heirloom-quality bridal sarees for your most sacred moments",
  },
  {
    id: "zari-border",
    name: "Traditional Zari Border Sarees",
    description: "Gold and silver zari borders handwoven by master craftsmen",
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Royal Maheshwari Silk Saree",
    collection: "Maheshwari Silk Sarees",
    fabric: "Silk",
    price: 18500,
    description:
      "A masterpiece of Maheshwari weaving art, this royal silk saree features intricate traditional motifs hand-woven by skilled artisans of Maheshwar. The lustrous silk drapes elegantly, making it perfect for weddings and grand celebrations.",
    details: [
      "Pure Maheshwari Silk",
      "5.5 meters with blouse piece",
      "Hand-woven by master artisans",
      "Traditional reversible weave",
      "Natural dyes",
    ],
    careInstructions:
      "Dry clean only. Store in a cotton muslin cloth. Avoid direct sunlight.",
    colors: ["Royal Blue", "Gold Border"],
    featured: true,
    gradient:
      "linear-gradient(135deg, oklch(0.30 0.12 260) 0%, oklch(0.20 0.08 260) 100%)",
  },
  {
    id: "2",
    name: "Pearl White Maheshwari",
    collection: "Maheshwari Silk Sarees",
    fabric: "Silk",
    price: 22000,
    originalPrice: 25000,
    description:
      "Pure ivory silk with delicate gold zari threadwork borders. This pearl-white Maheshwari saree embodies timeless grace and is a coveted piece for those who appreciate understated luxury.",
    details: [
      "Pure Maheshwari Silk",
      "6 meters with blouse piece",
      "Gold zari border",
      "Reversible weave pattern",
      "Heritage design",
    ],
    careInstructions:
      "Dry clean only. Store in a cotton muslin cloth. Avoid direct sunlight.",
    colors: ["Pearl White", "Gold Zari"],
    featured: true,
    gradient:
      "linear-gradient(135deg, oklch(0.88 0.04 80) 0%, oklch(0.78 0.08 80) 100%)",
  },
  {
    id: "3",
    name: "Indigo Blue Handloom Cotton",
    collection: "Handloom Cotton Sarees",
    fabric: "Cotton",
    price: 4500,
    description:
      "Hand-spun and hand-woven indigo cotton saree with traditional striped patterns. Naturally dyed using ancient indigo dyeing techniques passed down through generations of Maheshwar artisans.",
    details: [
      "100% Handspun Cotton",
      "5.5 meters",
      "Natural indigo dye",
      "Traditional stripe weave",
      "Eco-friendly",
    ],
    careInstructions:
      "Hand wash in cold water. Dry in shade. Light iron on reverse side.",
    colors: ["Indigo Blue", "White Stripe"],
    featured: true,
    gradient:
      "linear-gradient(135deg, oklch(0.38 0.12 260) 0%, oklch(0.28 0.10 255) 100%)",
  },
  {
    id: "4",
    name: "Natural Cotton Stripe Saree",
    collection: "Handloom Cotton Sarees",
    fabric: "Cotton",
    price: 3800,
    description:
      "Woven on traditional pit looms, this natural cotton saree features earthy stripe patterns inspired by the banks of the Narmada river. Light, breathable, and effortlessly elegant.",
    details: [
      "Handloom Cotton",
      "5.5 meters",
      "Natural earth dyes",
      "Pit loom woven",
      "Soft texture",
    ],
    careInstructions:
      "Hand wash in cold water. Dry in shade. Iron while slightly damp.",
    colors: ["Earthy Brown", "Cream Stripe"],
    featured: false,
    gradient:
      "linear-gradient(135deg, oklch(0.65 0.08 65) 0%, oklch(0.55 0.07 60) 100%)",
  },
  {
    id: "5",
    name: "Crimson Festive Silk",
    collection: "Festive Saree Collection",
    fabric: "Silk",
    price: 28000,
    description:
      "Draped in the deep crimson of celebration, this festive silk saree features elaborate gold zari work throughout. Each thread tells a story of Maheshwar\u2019s 2,000-year textile heritage.",
    details: [
      "Pure Maheshwari Silk",
      "6 meters with blouse piece",
      "Heavy gold zari work",
      "Festival special design",
      "Heirloom quality",
    ],
    careInstructions:
      "Dry clean only. Store folded in muslin. Keep away from moisture.",
    colors: ["Deep Crimson", "Gold Zari"],
    featured: true,
    gradient:
      "linear-gradient(135deg, oklch(0.42 0.18 25) 0%, oklch(0.32 0.14 22) 100%)",
  },
  {
    id: "6",
    name: "Golden Festive Banarasi",
    collection: "Festive Saree Collection",
    fabric: "Silk",
    price: 35000,
    originalPrice: 38000,
    description:
      "Where Maheshwar meets Banarasi tradition - this extraordinary festive saree blends the finest Maheshwari silk with intricate Banarasi brocade work, creating a heritage piece of unmatched grandeur.",
    details: [
      "Maheshwari-Banarasi Blend Silk",
      "6.5 meters with blouse",
      "Real gold thread work",
      "Double weave technique",
      "Certificate of authenticity",
    ],
    careInstructions:
      "Dry clean only. Store in acid-free tissue. Never fold on zari.",
    colors: ["Golden Yellow", "Red Border"],
    featured: true,
    gradient:
      "linear-gradient(135deg, oklch(0.72 0.12 82) 0%, oklch(0.60 0.14 78) 100%)",
  },
  {
    id: "7",
    name: "Bridal Red Maheshwari",
    collection: "Bridal Maheshwari Sarees",
    fabric: "Silk",
    price: 45000,
    description:
      "The crown jewel of our bridal collection. This deep red Maheshwari silk saree with heavy gold zari embroidery is crafted over 30 days by master weavers. Truly an heirloom to be passed down through generations.",
    details: [
      "Premium Maheshwari Bridal Silk",
      "7 meters with blouse piece",
      "Heavy gold & silver zari",
      "Bridal special motifs",
      "30 days of handcraft",
      "Comes in signature box",
    ],
    careInstructions:
      "Professional dry clean only. Store in the provided heirloom box.",
    colors: ["Bridal Red", "Gold & Silver Zari"],
    featured: true,
    gradient:
      "linear-gradient(135deg, oklch(0.35 0.20 25) 0%, oklch(0.22 0.14 22) 100%)",
  },
  {
    id: "8",
    name: "Bridal Pink Zari",
    collection: "Bridal Maheshwari Sarees",
    fabric: "Silk",
    price: 38500,
    description:
      "For the modern bride who cherishes tradition, this blush pink Maheshwari silk with extensive zari border and pallu work is a dream draped in silk. Soft yet statement-making.",
    details: [
      "Pure Maheshwari Silk",
      "6.5 meters with blouse",
      "Silver and gold zari combo",
      "Intricate pallu design",
      "Bridal certificate included",
    ],
    careInstructions: "Dry clean only. Store in muslin in a cool dry place.",
    colors: ["Blush Pink", "Silver Zari"],
    featured: false,
    gradient:
      "linear-gradient(135deg, oklch(0.80 0.08 0) 0%, oklch(0.70 0.10 355) 100%)",
  },
  {
    id: "9",
    name: "Classic Zari Border Saree",
    collection: "Traditional Zari Border Sarees",
    fabric: "Mixed",
    price: 12000,
    description:
      "The quintessential Maheshwari saree with its iconic reversible zari border. Silk-cotton blend body with pure gold zari border that can be worn on both sides - a signature feature of authentic Maheshwari weaving.",
    details: [
      "Silk-Cotton Blend",
      "5.5 meters with blouse",
      "Pure gold zari border",
      "Reversible design",
      "Signature Maheshwari checkered body",
    ],
    careInstructions:
      "Dry clean recommended. Can hand wash body gently. Avoid wringing.",
    colors: ["Teal Body", "Gold Border"],
    featured: true,
    gradient:
      "linear-gradient(135deg, oklch(0.50 0.12 195) 0%, oklch(0.38 0.10 192) 100%)",
  },
  {
    id: "10",
    name: "Gold Thread Zari Saree",
    collection: "Traditional Zari Border Sarees",
    fabric: "Mixed",
    price: 15500,
    description:
      "Dense gold thread zari runs through both the border and the body of this extraordinary saree. Woven with painstaking precision, each golden thread catches light beautifully as you move.",
    details: [
      "Premium Silk-Cotton",
      "6 meters with blouse",
      "Heavy gold thread zari",
      "All-over zari work",
      "Traditional Maheshwar patterns",
    ],
    careInstructions: "Dry clean only. Store with camphor to protect zari.",
    colors: ["Deep Purple", "Heavy Gold Zari"],
    featured: false,
    gradient:
      "linear-gradient(135deg, oklch(0.38 0.14 300) 0%, oklch(0.28 0.12 295) 100%)",
  },
  {
    id: "11",
    name: "Emerald Green Silk",
    collection: "Maheshwari Silk Sarees",
    fabric: "Silk",
    price: 19800,
    description:
      "Rich emerald green Maheshwari silk with delicate silver zari checks and a contrasting maroon border. This vibrant saree is a testament to the masterful use of color in Maheshwar\u2019s weaving tradition.",
    details: [
      "Pure Maheshwari Silk",
      "5.5 meters with blouse",
      "Silver zari checks",
      "Contrast maroon border",
      "Traditional checkered weave",
    ],
    careInstructions:
      "Dry clean only. Store in cotton muslin away from sunlight.",
    colors: ["Emerald Green", "Maroon Border", "Silver Zari"],
    featured: false,
    gradient:
      "linear-gradient(135deg, oklch(0.48 0.14 160) 0%, oklch(0.36 0.12 155) 100%)",
  },
  {
    id: "12",
    name: "Rust Cotton Handloom",
    collection: "Handloom Cotton Sarees",
    fabric: "Cotton",
    price: 5200,
    description:
      "Inspired by the red earth of Maheshwar, this rust-toned handloom cotton saree features subtle woven stripes and a complementary border. Comfortable for all-day wear with an artistic soul.",
    details: [
      "100% Handloom Cotton",
      "5.5 meters",
      "Natural rust dye",
      "Woven stripe pattern",
      "Comfortable everyday wear",
    ],
    careInstructions: "Hand wash cold. Dry in shade. Iron on medium heat.",
    colors: ["Rust Orange", "Cream Stripe"],
    featured: false,
    gradient:
      "linear-gradient(135deg, oklch(0.60 0.12 42) 0%, oklch(0.48 0.10 38) 100%)",
  },
];

export const reviews = [
  {
    id: "1",
    productId: "1",
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    comment:
      "Absolutely breathtaking saree! The quality of the silk and the craftsmanship is unparalleled. I wore it at my cousin\u2019s wedding and received compliments all evening.",
    date: "2025-11-15",
  },
  {
    id: "2",
    productId: "7",
    name: "Meera Iyer",
    location: "Bangalore",
    rating: 5,
    comment:
      "I ordered the Bridal Red Maheshwari for my wedding and it was worth every penny. The saree is absolutely stunning and the craftsmanship is extraordinary. A true heirloom.",
    date: "2025-10-22",
  },
  {
    id: "3",
    productId: "3",
    name: "Anita Patel",
    location: "Ahmedabad",
    rating: 5,
    comment:
      "The Indigo Cotton saree is so elegant and comfortable. Perfect for office wear. The natural dye colors are beautiful and the fabric is incredibly soft.",
    date: "2025-12-01",
  },
  {
    id: "4",
    productId: "9",
    name: "Kavitha Nair",
    location: "Chennai",
    rating: 5,
    comment:
      "Bought the Classic Zari Border saree and I\u2019m amazed by the reversible design feature. Both sides are beautiful! True Maheshwari craftsmanship. Will definitely order more.",
    date: "2025-09-18",
  },
  {
    id: "5",
    productId: "5",
    name: "Sunita Gupta",
    location: "Delhi",
    rating: 4,
    comment:
      "The Crimson Festive Silk is everything I hoped for. Vivid colors, excellent craftsmanship, and fast shipping. The packaging was also very premium.",
    date: "2025-11-30",
  },
];
