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
      <div className="p-4 border-r-2">
        <div className="w-12 h-10">
        <img 
        className="object-contain w-full h-full "
        src={Icon} alt="" />
        </div>
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-2xl font-medium text-primary2">{title}</h3>
        <p className="text-paragraph">{content}</p>
      </div>
    </div>
  );
}
