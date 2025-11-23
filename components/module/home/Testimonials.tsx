import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    _id: "67f89a79c4c23ab8108a7c01",
    authorId: "67f89a79c4c23ab8108a4e01",
    authorName: "Dennis Nzioki",
    authorRole: "Customer",
    profilePictureUrl: "/assets/users/user-1.png",
    content:
      "Great service and quality products! Highly recommend EcoBazar for all your organic needs.",
    rating: 5,
  },
  {
    _id: "67f89a79c4c23ab8108a4e02",
    authorId: "67f89a79c4c23ab8108a4e02",
    authorName: "Dianne Russell",
    authorRole: "Customer",
    profilePictureUrl: "/assets/users/user-2.png",
    content:
      "I love shopping at EcoBazar. Their selection of fresh produce is unmatched, and the staff is always friendly and helpful.",
    rating: 5,
  },
  {
    _id: "67f89a79c4c23ab8108a4e03",
    authorId: "67f89a79c4c23ab8108a4e02",
    authorName: "Dianne Russell",
    authorRole: "Customer",
    profilePictureUrl: "/assets/users/user-2.png",
    content:
      "I love shopping at EcoBazar. Their selection of fresh produce is unmatched, and the staff is always friendly and helpful.",
    rating: 5,
  },
  {
    _id: "67f89a79c4c23ab8108a7c04",
    authorId: "67f89a79c4c23ab8108a4e01",
    authorName: "Dennis Nzioki",
    authorRole: "Customer",
    profilePictureUrl: "/assets/users/user-1.png",
    content:
      "Great service and quality products! Highly recommend EcoBazar for all your organic needs.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    // <div className="bg-gray-50 py-[100] ">
    <div className="relative left-1/2 -translate-x-1/2 w-screen bg-gray-50 py-[100] flex justify-between">
      <div className="w-[89%] mx-auto">
        <h1 className="heading-primary">Client Testimonials</h1>
        <Carousel>
          <CarouselPrevious className="ml-8 z-10" />
          <CarouselNext className="mr-8 z-10" />

          <CarouselContent className="flex gap-6">
            {testimonials.map((item) => (
              <TestimonialCard key={item._id} item={item} />
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
