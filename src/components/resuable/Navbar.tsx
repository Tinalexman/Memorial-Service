import React from "react";
import Logo from "./Logo";
import Link from "next/link";

interface iNavItem {
  name: string;
  link: string;
}

const Navbar = () => {
  const navs: iNavItem[] = [
    {
      name: "Biography",
      link: "",
    },
    {
      name: "Stories",
      link: "",
    },
    {
      name: "Library",
      link: "",
    },
    {
      name: "Gallery",
      link: "",
    },
  ];

  return (
    <div className="flex justify-between items-center">
      <Logo whiteText={true} />
      <div className="flex items-center gap-10 w-fit">
        {navs.map((nav, i) => {
          return (
            <Link
              key={i}
              href={nav.link}
              className="text-primary-10 font-normal text-[20px] leading-[30px]"
            >
              {nav.name}
            </Link>
          );
        })}
      </div>
      <button className="text-primary-10 font-normal text-[20px] leading-[30px] border-2 border-primary-border-60 px-3 py-1 rounded-full flex items-center gap-[10px]">
        <div className="w-[20px] h-[20px] bg-donate-green-40 rounded-full flex items-center justify-center">
            <div className="w-[14px] h-[14px] bg-donate-green rounded-full"/>
        </div>
        DONATE
      </button>
    </div>
  );
};

export default Navbar;
