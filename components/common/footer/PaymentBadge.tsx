import Image from "next/image";

export default function PaymentBadge({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={imageUrl}
        alt="payment methods"
        width={45}
        height={32}
        className=""
      />
    </div>
  );
}
