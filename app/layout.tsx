import { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";

// const geistSans = ({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

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
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className=""
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
