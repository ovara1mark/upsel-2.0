import React from "react";
import Marquee from "react-fast-marquee";

export const Banner = () => {
  return (
    <>
      <section className="overflow-hidden lg:pt-[7.75rem] md:pt-[7.5rem] pt-[3rem]">
        <Marquee speed={250} className="flex ">
          <div className="flex mb-[1.74rem] md:mb-[1.03rem]">
            <div class="flex text-upsel-white ">
              <span class="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[15rem]">
                Visual Design
              </span>

              <span class="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[32rem]">
                Branding
              </span>
            </div>
            {/* <div class=" whitespace-nowrap flex justify-center gap-[30rem]   text-upsel-white">
              <span class="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-6">
                Visual Design
              </span>

              <span class="xl:text-[2rem] font-bold text-[1.25rem] mx-4">
                Branding
              </span>
            </div> */}
          </div>
        </Marquee>

        <Marquee speed={250}>
          <div className="flex w-full justify-center mb-[1.74rem] md:mb-[1.03rem]">
            <div class="text-upsel-white flex">
              <span class="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[24rem]">
                Backend Development
              </span>

              <span class="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[7rem]">
                Graphics
              </span>
            </div>
            {/* <div class=" whitespace-nowrap flex justify-center gap-[4rem]  text-upsel-white">
              <span class="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-6">
                Backend Development
              </span>

              <span class="xl:text-[2rem] font-bold text-[1.25rem] mx-4">
                Graphics
              </span>
            </div> */}
          </div>
        </Marquee>

        <Marquee speed={250}>
          <div className=" flex mb-[1.74rem] md:mb-[1.03rem]">
            <div class=" whitespace-nowrap flex text-upsel-white ">
              <span class="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[24rem]">
                Marketing
              </span>
              <span class="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[20rem]">
                Interaction Design
              </span>
            </div>
            {/* <div class=" whitespace-nowrap flex text-upsel-white">
              <span class="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[24rem]">
                Marketing
              </span>
              <span class="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[20rem]">
                Interaction Design
              </span>
            </div> */}
          </div>
        </Marquee>

        <Marquee speed={250}>
          <div className=" flex lg:mb-[1.74rem] md:mb-[1.03rem]">
            <div class=" whitespace-nowrap flex text-upsel-white">
              <span class="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[18rem]">
                UX Design
              </span>
              <span class="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[4rem]">
                Frontend Development
              </span>
            </div>
            {/* <div class=" whitespace-nowrap flex text-upsel-white">
              <span class="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[18rem]">
                UX Design
              </span>
              <span class="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[4rem]">
                Frontend Development
              </span>
            </div> */}
          </div>
        </Marquee>
      </section>
    </>
  );
};
