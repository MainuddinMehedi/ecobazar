import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SortDropdown() {
  return (
    <div className="flex gap-2 items-center">
      <span className="text-[15px] text-gray-500">Sort by: </span>
      <Select defaultValue="latest">
        <SelectTrigger className="w-[180px] py-5 border-gray-200 focus:ring-success/20 focus:ring-offset-0 rounded [&>svg]:h-5 [&>svg]:w-5 [&_svg]:opacity-100">
          <SelectValue
            placeholder="Sort by"
            className="text-gray-700 text-[15px]"
          />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="latest">Latest</SelectItem>
          <SelectItem value="price-low">Price: Low to High</SelectItem>
          <SelectItem value="price-high">Price: High to Low</SelectItem>
          <SelectItem value="rating">Best Rating</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
