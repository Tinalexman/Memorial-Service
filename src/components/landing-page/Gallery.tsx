"use client";

import Image, { StaticImageData } from "next/image";
import React, { FC, useState, useEffect } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import DoveMarquee from "../resuable/DoveMarquee";

import { motion } from "framer-motion";

import R11 from "@/public/landing-page/Row 1/JBI_0981.jpg";
import R12 from "@/public/landing-page/Row 1/JBI_1045.jpg";
import R13 from "@/public/landing-page/Row 1/JBI_1074.jpg";
import R14 from "@/public/landing-page/Row 1/JBI_1084.jpg";
import R15 from "@/public/landing-page/Row 1/JBI_1235.jpg";
import R16 from "@/public/landing-page/Row 1/JBI_1298.jpg";
import R17 from "@/public/landing-page/Row 1/JBI_1438.jpg";
import R18 from "@/public/landing-page/Row 1/JBI_2836.jpg";
import R19 from "@/public/landing-page/Row 1/JBI_2839.jpg";
import R110 from "@/public/landing-page/Row 1/JBI_2901.jpg";
import R111 from "@/public/landing-page/Row 1/JBI_2937.jpg";
import R112 from "@/public/landing-page/Row 1/JBI_2939.jpg";
import R113 from "@/public/landing-page/Row 1/JBI_3441.jpg";
import R114 from "@/public/landing-page/Row 1/JBI_3442.jpg";
import R115 from "@/public/landing-page/Row 1/JBI_3453.jpg";
import R116 from "@/public/landing-page/Row 1/JBI_3465.jpg";

import R21 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_1.jpg";
import R22 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_3.jpg";
import R23 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_4.jpg";
import R24 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_5.jpg";
import R25 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_6.jpg";
import R26 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_7.jpg";
import R27 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_8.jpg";
import R28 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_9.jpg";
import R29 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_10.jpg";
import R210 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_11.jpg";
import R211 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_12.jpg";
import R212 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_14.jpg";
import R213 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_16.jpg";
import R214 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_17.jpg";
import R215 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_18.jpg";
import R216 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_19.jpg";
// import R217 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_20.jpg";
// import R218 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_21.jpg";
// import R219 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_22.jpg";
// import R220 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_23.jpg";
// import R221 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_24.jpg";
// import R222 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_25.jpg";
// import R223 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_27.jpg";
// import R224 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_29.jpg";
// import R225 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_30.jpg";
// import R226 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_31.jpg";
// import R227 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_32.jpg";
// import R228 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_33.jpg";
// import R229 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_34.jpg";
// import R230 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_35.jpg";
// import R231 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_36.jpg";
// import R232 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_38.jpg";
// import R233 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_39.jpg";

// import R3 from "@/public/landing-page/Row 3/CamScanner 04-06-2024 09.54_1.jpg";
import R31 from "@/public/landing-page/Row 3/CamScanner 04-06-2024 09.54_2.jpg";
import R32 from "@/public/landing-page/Row 3/CamScanner 04-06-2024 09.54_3.jpg";
import R33 from "@/public/landing-page/Row 3/CamScanner 04-06-2024 09.54_4.jpg";
import R34 from "@/public/landing-page/Row 3/CamScanner 04-06-2024 09.54_5.jpg";
import R35 from "@/public/landing-page/Row 3/CamScanner 04-06-2024 09.54_6.jpg";
import R36 from "@/public/landing-page/Row 3/CamScanner 04-06-2024 09.54_7.jpg";
import R37 from "@/public/landing-page/Row 3/CamScanner 04-06-2024 09.54_8.jpg";
import R38 from "@/public/landing-page/Row 3/CamScanner 04-06-2024 09.54_9.jpg";
import R39 from "@/public/landing-page/Row 3/CamScanner 04-06-2024 09.54_10.jpg";
import R310 from "@/public/landing-page/Row 3/CamScanner 04-06-2024 09.54_11.jpg";
import R311 from "@/public/landing-page/Row 3/CamScanner 04-06-2024 09.54_12.jpg";
import R312 from "@/public/landing-page/Row 3/CamScanner 04-06-2024 09.54_13.jpg";
import R313 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_40.jpg";
import R314 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_41.jpg";
import R315 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_42.jpg";
import R316 from "@/public/landing-page/Row 2/CamScanner 03-31-2024 14.11_43.jpg";

import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";

const Gallery = () => {
  const [row1, setRow1] = useState<iImageProp[]>([]);
  const [row2, setRow2] = useState<iImageProp[]>([]);
  const [row3, setRow3] = useState<iImageProp[]>([]);

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
      image: R15,
    },
    {
      image: R16,
    },
    {
      image: R17,
    },
    {
      image: R18,
    },
    {
      image: R19,
    },
    {
      image: R110,
    },
    {
      image: R111,
    },
    {
      image: R112,
    },
    {
      image: R113,
    },
    {
      image: R114,
    },
    {
      image: R115,
    },
    {
      image: R116,
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
      image: R25,
    },
    {
      image: R26,
    },
    {
      image: R27,
    },
    {
      image: R28,
    },
    {
      image: R29,
    },
    {
      image: R210,
    },
    {
      image: R211,
    },
    {
      image: R212,
    },
    {
      image: R213,
    },
    {
      image: R214,
    },
    {
      image: R215,
    },
    {
      image: R216,
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
    {
      image: R35,
    },
    {
      image: R36,
    },
    {
      image: R37,
    },
    {
      image: R38,
    },
    {
      image: R39,
    },
    {
      image: R310,
    },
    {
      image: R311,
    },
    {
      image: R312,
    },
    {
      image: R313,
    },
    {
      image: R314,
    },
    {
      image: R315,
    },
    {
      image: R316,
    },
  ];

  const [mobileIndex, setMobileIndex] = useState<number>(0);
  const [slideIndex, setSlideIndex] = useState<number>(0);

  useEffect(() => {
    if (slideIndex === 0) {
      setRow1([
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
      ]);
      setRow2([
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
      ]);
      setRow3([
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
      ]);
    } else if (slideIndex === 1) {
      setRow1([
        {
          image: R15,
        },
        {
          image: R16,
        },
        {
          image: R17,
        },
        {
          image: R18,
        },
      ]);
      setRow2([
        {
          image: R25,
        },
        {
          image: R26,
        },
        {
          image: R27,
        },
        {
          image: R28,
        },
      ]);
      setRow3([
        {
          image: R35,
        },
        {
          image: R36,
        },
        {
          image: R37,
        },
        {
          image: R38,
        },
      ]);
    } else if (slideIndex === 2) {
      setRow1([
        {
          image: R19,
        },
        {
          image: R110,
        },
        {
          image: R111,
        },
        {
          image: R112,
        },
      ]);
      setRow2([
        {
          image: R29,
        },
        {
          image: R210,
        },
        {
          image: R211,
        },
        {
          image: R212,
        },
      ]);
      setRow3([
        {
          image: R39,
        },
        {
          image: R310,
        },
        {
          image: R311,
        },
        {
          image: R312,
        },
      ]);
    } else if (slideIndex === 3) {
      setRow1([
        {
          image: R113,
        },
        {
          image: R114,
        },
        {
          image: R115,
        },
        {
          image: R116,
        },
      ]);
      setRow2([
        {
          image: R213,
        },
        {
          image: R214,
        },
        {
          image: R215,
        },
        {
          image: R216,
        },
      ]);
      setRow3([
        {
          image: R313,
        },
        {
          image: R314,
        },
        {
          image: R315,
        },
        {
          image: R316,
        },
      ]);
    }
  }, [slideIndex]);

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
            This section is a heartfelt tribute to the life and work of Professor Jacob Adeleke Fayomi. This
            digital space is a curated collection of images that capture the
            essence of the professor&apos;s life, achievements, and the moments that
            defined his journey.
          </p>
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
