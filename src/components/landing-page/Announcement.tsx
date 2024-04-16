import React, { useRef } from "react";

import { BsArrowUpRight } from "react-icons/bs";

import Image from "next/image";
import Arrow from "@/public/landing-page/Long Arrow.svg";
import DoveMarquee from "../resuable/DoveMarquee";
import ReadMoreContainer from "../resuable/ReadMoreContainer";

import Prof from "@/public/landing-page/Row 1/JBI_2937.jpg";

import { motion, useInView, useScroll, useTransform } from "framer-motion";

const Announcement = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const slideInFromRightHeader = useTransform(
    scrollYProgress,
    [0, 1],
    ["30%", "0%"]
  );

  return (
    <div
      className="w-[100vw] h-auto bg-tertiary-100 flex flex-col py-24 md:py-[20px] "
      ref={ref}
    >
      <div className="flex md:flex-col w-full gap-20 md:gap-10 px-[200px] md:px-[5%] md:pt-20 md:pb-0">
        <div className="w-[40%] md:w-full flex flex-col gap-[50px] md:gap-[25px]">
          <motion.h3
            style={{ x: slideInFromRightHeader }}
            className="text-tertiary-15 font-[700] text-[20px] md:text-[16px] leading-[30px] md:leading-[24px] md:text-center"
          >
            BURIAL ANNOUNCEMENT
          </motion.h3>
          <motion.div
            animate={{
              y: inView ? "0%" : "25%",
              transition: {
                duration: 1.5,
                ease: "easeOut",
              },
            }}
            className="w-full h-[300px]"
          >
            <Image
              src={Prof}
              alt="Prof Fayomi"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        <div className="w-[50%] md:w-full flex flex-col ">
          <motion.h2
            animate={{
              x: inView ? "0%" : "25%",
              transition: {
                duration: 1.5,
                ease: "easeOut",
              },
            }}
            className="text-white text-[36px] md:text-[26px] leading-[54px] md:leading-[39px] font-semibold md:text-center"
          >
            With deepest sorrow, we announce the burial arrangements for our
            beloved Father, Ven. Professor Jacob Adeleke Fayomi, who peacefully{" "}
            <span className="text-tertiary-20">
              passed away on the 4th of March 2024.
            </span>
          </motion.h2>
        </div>
      </div>

      <div className="flex md:flex-col-reverse md:gap-12 w-full justify-between items-center mt-[72px] pl-[200px] md:pl-[5%] md:pr-[5%]">
        <ReadMoreContainer
          useFixed={false}
          style="yellow"
          text="Read more"
          onClick={() => {}}
        />
        <div className="h-[210px] md:h-[140px] border border-[#862D37] border-x-0 w-[55%] md:w-full flex gap-[60px] md:gap-0 md:justify-between justify-start items-center">
          <h2 className="text-white text-[36px] md:text-[26px] leading-[54px] md:leading-[39px] font-semibold">
            Age
          </h2>
          <Image
            src={Arrow}
            alt="arrow"
            className="w-[200px] md:w-[120px] h-auto"
          />
          <h1 className="font-semibold text-[132px] md:text-[80px] leading-[132px] md:leading-[80px] text-primary-base">
            75
          </h1>
        </div>
      </div>

      <div className="mt-20 w-full">
        <DoveMarquee />
      </div>
    </div>
  );
};

export default Announcement;
