import React from "react";
import TransportCard from "./TransportCard";
import { transportData } from "../util/transportData";
import Button from "./Button";

type Props = {};

export interface ITransportData {
  img: string;
  transportCategory: string;
  transportType: string;
}

export default function Transport({}: Props) {
  return (
    <div>
      <p className="text-center text-4xl mb-9 text-heading font-bold">
        Transporting Across The World
      </p>
      <div className="flex justify-center space-x-4 overflow-x-auto">
        {transportData.map((data: ITransportData) => (
          <TransportCard data={data} />
        ))}
      </div>
      <div className="h-[400px] grid place-items-center primary-gradient -mt-24">
        <Button
          gradient="bg-primary2"
          textColor="text-white"
          bottomRightAccent=""
        >
          More Work
        </Button>
      </div>
    </div>
  );
}
