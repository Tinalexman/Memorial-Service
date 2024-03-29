"use client";

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
    <div className="w-[100vw] h-auto relative bg-black overflow-clip">
      <Image
        src={Background}
        alt="background"
        className="w-[100vw] h-full md:h-[100vh] object-cover"
      />
      <div className="w-[65%] md:w-[90vh] h-[calc(65vw)] md:h-[90vh] opacity-10 border border-primary-10 rounded-full absolute top-0 md:top-[10vh] left-[17.5%] md:-left-[15vh]" />
      <div className="w-[45%] md:w-[70vh] h-[calc(45vw)] md:h-[70vh] opacity-10 border border-primary-10 rounded-full absolute top-[calc(10vw)] md:top-[20vh] left-[27.5%] md:-left-[5vh]" />
      <div className="w-[25%] md:w-[50vh] h-[calc(25vw)] md:h-[50vh] opacity-10 border border-primary-10 rounded-full absolute top-[calc(20vw)] md:top-[30vh] left-[37.5%] md:left-[5vh]" />
      <div className="w-[5%] md:w-[30vh] h-[calc(5vw)] md:h-[30vh] opacity-10 border border-primary-10 rounded-full absolute top-[calc(30vw)] md:top-[40vh] left-[47.5%] md:left-[15vh]" />
      <div className="w-full h-full px-[100px] md:px-[5%] py-[32px] md:py-[20px] absolute z-10 top-0 left-0 flex flex-col items-center">
        <Navbar />
        <div className="w-full h-full flex flex-col justify-center items-center mt-24 md:mt-16  ">
          <Image
            src={Picture}
            alt="picture frame"
            className="w-[170px] md:w-[116px] h-auto"
          />
          <div className="w-full flex flex-col items-center gap-2 mt-[52px] md:mt-8">
            <h3 className="font-light text-primary-10 text-[28px] md:text-[14px] leading-[42px] md:leading-[21px]">
              THE LATEs
            </h3>
            <h2 className="font-normal text-primary-10 text-[40px] md:text-[17px] leading-[60px] md:leading-[25.5px]">
              VENERABLE PROFESSOR
            </h2>
            <h1 className="text-primary-base font-extrabold text-[100px] md:text-[37px] leading-[100px] md:leading-[37px]">
              JACOB ADELEKE
            </h1>
            <h1 className="text-primary-10 font-extrabold text-[216px] md:text-[87px] leading-[216px] md:leading-[87px]">
              FAYOMI
            </h1>
          </div>
        </div>
        <div className="mt-[52px] flex flex-col items-center gap-2 w-fit">
          <h3 className="font-light text-primary-10 text-[20px] md:text-[16px] leading-[30px]">
            Scroll to Navigate
          </h3>
          <div className="w-[35px] h-[35px] bg-primary-border-40 rounded-full flex justify-center items-center">
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
        <DonateButton
          style="solid pale"
          useShadow={false}
          custom="hidden mt-10 mb-5"
        />
      </div>
    </div>
  );
};

export default Banner;
