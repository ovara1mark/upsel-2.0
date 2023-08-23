import React from "react";

export const Banner = () => {
  return (
    <>
      <section className="border overflow-hidden">
        <div className="flex">
          <div class=" whitespace-nowrap flex justify-center gap-[30rem] animate-marquee3  text-upsel-white">
            <span class="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-6">
              Visual Design
            </span>

            <span class="xl:text-[2rem] font-bold text-[1.25rem] mx-4">
              Branding
            </span>
          </div>
          <div class=" whitespace-nowrap flex justify-center gap-[30rem] animate-marquee4  text-upsel-white">
            <span class="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-6">
              Visual Design
            </span>

            <span class="xl:text-[2rem] font-bold text-[1.25rem] mx-4">
              Branding
            </span>
          </div>
        </div>

        <div className="flex">
          <div class=" whitespace-nowrap flex justify-center gap-[4rem] animate-marquee3  text-upsel-white">
            <span class="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-6">
              Backend Development
            </span>

            <span class="xl:text-[2rem] font-bold text-[1.25rem] mx-4">
              Graphics
            </span>
          </div>
          <div class=" whitespace-nowrap flex justify-center gap-[4rem] animate-marquee4  text-upsel-white">
            <span class="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-6">
              Backend Development
            </span>

            <span class="xl:text-[2rem] font-bold text-[1.25rem] mx-4">
              Graphics
            </span>
          </div>
        </div>

        <div className=" flex">
          <div class=" whitespace-nowrap flex text-upsel-white animate-marquee3">
            <span class="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[24rem]">
              Marketing
            </span>
            <span class="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[20rem]">
              Interaction Design
            </span>
          </div>
          <div class=" whitespace-nowrap flex text-upsel-white animate-marquee3">
            <span class="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[24rem]">
              Marketing
            </span>
            <span class="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[20rem]">
              Interaction Design
            </span>
          </div>
        </div>
        <div className=" flex">
          <div class=" whitespace-nowrap flex text-upsel-white animate-marquee3">
            <span class="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[18rem]">
              UX Design
            </span>
            <span class="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[4rem]">
              Frontend Development
            </span>
          </div>
          <div class=" whitespace-nowrap flex text-upsel-white animate-marquee4">
            <span class="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[18rem]">
              UX Design
            </span>
            <span class="xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[4rem]">
              Frontend Development
            </span>
          </div>
        </div>
      </section>
    </>
  );
};
