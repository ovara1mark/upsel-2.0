import React, { useState, useEffect } from "react";
import { Choose, HeroSection, More, Navbar } from "../../molecule";
import {
  Footer,
  AboutSection,
  ContactUs,
  FaqSection,
  DetailSection,
} from "../../organism";
import ReactLoading from "react-loading";
import purple from "../../../assets/purple-3.gif";

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading by using a timeout
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Set the duration as needed
  }, []);
  return (
    <>
      <main className="bg-upsel-black">
        {isLoading ? (
          <section className="bg-upsel-black w-[100%] h-[100vh] flex justify-center items-center">
            <img src={purple} alt="preloader" />
          </section>
        ) : (
          <>
            <Navbar />
            <HeroSection />
            <AboutSection />
            <More />
            <DetailSection />
            <Choose />
            <FaqSection />
            <ContactUs />
            <Footer />
          </>
        )}
      </main>
    </>
  );
};
