import { ITransportData } from "./Transport";

type Props = {
  data: ITransportData;
};

export default function TransportCard({ data }: Props) {
  const { img, transportCategory, transportType } = data;
  return (
    <div className="">
      <div className="relative h-[407.91px] w-[320.17px]">
        <img className="object-cover w-full h-full" src={img} alt="tanker" />
        <div className="absolute bottom-0 w-full h-24 secondary-gradient">
          <div className="p-4">
            <p className="text-xl font-medium text-white">
              {transportCategory}
            </p>
            <p className="text-primary1">{transportType}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
