import React, { useEffect, useState, useRef } from "react";
import video_hero8 from "../../../assets/frame8.svg";
import video_hero9 from "../../../assets/frame9.svg";
import video_hero10 from "../../../assets/frame10.svg";
import video_hero11 from "../../../assets/frame11.svg";
import video_hero12 from "../../../assets/frame12.svg";
import star_white from "../../../assets/star-white.svg";

export const Speciality = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featuredImages = [
    video_hero8,
    video_hero9,
    video_hero10,
    video_hero11,
    video_hero12,
  ];
  const slideRef = useRef();
  let count = 0;
  let slideInterval;
  const handleOnNextClick = () => {
    count = (count + 1) % featuredImages.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    startSlider();
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    return () => {
      clearInterval(slideInterval);
    };
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 1000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  return (
    <>
      <section className="lg:pt-[8.25rem] lg:px-[5.31rem] md:pt-[6.8rem] md:px-[2.38rem] px-[1.5rem] pt-[7.97rem] special-section border">
        <div className="flex justify-center">
          <div ref={slideRef} className="transition ease-in-out delay-50">
            <div className="xl:w-[69.375rem] xl:h-[38.125rem] rounded-[0.75rem]">
              <img
                src={featuredImages[currentIndex]}
                alt="video"
                className="object-cover rounded-[0.75rem]"
              />
            </div>
          </div>
        </div>
        <div className="lg:flex lg:justify-end">
          <div className="lg:pt-[3.25rem] md:pt-[7.33rem] pt-[9rem] lg:w-[45rem] border">
            <div>
              <span className="md:text-[2.5rem] text-upsel-light-grey font-bold text-[2rem]">
                Speciality
              </span>
            </div>
            <div>
              <div className="pt-[2rem]">
                <p className="md:text-[1.125rem] text-upsel-light-grey font-normal md:w-[24.5rem] w-[14.3rem] md:leading-[1.625rem] text-[0.75rem] leading-[1.375rem]">
                  We specialise in crafting tailor-made websites that propel
                  health and wellness businesses to success.
                </p>
              </div>
              <div className="flex gap-2">
                <img src={star_white} alt="star" />
                <span className="md:text-[1.75rem]  text-[1.25rem] font-bold text-upsel-light-grey ">
                  Health-tech
                </span>
              </div>
            </div>
            <div>
              <div className="pt-[2.5rem]">
                <p className="md:text-[1.125rem] text-upsel-light-grey font-normal md:w-[30.5rem] w-[15.3rem] md:leading-[1.625rem] text-[0.75rem] leading-[1.375rem]">
                  From seamless online registration to dynamic event schedules,
                  our expert team collaborates with you to deliver exceptional
                  online experiences for your clients and events attendees.
                </p>
              </div>
              <div className="flex gap-2">
                <img src={star_white} alt="star" />
                <span className="md:text-[1.75rem]  text-[1.25rem] font-bold text-upsel-light-grey ">
                  Events & Entertainment -tech
                </span>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
};
