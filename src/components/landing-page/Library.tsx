import React, { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import ReadMoreContainer from "../resuable/ReadMoreContainer";

interface iBook {
  title: string;
  focus: string;
  year: string;
}

const Library = () => {
  const books: iBook[] = Array(4).fill({
    title: "Lorem Ipsum Dol",
    focus: "Focus of the book",
    year: "2023",
  });

  return (
    <div
      id="library-div"
      className="w-[100vw] px-[200px] md:px-[5%] bg-white py-24 md:py-16 flex flex-col gap-24 md:gap-20"
    >
      <div className="flex md:flex-col justify-between w-full relative md:static md:items-center">
        <div className="flex flex-col gap-5 md:gap-4 w-[50%] md:w-full ">
          <h1 className="text-[100px] md:text-[60px] text-tertiary-100 leading-[100px] font-extrabold md:text-center">
            LIBRARY
          </h1>
          <p className="font-normal text-tertiary-100 text-[20px] leading-[30px] md:text-center">
            Lorem ipsum dolor sit amet, cons piscing elit lorem ipsumsit. Lorem
            ipsum dolor sit amet, cons piscing elit lorem ipsumsit. Lorem ipsum
            dolor sit amet.
          </p>
        </div>
        <div className="w-[210px] md:w-[150px] h-[210px] md:h-[150px] rounded-full bg-tertiary-100 cursor-pointer text-white text-[20px] md:text-[16px] leading-[30px] md:leading-[20.5px] flex justify-center items-center gap-1 absolute -bottom-10 md:hidden right-[10%] md:my-20">
          <p>Read more</p>
          <BsArrowUpRight size={"16px"} />
        </div>
      </div>

      <div className="flex flex-col md:gap-[60px]">
        {books.map((book, i) => {
          return (
            <div
              key={i}
              className="h-[120px] md:h-auto w-full flex md:flex-col md:items-start items-center justify-between border-b md:border-none border-tertiary-10"
            >
              <div className="h-[310px] bg-tertiary-15 rounded hidden md:block w-full mb-7" />
              <h2 className="text-[36px] md:text-[26px] leading-[54px] md:leading-[39px] text-tertiary-100 font-semibold w-[33%] md:w-full">
                {book.title}
              </h2>
              <div className="flex  md:mt-2 md:w-full w-[50%] justify-between">
                <p className="text-[20px] leading-[30px] text-tertiary-100 font-normal">
                  {book.focus}
                </p>
                <p className="text-[20px] leading-[30px] text-tertiary-100 font-normal">
                  {book.year}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="md:flex hidden flex-col gap-[60px] w-full items-center">
        <ReadMoreContainer
          onClick={() => {}}
          useFixed={true}
          style="black"
          text="Read more"
        />
      </div>
    </div>
  );
};

export default Library;
