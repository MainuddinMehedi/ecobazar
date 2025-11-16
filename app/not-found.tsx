import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={"/assets/404-Illustration.png"}
        alt="Not found"
        width={612}
        height={571}
      />
      <div className="space-y-5 flex flex-col items-center justify-center w-[612px]">
        <h1 className="text-5xl mt-3 text-gray-900">Oops! page not found</h1>
        <p className="text-gray-500 text-center text-lg">
          The page you requested doesn't exist. Please navigate back to the
          homepage or to the previous page.
        </p>
        <Link href="/" className="btn-normal">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
