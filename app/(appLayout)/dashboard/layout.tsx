import { DashboardNav } from "@/components/module/dashboard/DashboardNav";
import { MobileNav } from "@/components/module/dashboard/MobileNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full">
      <div className="w-full flex flex-col md:flex-row gap-6">
        {/* MOBILE TRIGGER */}
        <div className="md:hidden">
          <MobileNav />
        </div>

        {/* DESKTOP SIDEBAR */}
        {/* <aside className="hidden md:block flex-1 shrink-0 bg-white border rounded-lg p-4 h-fit"> */}
        <aside className="hidden md:block flex-1 shrink-0">
          <Card className="gap-3 shadow-none">
            <CardHeader className="px-4">
              <CardTitle className="text-xl font-medium text-gray-900">
                Navigation
              </CardTitle>
            </CardHeader>

            <CardContent className="px-4">
              <DashboardNav />
            </CardContent>
          </Card>
        </aside>

        {/* MAIN CONTENT */}
        <main className="flex-4">{children}</main>
      </div>
    </div>
  );
}
