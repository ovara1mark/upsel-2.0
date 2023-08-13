import React from "react";
import { HeroSection, Navbar } from "../../molecule";
import { Footer } from "../../organism";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Footer />
    </>
  );
};
