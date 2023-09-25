import React, { useEffect, useState, useRef } from "react";
import video_hero8 from "../../../assets/center.gif";
import star_white from "../../../assets/star-white.svg";
import { Button } from "../../atom";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";

export const Speciality = () => {
  return (
    <>
      <section className="lg:pt-[8.25rem] lg:px-[5.31rem] md:pt-[6.8rem] md:px-[2.38rem] px-[1.5rem] pt-[7.97rem] special-section">
        <div className="flex justify-center">
          <div className="">
            <div className="xl:w-[69.375rem] xl:h-[38.125rem] rounded-[0.75rem]">
              <img
                src={video_hero8}
                alt="video"
                className="object-cover rounded-[0.75rem]"
              />
            </div>
          </div>
        </div>
        <div className="lg:flex lg:justify-end">
          <div className="lg:pt-[3.25rem] md:pt-[7.33rem] pt-[9rem] lg:w-[45rem] px-[1.5rem]">
            <div>
              <span className="md:text-[2.5rem] text-upsel-light-grey font-bold text-[2rem]">
                Speciality
              </span>
            </div>
            <div className="lg:pl-[9rem] md:pl-[6rem] pl-[1.5rem]">
              <div className="pt-[2rem]   md:pl-[6rem] pl-[4rem]">
                <p className="md:text-[1.125rem] text-upsel-light-grey font-normal md:w-[24.5rem] w-full md:leading-[1.625rem] text-[0.75rem] leading-[1.375rem]">
                  We specialise in crafting tailor-made websites that propel
                  health and wellness businesses to success.
                </p>
              </div>
              <div className="flex gap-2">
                <img src={star_white} alt="star" />
                <span className="md:text-[1.75rem]  text-[1.25rem] font-bold text-upsel-light-grey ">
                  Health-tech
                </span>
              </div>
            </div>
            <div className="lg:pl-[6rem] md:pl-[4rem] pl-[1.5rem] ">
              <div className="pt-[2.5rem] md:pl-[7rem] pl-[3rem]">
                <p className="md:text-[1.125rem] text-upsel-light-grey font-normal md:w-[30.5rem] w-full md:leading-[1.625rem] text-[0.75rem] leading-[1.375rem]">
                  From seamless online registration to dynamic event schedules,
                  our expert team collaborates with you to deliver exceptional
                  online experiences for your clients and events attendees.
                </p>
              </div>
              <div className="flex gap-2">
                <img src={star_white} alt="star" />
                <span className="md:text-[1.75rem]  text-[1.25rem] font-bold text-upsel-light-grey ">
                  Events & Entertainment -tech
                </span>
              </div>
            </div>
            <div className="lg:pt-[2.58rem] md:pt-[4.08rem] pt-[3.43rem] flex justify-end">
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
          </div>
        </div>
      </section>
    </>
  );
};
