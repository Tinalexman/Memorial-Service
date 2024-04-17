"use client";

import React, { useState, useEffect } from "react";
import Logo from "./Logo";

import Image from "next/image";
import R14 from "@/public/landing-page/Row 1/JBI_2901.jpg";

import { useLoadStore } from "@/src/stores/store";

const Loader = () => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(prevCount => {
        if (prevCount >= 100) {
          useLoadStore.setState({ready: true});
          clearInterval(intervalId);
          return prevCount;
        }
        return prevCount + 10;
      });
    }, 500);

    return () => clearInterval(intervalId); 
 }, []);

  return (
    <div className="w-[100vw] h-[100vh] bg-primary-10 flex flex-col px-[100px] md:px-[5%] py-[32px] md:py-[20px]">
      <Logo whiteText={false} />

      <div className="flex flex-col items-center gap-[30px] mt-[60px] md:mt-[40px] h-[90vh] justify-center">
        <Image
          src={R14}
          alt="prof fayomi"
          className="w-[60vw] md:w-full h-[50vh] md:h-[350px] rounded-[20px] object-cover"
        />
        <h2 className="font-normal text-[32px] md:text-[24px] leading-[48px] md:leading-[36px] text-tertiary-80">
          Transition To Glory 🕊️
        </h2>
        <h1 className="text-primary-base font-[700] text-[132px] md:text-[100px] leading-[132px] md:leading-[100px]">
          {count}%
        </h1>
      </div>
    </div>
  );
};

export default Loader;
