import Image from "next/image";
import Link from "next/link";
import PaymentBadge from "./PaymentBadge";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1A1A1A] pt-[60px] pb-8 text-gray-300 font-sans">
      <div className="container mx-auto px-4 xl:px-0 w-[90%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-[5px] mb-16">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <Image
              src={"/assets/Logo.svg"}
              alt="Logo"
              width={183}
              height={38}
              loading="eager"
              className="text-white"
            />

            {/* Description */}
            <p className="text-sm leading-6 text-gray-400 mb-4 max-w-[336px]">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </p>

            {/* Contact Info with Underlines */}
            <div className="flex flex-wrap gap-4 text-sm font-medium text-white">
              <a
                href="tel:2195550114"
                className="pb-1 border-b-2 border-[#00B207] hover:text-[#00B207] transition-colors"
              >
                (219) 555-0114
              </a>
              <span className="text-gray-500">or</span>
              <a
                href="mailto:Proxy@gmail.com"
                className="pb-1 border-b-2 border-[#00B207] hover:text-[#00B207] transition-colors"
              >
                Proxy@gmail.com
              </a>
            </div>
          </div>

          {/* Column 2: My Account */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-lg font-medium mb-5">My Account</h3>
            <ul className="flex flex-col gap-3 text-sm">
              {["My Account", "Order History", "Shoping Cart", "Wishlist"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 3: Helps */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-lg font-medium mb-5">Helps</h3>
            <ul className="flex flex-col gap-3 text-sm">
              {["Contact", "Faqs", "Terms & Condition", "Privacy Policy"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Column 4: Proxy */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-lg font-medium mb-5">Proxy</h3>
            <ul className="flex flex-col gap-3 text-sm">
              {["About", "Shop", "Product", "Track Order"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Modile apps */}
          <div className="space-y-5">
            <h1 className="text-xl font-medium text-nowrap">
              Download our Mobile App
            </h1>
            <div className="flex gap-3">
              <Image
                src={"/assets/footer-images/App Store.png"}
                alt="App Store"
                width={154}
                height={58}
              />
              <Image
                src={"/assets/footer-images/Google Play.png"}
                alt="Google Play"
                width={154}
                height={58}
              />
            </div>
          </div>

          {/* Column 5: Categories */}
          {/* <div className="lg:col-span-2">
            <h3 className="text-white text-lg font-medium mb-5">Categories</h3>
            <ul className="flex flex-col gap-3 text-sm">
              {[
                "Fruit & Vegetables",
                "Meat & Fish",
                "Bread & Bakery",
                "Beauty & Health",
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* Bottom Section: Copyright & Payment */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            Ecobazar eCommerce © 2021. All Rights Reserved
          </p>

          {/* Payment Icons */}
          <div className="flex items-center gap-4">
            <PaymentBadge imageUrl="/assets/footer-images/Method=ApplePay.png" />
            <PaymentBadge imageUrl="/assets/footer-images/Method=Visa.png" />
            <PaymentBadge imageUrl="/assets/footer-images/Method=Discover.png" />
            <PaymentBadge imageUrl="/assets/footer-images/Method=Mastercard.png" />
            <PaymentBadge imageUrl="/assets/footer-images/secure-payment.png" />
          </div>
        </div>
      </div>
    </footer>
  );
}
