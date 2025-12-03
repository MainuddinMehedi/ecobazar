import { MessageSquare, Tag, User } from "lucide-react";

interface BlogMetadataProps {
  category: string;
  author: string;
  commentsCount: string | number;
}

export default function BlogMetadata({
  category,
  author,
  commentsCount,
}: BlogMetadataProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 xl:gap-4 text-gray-500 text-sm mb-3">
      <div className="flex items-center gap-1.5">
        <Tag className="w-4 h-4 text-green-600" />
        <span>{category}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <User className="w-4 h-4 text-green-600" />
        <span>By {author}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <MessageSquare className="w-4 h-4 text-green-600" />
        <span>{commentsCount} Comments</span>
      </div>
    </div>
  );
}
