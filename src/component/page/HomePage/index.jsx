import React from "react";
import { HeroSection, Navbar } from "../../molecule";
import { Footer, AboutSection } from "../../organism";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      {/* <Footer /> */}
    </>
  );
};
