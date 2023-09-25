import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

export const Banner = () => {
  const [currentColor, setCurrentColor] = useState("text-upsel-gold");
  const colors = ["text-white", "text-upsel-blue", "text-upsel-gold"]; // Define the colors you want to cycle through
  const intervalTime = 3000; // Change color every 2 seconds (2000 milliseconds)

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Rotate through the colors
      const currentIndex = colors.indexOf(currentColor);
      const nextIndex = (currentIndex + 1) % colors.length;
      setCurrentColor(colors[nextIndex]);
    }, intervalTime);

    return () => clearInterval(intervalId); // Clear the interval when the component unmounts
  }, [currentColor]);

  return (
    <>
      <section className="overflow-hidden lg:pt-[7.75rem] md:pt-[7.5rem] pt-[3rem]">
        <Marquee speed={250} className="flex ">
          <div className="flex mb-[1.74rem] md:mb-[1.03rem]">
            <div className="flex text-upsel-white ">
              <span
                className={`xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[15rem] ${currentColor}`}
              >
                Visual Design
              </span>

              <span
                className={`xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[32rem] ${currentColor}`}
              >
                Branding
              </span>
            </div>
          </div>
        </Marquee>

        <Marquee speed={250}>
          <div className="flex w-full justify-center mb-[1.74rem] md:mb-[1.03rem]">
            <div className="text-upsel-white flex">
              <span
                className={`xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[24rem] ${currentColor}`}
              >
                Backend Development
              </span>

              <span
                className={`xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[7rem] ${currentColor}`}
              >
                Graphics
              </span>
            </div>
          </div>
        </Marquee>

        <Marquee speed={250}>
          <div className=" flex mb-[1.74rem] md:mb-[1.03rem]">
            <div className=" whitespace-nowrap flex text-upsel-white ">
              <span
                className={`xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[24rem] ${currentColor}`}
              >
                Marketing
              </span>
              <span
                className={`xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[20rem] ${currentColor}`}
              >
                Interaction Design
              </span>
            </div>
          </div>
        </Marquee>

        <Marquee speed={250}>
          <div className=" flex lg:mb-[1.74rem] md:mb-[1.03rem]">
            <div className=" whitespace-nowrap flex text-upsel-white">
              <span
                className={`xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[18rem] ${currentColor}`}
              >
                UX Design
              </span>
              <span
                className={`xl:text-[2rem] font-bold text-[1.25rem] mx-4 pl-[4rem] ${currentColor}`}
              >
                Frontend Development
              </span>
            </div>
          </div>
        </Marquee>
      </section>
    </>
  );
};
