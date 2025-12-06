import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
}

export default function Paginations({
  currentPage = 1,
  totalPages = 1,
  onPageChange = () => {},
}: PaginationProps) {
  // Generate page numbers to display
  const getPages = () => {
    if (totalPages <= 1) return [];

    const delta = 1;
    const left = currentPage - delta;
    const right = currentPage + delta;
    const range: number[] = [];

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= left && i <= right)) {
        range.push(i);
      }
    }

    const pagesWithDots: (number | string)[] = [];
    let last: number | undefined;
    for (const page of range) {
      if (last !== undefined) {
        if (page - last > 1) {
          pagesWithDots.push("...");
        }
      }
      pagesWithDots.push(page);
      last = page;
    }
    return pagesWithDots;
  };

  const pages = getPages();

  return (
    <Pagination className="mt-8">
      <PaginationContent className="gap-3">
        <PaginationItem>
          <PaginationPrevious
            onClick={(e) => {
              e.preventDefault();
              onPageChange(Math.max(1, currentPage - 1));
            }}
            href="#"
            className={cn(
              "h-8 w-8 rounded-full bg-gray-100 hover:bg-gray-200 border-none text-gray-600 transition-colors",
              currentPage === 1
                ? "pointer-events-none opacity-50"
                : "cursor-pointer"
            )}
          />
        </PaginationItem>

        {pages.map((page, index) => (
          <PaginationItem key={index}>
            {page === "..." ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(page as number);
                }}
                isActive={currentPage === page}
                className={cn(
                  "h-8 w-8 rounded-full border-none font-medium",
                  currentPage === page
                    ? "bg-success text-white hover:bg-success hover:text-white"
                    : "text-gray-600 hover:bg-gray-100"
                )}
              >
                {page}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            onClick={(e) => {
              e.preventDefault();
              onPageChange(Math.min(totalPages, currentPage + 1));
            }}
            href="#"
            className={cn(
              "h-8 w-8 rounded-full bg-white border border-gray-200 hover:bg-gray-100 text-gray-900 transition-colors",
              currentPage === totalPages
                ? "pointer-events-none opacity-50"
                : "cursor-pointer"
            )}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
