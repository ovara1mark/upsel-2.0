import React, { useState, useEffect } from "react";
import { Choose, HeroSection, More, Navbar, PreLoader } from "../../molecule";
import {
  Footer,
  AboutSection,
  ContactUs,
  FaqSection,
  DetailSection,
} from "../../organism";
import ReactLoading from "react-loading";
// import purple from "../../../assets/purple-3.gif";

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading by using a timeout
    setTimeout(() => {
      setIsLoading(false);
    }, 4850); // Set the duration as needed
  }, []);
  return (
    <>
      <main className="bg-upsel-black">
        {isLoading ? (
          <PreLoader />
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
