import React from "react";
import containerImg from "../assets/Images/container.png";
import SectionTitle from "./SectionTitle";
import flightService from "../assets/Images/flight-service.png";
import boxDelivery from "../assets/icons/box-delivery.png";
import cashIcon from "../assets/icons/cash-icon.png";

type Props = {};

export default function Services({}: Props) {
  return (
    <div className="">
      <div className="h-[504px] relative">
        <img
          className="h-full w-full object-bottom object-cover"
          src={containerImg}
          alt="container-img"
        />
        <div className="bg-gradient-to-t from-primary2 to bottom-0 absolute w-full h-32" />
      </div>

      {/* Service content */}
      <div className="max-w-6xl bg-white mx-auto -mt-32 relative z-20 ">
        <div className="pt-[120px] px-[86px] border-2 border-black flex items-start">
          <div className="basis-1/2">
            <SectionTitle background="bg-[#f3f3f3]" textColor="text-heading">
              Why Us
            </SectionTitle>
            <h2 className="text-4xl mb-3 font-bold text-heading">
              <span className="whitespace-nowrap">
                We Provide full range global
              </span>{" "}
              logistics solution
            </h2>
            <p className="text-paragraph text-justify mb-4">
              Leverage agile frameworks to provide a robust synopsis for
              strategy faster collaborative thinking to further the overall
              value proposition
            </p>
            <p className="text-paragraph">
              organically grow the holistic world view of disruptive innovation
              via workplace diversity and empowerment
            </p>

            {/* Service Features */}
            <div className="mt-4 space-y-4">
              <div className="flex items-center gap-4">
                <img src={boxDelivery} alt="box-delivery-icon" />
                <p>Delivery on Time</p>
              </div>

              <div className="flex items-center gap-4">
                <img src={cashIcon} alt="cash-icon" />
                <p>Optimized Travel Cost</p>
              </div>
            </div>
          </div>
          <div>
            <img src={flightService} alt="" />
          </div>
        </div>
      </div>

      {/* Service footer */}
      <div></div>
    </div>
  );
}
