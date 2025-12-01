"use client";

import { Product } from "@/types";
import { useEffect, useState } from "react";
import ProductPagination from "./Pagination";
import ProductsGrid from "./ProductsGrid";
import FeedHeader from "@/components/common/FeedHeader";

export default function ProductsFeed() {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [totalPages, setTotalPages] = useState(1); // This will come from the API response
  const productsPerPage = 15;

  // This effect would fetch products based on the current page
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Mockup of actual api call -
        // const response = await fetch(`/api/products?page=${currentPage}&limit=${productsPerPage}`);
        // const data = await response.json();
        // setProducts(data.products);
        // setTotalPages(data.totalPages);

        // For now, using mock data

        const mockProducts = [...Array(productsPerPage)].map((_, i) => ({
          _id: (currentPage - 1) * productsPerPage + i + 1,
          name: `Product ${(currentPage - 1) * productsPerPage + i + 1}`,
        }));

        setProducts(mockProducts);
        setTotalPages(10); // Mock total pages
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="space-y-8">
      <FeedHeader />
      <ProductsGrid products={products} />

      {/* <ProductPagination /> */}
      {totalPages > 1 && (
        <div className="flex justify-center">
          <ProductPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}
