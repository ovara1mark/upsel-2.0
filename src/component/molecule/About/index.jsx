import React from "react";
import about_lg from "../../../assets/about-lg.svg";
import facebook from "../../../assets/facebook.svg";
import twitter from "../../../assets/twitter.svg";
import linkedin from "../../../assets/linkedin.svg";
import instagram from "../../../assets/instagram.svg";
import { Button } from "../../atom";

export const About = () => {
  return (
    <>
      <div className="flex flex-col lg:px-[10.75rem] md:px-[4.4rem] items-center">
        <div className="w-full">
          <img src={about_lg} alt="upsel about" className="object-cover" />
        </div>
        <div className="md:w-[25.2rem] w-[17rem]">
          <p className="md:text-[1.25rem] leading-6 text-upsel-light-grey py-[2.5rem] text-[1rem]">
            Our team is a unique blend of developers, designers, copywriters,
            strategists, and creatives. Using the latest web technologies we
            help companies and brands succeed online.
          </p>
        </div>
        <div className="md:w-[25.2rem] w-[17rem] flex flex-col items-end mb-[2.5rem]">
          <Button>Hire Us</Button>
        </div>
        <div className="md:w-[25.2rem] w-[17rem] flex justify-center">
          <div className="flex gap-[2rem] w-[11.4rem] h-[1.5rem]">
            <div>
              <a href="#">
                <img src={linkedin} alt="icon" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src={instagram} alt="icon" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src={facebook} alt="icon" />
              </a>
            </div>
            <div>
              <a href="#">
                <img src={twitter} alt="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
