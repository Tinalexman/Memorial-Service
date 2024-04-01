"use client";

import React from "react";
import RIP from "@/public/landing-page/RIP.svg";
import Image from "next/image";

import { motion } from "framer-motion";

const DoveMarquee = () => {
  const number = (Math.random() * 4) + 8;

  return (
    <>
      <div className="relative flex overflow-x-hidden w-full mt-8">
        <motion.div
          initial={{
            x: "100%",
          }}
          animate={{
            x: "-100%",
            transition: {
              duration: number,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="flex justify-around md:justify-start md:gap-12 w-full"
        >
          {Array(2)
            .fill(0)
            .map((val, i) => {
              return (
                <div key={i}>
                  <TextDove />
                </div>
              );
            })}
        </motion.div>

        {/* <motion.div
          initial={{
            x: "100%",
          }}
          animate={{
            x: "-100%",
            transition: {
              delay: number * 0.5,
              duration: number,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="absolute justify-around md:justify-start md:gap-12 flex w-full"
        >
          {Array(2)
            .fill(0)
            .map((val, i) => {
              return (
                <div key={i}>
                  <TextDove />
                </div>
              );
            })}
        </motion.div> */}
      </div>
    </>
  );
};

const TextDove = () => {
  return (
    <div className="flex items-center justify-between w-[640px] md:w-[300px]">
      <Image src={RIP} alt="rip" className="h-[60px] w-auto" />
      <p className="text-[60px] md:text-[40px] leading-[80px] md:leading-[60px] font-extrabold text-outline-2 ">
        🕊️
      </p>
    </div>
  );
};

export default DoveMarquee;
