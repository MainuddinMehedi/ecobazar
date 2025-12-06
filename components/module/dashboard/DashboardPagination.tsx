"use client";

import Paginations from "@/components/common/Paginations";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface DashboardPaginationProps {
  totalPages: number;
}

export default function DashboardPagination({
  totalPages,
}: DashboardPaginationProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentPage = Number(searchParams.get("page")) || 1;

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <Paginations
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  );
}
