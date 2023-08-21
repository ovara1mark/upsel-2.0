import React from "react";
import { HeroSection, Navbar, ContactForm } from "../../molecule";
import { Footer, ContactUs } from "../../organism";

export const HomePage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ContactUs />
      <Footer />
    </>
  );
};
