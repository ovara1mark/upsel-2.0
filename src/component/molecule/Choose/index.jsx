import React from "react";
import trophy from "../../../assets/trophy.svg";
import cell from "../../../assets/cell.svg";
import market from "../../../assets/market.svg";

export const Choose = () => {
  return (
    <>
      <section className="bg-choose">
        <div className="bg-choose-purple">
          <div className="bg-choose-pink pb-[4.75rem] md:pb-[3rem] lg:pb-[5rem] lg:px-[3.75rem] md:px-[7rem] px-[2.88rem]">
            <div className="flex justify-center pt-[1.175rem] md:pt-[3rem] lg:pb-[4.5rem] md:pb-[3rem] pb-[1.5rem]">
              <span className="text-[2rem] md:text-[2.5rem] font-bold text-upsel-dark-blue">
                Why Choose Us?
              </span>
            </div>
            <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:gap-2">
              <div className="w-[16rem] md:w-[32rem] md:flex md:gap-1">
                <div className="flex justify-center md:block">
                  <img src={trophy} alt="trophy" />
                </div>
                <div className="md:w-[23rem]">
                  <h2 className="text-upsel-dark-purple text-[1.25rem] md:text-[1.5rem] font-medium leading-7 md:leading-8 pb-[0.5rem] text-center md:text-left">
                    Our goal is to help you achieve success
                  </h2>
                  <p className="text-[1rem] text-upsel-dark-purple leading-6 text-center md:text-left">
                    We take great pride in being a reliable partner for all our
                    clients' digital needs and guarantee success every step of
                    the way.
                  </p>
                </div>
              </div>
              <div className="w-[16rem] md:w-[32rem] md:gap-1 md:flex mt-[1.25rem] md:mt-[1.5rem] lg:mt-0">
                <div className="flex justify-center md:block">
                  <img src={cell} alt="cell" />
                </div>
                <div className="md:w-[23rem]">
                  <h2 className="text-upsel-dark-purple text-[1.25rem] md:text-[1.5rem] font-medium leading-7 md:leading-8 pb-[0.5rem] text-center md:text-left">
                    Vast Experience
                  </h2>
                  <p className="text-[1rem] text-upsel-dark-purple leading-6 text-center md:text-left">
                    We have the knowledge and experience to provide you with the
                    best advice for achieving success
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-[1.25rem] md:mt-[1.5rem] lg:mt-[3rem]">
              <div className="w-[16rem] md:w-[32rem] md:flex md:gap-1 ">
                <div className="flex justify-center md:block">
                  <img src={market} alt="market" />
                </div>
                <div className="md:w-[23.125rem]">
                  <h2 className="text-upsel-dark-purple text-[1.25rem] md:text-[1.5rem] font-medium leading-7 md:leading-8 pb-[0.5rem] text-center md:text-left">
                    No project is too big or too small.
                  </h2>
                  <p className="text-[1rem] text-upsel-dark-purple leading-6 text-center md:text-left">
                    We design, develop and market websites and apps for you by
                    using the latest technology. We strategies with you on the
                    best solution to bring you success
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
