import Header from "@/components/common/header/Header";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Ecobazar",
  description: "Fresh & Healthy Organic Food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cn(
          poppins.className,
          inter.className
        )} antialiased flex justify-center`}
      >
        <div className="w-[90%]">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
