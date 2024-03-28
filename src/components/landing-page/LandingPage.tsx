import React from "react";
import Banner from "./Banner";

const LandingPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <div className="">
      <Banner />
    </div>
  );
};

export default LandingPage;
