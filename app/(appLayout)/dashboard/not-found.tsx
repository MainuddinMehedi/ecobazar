import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-12 flex flex-col items-center justify-center">
      <Image
        src={"/assets/404-Illustration.png"}
        alt="Not found"
        width={400}
        height={370}
        className="max-w-full"
      />
      <div className="space-y-5 flex flex-col items-center justify-center max-w-xl text-center mt-6">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
          Oops! Page not found
        </h1>
        <p className="text-gray-500 text-lg">
          The page you requested doesn&apos;t exist. Use the sidebar or go back
          to the homepage.
        </p>
        <Link href="/" className="btn-normal">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
