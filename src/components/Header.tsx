import logo from "../assets/Images/logo.png";
import {
  ClockIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";

type Props = {};

export default function Header({}: Props) {
  return (
    <nav className="bg-primary2">
      <div className="text-white flex items-center justify-between h-[160px] max-w-[1199.13px] mx-auto">
        <div className="flex-shrink-0 cursor-pointer">
          <img src={logo} alt="logo-img" />
        </div>
        {/* Details Container */}
        <div className="flex gap-10 text-sm">
          <div className="flex items-center gap-2">
            {/* icon */}
            <div className=" bg-[#111c55] p-3 inline-flex rounded-full border border-[#273270]">
              <ClockIcon className="h-7 text-primary1" />
            </div>

            {/* details */}
            <div className="whitespace-nowrap">
              <p>Mon-Sat 9.00 - 18.00</p>
              <p>Sunday Closed</p>
            </div>
          </div>

          <div className="flex items-center gap-2 cursor-pointer">
            {/* icon */}
            <div className=" bg-[#111c55] p-3 inline-flex rounded-full border border-[#273270]">
              <EnvelopeIcon className="h-7 text-primary1" />
            </div>

            {/* details */}
            <div className="">
              <p className="">Email</p>
              <p>contact@logistics.com</p>
            </div>
          </div>
          <div className="items-center hidden gap-2 md:flex">
            {/* icon */}
            <div className=" bg-[#111c55] p-3 inline-flex rounded-full border border-[#273270]">
              <PhoneIcon className="h-7 text-primary1" />
            </div>

            {/* Header details */}
            <div className="whitespace-nowrap">
              <p>Call Us</p>
              <p>(00) 112 365 489</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
