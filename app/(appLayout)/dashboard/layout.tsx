import { DashboardNav } from "@/components/module/dashboard/DashboardNav";
import { MobileNav } from "@/components/module/dashboard/MobileNav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full">
      <div className="w-full flex flex-col md:flex-row gap-8">
        {/* MOBILE TRIGGER: Visible only on small screens (md:hidden) */}
        <div className="md:hidden">
          <MobileNav />
        </div>

        {/* DESKTOP SIDEBAR: Hidden on small screens, Block on medium+ */}
        <aside className="hidden md:block flex-1 shrink-0 bg-white border rounded-lg p-4 h-fit">
          <h2 className="text-gray-900 font-medium text-xl mb-4">
            Navigation
          </h2>
          <DashboardNav />
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-4">{children}</main>
      </div>
    </div>
  );
}
