import React from "react";
import SectionTitle from "./SectionTitle";
import { featuresData } from "../util/featuresData";
import pattern from "../assets/Images/pattern.png";
import airplaneImg from "../assets/Images/airplane-img.png";

type Props = {};

export default function Features({}: Props) {
  return (
    <div className="flex h-[897px]">
      {/* left */}
      <div className="relative hidden lg:inline-flex basis-1/2 bg-primary2 ">
        <div className="absolute left-0 md:left-[50px] xl:left-[140px] top-[142px] z-10 h-[329px] w-[153px] xl:h-[618px] xl:w-[925px]">
        {/* <div className="absolute left-0" > */}
          <img
            className="object-cover w-full h-full"
            src={airplaneImg}
            alt="airplane-img"
          />
        </div>
      </div>

      {/* right */}
      <div className="basis-1/2 bg-[#f4f4f4] py-[200px] pl-[162px] pr-[245px] relative">
        <div className="h-[503px] absolute top-[81px] left-[75px]">
          <img className="w-full h-full" src={pattern} alt="map-img" />
        </div>
        
        <div className="">
          <SectionTitle textColor="text-heading" background="bg-[#e8e8e8]">
            Why Choose
          </SectionTitle>
          <h3 className="text-4xl font-bold text-heading mb-[18px]">
            We create opportunity to <br /> reach potential
          </h3>
          <p className="mb-20 text-xl text-paragraph">
            Leverage agile frameworks to provide a robust synopsis for strategy
            foster collaborative thinking to further the overall value
            proposition
          </p>
          <div className="grid grid-cols-2 gap-y-4">
            {featuresData.map((data) => (
              <div className="flex items-center gap-4">
                <div>
                  <img src={data.Icon} alt="" />
                </div>
                <p>{data.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
