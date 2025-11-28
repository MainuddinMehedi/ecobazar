import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function CartTotal() {
  return (
    <Card className="p-6">
      <h1 className="font-medium text-xl text-gray-900">Cart Total</h1>

      <div className="space-y-8">
        <div className="space-y-4">
          <dl className="flex justify-between">
            <dt className="text-gray-700">Subtotal:</dt>
            <dd className="text-gray-900 font-medium">$84.00</dd>
          </dl>

          <Separator />

          <dl className="flex justify-between">
            <dt className="text-gray-700">Shipping:</dt>
            <dd className="text-gray-900 font-medium">Free</dd>
          </dl>

          <Separator />

          <dl className="flex justify-between">
            <dt className="text-gray-700">Total:</dt>
            <dd className="text-gray-900 font-bold">$84.00</dd>
          </dl>
        </div>

        <Button
          variant={"secondary"}
          className="btn-normal py-6! w-full text-[15px] font-medium"
        >
          Proceed to checkout
        </Button>
      </div>
    </Card>
  );
}
