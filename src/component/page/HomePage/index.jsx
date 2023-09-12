import React from "react";
import { HeroSection, More, Navbar } from "../../molecule";
import { Footer, AboutSection, ContactUs, FaqSection } from "../../organism";

export const HomePage = () => {
  return (
    <>
      <main className="bg-upsel-black">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <More />
        <FaqSection />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
};
