"use client";

import BlogCard from "@/components/common/blogs/BlogCard";
import FeedHeader from "@/components/common/FeedHeader";
import Paginations from "@/components/common/Paginations";
import { Blog } from "@/types";
import { useEffect, useState } from "react";

export default function BlogsFeed() {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [totalPages, setTotalPages] = useState(1); // This will come from the API response
  const blogsPerPage = 15;

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
        const mockProducts = [...Array(blogsPerPage)].map((_, i) => ({
          _id: `67f89a79c4c23ab8108a8d0${i}`,
          title: "10 Healthy Eating Tips for a Better Lifestyle",
          slug: "10-healthy-eating-tips-for-a-better-lifestyle",
          excerpt:
            "Discover simple and effective tips to improve your eating habits and lead a healthier lifestyle.",
          content:
            "Eating healthy is essential for maintaining good health and well-being. Here are 10 tips to help you make better food choices:\n\n1. **Incorporate More Fruits and Vegetables**: Aim to fill half your plate with fruits and vegetables at every meal.\n2. **Choose Whole Grains**: Opt for whole grain bread, pasta, and rice instead of refined grains.\n3. **Limit Added Sugars**: Be mindful of added sugars in beverages and snacks. Choose natural sweeteners when possible.\n4. **Stay Hydrated**: Drink plenty of water throughout the day. Limit sugary drinks and excessive caffeine.\n5. **Practice Portion Control**: Be aware of portion sizes to avoid overeating. Use smaller plates if necessary.\n6. **Plan Your Meals**: Take time to plan your meals and snacks for the week. This can help you make healthier choices.\n7. **Cook at Home**: Preparing meals at home allows you to control ingredients and portion sizes.\n8. **Read Nutrition Labels**: Familiarize yourself with reading nutrition labels to make informed choices.\n9. **Listen to Your Body**: Pay attention to hunger and fullness cues. Eat when you're hungry and stop when you're satisfied.\n10. **Seek Support**: Consider joining a support group or working with a nutritionist for personalized guidance.\n\nBy implementing these tips, you can create a healthier lifestyle that benefits your overall well-being.",
          thumbnailUrl: "/assets/blogs/blog-3.png",
          author: "Admin",
          category: "Food",
          tags: "Healthy",
          commentsCount: 65,
          createdAt: "2024-11-18T00:00:00Z",
        }));

        setBlogs(mockProducts);
        setTotalPages(3); // Mock total pages
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
    <div className="space-y-6">
      <FeedHeader />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(220px,2fr))] lg:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] xl:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]  gap-4">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center">
          <Paginations
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}
