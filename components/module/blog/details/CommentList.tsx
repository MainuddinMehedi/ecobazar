import { Button } from "@/components/ui/button";
import Image from "next/image";
import { formatDate } from "@/utils/formatDate";

export interface Comment {
  _id: string;
  author: {
    name: string;
    avatarUrl: string;
  };
  content: string;
  createdAt: string;
}

export default function CommentList({ comments }: { comments: Comment[] }) {
  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-medium text-gray-900">Comments</h3>

      <div className="space-y-8">
        {comments.map((comment) => (
          <article key={comment._id} className="flex gap-4 group">
            <div className="shrink-0">
              <Image
                src={comment.author.avatarUrl}
                alt={comment.author.name}
                width={48}
                height={48}
                className="rounded-full object-cover w-12 h-12"
              />
            </div>
            <div className="space-y-2 flex-1">
              <div className="flex items-baseline gap-2">
                <h4 className="font-medium text-gray-900">
                  {comment.author.name}
                </h4>
                <span className="text-xs text-gray-400">•</span>
                <time
                  dateTime={comment.createdAt}
                  className="text-sm text-gray-400"
                >
                  {formatDate(comment.createdAt)}
                </time>
              </div>

              <p className="text-gray-600 text-[15px] leading-relaxed">
                {comment.content}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="pt-4">
        <Button
          variant="outline"
          className="border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700 rounded-full px-8 h-11 font-semibold transition-colors"
        >
          Load More
        </Button>
      </div>
    </div>
  );
}
