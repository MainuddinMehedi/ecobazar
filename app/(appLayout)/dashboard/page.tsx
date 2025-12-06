import BillingAddressCard from "@/components/module/dashboard/BillingAddressCard";
import UserProfileCard from "@/components/module/dashboard/UserProfileCard";

export default function DashboardPage() {
  return (
    <div>
      {/* user overview */}
      <div className="flex gap-4">
        <UserProfileCard />
        <BillingAddressCard />
      </div>

      {/* order history table */}
      <div></div>
    </div>
  );
}
