"use client";

import React, { FC } from "react";
import Logo from "./Logo";
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
      link: "biography-div",
    },
    {
      name: "Stories",
      link: "story-div",
    },
    {
      name: "Library",
      link: "library-div",
    },
    {
      name: "Gallery",
      link: "gallery-div",
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
              <p
                key={i}
                onClick={() => {
                  const element: HTMLElement | null = document.getElementById(
                    nav.link
                  );
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className=" cursor-pointer text-primary-10 font-normal text-[20px] leading-[30px]"
              >
                {nav.name}
              </p>
            );
          })}
        </div>
        <button className="text-primary-10 font-normal text-[20px] leading-[30px] border-2 border-primary-border-60 px-3 py-1 rounded-full flex items-center gap-[10px] md:hidden">
          <div className="w-[20px] h-[20px] bg-donate-green-40 rounded-full flex items-center justify-center">
            <div className="w-[10px] h-[10px] bg-donate-green rounded-full" />
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
