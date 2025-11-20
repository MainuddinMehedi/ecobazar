import Image from "next/image";

interface Category {
  _id: string;
  name: string;
  thumbnailUrl: string;
  productCount: number;
}

export default async function Categories() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/categories`
  );
  const categories: Category[] = await response.json();

  return (
    <div className="text-center">
      <p className="text-success text-sm font-medium mb-3">CATEGORY</p>
      <h1 className="heading-primary mb-10">Shop By Categories</h1>
      <div className="flex gap-7 flex-wrap">
        {categories.map((category: Category) => (
          <div
            key={category._id}
            className="group p-5 border border-gray-100 hover:border-hard-primary/80 rounded hover:shadow hover:shadow-hard-primary/60 text-center space-y-2"
          >
            <Image
              src={category.thumbnailUrl}
              alt={category.name}
              width={190}
              height={130}
              className="w-auto h-auto object-cover"
            />
            <h2 className="text-lg font-medium text-gray-900 group-hover:text-hard-primary transition-colors">
              {category.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
