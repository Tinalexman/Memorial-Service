import React, { useRef, useState } from "react";

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

  const ref1 = useRef(null);
  const isInView1 = useInView(ref1);

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2);

  const ref3 = useRef(null);
  const isInView3 = useInView(ref3);

  const ref4 = useRef(null);
  const isInView4 = useInView(ref4);

  const ref5 = useRef(null);
  const isInView5 = useInView(ref5);

  const ref6 = useRef(null);
  const isInView6 = useInView(ref6);

  const ref7 = useRef(null);
  const isInView7 = useInView(ref7);

  const ref8 = useRef(null);
  const isInView8 = useInView(ref8);

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
    ["-20%", "40%"]
  );

  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["#FFFFFF", "#FDFDFD"]
  );

  const [show, setShow] = useState<boolean>(false);

  return (
    <motion.div
      style={{ background: background }}
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
      <div
        className={`flex ${
          show && "flex-col gap-5"
        } md:flex-col md:items-center relative md:static mt-8`}
      >
        <motion.h2
          animate={{
            y: isInView ? "0%" : "25%",
            transition: {
              duration: 1.5,
              ease: "easeOut",
            },
          }}
          className={`text-tertiary-100 text-[36px] md:text-[26px] leading-[54px] md:leading-[39px] font-semibold ${
            show ? "w-full" : "w-[60%]"
          } md:text-center md:w-full`}
        >
          Professor Venerable Jacob Adeleke Fayomi&apos;s life story is a
          testament to the power of hard work, dedication, and a deep love{" "}
          {show &&
            "for God and community. Born into a large, polygamous family in Iyara Ijumu, Kogi State, Nigeria, Professor Fayomi was the fifth of twelve children. His father, Chief Jonah Awogbemi, was a prominent farmer, and this instilled in young Jacob a love for agriculture, which later blossomed into a passion "}
          <span className="text-tertiary-20">
            {show ? "for veterinary medicine." : "for God and community."}
          </span>
        </motion.h2>
        <div
          className={`flex flex-col gap-5 w-full ${
            !show && "md:hidden hidden"
          }`}
        >
          <motion.h2
            ref={ref1}
            animate={{
              y: isInView1 ? "0%" : "10%",
              transition: {
                duration: 1.5,
                ease: "easeOut",
              },
            }}
            className="text-tertiary-100 md:text-center text-[36px] md:text-[26px] leading-[54px] md:leading-[39px] font-semibold"
          >
            Professor Fayomi&apos;s educational journey began at St. Paul&apos;s
            Primary School in Iyara. After graduating in 1962, he displayed his
            nurturing spirit by working as a kindergarten teacher at his alma
            mater for two years. However, his thirst for knowledge propelled him
            further. He attended St. Augustine&apos;s College Kabba,{" "}
            <span className="text-tertiary-20">graduating in 1969.</span>
          </motion.h2>
          <motion.h2
            ref={ref2}
            animate={{
              y: isInView2 ? "-10%" : "0%",
              transition: {
                duration: 1.5,
                ease: "easeOut",
              },
            }}
            className="text-tertiary-100 md:text-center text-[36px] md:text-[26px] leading-[54px] md:leading-[39px] font-semibold"
          >
            Financing higher education was a hurdle Professor Fayomi had to
            overcome. He secured a clerical position at the Federal Ministry of
            Trade in Lagos with the help of his uncle, Chief Olumide Fayomi. It
            was during this time that his close friend, Stephen Obafemi, played
            a pivotal role. Recognizing Professor Fayomi&apos;s potential,
            Stephen encouraged him to pursue his dream of attending Ahmadu Bello
            University. This marked a turning point{" "}
            <span className="text-tertiary-20">in his life.</span>
          </motion.h2>
          <motion.h2
            ref={ref3}
            animate={{
              y: isInView3 ? "0%" : "10%",
              transition: {
                duration: 1.5,
                ease: "easeOut",
              },
            }}
            className="text-tertiary-100 md:text-center text-[36px] md:text-[26px] leading-[54px] md:leading-[39px] font-semibold"
          >
            Professor Fayomi excelled at Ahmadu Bello University, his love for
            teaching blossoming further. He obtained a Doctor of Veterinary
            Medicine (DVM) degree, followed by a Master of Science (MSc) and a
            Doctor of Philosophy (PhD) in Animal Science, specializing in
            Ruminant Nutrition. Notably, he achieved first-class honors
            throughout his academic journey, showcasing his exceptional{" "}
            <span className="text-tertiary-20">
              intellect and perseverance.
            </span>
          </motion.h2>
          <motion.h2
            ref={ref4}
            animate={{
              y: isInView4 ? "0%" : "10%",
              transition: {
                duration: 1.5,
                ease: "easeOut",
              },
            }}
            className="text-tertiary-100 md:text-center text-[36px] md:text-[26px] leading-[54px] md:leading-[39px] font-semibold"
          >
            Professor Fayomi&apos;s dedication to academia didn&apos;t stop
            there. He joined the Department of Animal Science at Ahmadu Bello
            University as a lecturer and researcher in September 1981, a role he
            held with distinction for an impressive 43 years until his
            retirement in 2021. His passion for teaching extended beyond the
            university walls, with his final act being a visit to teach children
            at{" "}
            <span className="text-tertiary-20">
              JESJEH International School Kudende Kaduna.
            </span>
          </motion.h2>
          <motion.h2
            ref={ref5}
            animate={{
              y: isInView5 ? "0%" : "10%",
              transition: {
                duration: 1.5,
                ease: "easeOut",
              },
            }}
            className="text-tertiary-100 md:text-center text-[36px] md:text-[26px] leading-[54px] md:leading-[39px] font-semibold"
          >
            Professor Fayomi&apos;s life wasn&apos;t solely defined by academic
            achievements. After finding faith in Christ, he became actively
            involved in evangelism during his university days. This dedication
            continued at his local parish, St. Christopher Kaduna. His faith
            journey led him to the Chapel of Holiness at the College of
            Agriculture and Animal Science in Kaduna, where his pastoral calling
            blossomed. He pursued a Diploma in Theology at Immanuel College
            Ibadan from 1988 to 1990. Professor Fayomi&apos;s service to the
            church extended beyond his local parish. He faithfully served in
            numerous parishes and even launched a magazine tract called
            &quot;Jesus Monthly&quot; to{" "}
            <span className="text-tertiary-20">spread the word of God.</span>
          </motion.h2>
          <motion.h2
            ref={ref6}
            animate={{
              y: isInView6 ? "0%" : "10%",
              transition: {
                duration: 1.5,
                ease: "easeOut",
              },
            }}
            className="text-tertiary-100 md:text-center text-[36px] md:text-[26px] leading-[54px] md:leading-[39px] font-semibold"
          >
            Professor Fayomi&apos;s passion extended beyond academia and
            religion. He held a deep concern for the less fortunate, especially
            regarding education. Driven by his own experience of receiving help,
            he established the Adeleke Education Foundation to assist children
            in need. His philosophy in life, &quot;education brings liberty and
            power&quot;, reflects his belief in education as a{" "}
            <span className="text-tertiary-20">tool for empowerment.</span>
          </motion.h2>
          <motion.h2
            ref={ref2}
            animate={{
              y: isInView2 ? "0%" : "10%",
              transition: {
                duration: 1.5,
                ease: "easeOut",
              },
            }}
            className="text-tertiary-100 md:text-center text-[36px] md:text-[26px] leading-[54px] md:leading-[39px] font-semibold"
          >
            Professor Fayomi&apos;s influence transcended the university. He
            served as Provost at the Colleges of Agriculture in both Kaduna and
            Kabba, demonstrating his leadership skills and commitment to
            agricultural development. His dedication was further recognized by
            his membership in numerous professional bodies and receipt of{" "}
            <span className="text-tertiary-20">over forty awards.</span>
          </motion.h2>
          <motion.h2
            ref={ref8}
            animate={{
              y: isInView8 ? "0%" : "10%",
              transition: {
                duration: 1.5,
                ease: "easeOut",
              },
            }}
            className="text-tertiary-100 md:text-center text-[36px] md:text-[26px] leading-[54px] md:leading-[39px] font-semibold"
          >
            Professor Fayomi&apos;s life embodied a remarkable blend of academic
            excellence, unwavering faith, and a dedication to serving his
            community. He was a leader, a teacher, a mentor, and a man of God.
            His unwavering commitment to education, both within the classroom
            and his community, serves as an inspiration for generations to come.
            Professor Fayomi&apos;s favourite words, &quot;God bless my
            generation now and always&quot;, capture the essence of a life
            dedicated to service and the{" "}
            <span className="text-tertiary-20">betterment of humanity.</span>
          </motion.h2>
          <div className="h-40 md:h-0" />
        </div>
        <ReadMoreContainer
          useFixed={false}
          style="black"
          text={show ? "Read less" : "Read more"}
          custom={`absolute -bottom-10 md:static right-[10%] md:my-20 z-10 ${
            show && "mt-20"
          }`}
          onClick={() => {
            if (show) {
              const element: HTMLElement | null =
                document.getElementById("biography-div");
              element?.scrollIntoView({
                behavior: "smooth",
              });
            }
            setShow(!show);
          }}
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
