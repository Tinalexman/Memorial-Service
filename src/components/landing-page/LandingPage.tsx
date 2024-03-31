import React, { Suspense } from "react";
import Banner from "./Banner";
import Loader from "../resuable/Loader";
import Biography from "./Biography";
import Announcement from "./Announcement";
import Stories from "./Stories";
import Library from "./Library";
import Gallery from "./Gallery";
import Footer from "../resuable/Footer";

const LandingPage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <Suspense fallback={<Loader />}>
      <div className="overflow-x-hidden">
        <Banner />
        <Biography />
        <Announcement />
        <Stories />
        <Library />
        <Gallery />
        <Footer />
      </div>
    </Suspense>
  );
};

export default LandingPage;
