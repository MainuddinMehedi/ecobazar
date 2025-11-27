import AdditionalInfoTab from "@/components/module/shop/products/productDetails/AdditionalInfoTab";
import ProductDetails from "@/components/module/shop/products/productDetails/ProductDetails";
import ProductImageGallery from "@/components/module/shop/products/productDetails/ProductImageGallery";
import RelatedProducts from "@/components/module/shop/products/productDetails/RelatedProducts";

const product = {
  _id: "67f89a79c4c23ab8108a4f01",
  name: "Chinese Cabbage",
  sku: "2,51,594",
  description:
    "Fresh and crunchy Chinese cabbage, perfect for salads and stir-fries.",
  images: [
    "/assets/products/product-2.png",
    "/assets/products/cabbage-2.png",
    "/assets/products/cabbage-3.png",
    "/assets/products/cabbage-4.png",
  ],
  price: 48.0,
  salePrice: 17.28,
  stock: 13,
  rating: 4.0,
  reviewCount: 12,
  brand: {
    name: "farmary",
    logo: "/assets/companies/food.png",
  },
  categoryId: "67f89a79c4c23ab8108a4c02",
  isFeatured: true,
  tags: [
    "67f89a79c4c23ab8108a4d01",
    "67f89a79c4c23ab8108a4d02",
    "67f89a79c4c23ab8108a4d03",
  ],
  additionalInfo: {
    weight: "0.5kg",
    color: "Green",
    type: "Organic",
  },
  featuredAds: ["Best Seller"],
};

export default async function ProductDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // console.log("product id from param in productDetailsPage: ", id);

  return (
    <div className="space-y-18">
      <div>
        {/* products details  */}
        <div className="flex justify-between">
          <ProductImageGallery images={product.images} />
          <ProductDetails product={product} />
        </div>

        {/* Additional information */}
        <AdditionalInfoTab />
      </div>
      <div>
        <h1 className="heading-primary">RelatedProducts</h1>
        <RelatedProducts />
      </div>
    </div>
  );
}
