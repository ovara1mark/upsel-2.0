import React from "react";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";
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
        <div className="w-full flex justify-center">
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
          <Button>
            <Link
              to="contactus"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Hire Us
            </Link>
          </Button>
        </div>
        <div className="md:w-[25.2rem] w-[17rem] flex justify-center">
          <div className="flex gap-[2rem] w-[11.4rem] h-[1.5rem]">
            <div>
              <a
                href="https://www.linkedin.com/company/weareupsel"
                target="_blank"
              >
                <img src={linkedin} alt="upsel linkedin" />
              </a>
            </div>
            <div>
              <a href="https://instagram.com/weareupsel" target="_blank">
                <img src={instagram} alt="upsel instagram" />
              </a>
            </div>
            <div>
              <a href=" https://facebook.com/weareupsel" target="_blank">
                <img src={facebook} alt="upsel facebook" />
              </a>
            </div>
            <div>
              <a href="https://twitter.com/weareupsel" target="_blank">
                <img src={twitter} alt="upsel twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
