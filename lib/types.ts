
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  status: 'published' | 'under_construction';
  content?: string;
  readTime?: string;
}

export interface OfferData {
  originalPrice: string;
  offerPrice: string;
  bonuses: string[];
}
