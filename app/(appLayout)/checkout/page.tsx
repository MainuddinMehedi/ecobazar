import BillingInfo from "@/components/module/checkout/BillingInfo";
import OrderSummary from "@/components/module/checkout/OrderSummary";

export default function CheckoutPage() {
  return (
    <div className="container py-6 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Left Column: Billing Info */}
      <BillingInfo />

      {/* Right Column: Order Summary */}
      <OrderSummary />
    </div>
  );
}
