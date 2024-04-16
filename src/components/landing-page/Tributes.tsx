import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";

const Tributes = () => {
  const [index, setIndex] = useState<number>(0);
  const tributes: { title: string; content: string; author: string }[] = [
    {
      title: "TRIBUTE TO MY HUSBAND",
      content: "",
      author: "Eunice Olufunmilayo Fayomi (Wife)",
    },
    {
      title: "TRIBUTE TO MY FATHER",
      content: "",
      author: "Venerable Samuel Ayobami Fayomi (Son)",
    },
    {
      title: "TRIBUTE TO MY FATHER",
      content: "",
      author: "Joshua Olusegun Fayomi (Son)",
    },
    {
      title: "TRIBUTE TO MY FATHER",
      content: "",
      author: "Hannah Owonuwa (Only Daughter)",
    },
    {
      title: "TRIBUTE TO MY FATHER",
      content: "",
      author: "Emmanuel Adeleke Fayomi (Jnr)",
    },
    {
      title: "TRIBUTE TO A FATHER AND ICON WHO LIVED FOR IMPACT",
      content: "",
      author: "Opeoluwa Fayomi",
    },
    {
      title: "TRIBUTE TO MY FATHER-IN-LAW",
      content: "",
      author: "Commander Damilola Owonuwa (Son-in-law)",
    },
    {
      title: "TRIBUTE TO MY BROTHER",
      content: "",
      author: "Samuel Adewale Fayomi (Brother)",
    },
    {
      title: "TRIBUTE TO MY BROTHER",
      content: "",
      author: "Funso Fayomi (Sister)",
    },
    {
      title: "TTRIBUTE TO AN ICON",
      content: "",
      author: "The Olowoniyi's",
    },
    {
      title: "TTRIBUTE TO THE BEST UNCLE AND MENTOR",
      content: "",
      author: "Samuel Adewale Fayomi (Brother)",
    },
  ];

  return (
    <div
      id="tribute-div"
      className="w-[100vw] px-[200px] md:px-[5%] bg-white py-24 md:py-16 flex flex-col items-center gap-24 md:gap-20"
    >
      <h1 className="text-[100px] md:text-[60px] text-tertiary-100 leading-[100px] font-extrabold md:text-center">
        TRIBUTES
      </h1>
    </div>
  );
};

export default Tributes;
