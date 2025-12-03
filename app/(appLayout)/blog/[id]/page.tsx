import BlogMetadata from "@/components/common/blogs/BlogMetadata";
import SocialIcon from "@/components/common/icons/SocialIcon";
import BlogSidebar from "@/components/module/blog/BlogSidebar";
import BlogComments from "@/components/module/blog/details/BlogComments";
import { Separator } from "@/components/ui/separator";
import { formatDate } from "@/utils/formatDate";
import { Facebook, Instagram, Link2, Twitter } from "lucide-react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const blog = {
    // _id: `67f89a79c4c23ab8108a8d0i`,
    _id: id,
    title: "10 Healthy Eating Tips for a Better Lifestyle",
    slug: "10-healthy-eating-tips-for-a-better-lifestyle",
    excerpt:
      "Discover simple and effective tips to improve your eating habits and lead a healthier lifestyle.",
    content:
      "Eating healthy is essential for maintaining good health and well-being. Here are 10 tips to help you make better food choices:\n\n1. **Incorporate More Fruits and Vegetables**: Aim to fill half your plate with fruits and vegetables at every meal.\n2. **Choose Whole Grains**: Opt for whole grain bread, pasta, and rice instead of refined grains.\n3. **Limit Added Sugars**: Be mindful of added sugars in beverages and snacks. Choose natural sweeteners when possible.\n4. **Stay Hydrated**: Drink plenty of water throughout the day. Limit sugary drinks and excessive caffeine.\n5. **Practice Portion Control**: Be aware of portion sizes to avoid overeating. Use smaller plates if necessary.\n6. **Plan Your Meals**: Take time to plan your meals and snacks for the week. This can help you make healthier choices.\n7. **Cook at Home**: Preparing meals at home allows you to control ingredients and portion sizes.\n8. **Read Nutrition Labels**: Familiarize yourself with reading nutrition labels to make informed choices.\n9. **Listen to Your Body**: Pay attention to hunger and fullness cues. Eat when you're hungry and stop when you're satisfied.\n10. **Seek Support**: Consider joining a support group or working with a nutritionist for personalized guidance.\n\nBy implementing these tips, you can create a healthier lifestyle that benefits your overall well-being.",
    thumbnailUrl: "/assets/blogs/blog-3.png",
    author: "Cameron Williamson",
    category: "Food",
    tags: "Healthy",
    commentsCount: 65,
    createdAt: "2024-11-18T00:00:00Z",
  };

  return (
    <div className="flex">
      <div className="grid grid-cols-7 gap-6">
        {/* blogs details */}
        <main className="col-span-5 space-y-5">
          {/* Image and metadata */}
          <div className="w-full space-y-5">
            <div className="lg:h-[550px] 2xl:h-[700px]">
              <Image
                // src={"/assets/blogs/blog-9.png"}
                src={blog.thumbnailUrl}
                alt="Blog thumbnail"
                width={872}
                height={600}
                className="w-full h-full object-cover rounded"
              />
            </div>
            <BlogMetadata
              category={blog.category}
              author={blog.author}
              commentsCount={blog.commentsCount}
            />
          </div>

          <div className="space-y-8">
            <p className="text-[32px] text-gray-900 font-medium">
              {blog.excerpt}
            </p>
            <div className="flex justify-between">
              <div className="flex gap-3">
                <Image
                  src={"/assets/users/user-1.png"}
                  alt="avatar"
                  width={45}
                  height={45}
                  className="object-cover shrink-0"
                />

                <div className="space-y-1">
                  <p className="text-[16px] text-gray-900 font-medium">
                    {blog.author}
                  </p>
                  <div className="flex gap-2 text-gray-500 text-sm">
                    <span className="">{formatDate(blog.createdAt)}</span>
                    <span className="h-1 w-1 rounded-full bg-gray-300 my-auto" />
                    <span> 6 mins read</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <SocialIcon icon={Facebook} />
                <SocialIcon icon={Twitter} />
                <SocialIcon icon={Instagram} />
                <SocialIcon icon={Link2} />
              </div>
            </div>

            <Separator />

            {/* Blog Content */}
            <article className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  img: ({ node, ...props }) => (
                    <div className="w-full h-[400px] relative my-6">
                      <Image
                        fill
                        src={props.src}
                        alt={props.alt}
                        className="object-cover rounded-lg"
                      />
                    </div>
                  ),
                }}
              >
                {blog.content}
              </ReactMarkdown>
            </article>

            {/* Comment Section */}
            <div>
              <BlogComments blogId={blog._id} />
            </div>
          </div>
        </main>

        {/* sidebar - filter, gallery, recent blogs */}
        <aside className="col-span-2">
          <BlogSidebar />
        </aside>
      </div>
    </div>
  );
}
