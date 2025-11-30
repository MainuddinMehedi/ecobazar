import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function CartTotal() {
  return (
    <Card className="p-6">
      <h1 className="font-medium text-xl text-gray-900">Cart Total</h1>

      <div className="space-y-8">
        <div className="space-y-4">
          <dl className="flex justify-between">
            <dt className="text-sm text-gray-700">Subtotal:</dt>
            <dd className="text-gray-900 text-sm font-medium">$84.00</dd>
          </dl>

          <Separator />

          <dl className="flex justify-between">
            <dt className="text-sm text-gray-700">Shipping:</dt>
            <dd className="text-gray-900 text-sm font-medium">Free</dd>
          </dl>

          <Separator />

          <dl className="flex justify-between">
            <dt className="text-sm text-gray-700">Total:</dt>
            <dd className="text-gray-900 text-[16px] font-semibold">$84.00</dd>
          </dl>
        </div>

        <Link href={"/checkout"} className="btn-normal py-2! block text-center">
          Proceed to checkout
        </Link>
      </div>
    </Card>
  );
}
