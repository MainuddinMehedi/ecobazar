import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Newsletter() {
  return (
    <div className="flex justify-center items-center h-[162]">
      <div className="w-[89%] flex justify-between items-center">
        <div className="w-2/5 space-y-3">
          <h1 className="text-[26px] font-bold text-gray-900">
            Subscribe our Newsletter
          </h1>
          <p className="text-gray-400 text-sm">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna.
          </p>
        </div>

        <div className="flex items-center justify-end gap-14 w-3/5">
          <div className="rounded-[46] border border-gray-100 flex">
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              className="outline-none w-full px-6 "
            />
            <button className="btn-normal">Subscribe</button>
          </div>
          <div className="flex gap-6 cursor-pointer">
            <Facebook className="text-gray-700" />
            <Twitter className="text-gray-700" />
            <Instagram className="text-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
}
