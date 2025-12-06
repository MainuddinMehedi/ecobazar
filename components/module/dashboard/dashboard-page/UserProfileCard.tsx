import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function UserProfileCard() {
  return (
    <Card className="basis-1/2 gap-3">
      <CardHeader className="flex flex-col items-center justify-center">
        <Avatar className="w-[120px] h-[120px]">
          <AvatarImage src="/assets/users/user.png" alt="User Avatar" />
          <AvatarFallback>SC</AvatarFallback>
        </Avatar>
        <div className="w-full text-center">
          <p className="text-xl font-medium text-gray-900">Dennis Nzioki</p>
          <p className="text-gray-500 text-sm">Customer</p>
        </div>
      </CardHeader>
      <CardFooter className="flex items-center justify-center">
        <Button variant={"link"} className="text-success">
          Edit Profile
        </Button>
      </CardFooter>
    </Card>
  );
}
