import React from "react";
import SingleExpert from "./SingleExpert";
import { expertData } from "../util/expertData";
import SectionTitle from "./SectionTitle";

type Props = {};

export interface IExpertData {
    img: any
    name: string
    role: string
    socialUrl: any[]
}

export default function ExpertTeam({}: Props) {
  return (
    <div className="max-w-[1199.13px] mx-auto">
        <div className="text-center">
            <SectionTitle
            textColor="text-heading"
            background="bg-[#e8e8e8]"
            >
                The Transporters
            </SectionTitle>
            <h3 className="text-4xl text-heading font-bold mb-10">Meet Expert Team</h3>

        </div>
      <div className="flex justify-between">
        {expertData.map((data: IExpertData) => (
        <SingleExpert data={data} />
        ))}
      </div>
    </div>
  );
}
