"use client";

import SocialIcon from "@/components/common/icons/SocialIcon";
import StarGroup from "@/components/common/StarGroup";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Product } from "@/types";
import {
  Facebook,
  Heart,
  Instagram,
  LucideHandbag,
  Minus,
  Plus,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProductDetailsProps {
  product: Product;
}

// TODO: Implement product quantity select increment/decrement
// TODO: Link component for socials and other
// TODO: handleAddToCart
// TODO: handleWishlist

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  console.log("product from ProductDetails component: ", product);

  return (
    <div className="flex-1 space-y-7">
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <h1 className="heading-primary mb-0">Chinese Cabbage</h1>
          {product.stock > 0 ? (
            <Badge className="badge-primary" variant="secondary">
              {"In Stock"}
            </Badge>
          ) : (
            <Badge variant="destructive">Out of Stock</Badge>
          )}
        </div>

        {/* rating and sku */}
        <div className="flex gap-3">
          <div className="flex items-center gap-2">
            <StarGroup value={product.rating} size={18} styles="mb-1" />
            <span className="text-gray-600">{product?.reviewCount} Review</span>
          </div>
          <span className="h-1 w-1 rounded-full bg-gray-300 my-auto" />
          <div>
            <p className="text-gray-600">
              <span className="font-medium">SKU:</span> {product.sku}
            </p>
          </div>
        </div>
      </div>

      {/* price section */}
      <div className="flex items-center gap-3">
        <div className="space-x-1">
          <span className="text-2xl text-gray-300 line-through">
            ${product?.price.toFixed(2)}
          </span>
          <span className="text-3xl font-medium text-hard-primary">
            ${product?.salePrice.toFixed(2)}
          </span>
        </div>
        <Badge
          variant="destructive"
          className="badge-destructive rounded-2xl! font-medium"
        >
          64% off
        </Badge>
      </div>

      <Separator />

      {/* brand, socials and description */}
      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <span className="text-gray-900">Brand: </span>
          <div className="w-14 h-14 p-1 border border-gray-50 rounded flex items-center">
            <Image
              src={product.brand.logo}
              alt="Brand Image"
              width={56}
              height={56}
              className="object-contain"
            />
          </div>
        </div>
        <div className="flex items-center gap-3 text-muted-foreground">
          <span className="text-gray-900">Share Item: </span>
          <div className="flex gap-2">
            <SocialIcon icon={Facebook} />
            <SocialIcon icon={Twitter} />
            <SocialIcon icon={Instagram} />
          </div>
        </div>
      </div>

      <p className="text-gray-500">{product.description}</p>

      <Separator />

      {/* Actions - quantity, cart, whishlist */}

      <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
        {/* Quantity Selector */}
        <div className="flex items-center border rounded-full px-2 py-2 w-full sm:w-auto">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full h-8 w-8 bg-gray-100"
            // onClick={handleDecrease}
            disabled={quantity <= 1}
          >
            <Minus className="w-4 h-4" />
          </Button>
          <span className="w-12 text-center font-medium">{quantity}</span>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full h-8 w-8 bg-gray-100"
            // onClick={handleIncrease}
            disabled={quantity >= product.stock}
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        {/* Add to Cart Button */}
        <Button
          className="flex-1 w-full rounded-full bg-success/95 hover:bg-success text-white text-[16px] font-bold py-6"
          // onClick={handleAddToCart}
          disabled={product.stock === 0}
        >
          Add to Cart <LucideHandbag className="w-5! h-5! ml-1" />
        </Button>

        {/* Wishlist Button */}
        <Button
          variant="outline"
          size="icon"
          className="rounded-full h-11 w-11 shrink-0 bg-success/10 text-hard-primary"
        >
          <Heart className="w-5 h-5" />
        </Button>
      </div>

      <Separator />

      {/* Category and tag */}
      <div className="space-y-2 text-sm">
        <div className="flex gap-2">
          <span className="font-medium text-gray-900">Category:</span>
          <span className="text-gray-500">
            {/* Normally map ID to Name here */}
            Vegetables
          </span>
        </div>
        <div className="flex gap-2">
          <span className="font-medium text-gray-900">Tags:</span>
          <span className="text-gray-500">
            {/* Normally map IDs to Names here */}
            Vegetables, Healthy, Chinese, Cabbage
          </span>
        </div>
      </div>
    </div>
  );
}
