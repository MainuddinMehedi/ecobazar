import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function OrderHistoryTable() {
  return (
    <Table>
      <TableHeader className="bg-gray-50">
        <TableRow>
          <TableHead className="font-medium text-[13px] text-gray-700">
            ORDER ID
          </TableHead>
          <TableHead className="font-medium text-[13px] text-gray-700">
            DATE
          </TableHead>
          <TableHead className="font-medium text-[13px] text-gray-700">
            TOTAL
          </TableHead>
          <TableHead className="font-medium text-[13px] text-gray-700">
            STATUS
          </TableHead>
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
              className="text-success font-medium p-0 h-0"
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
          <TableCell className="text-right">
            <Button
              variant={"link"}
              className="text-success font-medium p-0 h-0"
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
          <TableCell className="text-right">
            <Button
              variant={"link"}
              className="text-success font-medium p-0 h-0"
            >
              View Details
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
