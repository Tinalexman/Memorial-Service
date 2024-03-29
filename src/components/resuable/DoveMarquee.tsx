import React from "react";
import RIP from "@/public/landing-page/RIP.svg";
import Image from "next/image";

const DoveMarquee = () => {
  return (
    <div className="flex items-center gap-2 animate-marquee">
      <Image src={RIP} alt="rip" className="h-[60px] w-auto" />
      <p className="text-[60px] leading-[80px] font-extrabold text-outline-2 ">
        🕊️
      </p>
      
    </div>
  );
};

export default DoveMarquee;
