"use client";

import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";

import { useDisclosure } from "@mantine/hooks";
import MobileDrawer from "../landing-page/MobileDrawer";

export interface iNavItem {
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

  const [openedDrawer, { open: openDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <>
      <div className="flex justify-between items-center w-full">
        <Logo whiteText={true} />
        <div className="flex items-center gap-10 w-fit md:hidden">
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
      <button className="text-primary-10 font-normal text-[20px] leading-[30px] border-2 border-primary-border-60 px-3 py-1 rounded-full flex items-center gap-[10px] md:hidden">
        <div className="w-[20px] h-[20px] bg-donate-green-40 rounded-full flex items-center justify-center">
          <div className="w-[14px] h-[14px] bg-donate-green rounded-full" />
        </div>
        DONATE
      </button>
        <FaBarsStaggered
          size={"24px"}
          onClick={openDrawer}
          className="text-primary-10 md:block hidden"
        />
      </div>
      <MobileDrawer
        closeDrawer={closeDrawer}
        menus={navs}
        openedDrawer={openedDrawer}
      />
    </>
  );
};

export default Navbar;
