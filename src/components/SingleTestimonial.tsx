import quote from '../assets/icons/quote.png'
import { StarIcon } from '@heroicons/react/24/solid'

type Props = {
    name: string
    company: string
    img: any
    background: string
    textColor: string
}

export default function SingleTestimonial({name, textColor, company, img, background}: Props) {
  return (
          <div className={`basis-1/2 px-[72px] py-[62px] ${textColor}  border ${background}`}>
            {/* Card Header */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-4">
                <div className="">
                  <img
                    className="w-full h-full object-cover"
                    src={img}
                    alt="testimonial-img"
                  />
                </div>

                <div>
                  <h3 className="text-heading text-xl font-medium">
                    {name}
                  </h3>
                  <p className="text-heading">{company}</p>
                </div>
              </div>

              <div className="">
                <img
                  className="w-full h-full object-cover"
                  src={quote}
                  alt="quote-icon"
                />
              </div>
            </div>
            {/* Card body */}
            <div className="mb-8">
              <p className="text-paragraph italic  mb-4">
                Leverage agile frameworks to provide a robust synopsis for
                strategy faster collaborative thinking to further the overall
                value proposition organically grow the holistic world view of
                disruptive innovation via workplace diversity and empowerment
              </p>
            </div>

            {/* Card Footer */}
            <div className="flex space-x-[3px]">
                <StarIcon className="h-[34px] fill-[#fdaf3b]" />
                <StarIcon className="h-[34px] fill-[#fdaf3b]" />
                <StarIcon className="h-[34px] fill-[#fdaf3b]" />
                <StarIcon className="h-[34px] fill-[#fdaf3b]" />
                <StarIcon className="h-[34px] fill-[#fdaf3b]" />
            </div>
          </div>

  )
}