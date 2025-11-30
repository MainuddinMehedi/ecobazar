import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Label } from "@/components/ui/label";

export default function OrderSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-gray-900 font-medium text-xl">
          Order Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-9">
        {/* Product List would go here (standard div/flex) */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/products/product-4.png"
                alt="product image"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-sm text-gray-900">
                Green Capsicum {`x5`}
              </span>
            </div>
            <span className="text-sm font-medium text-gray-900">$70.00</span>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Image
                src="/assets/products/product-8.png"
                alt="product image"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-sm text-gray-900">Red Capsicum {`x5`}</span>
            </div>
            <span className="text-sm font-medium text-gray-900">$70.00</span>
          </div>
        </div>

        <div className="space-y-4">
          <dl className="flex justify-between">
            <dt className="text-sm text-gray-700">Subtotal:</dt>
            <dd className="text-sm font-medium text-gray-900">$114.00</dd>
          </dl>

          <Separator />

          <dl className="flex justify-between">
            <dt className="text-gray-700 text-sm">Shipping:</dt>
            <dd className="text-sm font-medium text-gray-900">Free</dd>
          </dl>

          <Separator />

          <dl className="flex justify-between">
            <dt className="text-gray-700 text-[16px]">Total:</dt>
            <dd className="text-lg font-semibold text-gray-900">$114.00</dd>
          </dl>
        </div>

        {/* Payment Method */}
        <div className="space-y-5">
          <h4 className="text-gray-900 font-medium text-xl">Payment Method</h4>

          <RadioGroup defaultValue="cod">
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="cod"
                id="cod"
                className={`border-gray-200
                  data-[state=checked]:border-success data-[state=checked]:text-success w-4 h-4 [&_svg]:h-2.5 [&_svg]:w-2.5 
                  focus-visible:ring-success [&_svg]:fill-success
                `}
              />
              <Label htmlFor="cod" className="text-sm text-gray-700">
                Cash on Delivery
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="paypal"
                id="paypal"
                className={`border-gray-200
                  data-[state=checked]:border-success data-[state=checked]:text-success w-4 h-4 [&_svg]:h-2.5 [&_svg]:w-2.5 
                  focus-visible:ring-success [&_svg]:fill-success
                `}
              />
              <Label htmlFor="paypal" className="text-sm text-gray-700">
                Paypal
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="amazonPay"
                id="paypal"
                className={`border-gray-200
                  data-[state=checked]:border-success data-[state=checked]:text-success w-4 h-4 [&_svg]:h-2.5 [&_svg]:w-2.5 
                  focus-visible:ring-success [&_svg]:fill-success
                `}
              />
              <Label htmlFor="amazonPay" className="text-sm text-gray-700">
                Amazon Pay
              </Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="btn-normal w-full p-5!">Place Order</Button>
      </CardFooter>
    </Card>
  );
}
