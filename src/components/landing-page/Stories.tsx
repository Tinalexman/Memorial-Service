import React, { useRef } from "react";
import { ImArrowUpRight2 } from "react-icons/im";
import DonateButton from "../resuable/DonateButton";

import Image from "next/image";
import R11 from "@/public/landing-page/R13.png";
import R14 from "@/public/landing-page/Row 1/JBI_2901.jpg";
import R23 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_22.jpg";
import R31 from "@/public/landing-page/Row 3/CamScanner 04-06-2024 09.54_3.jpg";


import { motion, useInView } from "framer-motion";

const Stories = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef);

  const storiesRef = useRef(null);
  const isStoriesInView = useInView(storiesRef);

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

      <div
        ref={storiesRef}
        className="flex md:flex-col w-full gap-[34px] mt-12 items-center"
      >
        <motion.div
          animate={{
            x: isStoriesInView ? "0%" : "-50%",
            transition: {
              duration: 1.5,
              ease: "easeOut",
            },
          }}
          className="w-[50%] md:w-full h-[250px] overflow-hidden rounded-tl-[12px] rounded-br-[12px] rounded-tr-[60px] rounded-bl-[60px] flex items-center justify-center relative"
        >
          <Image src={R11} alt="image" className="w-full h-full object-cover" />
          <div className="w-[144px] h-[144px] rounded-full bg-secondary-20  text-[20px] md:text-[16px] leading-[30px] md:leading-[20.5px] flex flex-col justify-center items-center gap-2 absolute">
            <h3 className="text-[#A27E82] font-extrabold text-[10px] leading-[15px]">
              CHURCH
            </h3>
            <p className="text-secondary-base font-extrabold text-[14px] leading-[20px]">
              PREACHING
            </p>
            <ImArrowUpRight2 size={"16px"} className="text-secondary-base" />
          </div>
        </motion.div>
        <motion.div
          animate={{
            x: isStoriesInView ? "0%" : "50%",
            transition: {
              duration: 1.5,
              ease: "easeOut",
            },
          }}
          className="w-[50%] md:w-full h-[250px] overflow-hidden bg-tertiary-15 rounded-bl-[12px] rounded-tr-[12px] rounded-br-[60px] rounded-tl-[60px] relative flex items-center justify-center"
        >
          <Image src={R14} alt="image" className="w-full h-full object-cover" />
          <div className="w-[144px] h-[144px] rounded-full bg-secondary-20  text-[20px] md:text-[16px] leading-[30px] md:leading-[20.5px] flex flex-col justify-center items-center gap-2 absolute">
            <h3 className="text-[#A27E82] font-extrabold text-[10px] leading-[15px]">
              CHURCH
            </h3>
            <p className="text-secondary-base font-extrabold text-[14px] leading-[20px]">
              PREACHING
            </p>
            <ImArrowUpRight2 size={"16px"} className="text-secondary-base" />
          </div>
        </motion.div>
      </div>
      <div className="flex md:flex-col w-full gap-[34px] mt-[34px] items-center">
        <motion.div
          animate={{
            x: isStoriesInView ? "0%" : "-50%",
            transition: {
              duration: 1.5,
              ease: "easeOut",
            },
          }}
          className="w-[50%] md:w-full h-[250px] overflow-hidden bg-tertiary-15 rounded-tr-[12px] rounded-bl-[12px] rounded-tl-[60px] rounded-br-[60px] relative flex items-center justify-center"
        >
          <Image
            src={R23}
            alt="image"
            className="w-full h-full object-cover"
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
        </motion.div>
        <motion.div
          animate={{
            x: isStoriesInView ? "0%" : "50%",
            transition: {
              duration: 1.5,
              ease: "easeOut",
            },
          }}
          className="w-[50%] md:w-full h-[250px] overflow-hidden rounded-tl-[12px] rounded-br-[12px] rounded-tr-[60px] rounded-bl-[60px] relative flex items-center justify-center"
        >
          <Image
            src={R31}
            alt="image"
            className="w-full h-full object-cover"
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
        </motion.div>
      </div>
    </div>
  );
};

export default Stories;
