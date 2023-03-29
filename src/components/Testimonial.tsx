import SectionTitle from "./SectionTitle";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import user from "../assets/Images/user.png";
import user2 from "../assets/Images/user2.png";
import quote from "../assets/icons/quote.png";
import SingleTestimonial from "./SingleTestimonial";

type Props = {};

export default function Testimonial({}: Props) {
  return (
    <div className="max-w-[1199.13px] mx-auto">
      <div>
        {/* Testimonial Header */}
        <SectionTitle background="#f3f3f3" textColor="text-heading">
          Testimonial
        </SectionTitle>
        <div className="flex justify-between mb-10">
          <h2 className="text-heading text-4xl font-bold">
            What our Customer Say
          </h2>
          <div className="flex gap-4">
            <div className="primary-gradient w-12 h-12 p-2 rounded-full cursor-pointer">
              <ArrowLeftIcon className="text-heading" />
            </div>
            <div className="bg-primary2 w-12 h-12 p-2 rounded-full cursor-pointer">
              <ArrowRightIcon className="text-white" />
            </div>
          </div>
        </div>

        {/* Testimonial Card*/}
        <div className="flex items-start">
          {/* left */}
          <SingleTestimonial
            img={user}
            company="Fuel Company"
            name="Kathleen Smith"
            background="bg-[#f4f4f4]"
            textColor="text-paragraph"
          />

          {/* Right */}
          <SingleTestimonial
            img={user2}
            company="Restoration Company"
            name="John Martin"
            background="bg-primary2"
            textColor="text-gray-200"
          />
        </div>
      </div>
    </div>
  );
}
