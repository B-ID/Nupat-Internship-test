import { IExpertData } from "./ExpertTeam";
import facebook from "../assets/icons/facebook.svg";
import { SocialIcon } from "react-social-icons";

type Props = {
  data: IExpertData;
};

export default function SingleExpert({ data }: Props) {
  const { img, role, name, socialUrl } = data;
  return (
    <div>
      <div className="w-[346px]">
        {/* Expert Image */}
        <div className="h-[426px]">
          <img
            className="h-full w-full object-cover"
            src={img}
            alt="expert-img"
            />
        </div>
        {/* Expert Info */}
        <div className="bg-heading px-6 pt-10 pb-6 text-white relative">
            <div className="primary-gradient inline-flex absolute -top-6 right-0">
              {socialUrl.map((url: string, i: number) => (
                <SocialIcon
                  fgColor="#1c1f35"
                  bgColor="transparent"
                  className=""
                  key={i}
                  url={url}
                />
              ))}
            </div>
          <h3 className="font-medium text-xl">{name}</h3>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
}
