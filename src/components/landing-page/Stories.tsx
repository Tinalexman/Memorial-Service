import React, { useRef } from "react";
import { ImArrowUpRight2 } from "react-icons/im";
import DonateButton from "../resuable/DonateButton";

import Image from "next/image";
import R11 from "@/public/landing-page/R13.png";

import { motion, useInView } from "framer-motion";

const Stories = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef);

  return (
    <div
      id="story-div"
      className="w-[100vw] h-auto bg-tertiary-100 py-28 px-[200px] md:px-[5%] flex flex-col items-center"
    >
      <motion.h1
        ref={headerRef}
        animate={{
          scale: isHeaderInView ? 1.0 : 0.4,
          transition: {
            duration: 1.5,
            ease: "easeOut",
          },
        }}
        className="text-[100px] md:text-[60px] leading-[100px] text-primary-10 font-extrabold"
      >
        STORIES
      </motion.h1>

      <div className="flex md:flex-col w-full gap-[34px] mt-12 items-center">
        <div className="w-[50%] md:w-full h-[250px] rounded-tl-[12px] rounded-br-[12px] rounded-tr-[60px] rounded-bl-[60px] flex items-center justify-center relative">
          <Image
            src={R11}
            alt="image"
            className="w-full h-[250px] rounded-tl-[12px] rounded-br-[12px] rounded-tr-[60px] rounded-bl-[60px] object-cover"
          />
          <div className="w-[144px] h-[144px] rounded-full bg-secondary-20  text-[20px] md:text-[16px] leading-[30px] md:leading-[20.5px] flex flex-col justify-center items-center gap-2 absolute">
            <h3 className="text-[#A27E82] font-extrabold text-[10px] leading-[15px]">
              CHURCH
            </h3>
            <p className="text-secondary-base font-extrabold text-[14px] leading-[20px]">
              PREACHING
            </p>
            <ImArrowUpRight2 size={"16px"} className="text-secondary-base" />
          </div>
        </div>
        <div className="w-[50%] md:w-full h-[250px] bg-tertiary-15 rounded-bl-[12px] rounded-tr-[12px] rounded-br-[60px] rounded-tl-[60px]" />
      </div>
      <div className="flex md:flex-col w-full gap-[34px] mt-[34px] items-center">
        <div className="w-[50%] md:w-full h-[250px] bg-tertiary-15 rounded-tr-[12px] rounded-bl-[12px] rounded-tl-[60px] rounded-br-[60px]"></div>
        <div className="w-[50%] md:w-full h-[250px] bg-tertiary-15 rounded-tr-[12px] rounded-br-[12px] rounded-tl-[60px] rounded-bl-[60px]" />
      </div>
    </div>
  );
};

export default Stories;
