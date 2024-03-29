"use client";

import { StaticImageData } from "next/image";
import React, { FC, useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";

import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import DoveMarquee from "../resuable/DoveMarquee";

const Gallery = () => {
  const row1: string[] = Array(4).fill("");
  const row2: string[] = Array(4).fill("");
  const row3: string[] = Array(4).fill("");

  const mobileImages: string[] = Array(20).fill("");
  const [mobileIndex, setMobileIndex] = useState<number>(0);

  return (
    <div
      id="gallery-div"
      className="flex flex-col w-[100vw] h-auto bg-tertiary-100"
    >
      <div className="flex w-full justify-between px-[200px] py-24 md:py-16 md:px-[5%]">
        <div className="flex flex-col gap-5 md:gap-4 w-[50%] md:w-full ">
          <h1 className="text-[100px] md:text-[60px] text-primary-10 leading-[100px] font-extrabold md:text-center">
            GALLERY
          </h1>
          <p className="font-normal text-primary-10 text-[20px] leading-[30px] md:text-center">
            Lorem ipsum dolor sit amet, cons piscing elit lorem ipsumsit. Lorem
            ipsum dolor sit amet, cons piscing elit lorem ipsumsit. Lorem ipsum
            dolor sit amet.
          </p>
        </div>
        <div className="w-[224px] h-[100px] flex items-center justify-between md:hidden">
          <div className="w-[100px] h-[100px] text-primary-10 border border-primary-10 rounded-full flex items-center justify-center">
            <GoArrowLeft size={"26px"} />
          </div>
          <div className="w-[100px] h-[100px] text-tertiary-100 bg-primary-10 rounded-full flex items-center justify-center">
            <GoArrowRight size={"26px"} />
          </div>
        </div>
      </div>
      <div className="mt-20 flex flex-col gap-8 md:hidden">
        <div className="flex items-center gap-8">
          {row1.map((val, i) => {
            return <ImageContainer image={val} key={i} />;
          })}
        </div>
        <div className="flex items-center gap-8">
          {row2.map((val, i) => {
            return <ImageContainer image={val} key={i} />;
          })}
        </div>
        <div className="flex items-center gap-8">
          {row3.map((val, i) => {
            return <ImageContainer image={val} key={i} />;
          })}
        </div>
      </div>
      <div className="hidden md:flex flex-col items-center mt-0 gap-[60px] px-[5%]">
        <ImageContainer image={mobileImages[mobileIndex]} />
        <div className="w-[134px] h-[60px] flex items-center justify-between">
          <div className="w-[60px] h-[60px]  text-primary-10 border border-primary-10 rounded-full flex items-center justify-center">
            <GoArrowLeft size={"18px"} />
          </div>
          <div className="w-[60px] h-[60px] text-tertiary-100 bg-primary-10 rounded-full flex items-center justify-center">
            <GoArrowRight size={"18px"} />
          </div>
        </div>
      </div>
      <div className="mt-20 w-full flex flex-col">
        <DoveMarquee />
        <DoveMarquee />
        <DoveMarquee />
      </div>
    </div>
  );
};

interface iImageProp {
  image: string | StaticImageData;
}

const ImageContainer: FC<iImageProp> = ({ image }) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div
      onMouseEnter={() => {
        setShow(true);
      }}
      onMouseLeave={() => {
        setShow(false);
      }}
      className="w-[450px] md:w-full h-[320px] bg-tertiary-15 rounded-[12px] cursor-pointer flex justify-center items-center"
    >
      <div
        className={`w-full h-full flex items-center justify-center transition-opacity duration-500  ease-in-out ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className=" w-[210px] md:w-[150px] h-[210px] md:h-[150px] rounded-full bg-primary-base text-white text-[20px] md:text-[16px] leading-[30px] md:leading-[20.5px] flex justify-center items-center gap-1">
          <p>View</p>
          <BsArrowUpRight size={"16px"} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
