import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead>ORDER ID</TableHead>
              <TableHead>DATE</TableHead>
              <TableHead>TOTAL</TableHead>
              <TableHead>STATUS</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* I have to Map the data here */}
            <TableRow>
              <TableCell className="font-medium">#738</TableCell>
              <TableCell>8 Sep, 2024</TableCell>
              <TableCell>$135.00 (5 Products)</TableCell>
              <TableCell>Processing</TableCell>
              <TableCell className="text-right">
                <Button
                  variant={"link"}
                  className="text-success font-medium p-0"
                >
                  View Details
                </Button>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">#738</TableCell>
              <TableCell>8 Sep, 2024</TableCell>
              <TableCell>$135.00 (5 Products)</TableCell>
              <TableCell>Processing</TableCell>
              <TableCell className="text-right text-success font-medium cursor-pointer">
                View Details
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
