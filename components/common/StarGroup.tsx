import { Star } from "lucide-react";

interface StarGroupProps {
  value: number;
  styles?: string;
  size?: number;
}

export default function StarGroup({ value, size, styles }: StarGroupProps) {
  return (
    <span className={`flex items-center gap-1 ${styles}!`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          // className={`w-[18px] h-[18px] ${styles}`}
          fill={index + 1 <= value ? "#ff8a00" : "#b4ccb4"}
          strokeWidth={0}
          size={size || 16}
        />
      ))}
    </span>
  );
}
