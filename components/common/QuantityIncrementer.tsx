import { Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";

export default function QuantityIncrementer() {
  return (
    <div className="flex items-center border rounded-full px-2 py-2 max-w-fit">
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full h-8 w-8 bg-gray-100"
        // onClick={handleDecrease}
        // disabled={quantity <= 1}
      >
        <Minus className="w-4 h-4" />
      </Button>
      <span className="w-12 text-center font-medium">5{/* {quantity} */}</span>
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full h-8 w-8 bg-gray-100"
        // onClick={handleIncrease}
        // disabled={quantity >= product.stock}
      >
        <Plus className="w-4 h-4" />
      </Button>
    </div>
  );
}
