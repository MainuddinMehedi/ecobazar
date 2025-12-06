import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function BillingAddressCard() {
  return (
    <Card className="w-full h-fit basis-1/2 gap-4">
      <CardHeader>
        <h2 className="text-gray-400 font-medium text-sm">BILLING ADDRESS</h2>
      </CardHeader>

      <CardContent className="space-y-3">
        <p className="font-medium text-lg text-gray-900">Dennis Nzioki</p>
        <p className="text-gray-600 text-sm">
          4140 Parker Rd. Allentown, New Runda 31134
        </p>
        <p className="text-[16px] text-gray-900">dennisnzioki@gmail.com</p>
        <p className="text-[16px] text-gray-900">254 555-0110</p>
      </CardContent>

      <CardFooter className="px-2">
        <Button variant={"link"} className="text-success">
          Edit Profile
        </Button>
      </CardFooter>
    </Card>
  );
}
