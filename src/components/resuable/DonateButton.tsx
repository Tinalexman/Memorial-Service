import React, { FC } from "react";

interface iDonateProps {
  style: "outlined" | "solid pale" | "solid yellow";
  custom?: string;
  useShadow: true | false;
}

const DonateButton: FC<iDonateProps> = ({ style, custom, useShadow }) => {
  return (
    <button
      className={` ${
        style === "outlined"
          ? "text-primary-10 border-2 border-primary-10"
          : style === "solid pale"
          ? "bg-primary-10 text-tertiary-80"
          : "bg-primary-base text-primary-10"
      } ${
        useShadow && "shadow-custom"
      } ${
        custom && custom
      } ${
        style === "outlined" ? "h-[40px] px-3" : "py-2 w-[170px]"
      } font-normal text-[20px] leading-[30px] rounded-full flex md:flex justify-center items-center gap-[10px]`}
    >
      <div
        className={`w-[20px] h-[20px] ${
          style === "solid yellow"
            ? "bg-primary-border-40"
            : "bg-donate-green-40"
        } rounded-full flex items-center justify-center`}
      >
        <div
          className={`w-[12px] h-[12px] ${
            style === "solid yellow" ? "bg-primary-10" : "bg-donate-green"
          } rounded-full`}
        />
      </div>
      DONATE
    </button>
  );
};

export default DonateButton;
