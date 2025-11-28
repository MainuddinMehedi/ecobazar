import { cn } from "@/lib/utils";
import Link from "next/link";

interface SocialIconProps {
  icon: any;
  styles?: string;
}

export default function SocialIcon({ icon: Icon, styles }: SocialIconProps) {
  return (
    <Link
      href="#"
      className={`hover:text-green-600 transition-colors w-[40] h-[40] flex items-center justify-center ${styles}`}
    >
      <Icon className="w-6 h-6 fill-gray-50" />
    </Link>
  );
}
