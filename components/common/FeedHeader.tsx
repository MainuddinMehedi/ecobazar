import SortDropdown from "../module/shop/products/SortDropdown";

export default function FeedHeader() {
  return (
    <div className="h-[45px] flex justify-between items-center">
      <SortDropdown />

      <p className="text-[16px] text-gray-500">
        <span className="font-bold text-[16px] text-gray-900">52</span> Results
        found
      </p>
    </div>
  );
}
