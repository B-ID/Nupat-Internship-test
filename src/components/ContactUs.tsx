import React from "react";
import SectionTitle from "./SectionTitle";
import {
  ClockIcon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Button from "./Button";
import studio from '../assets/Images/studio.png'
import norto from '../assets/Images/norto.png'
import points from '../assets/Images/points.png'
import grandBox from '../assets/Images/grand-box.png'


type Props = {};

export default function ContactUs({}: Props) {
  return (
    <div className="bg-primary2">
      <div className="mx-auto max-w-[1199.13px] py-[143px]">
        <div className="flex gap-[88px]">
          {/* Contact details (left) */}
          <div className="w-[353px]">
            <SectionTitle background="bg-[#e8e8e8]/10" textColor="text-white">
              Contact
            </SectionTitle>
            <h3 className="mb-3 text-4xl font-bold text-white">
              Get in touch with us
            </h3>
            <p className="text-lg text-white">
              Leverage agile frameworks to provide a robust synopsis strategy
              for faster collaborative thinking to further the overall value
            </p>

            <div className="mt-8 space-y-4 text-sm text-white">
              <div className="flex items-center gap-4">
                {/* icon */}
                <div className=" inline-flex rounded-full border border-[#273270] bg-[#111c55] p-3">
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
                <div className=" inline-flex rounded-full border border-[#273270] bg-[#111c55] p-3">
                  <EnvelopeIcon className="h-7 text-primary1" />
                </div>

                {/* details */}
                <div className="">
                  <p className="">Email</p>
                  <p>contact@logistics.com</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {/* icon */}
                <div className=" inline-flex rounded-full border border-[#273270] bg-[#111c55] p-3">
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

          {/* Contact Form (right) */}
          <div className="flex-grow">
            <form className="mb-[49px]" action="">
              <div className="grid grid-cols-2 gap-8 pt-[42px] text-gray-300">
                <input
                  className="form-input"
                  type="text"
                  placeholder="Your Name*"
                />
                <input
                  className="form-input"
                  type="email"
                  placeholder="Email*"
                />
                <input
                  className="form-input"
                  type="tel"
                  placeholder="Phone Number*"
                />
                <input className="form-input" type="text" placeholder="City*" />
                <textarea
                  className="form-input col-span-2 h-[154px] w-full border border-paragraph bg-transparent"
                  placeholder="Your Message*"
                  name=""
                  id=""
                ></textarea>
              </div>
            </form>
            <Button
              textColor="text-heading"
              gradient="primary-gradient"
              bottomRightAccent=""
            >
              Submit Message
            </Button>
          </div>
        </div>
        <div className="mt-[70px] flex">
          <div className="h-[234px] w-[301px]">
            <img className="object-cover w-full h-full" src={studio} alt="" />
          </div>
          <div className="h-[234px] w-[301px]">
            <img className="object-cover w-full h-full" src={norto} alt="" />
          </div>
          <div className="h-[234px] w-[301px]">
            <img className="object-cover w-full h-full" src={points} alt="" />
          </div>
          <div className="h-[234px] w-[301px]">
            <img className="object-cover w-full h-full" src={grandBox} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
