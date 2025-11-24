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
  // optional metadata you might need for filters/sorts:
  salesCount?: number;
  createdAt?: string;
}

function paginate<T>(items: T[], page = 1, limit = 20) {
  const start = (page - 1) * limit;
  return items.slice(start, start + limit);
}

export async function GET(
  request: Request,
  { params }: { params: { type: string } }
) {
  const type = params.type; // dynamic segment value
  const url = new URL(request.url);
  const q = url.searchParams;

  const page = parseInt(q.get("page") || "1", 10);
  const limit = parseInt(q.get("limit") || "20", 10);
  const category = q.get("category") || null;
  const sort = q.get("sort") || null; // e.g. "price:asc" or "rating:desc"

  // base list (could also be a DB query)
  let list: Product[] = products as Product[];

  // common filters from query
  if (category) {
    list = list.filter((p) => p.categoryId === category);
  }

  // route-specific selection
  switch (type) {
    case "featured":
      list = list.filter((p) => p.isFeatured);
      break;
    case "best-selling":
      list = list
        .slice()
        .sort((a, b) => (b.salesCount || 0) - (a.salesCount || 0));
      break;
    case "hot-deals":
      list = list.filter((p) => p.salePrice && p.salePrice < p.price);
      // optional: sort by discount percent
      list = list
        .slice()
        .sort(
          (a, b) =>
            (b.price - (b.salePrice ?? b.price)) / b.price -
            (a.price - (a.salePrice ?? a.price)) / a.price
        );
      break;
    case "newest":
      list = list
        .slice()
        .sort(
          (a, b) =>
            new Date(b.createdAt || 0).getTime() -
            new Date(a.createdAt || 0).getTime()
        );
      break;
    case "all":
      // no extra filter
      break;
    default:
      return new Response(JSON.stringify({ error: "unknown product type" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
  }

  // optional global sort from query
  if (sort) {
    const [key, dir] = sort.split(":");
    list = list.slice().sort((a: any, b: any) => {
      const va = a[key] ?? 0;
      const vb = b[key] ?? 0;
      return dir === "asc" ? (va > vb ? 1 : -1) : va < vb ? 1 : -1;
    });
  }

  const total = list.length;
  const items = paginate(list, page, limit);

  return new Response(JSON.stringify({ total, page, limit, items }, null, 2), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
