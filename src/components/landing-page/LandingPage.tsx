"use client";

import React from "react";
import Banner from "./Banner";
import Loader from "../resuable/Loader";
import Biography from "./Biography";
import Announcement from "./Announcement";
import Stories from "./Stories";
import Library from "./Library";
import Gallery from "./Gallery";
import Footer from "../resuable/Footer";
import Tributes from "./Tributes";

const LandingPage = async () => {
  //await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <div className="overflow-x-hidden">
      <Banner />
      <Biography />
      <Announcement />
      <Stories />
      <Library />
      <Tributes />
      <Gallery />
      <Footer />
    </div>
  );
};

export default LandingPage;
