import heroImg from "../assets/images/heroImg.png";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
import facebook from "../assets/icons/facebook.svg";
import linkedIn from "../assets/icons/linkedIn.svg";
import SectionTitle from "./SectionTitle";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Button from "./Button";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    // Home
    <div className="">
      <div className="bg-primary2/25 absolute w-full z-10">
        <div className="max-w-[1199.13px] mx-auto flex items-center justify-between">
          {/* Header Links */}
          <div className="text-white list-none flex items-center gap-4 ">
            <li>
              <a href="" className="links">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="links">
                About
              </a>
            </li>
            <li>
              <a href="" className="links flex items-center gap-2">
                Pages
                <ChevronDownIcon className="h-4" />
              </a>
            </li>
            <li>
              <a href="" className="links">
                Project
              </a>
            </li>
            <li>
              <a href="" className="links">
                Contact
              </a>
            </li>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-4">
              <img className="h-10" src={instagram} alt="instagram-icon" />
              <img className="h-8" src={facebook} alt="facebook-icon" />
              <img className="h-8" src={twitter} alt="twitter-icon" />
              <img className="h-8" src={linkedIn} alt="likedIn-icon" />
            </div>
            <button className="font-medium p-4 bg-white text-headeing transition hover:bg-primary1">
              Request Qoute
            </button>
          </div>
        </div>
      </div>
      <div className="h-[875px] relative">
        <img
          className="w-full h-full object-cover"
          src={heroImg}
          alt="hero-img"
        />
        {/* Hero Description */}
        <div className="absolute top-56 w-full z-20">
          <div className="text-white max-w-[1199.13px] mx-auto">
            <SectionTitle textColor="text-white" background="bg-primary2/25">
              Logistics & Supply Chain Solutions
            </SectionTitle>
            <h1 className="text-6xl font-bold leading-[71px] mb-2">
              Your Gateway <br /> to any Destination <br /> in the World
            </h1>
            <p className="text-white mb-4">
              In augue ligula, feugiat ut nulla consequat. Ut est lacus,
              molestie in arcu <br /> no, iaculis vehicula ipsum. Nunc faucibus,
              nisl id dapibus finibus, enim <br /> diam interdum nulla, sed
              laoreet risus lectus.{" "}
            </p>
            {/* Reusable button component */}
            <div className="relative inline-flex">
              {/* <button className="primary-gradient w-[194px] h-[60px] font-medium text-primary2">
                Explore More
              </button> */}
              <Button
                gradient="primary-gradient"
                textColor="text-primary2"
                bottomRightAccent=""
              >
                Explore More
                {/* <div className='h-[105.9px] border w-[68px] hover:w-[120px] absolute bg-white top-4 -right-4 rounded-full rotate-[23.72deg]' /> */}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
