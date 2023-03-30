import React from "react";
import BlogPost from "./BlogPost";
import Button from "./Button";
import SectionTitle from "./SectionTitle";
import port2 from "../assets/Images/port2.png";
import readMore from "../assets/Images/read-more.png";
import broker from "../assets/Images/broker.png";

type Props = {};

export default function Blog({}: Props) {
  return (
    <>
      <div className="mx-auto max-w-[948px]">
        {/* Blog Header */}
        <div className="mb-[39px] text-center">
          <SectionTitle background="bg-[#e8e8e8]">Our Blog</SectionTitle>
          <h3 className="text-4xl font-bold text-heading">Our Latest News</h3>
        </div>

        {/* Blog posts */}
        <div className="mb-[39px] space-y-8 last-of-type:border-b last-of-type:border-gray-600 last-of-type:pb-6 ">
          <BlogPost
            imgUrl={port2}
            title="Inland freight a worthy solution for your business"
            date="08"
          />
          <BlogPost
            imgUrl={readMore}
            textColor="text-[#ffbe3a]"
            title="How technology can help redraw the supply chain map"
            date="12"
          />
          <BlogPost
            imgUrl={broker}
            title="Five things you should have ready for your broker"
            date="25"
          />
        </div>
      </div>
      <div className="text-center">
        <Button
          gradient="bg-primary2"
          textColor="text-white"
          bottomRightAccent=""
        >
          More Blog
        </Button>
      </div>
    </>
  );
}
