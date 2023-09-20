import React from "react";
import Marquee from "react-fast-marquee";

export const Banner = () => {
  return (
    <>
      <section className="overflow-hidden lg:pt-[7.75rem] md:pt-[7.5rem] pt-[3rem]">
        <Marquee speed={250} className="flex ">
          <div className="flex mb-[1.74rem] md:mb-[1.03rem]">
            <div className="flex text-upsel-white ">
              <span className="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[15rem]">
                Visual Design
              </span>

              <span className="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[32rem]">
                Branding
              </span>
            </div>

          </div>
        </Marquee>

        <Marquee speed={250}>
          <div className="flex w-full justify-center mb-[1.74rem] md:mb-[1.03rem]">
            <div className="text-upsel-white flex">
              <span className="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[24rem]">
                Backend Development
              </span>

              <span className="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[7rem]">
                Graphics
              </span>
            </div>

          </div>
        </Marquee>

        <Marquee speed={250}>
          <div className=" flex mb-[1.74rem] md:mb-[1.03rem]">
            <div className=" whitespace-nowrap flex text-upsel-white ">
              <span className="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[24rem]">
                Marketing
              </span>
              <span className="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[20rem]">
                Interaction Design
              </span>
            </div>

          </div>
        </Marquee>

        <Marquee speed={250}>
          <div className=" flex lg:mb-[1.74rem] md:mb-[1.03rem]">
            <div className=" whitespace-nowrap flex text-upsel-white">
              <span className="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[18rem]">
                UX Design
              </span>
              <span className="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[4rem]">
                Frontend Development
              </span>
            </div>
 
          </div>
        </Marquee>
      </section>
    </>
  );
};
