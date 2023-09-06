import React, { useState } from "react";
import search from "../../../assets/Search.svg";
import arrowDown from "../../../assets/arrow-down.svg";
import arrowUp from "../../../assets/arrow-up.svg";

export const FaqSection = () => {
  const [clicked, setCLicked] = useState(false);
  const handleClick = () => {
    setCLicked(!clicked);
  };

  return (
    <section className="flex flex-col gap-[6px] justify-center items-center gradient-bg">
      <h3 className="text-[1.75rem]  text-upsel-white font-bold text-center mt-[15%] md:text-[2rem] lg:hidden  ">
        Have any questions?
      </h3>
      <h3 className="hidden text-[3.5rem]  text-upsel-white font-bold text-center mt-[15%]  lg:block ">
        Frequently asked questions
      </h3>
      <div className="flex items-center justify-between bg-upsel-white rounded-[8px] w-3/5 my-[33px] p-[10px]">
        <div className="flex flex-col justify-center gap-[6px] w-3/4 ">
          <label
            className="text-[10px] italic text-upsel-light-grey-"
            htmlFor=""
          >
            Any Questions?
          </label>
          <input
            className="text-[14px] w-full placeholder:text-upsel-black placeholder:italic"
            type="search"
            placeholder="Find answers to a question"
          />
        </div>
        <span className="">
          <img src={search} alt="" />
        </span>
      </div>
      <div className="flex flex-col gap-[6px] justify-center items-center w-full">
        <div className="main p-[12px] rounded-lg bg-upsel-white w-4/5 md:w-7/8 ">
          <div className="each px-[16px] w-full">
            <div className="flex justify-between py-[16px]">
              <h2 className="text-[18px] font-medium">
                What web development services do you offer?
              </h2>
              <span onClick={handleClick} className="cursor-pointer">
                {clicked ? (
                  <img src={arrowUp} alt="" />
                ) : (
                  <img src={arrowDown} alt="" />
                )}
              </span>
            </div>
            {clicked && (
              <p className="text-[18px] mb-[10px] pt-[10px] border-t border-upsel-grey">
                We work with a variety of platforms and technologies, including
                WordPress, Shopify, Magento, WooCommerce, React, Angular,
                Node.js, Laravel, and more. Our team of experienced developers
                stays up to date with the latest technologies and tools to
                ensure that we can provide our clients with cutting-edge
                solutions.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
