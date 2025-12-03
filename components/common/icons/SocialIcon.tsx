import { cn } from "@/lib/utils";
import Link from "next/link";

interface SocialIconProps {
  icon: any;
  styles?: string;
}

// TODO: Make this better if it can be.

export default function SocialIcon({ icon: Icon, styles }: SocialIconProps) {
  return (
    <Link
      href="#"
      className={`hover:text-success text-black/50 transition-colors w-[40] h-[40] flex items-center justify-center rounded-full hover:bg-success ${styles}`}
    >
      <Icon className="w-6 h-6 fill-gray-50 transition-transform hover:scale-110" />
    </Link>
  );
}
