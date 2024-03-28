import React, {FC} from "react";

interface LogoOption {
  whiteText: boolean;
}


const Logo:FC<LogoOption> = ({whiteText}) => {
  return (
    <h2 className={ `font-medium text-[28px] md:text-[22.5px] leading-[28px] md:leading-[22.5px] ${whiteText ? "text-primary-10" : "text-tertiary-80"} `}>
      Jacob🕊️
    </h2>
  );
};

export default Logo;
