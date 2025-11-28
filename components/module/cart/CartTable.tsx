import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, Facebook, Twitter, Instagram } from "lucide-react";
import Image from "next/image";
import QuantityIncrementer from "@/components/common/QuantityIncrementer";

export default function CartTable() {
  return (
    <Card className="w-full p-0 shadow-none">
      <CardContent className="p-0">
        <Table className="">
          <TableHeader>
            <TableRow className="">
              <TableHead className="pl-6 font-medium text-gray-500">
                PRODUCT
              </TableHead>
              <TableHead className="font-medium text-gray-500">PRICE</TableHead>
              <TableHead className="font-medium text-gray-500">
                QUANTITY
              </TableHead>
              <TableHead className="font-medium text-gray-500">
                SUBTOTAL
              </TableHead>
              {/* <TableHead className="text-right"></TableHead> */}
            </TableRow>
          </TableHeader>

          <TableBody>
            {/* Row 1 */}
            <TableRow>
              <TableCell className="pl-6 py-4">
                <div className="flex items-center gap-5">
                  <div className="relative h-20 w-20 rounded overflow-hidden">
                    <Image
                      src="/assets/products/product-4.png"
                      alt="Capsicum"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-[16px] text-gray-900">
                    Green Capsicum
                  </span>
                </div>
              </TableCell>

              <TableCell>
                <span className="font-medium text-[16px] text-gray-900">
                  $14.99
                </span>{" "}
                <span className="text-muted-foreground line-through text-sm">
                  $20.99
                </span>
              </TableCell>

              <TableCell>
                <QuantityIncrementer />
              </TableCell>

              <TableCell>
                <span className="font-medium text-[16px] text-gray-900">
                  $14.99
                </span>
              </TableCell>

              <TableCell className="text-right pr-6">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full border"
                >
                  <X className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>

            {/* Row 2 */}
            <TableRow>
              <TableCell className="pl-6 py-4">
                <div className="flex items-center gap-5">
                  <div className="relative h-20 w-20 rounded overflow-hidden">
                    <Image
                      src="/assets/products/product-8.png"
                      alt="Red Capsicum"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-[16px] text-gray-900">
                    Red Capsicum
                  </span>
                </div>
              </TableCell>

              <TableCell>
                <span className="font-medium text-[16px] text-gray-900">
                  $14.99
                </span>{" "}
                <span className="text-muted-foreground line-through text-sm">
                  $20.99
                </span>
              </TableCell>

              <TableCell>
                <QuantityIncrementer />
              </TableCell>

              <TableCell>
                <span className="font-medium text-[16px] text-gray-900">
                  $14.99
                </span>
              </TableCell>

              <TableCell className="text-right pr-6">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full border"
                >
                  <X className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>

      <CardFooter className="flex justify-between py-6 border-t">
        <Button
          variant={"secondary"}
          className="py-6! px-8! rounded-full bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-300"
        >
          Return to shop
        </Button>
        <Button
          variant={"secondary"}
          className="py-6! px-8! rounded-full bg-gray-50 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-300"
        >
          Update Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
