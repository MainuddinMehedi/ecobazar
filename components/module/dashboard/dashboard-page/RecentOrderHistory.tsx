import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import OrderHistoryTable from "../OrderHistoryTable";

export default function RecentOrderHistory() {
  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <h3 className="text-xl font-medium text-gray-900">
          Recent Order History
        </h3>
        <Button variant={"link"} className="text-success">
          View All
        </Button>
      </CardHeader>

      <CardContent>
        <OrderHistoryTable />
      </CardContent>
    </Card>
  );
}
