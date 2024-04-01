"use client";

import Image, { StaticImageData } from "next/image";
import React, { FC, useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import DoveMarquee from "../resuable/DoveMarquee";

import { motion } from "framer-motion";

import R11 from "@/public/landing-page/R11.png";
import R12 from "@/public/landing-page/R12.png";
import R13 from "@/public/landing-page/R13.png";

import R21 from "@/public/landing-page/R21.png";
import R22 from "@/public/landing-page/R22.png";

import R31 from "@/public/landing-page/R31.png";
import R32 from "@/public/landing-page/R32.png";
import R33 from "@/public/landing-page/R33.png";

import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";

const Gallery = () => {
  const row1: iImageProp[] = [
    {
      image: R11,
    },
    {
      image: R12,
    },
    {
      image: R13,
    },
    {
      image: R12,
    },
  ];
  const row2: iImageProp[] = [
    {
      image: R21,
    },
    {
      image: R12,
    },
    {
      image: R22,
    },
    {
      image: R11,
    },
  ];
  const row3: iImageProp[] = [
    {
      image: R31,
    },
    {
      image: R32,
    },
    {
      image: R33,
    },
    {
      image: R32,
    },
  ];

  const mobileImages: iImageProp[] = [
    {
      image: R11,
    },
    {
      image: R12,
    },
    {
      image: R13,
    },
    {
      image: R21,
    },
    {
      image: R22,
    },
    {
      image: R31,
    },
    {
      image: R32,
    },
    {
      image: R33,
    },
  ];
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
      <div className="relative flex overflow-x-hidden w-full mt-20 md:hidden">
        <motion.div
          initial={{
            x: "100%",
          }}
          animate={{
            x: "-100%",
            transition: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="flex gap-8 whitespace-nowrap w-full"
        >
          {row1.map((val, i) => {
            return <ImageContainer image={val.image} key={i} />;
          })}
        </motion.div>

        <motion.div
          initial={{
            x: "100%",
          }}
          animate={{
            x: "-100%",
            transition: {
              delay: 15,
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="absolute gap-8 flex whitespace-nowrap w-full"
        >
          {row1.map((val, i) => {
            return <ImageContainer image={val.image} key={i} />;
          })}
        </motion.div>
      </div>

      <div className="relative flex overflow-x-hidden w-full mt-8 md:hidden">
        <motion.div
          initial={{
            x: "100%",
          }}
          animate={{
            x: "-100%",
            transition: {
              duration: 26,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="flex gap-8 whitespace-nowrap w-full"
        >
          {row2.map((val, i) => {
            return <ImageContainer image={val.image} key={i} />;
          })}
        </motion.div>

        <motion.div
          initial={{
            x: "100%",
          }}
          animate={{
            x: "-100%",
            transition: {
              delay: 13,
              duration: 26,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="absolute gap-8 flex whitespace-nowrap w-full"
        >
          {row2.map((val, i) => {
            return <ImageContainer image={val.image} key={i} />;
          })}
        </motion.div>
      </div>

      <div className="relative flex overflow-x-hidden w-full mt-8 md:hidden">
        <motion.div
          initial={{
            x: "100%",
          }}
          animate={{
            x: "-100%",
            transition: {
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="flex gap-8 whitespace-nowrap w-full"
        >
          {row3.map((val, i) => {
            return <ImageContainer image={val.image} key={i} />;
          })}
        </motion.div>

        <motion.div
          initial={{
            x: "100%",
          }}
          animate={{
            x: "-100%",
            transition: {
              delay: 14,
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="absolute gap-8 flex whitespace-nowrap w-full"
        >
          {row3.map((val, i) => {
            return <ImageContainer image={val.image} key={i} />;
          })}
        </motion.div>
      </div>

      <div className="hidden md:flex flex-col items-center mt-0 gap-[60px] px-[5%]">
        <ImageContainer image={mobileImages[mobileIndex].image} />
        <div className="w-[134px] h-[60px] flex items-center justify-between">
          <div className="w-[60px] h-[60px]  text-primary-10 border border-primary-10 rounded-full flex items-center justify-center">
            <GoArrowLeft
              size={"18px"}
              onClick={() => {
                setMobileIndex(
                  mobileIndex === 0 ? mobileImages.length - 1 : mobileIndex - 1
                );
              }}
            />
          </div>
          <div className="w-[60px] h-[60px] text-tertiary-100 bg-primary-10 rounded-full flex items-center justify-center">
            <GoArrowRight
              size={"18px"}
              onClick={() => {
                setMobileIndex(
                  mobileIndex === mobileImages.length - 1 ? 0 : mobileIndex + 1
                );
              }}
            />
          </div>
        </div>
      </div>
      <div className="mt-20 mb-10 w-full flex flex-col">
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

  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <div
        onMouseEnter={() => {
          setShow(true);
        }}
        onMouseLeave={() => {
          setShow(false);
        }}
        className="w-[23%] md:w-full h-[320px] rounded-[12px] cursor-pointer flex justify-center items-center relative"
      >
        <Image
          src={image}
          alt="image"
          className="w-[100%] h-[320px] object-cover rounded-[12px]"
        />
        <div
          className={`w-full h-full flex items-center absolute justify-center transition-opacity duration-500  ease-in-out ${
            show ? "opacity-100 bg-[#00000030]" : "opacity-0 bg-[#FFFFFF00]"
          }`}
        >
          <div
            onClick={open}
            className={`w-[210px] md:w-[150px] h-[210px] md:h-[150px] rounded-full bg-primary-base text-white text-[20px] md:text-[16px] leading-[30px] md:leading-[20.5px] flex justify-center items-center gap-1 transition-opacity duration-500  ease-in-out ${
              show ? "opacity-100" : "opacity-0"
            }`}
          >
            <p>View</p>
            <BsArrowUpRight size={"16px"} />
          </div>
        </div>
      </div>
      <Modal.Root
        padding={"0px"}
        top={"0px"}
        onClose={close}
        opened={opened}
        centered
      >
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Body>
            <div className="w-full relative">
              <Image src={image} alt="image" className="w-full h-auto"/>
              <div onClick={close} className="size-8 bg-primary-10 rounded-lg absolute top-2 right-2 flex justify-center items-center cursor-pointer">
                <IoMdClose size={"26px"} className="text-primary-base"/>
              </div>
            </div>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </>
  );
};

export default Gallery;
