"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Handbag,
  Heart,
  LayoutGrid,
  LogOut,
  Settings,
  ShoppingBag,
} from "lucide-react"; // Import your icons
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutGrid },
  { title: "Order History", href: "/dashboard/orders", icon: ShoppingBag },
  { title: "Wishlist", href: "/wishlist", icon: Heart },
  { title: "Shopping Cart", href: "/cart", icon: Handbag },
  { title: "Settings", href: "/dashboard/settings", icon: Settings },
  { title: "Log-out", href: "/logout", icon: LogOut },
];

interface DashboardNavProps {
  className?: string;
  onLinkClick?: () => void;
}

export function DashboardNav({ className, onLinkClick }: DashboardNavProps) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex flex-col gap-1", className)}>
      {items.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Button
            key={item.href}
            asChild
            variant="ghost"
            onClick={onLinkClick}
            className={cn(
              "justify-start rounded-none h-10 pl-4 py-6",
              isActive
                ? "bg-gray-50 border-l-4 border-success text-gray-900"
                : "text-gray-500 hover:text-black hover:bg-transparent"
            )}
          >
            <Link href={item.href}>
              <item.icon className={`mr-2 h-4 w-4`} />
              {item.title}
            </Link>
          </Button>
        );
      })}
    </nav>
  );
}
