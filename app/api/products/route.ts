import products from "@/data/products.json";

interface Product {
  _id: string;
  name: string;
  sku: string;
  description: string;
  images: string[];
  price: number;
  salePrice?: number;
  stock: number;
  rating: number;
  brand: string;
  categoryId: string;
  isFeatured: boolean;
  tags: string[];
  additionalInfo?: Record<string, any>;
  featuredAds?: string[];
}

export async function GET() {
  const featuredProducts: Product[] = products.filter(
    (product) => product.isFeatured
  );

  return new Response(JSON.stringify(featuredProducts), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
