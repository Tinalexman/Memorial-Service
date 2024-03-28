"use client";

import React, { FC } from "react";

import Link from "next/link";

import Logo from "@/src/components/resuable/Logo";

import { Drawer } from "@mantine/core";

import { IoMdClose } from "react-icons/io";
import { iNavItem } from "../resuable/Navbar";

export interface iMobileDrawerProps {
  openedDrawer: boolean;
  closeDrawer: () => void;
  menus: iNavItem[];
}

interface iMobileDrawerLink {
  name: string;
  onClick: () => void;
}

const MobileDrawer: FC<iMobileDrawerProps> = ({
  openedDrawer,
  closeDrawer,
  menus,
}) => {
  return (
    <>
      <div className="hidden md:block">
        <Drawer.Root
          opened={openedDrawer}
          onClose={closeDrawer}
          position="right"
          padding={"0px"}
          top={"0px"}
        >
          <Drawer.Overlay />
          <Drawer.Content>
            <Drawer.Body>
              <div className="flex flex-col w-full bg-black h-[100vh]">
                <div className="flex justify-between items-center w-full px-5 py-5">
                  <Logo whiteText={true} />
                  <IoMdClose size={"24px"} onClick={closeDrawer} className="text-primary-10"/>
                </div>

                <div className="flex flex-col items-center w-full mt-7 px-5"></div>
                <div className="mt-10 flex flex-col gap-5 items-start px-5">
                  {menus.map((menu, i) => {
                    return (
                      <Link
                        href={menu.link}
                        key={i}
                        className={`font-medium text-[14px] leading-[24px] `}
                      >
                        {menu.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Root>
      </div>
    </>
  );
};

export default MobileDrawer;
