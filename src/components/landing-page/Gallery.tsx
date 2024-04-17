"use client";

import Image, { StaticImageData } from "next/image";
import React, { FC, useState, useRef } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import DoveMarquee from "../resuable/DoveMarquee";

import { motion, useInView } from "framer-motion";

import R11 from "@/public/landing-page/Row 1/JBI_0981.jpg";
import R12 from "@/public/landing-page/Row 1/JBI_1298.jpg";
import R13 from "@/public/landing-page/Row 1/JBI_1074.jpg";
import R14 from "@/public/landing-page/Row 1/JBI_2901.jpg";

import R21 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_1 (1).jpg";
import R22 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_3 (1).jpg";
import R23 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_22.jpg";
import R24 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_5.jpg";

import R31 from "@/public/landing-page/Row 3/CamScanner 04-06-2024 09.54_9 (1).jpg";
import R32 from "@/public/landing-page/Row 3/CamScanner 04-06-2024 09.54_3.jpg";
import R33 from "@/public/landing-page/Row 3/CamScanner 04-06-2024 09.54_4 (1).jpg";
import R34 from "@/public/landing-page/Row 3/CamScanner 04-06-2024 09.54_5.jpg";

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
      image: R14,
    },
  ];

  const row2: iImageProp[] = [
    {
      image: R21,
    },
    {
      image: R22,
    },
    {
      image: R23,
    },
    {
      image: R24,
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
      image: R34,
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
      image: R14,
    },

    {
      image: R21,
    },
    {
      image: R22,
    },
    {
      image: R23,
    },
    {
      image: R24,
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
    {
      image: R34,
    },
  ];

  const [mobileIndex, setMobileIndex] = useState<number>(0);
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <div
      ref={ref}
      id="gallery-div"
      className="flex flex-col w-[100vw] h-auto bg-tertiary-100"
    >
      <div className="flex w-full justify-between px-[200px] py-24 md:py-16 md:px-[5%]">
        <div className="flex flex-col gap-5 md:gap-4 w-[50%] md:w-full ">
          <motion.h1
            animate={{
              x: inView ? "0%" : "-20%",
              transition: {
                duration: 1.5,
                ease: "easeOut",
              },
            }}
            className="text-[100px] md:text-[60px] text-primary-10 leading-[100px] font-extrabold md:text-center"
          >
            GALLERY
          </motion.h1>
          <motion.p
            animate={{
              x: inView ? "0%" : "20%",
              transition: {
                duration: 1.5,
                ease: "easeOut",
              },
            }}
            className="font-normal text-primary-10 text-[20px] leading-[30px] md:text-center"
          >
            This section is a heartfelt tribute to the life and work of
            Professor Jacob Adeleke Fayomi. This digital space is a curated
            collection of images that capture the essence of the
            professor&apos;s life, achievements, and the moments that defined
            his journey.
          </motion.p>
        </div>
        {/* <div className="w-[224px] h-[100px] flex items-center justify-between md:hidden">
          <div
            onClick={() => {
              setSlideIndex(slideIndex === 0 ? 3 : slideIndex - 1);
            }}
            className="w-[100px] h-[100px] text-primary-10 border border-primary-10 rounded-full flex items-center justify-center cursor-pointer"
          >
            <GoArrowLeft size={"26px"} />
          </div>
          <div
            onClick={() => {
              setSlideIndex(slideIndex === 3 ? 0 : slideIndex + 1);
            }}
            className="w-[100px] h-[100px] text-tertiary-100 bg-primary-10 rounded-full flex items-center justify-center cursor-pointer"
          >
            <GoArrowRight size={"26px"} />
          </div>
        </div> */}
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
          <div
            onClick={() => {
              setMobileIndex(
                mobileIndex === 0 ? mobileImages.length - 1 : mobileIndex - 1
              );
            }}
            className="w-[60px] h-[60px]  text-primary-10 border border-primary-10 rounded-full flex items-center justify-center"
          >
            <GoArrowLeft size={"18px"} />
          </div>
          <div
            onClick={() => {
              setMobileIndex(
                mobileIndex === mobileImages.length - 1 ? 0 : mobileIndex + 1
              );
            }}
            className="w-[60px] h-[60px] text-tertiary-100 bg-primary-10 rounded-full flex items-center justify-center"
          >
            <GoArrowRight size={"18px"} />
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
        className="w-[23%] md:w-full h-[320px] overflow-hidden rounded-[12px] cursor-pointer flex justify-center items-center relative"
      >
        <Image
          src={image}
          alt="image"
          className="w-[100%] h-[320px] object-cover"
        />
        <div
          className={`w-full md:hidden h-full flex items-center absolute justify-center transition-opacity duration-500  ease-in-out ${
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
            <Image
              src={image}
              alt="image"
              className="w-full h-[400px] object-cover"
            />
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </>
  );
};

export default Gallery;
