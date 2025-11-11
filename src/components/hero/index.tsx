import React from "react";
export const Hero = () => {
  return (
    <section
      className="
        flex flex-col items-center justify-center text-center px-6
        h-[380px] sm:h-[420px] md:h-[450px] lg:h-[473px]
     bg-[linear-gradient(180deg,rgba(0,0,0,0.9)_10%,rgba(44,0,72,0.8)_50%,rgba(56,158,255,0.6)_100%)]
        text-white gap-5
      "
    >
      <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold mb-5 ">
        Proven Results And Impacts
      </h1>

      <p className="max-w-2xl lg:w-[700px] text-[16px] sm:text-[18px] md:text-[19px] lg:text-[20px] font-medium text-gray-100 leading-relaxed">
        See how our innovative strategies have helped businesses thrive through
        our portfolio of successful projects and case studies.
      </p>
    </section>
  );
};
