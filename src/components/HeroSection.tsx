import heroImg from "../assets/Images/heroImg.png";
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
    <div className="relative">
      <div className="absolute z-10 w-full bg-primary2/25">
        <div className="mx-auto flex max-w-[1199.13px] items-center justify-between">
          {/* Header Links */}
          <div className="flex items-center gap-4 text-white list-none ">
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
              <a href="" className="flex items-center gap-2 links">
                Pages
                <ChevronDownIcon className="h-4" />
              </a>
            </li>
            <li>
              <a href="#project" className="links">
                Project
              </a>
            </li>
            <li>
              <a href="#contact" className="links">
                Contact
              </a>
            </li>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-4 ">
              <img className="h-10" src={instagram} alt="instagram-icon" />
              <img className="h-8" src={facebook} alt="facebook-icon" />
              <img className="h-8" src={twitter} alt="twitter-icon" />
              <img className="h-8" src={linkedIn} alt="likedIn-icon" />
            </div>
            <button className="p-4 font-medium transition bg-white text-headeing hover:bg-primary1">
              Request Qoute
            </button>
          </div>
        </div>
      </div>
      <div className="relative h-[875px] w-full">
        <img
          className="object-cover w-full h-full"
          src={heroImg}
          alt="hero-img"
        />
        {/* <div className="w-full h-full bg-fixed bg-no-repeat bg-left-cover custom-img" /> */}

        {/* Hero Description */}
        <div className="absolute z-20 w-full top-56">
          <div className="mx-auto max-w-[1199.13px] text-white">
            <SectionTitle textColor="text-white" background="bg-primary2/25">
              Logistics & Supply Chain Solutions
            </SectionTitle>
            <h1 className="mb-2 text-6xl font-bold leading-[71px]">
              Your Gateway <br /> to any Destination <br /> in the World
            </h1>
            <p className="mb-4 text-white">
              In augue ligula, feugiat ut nulla consequat. Ut est lacus,
              molestie in arcu <br /> no, iaculis vehicula ipsum. Nunc faucibus,
              nisl id dapibus finibus, enim <br /> diam interdum nulla, sed
              laoreet risus lectus.{" "}
            </p>
            
            {/* Reusable button component */}
            <div className="relative inline-flex">
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
