import React, { useEffect, useState, useRef } from "react";
import video_hero8 from "../../../assets/Frame8.svg";
import video_hero9 from "../../../assets/Frame9.svg";
import video_hero10 from "../../../assets/Frame10.svg";
import video_hero11 from "../../../assets/Frame11.svg";
import video_hero12 from "../../../assets/Frame12.svg";

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
      <section className="lg:pt-[8.25rem] lg:px-[5.31rem] md:pt-[6.8rem] md:px-[2.38rem] px-[1.5rem] pt-[7.97rem] special-section">
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
      </section>
    </>
  );
};
