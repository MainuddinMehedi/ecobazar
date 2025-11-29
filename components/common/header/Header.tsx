import { Handbag, Heart, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import Topbar from "./Topbar";
import { HeaderCartInfo } from "./HeaderCartInfo";

export default function Header() {
  return (
    <div>
      <Topbar />

      {/* Header */}
      <div className="flex justify-center">
        <div className="w-[90%] flex justify-between items-center h-24">
          <Link href="/">
            <Image
              src={"/assets/Logo.png"}
              alt="Logo"
              width={183}
              height={38}
              loading="eager"
            />
          </Link>

          {/* Search bar */}
          <div className="flex justify-between items-center gap-3 border rounded-lg pl-4 w-[35%]">
            <Search className="w-8 h-8" />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search"
              className="outline-none w-full"
            />
            <button className="bg-success text-white rounded-r-lg py-4 px-6 text-center">
              Search
            </button>
          </div>

          <div className="flex justify-center items-center gap-4">
            <Link href={"/wishlist"}>
              <Heart className="w-9 h-9 text-gray-800" />
            </Link>

            <span className="h-6 border-r bg-gray-200" />

            <HeaderCartInfo />
          </div>
        </div>
      </div>

      <Navbar />
    </div>
  );
}
