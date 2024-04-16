import React from "react";

import Image from "next/image";
import Background from "@/public/landing-page/background.png";
import Picture from "@/public/landing-page/Picture Frame.svg";

import Navbar from "@/src/components/resuable/Navbar";

import { FiArrowDown } from "react-icons/fi";

import { motion } from "framer-motion";
import DonateButton from "../resuable/DonateButton";

const Banner = () => {
  return (
    <div className="w-[100vw] h-[100vh] pb-20 relative bg-black overflow-clip">
      <Image
        src={Background}
        alt="background"
        className="w-[100vw] h-[100vh] object-cover"
      />
      <motion.div
        animate={{
          scale: [1.0, 1.4, 1.0],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeOut",
          },
        }}
        className="w-[65%] md:w-[150%] h-[calc(65vw)] md:h-[150vw] opacity-10 border border-primary-10 rounded-full absolute top-0 md:top-[15vh] left-[17.5%] md:-left-[20%]"
      />
      <motion.div
        animate={{
          scale: [1.0, 1.3, 1.0],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeOut",
          },
        }}
        className="w-[45%] md:w-[100%] h-[calc(45vw)] md:h-[100vw] opacity-10 border border-primary-10 rounded-full absolute top-[calc(10vw)] md:top-[30vh] left-[27.5%] md:left-[5%]"
      />
      <motion.div
        animate={{
          scale: [1.0, 1.2, 1.0],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeOut",
          },
        }}
        className="w-[25%] md:w-[70%] h-[calc(25vw)] md:h-[70vw] opacity-10 border border-primary-10 rounded-full absolute top-[calc(20vw)] md:top-[40vh] left-[37.5%] md:left-[20%]"
      />
      <motion.div
        animate={{
          scale: [1.0, 1.5, 1.0],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeOut",
          },
        }}
        className="w-[5%] md:w-[30%] h-[calc(5vw)] md:h-[30vw] opacity-10 border border-primary-10 rounded-full absolute top-[calc(30vw)] md:top-[50vh] left-[47.5%] md:left-[40%]"
      />
      <div className="w-full h-full px-[100px] md:px-[5%] py-[32px] md:py-[20px] absolute z-10 top-0 left-0 flex flex-col items-center">
        <Navbar />
        <div className="w-full h-full flex flex-col justify-center items-center mt-[10vh] md:mt-16  ">
          <Image
            src={Picture}
            alt="picture frame"
            className="w-[calc(18vh)] md:w-[calc(15vh)] h-auto"
          />
          <div className="w-full flex flex-col items-center mt-[5vh] md:mt-8">
            <h3 className="font-light text-primary-10 text-[calc(3.5vh)] md:text-[14px] leading-[calc(4vh)] md:leading-[21px]">
              THE LATE
            </h3>
            <h2 className="font-normal text-primary-10 text-[calc(5vh)] md:text-[16px] leading-[calc(6vh)] md:leading-[26px]">
              VENERABLE PROFESSOR
            </h2>
            <h1 className="text-primary-base font-extrabold text-[calc(10vh)] md:text-[36px] leading-[calc(10vh)] md:leading-[40px]">
              JACOB ADELEKE
            </h1>
            <h1 className="text-primary-10 font-extrabold text-[calc(23vh)] md:text-[80px] leading-[calc(23vh)] md:leading-[80px]">
              FAYOMI
            </h1>
          </div>
        </div>
        <div className="mt-[2vh] md:mt-[6vh] flex flex-col items-center gap-1 w-fit">
          <h3 className="font-light text-primary-10 text-[18px] md:text-[14px] leading-[26px]">
            Scroll to Navigate
          </h3>
          <div className="size-[30px] md:size-[26px] bg-primary-border-40 rounded-full flex justify-center items-center">
            <motion.div
              animate={{
                y: ["0%", "30%", "0%"],
                transition: {
                  ease: "easeInOut",
                  duration: 2,
                  repeat: Infinity,
                },
              }}
            >
              <FiArrowDown size={"16px"} className="text-primary-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
