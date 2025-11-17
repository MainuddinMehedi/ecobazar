import { Handbag, Headset, Package, TruckElectric } from "lucide-react";

export default function Features() {
  return (
    <div className="w-full flex justify-center mb-30 relative -top-12">
      <div className="w-[85%] flex justify-between items-center gap-6 px-16 py-10 rounded-xl shadow-xl bg-white">
        {/* one */}
        <div className="flex gap-4">
          <TruckElectric className="text-success w-10 h-10" />
          <div>
            <h3 className="font-semibold text-[16px] text-gray-900">
              Free Shipping
            </h3>
            <p className="text-gray-400 text-sm">
              Free shipping on all orders over $50
            </p>
          </div>
        </div>

        {/* two */}
        <div className="flex gap-4">
          <Headset className="text-success w-10 h-10" />
          <div>
            <h3 className="font-semibold text-[16px] text-gray-900">
              24/7 Support
            </h3>
            <p className="text-gray-400 text-sm">Instant access to Support</p>
          </div>
        </div>

        {/* three */}
        <div className="flex gap-4">
          <Handbag className="text-success w-10 h-10" />
          <div>
            <h3 className="font-semibold text-[16px] text-gray-900">
              100% Secure Payments
            </h3>
            <p className="text-gray-400 text-sm">
              We ensure your money is safe
            </p>
          </div>
        </div>

        {/* four */}
        <div className="flex gap-4">
          <Package className="text-success w-10 h-10" />
          <div>
            <h3 className="font-semibold text-[16px] text-gray-900">
              Money-Back Guarantee
            </h3>
            <p className="text-gray-400 text-sm">
              30 Days Money-Back Guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
