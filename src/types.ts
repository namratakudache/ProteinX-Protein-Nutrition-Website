export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: 'PROTEIN BARS' | 'WHEY ISOLATES' | 'RTD SHAKES' | 'PLANT POWER' | 'HYPE BUNDLES';
  badge: string;
  badgeStyle: 'pink' | 'lime' | 'gray' | 'dark';
  dropNumber: string;
  proteinGrams: number;
  calories: number;
  sugarGrams: number;
  fiberGrams?: number;
  servingLabel: string;
  image: string;
  flavorSummary: string;
  quirkTag: string;
  quirkIcon: string;
  defaultFlavor: string;
  flavors: string[];
  description: string;
  bcaaGrams?: number;
  leucineGrams?: number;
  highlightText: string;
  stockLevel: number;
}

export interface CartItem {
  product: Product;
  selectedFlavor: string;
  quantity: number;
}

export interface VibeData {
  key: string;
  label: string;
  sublabel: string;
  icon: string;
  iconColor: string;
  mode: string;
  title: string;
  desc: string;
  protein: string;
  timing: string;
  speed: string;
  prodName: string;
  price: string;
  matchedProductId: string;
  matchedImage: string;
}

export interface BatchRecord {
  identity: string;
  date: string;
  purity: string;
  metals: string;
  microbial: string;
  auditor: string;
  status: string;
  moistureContent: string;
  leucineRatio: string;
}

export interface CommunityPost {
  id: string;
  handle: string;
  location: string;
  role: string;
  badgeColor: string;
  comment: string;
  image: string;
  likes: number;
  verified: boolean;
}
