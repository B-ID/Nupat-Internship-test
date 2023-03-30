import React from "react";
import footerImg from "../assets/Images/footer-img.png";
import logo from "../assets/Images/logo.png";
import {
  EnvelopeIcon,
  ClockIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Button from "./Button";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div>
      {/* Footer image */}
      <div className="h-[412px] w-full">
        <img className="object-cover w-full h-full" src={footerImg} alt="" />
      </div>

      {/* Footer Content */}
      <div className="bg-primary2">
        {/* content container*/}
        <div className="bg-white/[8%]">
          {/* container header */}
          <div className="mx-auto flex max-w-[1199.13px] items-center space-x-10 text-2xl font-medium text-white">
            <div className="bg-primary2 py-11 pl-[82px] pr-[172px]">
              <img src={logo} alt="" />
            </div>
            <div className="flex gap-20">
              <p>Pages</p>
              <p>Utillty</p>
              <p>Subscribe</p>
            </div>
          </div>
          {/* Container body */}
          <div className="bg-primary2">
            <div className="mx-auto grid max-w-[1199.13px] grid-cols-4 pl-[82px]">
              <div className="pb-[43px] pt-[39px]">
                <p className="text-white">
                  Leverage agile frameworks to provide a robust synopsis for
                  strategy collaborative thinking to further the overall value
                  proposition.
                </p>

                <div className="mt-8 space-y-4 text-sm text-white">
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
              <div className="list-none pt-[39px] text-white text-center space-y-4">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Our Project</li>
                <li>Pricing</li>
                <li>Contact</li>
              </div>

              <div className="list-none pt-[39px] text-white space-y-4">
                <li>Style Guide</li>
                <li>Changelog</li>
                <li>Licenses</li>
                <li>Protected</li>
                <li>Not Found</li>
              </div>
              <div className="pt-[39px]">
                <form>
                  <input className="w-full mb-5 form-input" type="text" placeholder="Email here*"/>
                  <div className="flex items-center">
                    <Button
                      gradient="primary-gradient"
                      textColor="text-heading"
                      bottomRightAccent=""
                    >
                      Send Now
                    </Button>
                    <SocialIcon bgColor='transparent' fgColor='white' url="https://linkedin.com" />
                    <SocialIcon bgColor='transparent' fgColor='white' url="https://twitter.com" />
                    <SocialIcon bgColor='transparent' fgColor='white' url="https://facebook.com" />
                  </div>
                </form>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      {/* footer copyright */}
      <div className="border-t border-gray-500 bg-primary2">
        <div className="mx-auto max-w-[1199.13px] flex justify-between py-4">
            <div className="text-white">
            <p className="pl-[82px]">Copyright &#169; TransitFlow | Designed by VictorFlow - Powered by Webflow.
            </p>
            </div>
            <div className="flex items-center gap-8 text-paragraph">
                <p>Style Guide</p>
                <p>Licenses</p>
                <p>Changelog</p>
                <p>Password</p>
            </div>
        </div>
      </div>
    </div>
  );
}
