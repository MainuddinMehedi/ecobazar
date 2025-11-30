import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPinned, PhoneCall } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="">
      <section className="flex flex-col-2 gap-9">
        <div className="basis-1/6 shadow-lg p-3 rounded-xl flex flex-col justify-center">
          <div className="p-6 rounded-xl flex flex-col justify-center items-center gap-5">
            <MapPinned className="w-9 h-9 text-hard-primary" />
            <p className="text-[16px] text-gray-800 text-center">
              2715 Ash Dr. San Jose, South Dakota 83475
            </p>
          </div>

          <Separator />

          <div className="p-6 rounded-xl flex flex-col justify-center items-center gap-4">
            <Mail className="w-9 h-9 text-hard-primary" />
            <div className="space-y-1 text-center">
              <p className="text-[16px] text-gray-800">Proxy@gmail.com</p>
              <p className="text-[16px] text-gray-800">Help.proxy@gmail.com</p>
            </div>
          </div>

          <Separator />

          <div className="p-6 rounded-xl flex flex-col justify-center items-center gap-4">
            <PhoneCall className="w-9 h-9 text-hard-primary" />
            <div className="space-y-1 text-center">
              <p className="text-[16px] text-gray-800">(219) 555-0114</p>
              <p className="text-[16px] text-gray-800">(164) 333-0487</p>
            </div>
          </div>
        </div>

        {/* Right section */}
        <div className="basis-5/6 border rounded-xl shadow-lg p-12 space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold text-gray-900">
              Just Say Hello!
            </h2>
            <p className="text-sm text-gray-500 max-w-xl">
              Do you fancy saying hi to me or you want to get started with your
              project and you need my help? Feel free to contact me.
            </p>
          </div>
          <div className="space-y-5">
            <div className="flex gap-4">
              <Input type="text" placeholder="Your Name" className="p-5" />
              <Input
                type="email"
                placeholder="zakirsoft@gmail.com"
                className="p-5"
              />
            </div>
            <Input type="text" placeholder="Your subject" className="p-5" />
            <Textarea
              placeholder="Write your message here.."
              className="h-[120px] p-5"
            />
            <Button className="btn-normal py-6!">Send Message</Button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="basis-4/6"></section>
    </div>
  );
}
