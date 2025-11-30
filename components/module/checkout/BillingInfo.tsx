import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function BillingInfo() {
  return (
    <div className="md:col-span-2 space-y-6">
      <h2 className="text-2xl font-medium text-gray-800">
        Billing Information
      </h2>

      {/* BillingInfo Section */}
      <div className="space-y-9">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-gray-800">
              First name
            </Label>
            <Input
              id="firstName"
              placeholder="Your first name"
              className="p-5"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName" className="text-gray-800">
              Last name
            </Label>
            <Input id="lastName" placeholder="Your last name" className="p-5" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company" className="text-gray-800">
              Company Name (optional)
            </Label>
            <Input id="company" placeholder="Company name" className="p-5" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="address" className="text-gray-800">
            Street Address
          </Label>
          <Input
            id="address"
            placeholder="2322, Baker Street"
            className="p-5"
          />{" "}
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label className="text-gray-800">Country / Region</Label>
            <Select>
              <SelectTrigger className="p-5 w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-gray-800">States</Label>
            <Select>
              <SelectTrigger className="p-5 w-full">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">colorado</SelectItem>
                <SelectItem value="uk">Lusiana</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="zipCode" className="text-gray-800">
              Zip Code
            </Label>
            <Input id="zipCode" placeholder="Zip Code" className="p-5" />
          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="space-y-5 pt-6">
        <h3 className="text-2xl font-medium text-gray-800">Additional Info</h3>
        <div className="space-y-2">
          <Label htmlFor="notes" className="text-gray-800">
            Order Notes (Optional)
          </Label>
          <Textarea
            id="notes"
            placeholder="Notes about your order..."
            className="h-[100px]"
          />
        </div>
      </div>
    </div>
  );
}
