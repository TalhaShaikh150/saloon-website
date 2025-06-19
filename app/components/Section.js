import Image from "next/image";
import section from "@/public/section.jpg";
import { PiClockThin } from "react-icons/pi";

export default function Section() {
  return (
    <div className="flex flex-col items-center text-center lg:text-left lg:flex-row justify-center gap-20 2xl:gap-30">
      <div>
        <Image
          src={section}
          className="max-w-[400px] 2xl:max-w-[500px] h-[90%] rounded-2xl"
        />
      </div>

      <div className="flex justify-center flex-col max-w-[400px] min-sm:max-w-[600px] gap-5">
        <h1 className="title text-[#F6526D] text-4xl ms-2">
          Welcome Spa and Salon
        </h1>
        <h1 className="text-5xl min-sm:text-5xl">
          From Hair to Skincare, We Cover It All
        </h1>
        <p className="text-md min-sm:text-lg text-zinc-500 w-[100%]  poppins">
          Lorem ipsum dolor sit amet, consectetuer. Proin gravida nibh vel velit
          auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi
          elit onsequat ipsum, nec sagittis sem nibh id elitt nibh vulputate lie
          t Aenean sollicitudin, lorem quis bibe.
        </p>

        <div className="flex items-center justify-center lg:justify-start">
          <PiClockThin className="font-extralight text-6xl text-[#F6526D] rotate-[270deg]" />
          <div className="flex flex-col ms-3">
            <p className="text-xl font-medium poppins">
              Monday - Friday 08:00-19:00
            </p>
            <span className="text-sm text-zinc-500">
              Saturday and Sunday - CLOSED
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
