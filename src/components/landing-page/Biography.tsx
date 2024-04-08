import React, { useRef } from "react";

import Image from "next/image";

import Gear from "@/public/landing-page/Gear.svg";
import DonateButton from "../resuable/DonateButton";
import ReadMoreContainer from "../resuable/ReadMoreContainer";

import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

const Biography = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  const slideInFromLeftHeader = useTransform(
    scrollYProgress,
    [0, 1],
    ["-20%", "20%"]
  );

  const background = useTransform(scrollYProgress, [0, 1], ["#FFFFFF", "#FDFDFD"], );

  return (
    <motion.div
      style={{background: background}}
      ref={ref}
      id="biography-div"
      className="w-[100vw] min-h-[800px] h-auto flex flex-col px-[200px] md:px-[5%] py-24 md:pt-20 md:pb-0 bg-white relative"
    >
      <motion.h3
        style={{ x: slideInFromLeftHeader }}
        className="text-tertiary-20 font-[700] text-[20px] md:text-[16px] leading-[30px] md:leading-[24px] md:text-center"
      >
        BIOGRAPHY
      </motion.h3>
      <div className="flex md:flex-col md:items-center relative md:static mt-8">
        <motion.h2
          animate={{
            y: isInView ? "0%" : "25%",
            transition: {
              duration: 1.5,
              ease: "easeOut",
            },
          }}
          className="text-tertiary-100 text-[36px] md:text-[26px] leading-[54px] md:leading-[39px] font-semibold w-[60%] md:text-center md:w-full"
        >
          Lorem ipsum dolor sit amet, cons piscing elit lorem ipsumsit. Lorem
          ipsum dolor sit amet, cons piscing elit lorem ipsumsit. Lorem ipsum
          dolor sit amet, cons piscing elit lorem ipsumsit. Lorem ipsum dolor
          sit amet,{" "}
          <span className="text-tertiary-20">
            cons piscing elit lorem ipsumsit.
          </span>
        </motion.h2>
        <ReadMoreContainer
          useFixed={false}
          style="black"
          text="Read more"
          custom="absolute -bottom-10 md:static right-[10%] md:my-20"
        />

        <DonateButton
          style="solid yellow"
          useShadow={true}
          custom="hidden md:z-10 md:mb-10"
        />
      </div>
      <motion.div
        animate={{
          x: ["0%", "100%", "0%"],
          transition: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute bottom-0 md:mt-20 "
      >
        <Image
          src={Gear}
          alt="gear"
          className="w-[360px] md:w-[190px] h-auto "
        />
      </motion.div>
    </motion.div>
  );
};

export default Biography;
