import React from "react";
import arrow_down from "../../../assets/arrow-down-1.svg";
import arrow_down_2 from "../../../assets/arrow-down-2.svg";
export const DetailSection = () => {
  return (
    <>
      <section className="pb-[5rem] md:pb-[32rem]">
        <div className="flex flex-col items-center md:block lg:grid lg:grid-cols-2 md:gap-4 md:px-[2.5rem] px-[1rem] lg:px-[10rem]">
          <div className="lg:mt-[5rem]  md:mt-[5rem] lg:block md:flex md:justify-center mt-[7rem]">
            <div className="md:w-[20.75rem]">
              <div className="w-[17.5rem]">
                <span className="text-[2.5rem] font-bold  text-upsel-white">
                  Software Engineering
                </span>
              </div>

              <div className="w-[17.5rem] py-[2rem]">
                <p className="text-[1rem] font-normal leading-6 text-upsel-white">
                  We provide software solutions for your business needs and help
                  you stand out, providing you with the best advice for
                  achieving success.
                </p>
              </div>
              <div className="flex justify-end w-[17.5rem] md:w-full">
                <button className="rounded-full flex justify-center items-center bg-upsel-grey w-[5rem] h-[5rem] ">
                  <img
                    src={arrow_down}
                    alt="arrow-down"
                    className="lg:hidden"
                  />
                  <img
                    src={arrow_down_2}
                    alt="arrow-down"
                    className="hidden lg:block"
                  />
                </button>
              </div>
            </div>
            <div className="card">
              <div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>

          <div className="flex  justify-center md:justify-start lg:justify-end lg:mt-[20.65rem] md:mt-[5rem] mt-[7rem]">
            <div className="md:w-[20.75rem">
              <span className="text-[2.5rem] font-bold text-upsel-white">
                Product Design
              </span>
              <div className="w-[17.5rem] py-[2rem]">
                <p className="text-[1rem] font-normal leading-6 text-upsel-white">
                  We are constantly improving the experience of users by
                  gathering information inorder to see things through the lens
                  of their eyes, propose solutions and test them to ensure the
                  problems are solved and Business needs are met.Happy Users
                  ,Growing Business.
                </p>
              </div>
              <div className="flex justify-end w-[17.5rem] md:w-full">
                <button className="rounded-full flex justify-center items-center bg-upsel-grey w-[5rem] h-[5rem] ">
                  <img
                    src={arrow_down}
                    alt="arrow-down"
                    className="lg:hidden"
                  />
                  <img
                    src={arrow_down_2}
                    alt="arrow-down"
                    className="hidden lg:block"
                  />
                </button>
              </div>
            </div>
            <div className="card"></div>
          </div>

          <div className="lg:mt-[5rem] md:mt-[5rem] lg:block md:flex md:justify-end mt-[7rem]">
            <div className="md:w-[20.75rem] ">
              <div className="w-[17.5rem]">
                <span className="text-[2.5rem] font-bold  text-upsel-white">
                  Brand Design & Graphics
                </span>
              </div>
              <div className="w-[17.5rem] py-[2rem]">
                <p className="text-[1rem] font-normal leading-6 text-upsel-white">
                  We understand that brand identity is a critical component of
                  any business, and that's why we focus on delivering brand and
                  graphic design solutions that are memorable, effective, and
                  distinctive.
                </p>
              </div>
              <div className="flex justify-end w-[17.5rem] md:w-full">
                <button className="rounded-full flex justify-center items-center bg-upsel-grey w-[5rem] h-[5rem]">
                  <img
                    src={arrow_down}
                    alt="arrow-down"
                    className="lg:hidden"
                  />
                  <img
                    src={arrow_down_2}
                    alt="arrow-down"
                    className="hidden lg:block"
                  />
                </button>
              </div>
            </div>
            <div className="card"></div>
          </div>

          <div className="lg:flex lg:justify-end lg:mt-[14.65rem] md:mt-[5rem] mt-[7rem]">
            <div className="md:w-[20.75rem]">
              <span className="text-[2.5rem] font-bold text-upsel-white">
                Marketing
              </span>
              <div className="w-[17.5rem] py-[2rem]">
                <p className="text-[1rem] font-normal leading-6 text-upsel-white">
                  Our digital marketing services are designed to help our
                  clients increase their online visibility, drive traffic to
                  their website, and generate leads that convert to sales
                </p>
              </div>
              <div className="flex justify-end w-[17.5rem] md:w-full">
                <button className="rounded-full flex justify-center items-center bg-upsel-grey w-[5rem] h-[5rem]">
                  <img
                    src={arrow_down}
                    alt="arrow-down"
                    className="lg:hidden"
                  />
                  <img
                    src={arrow_down_2}
                    alt="arrow-down"
                    className="hidden lg:block"
                  />
                </button>
              </div>
            </div>
            <div className="card"></div>
          </div>
        </div>
      </section>
    </>
  );
};