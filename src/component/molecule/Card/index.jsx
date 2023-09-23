import React, { useState } from "react";
import black_star from "../../../assets/black-star.svg";
import arrow_right from "../../../assets/arrow-right.svg";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";

export const Card = ({ details, text, header }) => {
  const [activeCard, setActiveCard] = useState(false);

  const handleFlip = () => {
    setActiveCard(!activeCard);
  };
  return (
    <>
      <div className="">
        <div
          onClick={handleFlip}
          className={`relative w-[19.5rem] h-[28.125rem] card ${
            activeCard ? "cardFlip" : ""
          }`}
        >
          {/* front */}
          <div className="front w-[19.5rem] h-[28.125rem] bg-upsel-yellow flex flex-col justify-between py-[2rem] px-[1rem] rounded-[0.75rem]">
            <div className="flex">
              <div className="w-13rem">
                <span className="text-[2rem] text-upsel-black font-bold">
                  {header}
                </span>
              </div>
              <div className="flex justify-center items-center">
                <button className="bg-upsel-grey h-[3.75rem] w-[3.75rem] rounded-[3.25rem] flex justify-center items-center">
                  <img src={arrow_right} alt="image" />
                </button>
              </div>
            </div>
            <div>
              <div className="flex gap-2 pb-[1rem]">
                <div>
                  <img src={black_star} alt="black star" />
                </div>
                <div>
                  <span className="text-[1rem] text-upsel-card-black">
                    {details}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* back */}
          <div className="absolute top-0 back w-[19.5rem] h-[28.125rem] bg-white flex flex-col justify-between py-[2rem] px-[1rem] rounded-[0.75rem]">
            <div className="flex">
              <div className="w-13rem">
                <span className="text-[2rem] text-upsel-black font-bold">
                  {header}
                </span>
              </div>
              <div className="flex justify-center items-center">
                <button className="bg-upsel-grey h-[3.75rem] w-[3.75rem] rounded-[3.25rem] flex justify-center items-center flip-left">
                  <img src={arrow_right} alt="image" />
                </button>
              </div>
            </div>
            <div>
              <div className="pb-[1rem]">
                <div>
                  <p className="text-[1rem] text-upsel-card-black">{text}</p>
                </div>
                <div className="btn mt-[1rem]">
                  <button className="py-[0.5rem] px-[1rem] flex justify-center text-center items-center text-upsel-white bg-upsel-light-purple rounded-[0.25rem] italic md:w-[13.75rem] text-[1rem]  cursor-pointer transition ease-in-out delay-150 hover:bg-upsel-purple">
                    <Link
                      activeClass="active"
                      to="contactus"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                    >
                      Grow Your Business Now
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
