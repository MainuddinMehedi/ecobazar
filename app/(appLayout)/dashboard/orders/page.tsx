import DashboardPagination from "@/components/module/dashboard/DashboardPagination";
import OrderHistoryTable from "@/components/module/dashboard/OrderHistoryTable";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function OrdersHistoryPage() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-medium text-gray-900">
            Orders History
          </CardTitle>
        </CardHeader>

        <CardContent>
          <OrderHistoryTable />
        </CardContent>

        <CardFooter>
          <DashboardPagination totalPages={10} />
        </CardFooter>
      </Card>
    </div>
  );
}
