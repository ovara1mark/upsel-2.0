import React from "react";
import { Choose, HeroSection, More, Navbar } from "../../molecule";
import {
  Footer,
  AboutSection,
  ContactUs,
  FaqSection,
  DetailSection,
} from "../../organism";

export const HomePage = () => {
  return (
    <>
      <main className="bg-upsel-black">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <More />
        <DetailSection />
        <Choose />
        <FaqSection />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
};
