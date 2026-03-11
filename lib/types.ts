
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  status: 'published' | 'under_construction';
  content?: string | ((city: string) => string);
  readTime?: string;
  imageUrl?: string;
  city?: string; // Optional field for city-specific articles
}

export interface OfferData {
  originalPrice: string;
  offerPrice: string;
  bonuses: string[];
}
