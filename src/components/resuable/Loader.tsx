import React from "react";
import Logo from "./Logo";

const Loader = () => {
  return (
    <div className="w-[100vw] h-[100vh] bg-primary-10 flex flex-col px-[100px] md:px-[5%] py-[32px] md:py-[20px]">
      <Logo whiteText={false} />

      <div className="flex flex-col items-center gap-[45px] md:gap-[30px] mt-[60px] md:mt-[40px]">
        <div className="bg-[#D9D9D9] w-[40%] md:w-full h-[40vh] md:h-[350px] rounded-[20px]" />
        <h2 className="font-normal text-[32px] md:text-[24px] leading-[48px] md:leading-[36px] text-tertiary-80">
          Transition To Glory 🕊️
        </h2>
        <h1 className="text-primary-base font-[700] text-[132px] md:text-[100px] leading-[132px] md:leading-[100px]">
            10%
        </h1>
      </div>
    </div>
  );
};

export default Loader;
