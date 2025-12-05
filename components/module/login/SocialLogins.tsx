import GoogleSvgIcon from "@/components/common/icons/GoogleSvgIcon";
import { Button } from "@/components/ui/button";
import { Facebook } from "lucide-react";

export function SocialLogins() {
  return (
    <form className="grid grid-cols-2 gap-4 w-full">
      <Button
        variant="outline"
        className="w-full gap-2 h-11 font-medium hover:bg-gray-50"
      >
        <GoogleSvgIcon />
        Google
      </Button>
      <Button
        variant="outline"
        className="w-full gap-2 h-11 font-medium hover:bg-gray-50"
      >
        <Facebook className="h-5 w-5 text-[#1877F2] fill-current" />
        Facebook
      </Button>
    </form>
  );
}
