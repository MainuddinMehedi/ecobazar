import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface StarGroupProps {
  value: number;
  styles?: string;
  size?: number;
}

export default function StarGroup({ value, size, styles }: StarGroupProps) {
  return (
    <div className={`flex items-center gap-0.5 ${styles}!`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={cn(
            index + 1 <= value
              ? "fill-yellow-400 text-yellow-400"
              : "text-gray-300 fill-gray-300",
            `${styles}`,
          )}
          // fill={index + 1 <= value ? "#ff8a00" : "#b4ccb4"}
          strokeWidth={0}
          size={size || 16}
        />
      ))}
    </div>
  );
}
