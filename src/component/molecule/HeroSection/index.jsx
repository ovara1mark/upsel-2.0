import React, { useEffect, useState, useRef } from "react";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";
import yellow from "../../../assets/yellow-lg.png";
import yellow2 from "../../../assets/yellow-tab.svg";
import purple from "../../../assets/purple-lg.png";
import video_hero2 from "../../../assets/center-2.gif";
import button_arrow from "../../../assets/Buttons.svg";
import star from "../../../assets/star.svg";
import Marquee from "react-fast-marquee";
import { Button } from "../../atom/Button";

export const HeroSection = () => {
  return (
    <>
      <section className="bg-upsel-black lg:py-[2.5rem] md:pt-[0.75rem] md:pb-[6.5rem] pb-[4.25rem] hero-section relative overflow-hidden">
        <div className="lg:px-[5rem] lg:pt-[1.5rem] lg:pb-[1.25rem] md:py:-[3rem] md:px-[2.5rem] py-[1.25rem] px-[1.5rem] bg-upsel-black flex flex-col-reverse md:flex md:flex-row md:justify-between">
          <div className="">
            <div className="xl:h-[22.69rem] xl:w-[22.75rem] rounded-[0.75rem] md:w-[15rem] md:h-[20.5rem]">
              <img src={yellow} alt="yellow" className="hidden xl:block" />
              <img
                src={yellow2}
                alt="yellow"
                className="hidden md:block xl:hidden"
              />
            </div>
            <div className="xl:h-[17.8rem] xl:w-[22.3rem] xl:mt-3 rounded-[0.75rem] md:w-[14.6rem] md:h-[17.8rem] mt-[1.25rem] mb-[2.12rem] aspect-w-16 h-[14rem]">
              <img
                src={purple}
                alt="purple"
                className="object-cover rounded-[0.75rem]"
              />
            </div>
            <div className="text-holder-2 md:hidden">
              <div className="">
                <div className="w-[19.5rem] font-bold text-upsel-white leading-[3.25rem] text-[2rem]">
                  <p>
                    Elevate Your Online Presence with a tailored Tech Solutions
                  </p>
                </div>
                <div className="flex justify-end mt-[-4rem]">
                  <button className="cursor-pointer rounded-[3.25rem] bg-upsel-grey w-[5rem] h-[5rem] flex justify-center items-center px-[1rem] py-[.5rem]">
                    <Link
                      to="aboutus"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                    >
                      <img src={button_arrow} alt="arrow" />
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-right">
            <div className=" md:flex md:justify-end">
              <div className="transition ease-in-out delay-50">
                <div className="xl:w-[45.75rem] xl:h-[22.69rem] rounded-[0.75rem] md:w-[25.6rem] md:h-[17rem] aspect-w-16 h-[14rem]">
                  <img
                    src={video_hero2}
                    alt="video"
                    className="object-cover rounded-[0.75rem]"
                  />
                </div>
              </div>
            </div>

            <div className="text-holder">
              <div className="lg:mt-[2.94rem] md:mt-[1.5rem] mt-[1.89rem] flex justify-end">
                <Button>
                  <Link
                    to="contactus"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="navbanner-text"
                  >
                    Hire Us
                  </Link>
                </Button>
              </div>
              <div className="hidden lg:mt-[1.94rem] md:mt-[2.69rem] xl:flex xl:justify-between xl:flex-row md:flex md:flex-col">
                <div className="lg:w-[32rem] md:w-[23.875rem] w-[19.5rem] font-bold text-upsel-white leading-[3.25rem] lg:text-[3rem] md:text-[3rem] text-[2rem]">
                  <p>
                    Elevate Your Online Presence with a tailored Tech Solutions
                  </p>
                </div>
                <div className="md:flex md:justify-end md:mt-[4rem] xl:mt-0 xl:flex-col xl:justify-end">
                  <button className="cursor-pointer rounded-[3.25rem] bg-upsel-grey w-[5rem] h-[5rem] flex justify-center items-center px-[1rem] py-[.5rem]">
                    <Link
                      to="aboutus"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                    >
                      <img src={button_arrow} alt="arrow" />
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex z-auto absolute lg:top-[40%] lg:left-[-15%] xl:right-[0%] md:top-[35%] md:left-[-40%]  ym:top-[40%] ym:left-[-100%] top-[0%] left-[-130%] overflow-x-hidden banner h-[3.6rem] w-[105rem]">
          <Marquee speed={100}>
            <div className="whitespace-nowrap banner-two flex justify-center items-center">
              <span className="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-6">
                UX Design
              </span>
              <span>
                <img src={star} alt="star" className="mx-4 flex pt-2" />
              </span>
              <span className="xl:text-[2rem] font-bold text-[1.25rem] mx-4">
                Branding
              </span>
              <span>
                <img src={star} alt="star" className="mx-4 flex pt-2" />
              </span>
              <span className="xl:text-[2rem] font-bold text-[1.25rem] mx-4">
                Marketing
              </span>
              <span>
                <img src={star} alt="star" className="mx-4 flex pt-2" />
              </span>
              <span className="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pr-6">
                Software Development
              </span>
            </div>
          </Marquee>
        </div>
      </section>
    </>
  );
};
