import React, { useState, useEffect } from "react";
import star from "../../../assets/star.svg";
import Marquee from "react-fast-marquee";

export const PreLoader = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = () => {
      if (count < 100) {
        setCount((prevCount) => prevCount + 1);
      }
    };

    // Increment the count every 100ms (adjust the interval as needed)
    const interval = setInterval(increment, 45);

    return () => {
      clearInterval(interval); // Clean up the interval on unmount
    };
  }, [count]);

  return (
    <section className="flex flex-col items-center  bg-upsel-light-black h-[100vh] w-[100%] overflow-x-hidden pt-[18%] ym:pt-[13%] md:pt-[7%]">
      <div className="flex z-auto   overflow-x-hidden preloader-banner h-[3.6rem] w-[105rem]">
        <Marquee speed={130}>
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
      {/* We are Upsel */}
      <div className=" gap-[25px] font-bold text-center  md:flex md:items-center md:justify-between my-[18%] ym:my-[10%] sm:my-[7%] md:my-[5%]">
        <p className=" text-[3rem] text-upsel-white ym:text-[3.5rem] md:text-[4.25rem]">
          We are
        </p>
        <div className="bg-upsel-white border-[12px] p-0 m-0 border-upsel-light-purple md:border-[24px]">
          <span className="border-[6px] p-0 m-0 border-upsel-blue text-[4rem] ym:text-[4.5rem] md:text-[7.25rem] md:border-[12px]">
            UPSEL
          </span>
        </div>
      </div>

      <div className="flex z-auto  overflow-x-hidden preloader-banner h-[3.6rem] w-[105rem]">
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
      <p className="w-full text-right text-[3rem] font-bold text-upsel-white m-0 pr-[20px] md:pr-[30px] md:text-[4.25rem]">
        {count}%
      </p>
    </section>
  );
};
