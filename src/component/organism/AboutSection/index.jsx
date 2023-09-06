import React from "react";
import { About, Banner, Speciality } from "../../molecule";

export const AboutSection = () => {
  return (
    <>
      <section className="about">
        <About />
        <Banner />
        <Speciality />
      </section>
    </>
  );
};
