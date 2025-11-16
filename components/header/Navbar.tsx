import { ChevronDown, Menu, PhoneCall } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export default function Navbar() {
  return (
    // <div className="h-[60px] bg-gray-800 text-white flex justify-between">
    <div className="relative left-1/2 -translate-x-1/2 w-screen h-[60px] bg-gray-800 text-white flex justify-between">
      <div className="w-[90%] mx-auto flex items-center justify-between h-full">
        <div className="h-full flex gap-10">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 h-full">
              <div className="flex items-center justify-center bg-success h-full w-16">
                <Menu className="w-7 h-7 text-white" />
              </div>
              <span className="text-[16px]">All Categories</span>
              <ChevronDown className="w-6 h-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Fresh Fruit</DropdownMenuItem>
              <DropdownMenuItem>Vegetable</DropdownMenuItem>
              <DropdownMenuItem>River Fish</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex items-center space-x-9">
            <Link href={"/"}>Home</Link>
            <Link href={"/shop"}>Shop</Link>
            <Link href={"/blog"}>Blog</Link>
            <Link href={"/about"}>About Us</Link>
            <Link href={"/contact"}>Contact Us</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <PhoneCall />
          <span>(219) 555-0114</span>
        </div>
      </div>
    </div>
  );
}
