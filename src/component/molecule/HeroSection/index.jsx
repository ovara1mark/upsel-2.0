import React from "react";
import yellow from "../../../assets/yellow-lg.png";
import yellow2 from "../../../assets/yellow-tab.png";
import purple from "../../../assets/purple-lg.png";
import purple2 from "../../../assets/purple-tab.png";
import purple3 from "../../../assets/purple-sm.png";
import video_hero2 from "../../../assets/hero-video-tab.png";
import video_hero from "../../../assets/hero-video-lg.png";
import video_hero3 from "../../../assets/hero-video-sm.png";
import button_arrow from "../../../assets/Buttons.svg";

export const HeroSection = () => {
  return (
    <>
      <section className="bg-upsel-black lg:py-[2.5rem] md:py-[0.75rem]">
        <div className="lg:px-[5rem] lg:pt-[1.5rem] lg:pb-[1.25rem] md:py:-[3rem] md:px-[2.5rem] py-[1.25rem] px-[1.5rem] bg-upsel-black flex flex-col-reverse md:flex md:flex-row md:justify-between">
          <div className="">
            <div className="xl:h-[22.69rem] xl:w-[22.75rem] rounded-[0.75rem] md:w-[15rem] md:h-[20.5rem]">
              <img src={yellow} alt="yellow" className="hidden xl:block" />
              <img
                src={yellow2}
                alt="yellow"
                className="hidden md:block xl:hidden"
              />
            </div>
            <div className="xl:h-[17.8rem] xl:w-[22.3rem] xl:mt-3 rounded-[0.75rem] md:w-[14.6rem] md:h-[17.8rem] mt-[1.25rem] mb-[2.12rem] w-full h-[14rem] bg-no-repeat bg-cover hero_purple">
              <img src={purple} alt="purple" className="hidden xl:block" />
              <img
                src={purple2}
                alt="purple"
                className="hidden md:block xl:hidden"
              />
              <img
                src={purple3}
                alt="purple"
                className="hidden md:hidden xl:hidden"
              />
            </div>
            <div className="text-holder-2 md:hidden">
              <div className="">
                <div className="w-[19.5rem] font-bold text-upsel-white leading-[3.25rem] text-[2rem]">
                  <p>
                    Elevate Your Online Presence with a tailored Tech Solutions
                  </p>
                </div>
                <div className="flex justify-end mt-[-4rem]">
                  <button className="cursor-pointer rounded-[3.25rem] bg-upsel-grey w-[5rem] h-[5rem] flex justify-center items-center px-[1rem] py-[.5rem]">
                    <img src={button_arrow} alt="arrow" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className=" md:flex md:justify-end">
              <div className="xl:w-[45.75rem] xl:h-[22.69rem] rounded-[0.75rem] md:w-[25.6rem] md:h-[17rem] w-full h-[14rem] bg-no-repeat bg-cover hero_video">
                <img
                  src={video_hero}
                  alt="video_hero"
                  className="hidden md:hidden xl:block"
                />
                <img
                  src={video_hero2}
                  alt="video_hero"
                  className="hidden md:block xl:hidden"
                />
                <img
                  src={video_hero3}
                  alt="video_hero"
                  className="hidden md:hidden xl:hidden"
                />
              </div>
            </div>

            <div className="text-holder">
              <div className="lg:mt-[2.94rem] md:mt-[1.5rem] mt-[1.89rem] flex justify-end">
                <button className="text-[.875rem] italic text-upsel-white font-normal md:text-[1rem] lg:text-[1.25rem] rounded-[0.25rem] lg:w-[16.25rem] lg:px-[2rem] lg:py-[1rem] flex justify-center items-center bg-upsel-light-purple cursor-pointer md:w-[13.75rem] md:px-[1.5rem] md:py-[.75rem] w-[7.5rem] px-[1rem] py-[.5rem] transition ease-in-out delay-150 hover:bg-upsel-purple">
                  Hire Us
                </button>
              </div>
              <div className="hidden lg:mt-[1.94rem] md:mt-[2.69rem] xl:flex xl:justify-between xl:flex-row md:flex md:flex-col">
                <div className="lg:w-[32rem] md:w-[23.875rem] w-[19.5rem] font-bold text-upsel-white leading-[3.25rem] lg:text-[3rem] md:text-[3rem] text-[2rem]">
                  <p>
                    Elevate Your Online Presence with a tailored Tech Solutions
                  </p>
                </div>
                <div className="md:flex md:justify-end md:mt-[4rem] xl:mt-0 xl:flex-col xl:justify-end">
                  <button className="cursor-pointer rounded-[3.25rem] bg-upsel-grey w-[5rem] h-[5rem] flex justify-center items-center px-[1rem] py-[.5rem]">
                    <img src={button_arrow} alt="arrow" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
