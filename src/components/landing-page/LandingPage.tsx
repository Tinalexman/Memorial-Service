import React, { Suspense } from "react";
import Banner from "./Banner";
import Loader from "../resuable/Loader";

const LandingPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <Suspense fallback={<Loader />}>
      <>
        <Banner />
      </>
    </Suspense>
  );
};

export default LandingPage;
