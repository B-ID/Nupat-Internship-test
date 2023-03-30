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
    <div className="mx-auto max-w-[1199.13px]">
      <div>
        {/* Testimonial Header */}
        <SectionTitle background="#f3f3f3" textColor="text-heading">
          Testimonial
        </SectionTitle>
        <div className="mb-10 flex justify-between">
          <h2 className="text-4xl font-bold text-heading">
            What our Customer Say
          </h2>
          <div className="flex gap-4">
            <div className="primary-gradient h-12 w-12 cursor-pointer rounded-full p-2">
              <ArrowLeftIcon className="text-heading" />
            </div>
            <div className="h-12 w-12 cursor-pointer rounded-full bg-primary2 p-2">
              <ArrowRightIcon className="text-white" />
            </div>
          </div>
        </div>

        {/* Testimonial Card*/}
        <div className=" flex items-start">
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
            textColor="text-white"
          />
        </div>
      </div>
    </div>
  );
}
