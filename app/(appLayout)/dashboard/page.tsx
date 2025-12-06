import BillingAddressCard from "@/components/module/dashboard/dashboard-page/BillingAddressCard";
import RecentOrderHistory from "@/components/module/dashboard/dashboard-page/RecentOrderHistory";
import UserProfileCard from "@/components/module/dashboard/dashboard-page/UserProfileCard";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* user overview */}
      <div className="flex gap-6">
        <UserProfileCard />
        <BillingAddressCard />
      </div>

      {/* order history table */}
      <div>
        <RecentOrderHistory />
      </div>
    </div>
  );
}
