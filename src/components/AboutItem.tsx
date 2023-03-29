import React from "react";
import serviceIcon from "../assets/icons/service-icon.png";
import deliveryIcon from '../assets/icons/delivery-icon.png'
import flightIcon from '../assets/icons/flight-icon.png'
import warehouseIcon from '../assets/icons/warehouse-icon.png'
import { IAboutData } from "./About";

type Props = {
    data: IAboutData
};

export default function AboutItem({data}: Props) {
    const {Icon, title, content} = data
  return (
    <div className="flex">
      <div className="border-r-2 p-4">
        <div className="h-10 aspect-square">
        <img 
        className="w-full h-full object-cover"
        src={Icon} alt="" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-2xl mb-2 font-medium text-primary2">{title}</h3>
        <p className="text-paragraph">{content}</p>
      </div>
    </div>
  );
}
