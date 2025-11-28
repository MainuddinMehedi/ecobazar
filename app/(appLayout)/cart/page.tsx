import CartTable from "@/components/module/cart/CartTable";
import CartTotal from "@/components/module/cart/CartTotal";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <div>
      <h1 className="heading-primary text-center">My Shopping Cart</h1>

      {/* Cart Table */}
      <div className="flex w-full gap-7">
        <div className="basis-[70%] space-y-7">
          <CartTable />

          {/* coupon section */}
          <div className="flex justify-between items-center p-6 border rounded-xl">
            <h3 className="text-xl font-medium text-gray-900">Coupon Code</h3>
            <div className="border rounded-full h-[55px] w-[75%] flex items-center justify-between">
              <input
                type="text"
                placeholder="Enter code"
                className="h-full px-8 focus:outline-none"
              />
              <button className="btn-black py-0! h-full">Apply Coupon</button>
            </div>
          </div>
        </div>
        <div className="basis-[30%]">
          <CartTotal />
        </div>
      </div>
    </div>
  );
}
