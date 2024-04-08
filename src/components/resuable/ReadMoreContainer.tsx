import React, { FC } from "react";
import { BsArrowUpRight } from "react-icons/bs";

import { motion } from "framer-motion";

interface iReadMoreProps {
  style: "black" | "yellow";
  text: "Read more" | "Donate";
  custom?: string;
  useFixed: boolean;
}

const ReadMoreContainer: FC<iReadMoreProps> = ({
  text,
  style,
  custom,
  useFixed,
}) => {
  return (
    <motion.div
      whileInView={{
        scale: [1.0, 1.1, 1.0],
        transition: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }
      }}
      className={`${
        useFixed
          ? "w-[150px] h-[150px]"
          : "w-[210px] md:w-[150px] h-[210px] md:h-[150px]"
      } rounded-full ${
        style === "black" ? "bg-tertiary-100" : "bg-primary-base"
      } ${
        custom && custom
      } cursor-pointer text-white text-[20px] md:text-[16px] leading-[30px] md:leading-[20.5px] flex justify-center items-center gap-1`}
    >
      <p>{text}</p>
      <BsArrowUpRight size={"16px"} />
    </motion.div>
  );
};

export default ReadMoreContainer;
