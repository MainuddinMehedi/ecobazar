export interface Product {
  _id: string;
  name: string;
  sku: string;
  description: string;
  images: string[];
  price: number;
  salePrice: number;
  stock: number;
  rating: number;
  brand: Brand;
  categoryId: string;
  isFeatured: boolean;
  tags: string[];
  additionalInfo: ProductAdditionalInfo;
  reviewCount?: number;
  featuredAds?: string[];
}

export interface ProductAdditionalInfo {
  weight: string;
  color: string;
  type: string;
}

export interface Brand {
  name: string;
  logo: string;
}

export interface Testimonial {
  _id: string;
  authorId: string;
  authorName: string;
  authorRole: string;
  profilePictureUrl: string;
  content: string;
  rating: number;
}

export interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  thumbnailUrl: string;
  author: string;
  category: string;
  tags: string;
  commentsCount: number;
  createdAt: string;
}
