"use client";

import React, { FC } from "react";
import Logo from "./Logo";
import { FaBarsStaggered } from "react-icons/fa6";

import { useDisclosure } from "@mantine/hooks";
import MobileDrawer from "../landing-page/MobileDrawer";
import DonateButton from "./DonateButton";

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
        {/* <DonateButton style="outlined" useShadow={false} custom="md:hidden" /> */}

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
