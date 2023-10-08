import React, { useState } from "react";
import search from "../../../assets/Search.svg";
import { frequent } from "./questions";
import arrowDown from "../../../assets/arrow-down.svg";
import arrowUp from "../../../assets/arrow-up.svg";
import faqStar from "../../../assets/faq_star.svg";
import faqHexagon from "../../../assets/faq-hexagon.svg";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";

export const FaqSection = () => {
  const [clicked, setClicked] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const handleClick = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }
    setClicked(index);
  };
  const filteredFrequent = frequent.filter((elem) =>
    elem.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <section
      id="faq"
      className="flex flex-col gap-[6px] justify-center items-center pb-[55%] bg-faq-star relative gradient-bg md:pb-[25%] lg:pb-[15%] "
    >
      <div className="absolute top-[31%] w-[10%] left-0 z-[1] md:w-[6%] lg:hidden">
        <img className="w-full" src={faqStar} alt="" />
      </div>
      <div className="absolute w-[10%] top-[51%] right-0 z-[2] md:w-[6%] lg:hidden">
        <img className="w-full" src={faqHexagon} alt="" />
      </div>
      <div className="absolute w-[10%] top-[91%] left-0 z-[1] md:w-[6%] lg:hidden">
        <img className="w-full" src={faqStar} alt="" />
      </div>
      <h3 className="text-[1.75rem]  text-upsel-white font-bold text-center mt-[15%] md:text-[2rem] lg:hidden  ">
        Have any questions?
      </h3>
      <h3 className="hidden text-[3.5rem]  text-upsel-white font-bold text-center mt-[15%]  lg:block ">
        Frequently asked questions
      </h3>
      <div className="flex items-center justify-between bg-upsel-white rounded-[8px] w-[90%]  my-[33px] p-[10px] md:w-4/5 lg:mb-[7%] lg:w-3/5">
        <div className="flex flex-col justify-center gap-[6px] w-3/4 ">
          <label
            className="text-[10px] italic text-upsel-light-grey-"
            htmlFor=""
          >
            Any Questions?
          </label>
          <input
            className="text-[14px] w-[125%] outline-0 placeholder:text-upsel-black placeholder:italic"
            placeholder="Find answers to a question"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <span className="hidden lg:block cursor-pointer">
          <img src={search} alt="search icon" />
        </span>
      </div>
      <div className="flex flex-col gap-[6px] justify-center items-center w-full">
        <div className="main flex flex-col gap-[6px] z-[2] justify-center items-center p-[12px] rounded-lg bg-upsel-white w-[90%]  md:w-7/8 lg:w-4/5">
          {filteredFrequent.map((elem, index) => {
            return (
              <div key={index} className="each py-[10px]  px-[16px] w-full">
                <div className="flex justify-between lg:py-[16px]">
                  <h2 className="text-[12px] font-medium w-[90%] lg:text-[18px]">
                    {elem.title}
                  </h2>
                  <span
                    onClick={() => handleClick(index)}
                    className="cursor-pointer w-[24px] "
                  >
                    {clicked === index ? (
                      <img src={arrowUp} alt="open accordion" />
                    ) : (
                      <img src={arrowDown} alt="closed accordion" />
                    )}
                  </span>
                </div>
                {clicked === index ? (
                  <p className="text-[12px] mb-[10px] pt-[10px] border-t border-upsel-grey lg:text-[18px]">
                    {elem.contentOne}
                  </p>
                ) : (
                  ""
                )}
              </div>
            );
          })}
          <div className="flex flex-col items-center justify-center w-[279px] border-t border-upsel-grey mt-[18px] pt-[18px] lg:w-[368px] ">
            <h5 className="text-[.875rem] font-bold ">Still have questions?</h5>
            <p className="text-[.75rem] text-center">
              If you cannot find answers to your question in our FAQ, you can
              always contact us. We will answer to you shortly!
            </p>
            <div className="lg:mt-[2.94rem] md:mt-[1.5rem] mt-[1.89rem]">
              <button className="text-[.875rem] italic text-upsel-white font-normal mb-[2rem] md:text-[1rem] lg:text-[1.25rem] rounded-[0.25rem] lg:w-[16.25rem] lg:px-[2rem] lg:py-[1rem] flex justify-center items-center bg-upsel-light-purple cursor-pointer md:w-[13.75rem] md:px-[1.5rem] md:py-[.75rem] w-[7.5rem] px-[1rem] py-[.5rem] transition ease-in-out delay-150 hover:bg-upsel-purple">
                <Link
                  to="contactus"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="navbanner-text"
                >
                  Contact Us
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
