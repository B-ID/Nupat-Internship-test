import calendar from "../assets/icons/calendar.png";

type Props = {
    imgUrl: any
    textColor?: string
    title: string
    date:string 
};

export default function BlogPost({ imgUrl, title, date, textColor}: Props) {
  return (
    <div className="flex sm:flex-col lg:flex-row border-t border-gray-600 pt-[39px]">
      {/* Thumbnail */}

      <div className="h-[308px] w-[453px] flex-shrink-0">
        <img className="object-cover w-full h-full" src={imgUrl} alt="" />
      </div>

      {/* Date */}
      <div className="mx-[36px] h-[56px] w-[51.33px]">
        <img className="object-cover w-full h-full" src={calendar} alt="" />
        <div className="text-center">
          <h3 className="text-4xl font-bold text-heading">{date}</h3>
          <p className="text-paragraph">September</p>
        </div>
      </div>

      {/* Blog Content */}
      <div className="border-l border-gray-600 pl-[29px]">
        <h1 className={`mb-4 text-[25px] font-medium text-heading ${textColor}`}>
            {title}
        </h1>
        <p className="mb-[18px] text-paragraph">
          We are dedicated in creating added value for our customers by
          implementing modern technology in our work.
        </p>

        <div className="text-black">
          <li>urgent transport solutions</li>
          <li>Reliable & experienced staffs</li>
          <li>urgent transport solutions</li>
          <li>Reliable & experienced staffs</li>
        </div>
      </div>
    </div>
  );
}
