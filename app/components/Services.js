import Image from "next/image";
import { PiFlowerLotusThin } from "react-icons/pi";
import services from "@/public/services.png";
import towel from "@/public/towel.png";
export default function Services() {
  return (
    <div className="flex flex-col justify-center items-center my-40">
      <PiFlowerLotusThin className="text-[#F6526D] text-4xl text-center font-extrabold" />
      <h1 className="title text-[#F6526D] text-4xl ms-2">
        Welcome Spa and Salon
      </h1>
      <h1 className="text-4xl min-sm:text-6xl font-semibold poppins">
        Salon Services
      </h1>
      <div className="relative">
        <Image src={services} className="mt-10 mx-auto w-[80%] lg:w-full" />
        <Image
          src={towel}
          className="absolute bottom-[-14%] lg:bottom-[-20%] right-0 w-[300px] lg:w-[400px]"
        />

        <div
          className="flex flex-col w-full px-4 lg:flex-row lg:w-auto justify-center mx-auto lg:mx-0 items-center text-center md:text-start lg:absolute lg:top-30 2xl:top-40 lg:left-1/2 lg:transform lg:-translate-x-1/2 gap-4 mt-20 lg:mt-0
"
        >
          <div className="bg-[#D2F2F8] mx-25 2xl:mx-30  w-full lg:w-[400px] p-10 2xl:p-10">
            <h1 className="text-3xl font-medium poppins">
              Detox Therapy Service
            </h1>
            <p className="mt-4 text-zinc-600">
              Lorem ipsum dolor sit amet, consec tetuer. Proin gravida nib.
            </p>
          </div>

          <div className="bg-[#FFE5E0] mx-25 2xl:mx-30 2xl:ms-40 w-full lg:w-[400px] p-10 2xl:p-10">
            <h1 className="text-3xl font-medium poppins">
              Vacuum Suction Therapy
            </h1>
            <p className="mt-4 text-zinc-600">
              Lorem ipsum dolor sit amet, consec tetuer. Proin gravida nib.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col w-full gap-4 px-4 lg:flex-row lg:w-auto justify-center lg:absolute lg:bottom-30 2xl:bottom-25 lg:left-1/2 lg:transform lg:-translate-x-1/2 items-center text-center md:text-start mt-2
"
        >
          <div className="bg-[#E9F2B0] mx-25 2xl:mx-30  w-full lg:w-[400px] p-10 2xl:p-10">
            <h1 className="text-3xl font-medium poppins">Wood/Metal Therapy</h1>
            <p className="mt-4 text-zinc-600">
              Lorem ipsum dolor sit amet, consec tetuer. Proin gravida nib.
            </p>
          </div>
          <div className="bg-[#E1D4F3] mx-25 2xl:mx-30 2xl:ms-40 w-full lg:w-[400px] p-10 2xl:p-10">
            <h1 className="text-3xl font-medium poppins">
              Face Therapy Service
            </h1>
            <p className="mt-4 text-zinc-600">
              Lorem ipsum dolor sit amet, consec tetuer. Proin gravida nib.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
