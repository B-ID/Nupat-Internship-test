import React from "react";
import AboutItem from "./AboutItem";
import { aboutData } from "../util/aboutData";
import SectionTitle from "./SectionTitle";

type Props = {};

export interface IAboutData {
    Icon: any
    title: string
    content: string
}

export default function About({}: Props) {
  return (
    <div className="max-w-[1199.13px] flex mx-auto py-[96px]">
      <div>
        <SectionTitle
       background="bg-[#f3f3f3]" 
       textColor="text-heading"
        >
            What We Do
            </SectionTitle>
        <h1 className="text-4xl font-bold text-heading">
          Safe & Reliable Cargo Solutions
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8">
        {aboutData.map((data: any, i) => (
            <AboutItem key={`about/${i}`} data={data}/>
        ))}

      </div>
    </div>
  );
}
