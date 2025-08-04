export interface Comment {
  productId?: string | undefined;
  commentId?: number;
  userName?: string | undefined;
  rating: number;
  comment?: string | undefined;
  createdAt?: string | undefined;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  discount: number;
  off: number;
  general_category: string;
  category: string;
  category_fa: string;
  image: string;
  sales_count: number;
  rating: number;
  reviews: number;
  is_available: boolean;
  is_special: boolean;
  createdAt: string;
}

export interface TproductList {
  first?: number | null | undefined;
  prev?: number | null;
  next?: number | null;
  last: number | undefined;
  pages: number;
  items?: number | null;
  data?: Product[];
}

export interface Tdiscound {
  id: number;
  code: string;
  discound: number;
}
