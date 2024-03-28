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
              <div className="flex flex-col items-center pb-10 justify-between w-full bg-black h-[100vh]">
                <div className="flex flex-col w-full">
                  <div className="flex justify-between items-center w-full px-5 py-5">
                    <Logo whiteText={true} />
                    <IoMdClose
                      size={"24px"}
                      onClick={closeDrawer}
                      className="text-primary-10"
                    />
                  </div>

                  <div className="mt-10 flex flex-col gap-16 items-start px-5">
                    {menus.map((menu, i) => {
                      return (
                        <div
                          onClick={() => {
                            const element: HTMLElement | null =
                              document.getElementById(menu.link);
                            element?.scrollIntoView({
                              behavior: "smooth",
                            });

                            closeDrawer();
                          }}
                          key={i}
                          className={`cursor-pointer flex items-center gap-2 font-semibold text-[24px] leading-[36px] ${
                            i === 1 ? "text-primary-base" : "text-primary-10"
                          } `}
                        >
                          <h2 className="font-normal text-[15px] leading-[22.5px] -rotate-90">
                            0{i + 1}
                          </h2>
                          <h1>{menu.name}</h1>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <button className="text-tertiary-80 bg-primary-10 font-normal text-[20px] leading-[30px] w-[180px] py-3 rounded-full flex justify-center items-center gap-[10px]">
                  <div className="w-[20px] h-[20px] bg-donate-green-40 rounded-full flex items-center justify-center">
                    <div className="w-[14px] h-[14px] bg-donate-green rounded-full" />
                  </div>
                  <p>DONATE</p>
                </button>
              </div>
            </Drawer.Body>
          </Drawer.Content>
        </Drawer.Root>
      </div>
    </>
  );
};

export default MobileDrawer;
