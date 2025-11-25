"use client";

import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";

export default function BreadcrumbLinks() {
  const pathname = usePathname();

  // Split the pathname and filter out empty segments
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  // Create breadcrumb items with proper paths
  const breadcrumbItems = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");

    // Convert slug to readable title (capitalize first letter and replace hyphens with spaces)
    const title =
      segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, " ");

    return {
      href,
      title,
      isLast: index === pathSegments.length - 1,
    };
  });

  return (
    <div className="relative w-screen left-1/2 -translate-x-1/2">
      <Breadcrumb className="h-[70px] flex flex-col justify-center w-[89%] mx-auto">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href={"/"}>
                <Home className="h-5 w-5" />
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          {breadcrumbItems.map((item, index) => (
            <span key={index} className="flex items-center gap-3">
              <BreadcrumbItem>
                {item.isLast ? (
                  <BreadcrumbPage className="text-[16px] text-gray-600">
                    {item.title}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link
                      href={item.href}
                      className="text-[16px] text-gray-600 hover:text-gray-900"
                    >
                      {item.title}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>

              {!item.isLast && <BreadcrumbSeparator />}
            </span>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
