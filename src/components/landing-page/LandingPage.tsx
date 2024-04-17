"use client";

import React from "react";
import Banner from "./Banner";
import Biography from "./Biography";
import Announcement from "./Announcement";
import Stories from "./Stories";
import Library from "./Library";
import Gallery from "./Gallery";
import Footer from "../resuable/Footer";
import Tributes from "./Tributes";
import { useLoadStore } from "@/src/stores/store";
import Loader from "../resuable/Loader";

const LandingPage = () => {
  const ready = useLoadStore((state) => state.ready);

  return !ready ? (
    <Loader />
  ) : (
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
