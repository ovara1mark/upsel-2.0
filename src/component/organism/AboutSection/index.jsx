import React from "react";
import { About, Banner, Speciality } from "../../molecule";

export const AboutSection = () => {
  return (
    <>
      <section className="about" id="aboutus">
        <About />
        <Banner />
        <Speciality />
      </section>
    </>
  );
};
