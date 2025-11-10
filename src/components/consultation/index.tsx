import React from "react";
import Image from "next/image";
import consultation from "../../../public/images/works/consultation.webp";

export const Consultation = () => {
  return (
    <section className="w-full bg-[#0b0b0b] py-10">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Left side: text content */}
        <div
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-5 
          m-5 sm:m-8 md:m-10 lg:pl-[50px] lg:py-[50px] lg:m-0"
        >
          <p className="text-white font-bold text-[18px] sm:text-[20px] lg:text-[40px]">
            Improve your business and make your work easy
          </p>

          <p className="text-white font-medium text-[10px] sm:text-[12px] lg:text-[22px] max-w-[500px]">
            Expert consulting solutions to drive growth, optimize operations,
            and simplify your path to success.
          </p>

          <button className="bg-[#389EFF] font-medium text-[10px] sm:text-[12px] lg:text-[16px] text-white py-3 px-6 rounded-lg hover:bg-[#2c7acc] transition-colors">
            Get a Free Consultation
          </button>
        </div>

        {/* Right side: image */}
        <div className="flex-1 flex justify-center w-full">
          <div className="relative w-[90%] sm:w-[80%] lg:w-full h-[250px] sm:h-[350px] lg:h-[450px]">
            <Image
              src={consultation}
              alt="Consultation"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
