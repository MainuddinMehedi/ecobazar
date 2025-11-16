import { MapPin } from "lucide-react";
import Link from "next/link";

export default function Topbar() {
  return (
    <div className="flex justify-between items-center py-3 text-gray-600 text-sm border-b border-b-gray-50">
      <div>
        <span className="flex items-center gap-1">
          <MapPin className="h-6" />
          Store Location: Lincoln- 344, Illinois, Chicago, USA
        </span>
      </div>
      <div className="flex gap-5">
        <div className="space-x-2">
          <select name="language" id="language">
            <option value="usa">Eng</option>
            <option value="canada">Bn</option>
          </select>
          <select name="currency" id="currency">
            <option value="usd">USD</option>
            <option value="tk">TK</option>
          </select>
        </div>
        <div className="space-x-2">
          <Link href="/signin">Sign In</Link>
          <span>/</span>
          <Link href="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}
