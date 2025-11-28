import { BadgePercent, Leaf, Play, TicketPercent } from "lucide-react";

export default function PromoVideoCard() {
  return (
    <div className="space-y-6">
      <div className="relative rounded-lg overflow-hidden bg-gray-100 min-h-[350px] group">
        {/* Background Image Placeholder */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{
            backgroundImage: "url('/assets/info-video-placeholder.png')",
          }} // Replace with actual image
        >
          {/* gray fallback */}
          <div className="w-full h-full bg-linear-to-tr from-gray-200 to-gray-300 flex items-center justify-center">
            <span className="text-gray-400 text-xs">[Courier Image Here]</span>
          </div>
        </div>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="h-12 w-12 bg-success rounded-full flex items-center justify-center hover:scale-110 transition-all shadow-lg text-white">
            <Play className="w-5 h-5 fill-current ml-1" />
          </button>
        </div>
      </div>

      {/* Footer Info Box */}
      <div className="bg-white/95 backdrop-blur-sm py-9 px-5 rounded-lg shadow-sm border border-gray-100">
        <div className="flex items-center justify-between gap-4">
          {/* Item 1 */}
          <div className="flex items-start gap-3">
            <BadgePercent className="w-6 h-6 text-green-600" />
            <div className="space-y-0.5">
              <h4 className="font-bold text-sm">64% Discount</h4>
              <p className="text-xs text-muted-foreground">
                Save your 64% money with us
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-3">
            <Leaf className="w-6 h-6 text-green-600" />
            <div className="space-y-0.5">
              <h4 className="font-bold text-sm">100% Organic</h4>
              <p className="text-xs text-muted-foreground">
                100% Organic Vegetables
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
