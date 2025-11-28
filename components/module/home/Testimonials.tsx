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
    <div className="relative left-1/2 -translate-x-1/2 w-screen bg-gray-50 py-[100] flex justify-between">
      <div className="w-[89%] mx-auto">
        <Carousel>
          <div className="flex items-center justify-between mb-6">
            <h1 className="heading-primary">Client Testimonials</h1>
            <div className="flex items-center gap-2">
              <CarouselPrevious className="relative top-auto left-auto right-auto translate-y-0 w-11 h-11 bg-success text-white disabled:bg-white disabled:text-black hover:bg-success/85 hover:text-white" />
              <CarouselNext className="relative top-auto left-auto right-auto translate-y-0 w-11 h-11 bg-success text-white disabled:bg-white disabled:text-black hover:bg-success/85 hover:text-white" />
            </div>
          </div>

          <CarouselContent className="flex gap-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial._id}
                testimonial={testimonial}
              />
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
