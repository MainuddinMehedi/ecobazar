import { PhoneCall } from "lucide-react";
import Link from "next/link";
import CategoryDropdown from "./CategoryDropdown";

export default function Navbar() {
  return (
    // <div className="h-[60px] bg-gray-800 text-white flex justify-between">
    <div className="relative left-1/2 -translate-x-1/2 w-screen h-[60px] bg-gray-800 text-white  font-medium flex justify-between">
      <div className="w-[90%] mx-auto flex items-center justify-between h-full">
        <div className="h-full flex gap-10">
          <CategoryDropdown />

          <div className="flex items-center space-x-11">
            <Link href={"/"} className="whitespace-nowrap">
              Home
            </Link>
            <Link href={"/shop"} className="whitespace-nowrap">
              Shop
            </Link>
            <Link href={"/blog"} className="whitespace-nowrap">
              Blog
            </Link>
            <Link href={"/about"} className="whitespace-nowrap">
              About Us
            </Link>
            <Link href={"/contact"} className="whitespace-nowrap">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <PhoneCall size={28} />
          <span className="text-[17px]">(219) 555-0114</span>

          {/* isLoggedIn && <div>
            <User size={28} />
          </div> */}
        </div>
      </div>
    </div>
  );
}
