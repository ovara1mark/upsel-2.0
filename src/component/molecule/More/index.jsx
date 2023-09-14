import React from "react";
import more from "../../../assets/more-on-us.svg";
import more_1 from "../../../assets/more-on-us-1.svg";
import more_2 from "../../../assets/more-on-us-2.svg";
export const More = () => {
  return (
    <>
      <section className="more lg:pt-[7.5rem] md:pt-[6.96rem] pt-[5rem] lg:pb-[2.25rem] md:pb-[2.8rem] pb-[7.5rem]">
        <img src={more} alt="" className="object-fit w-full hidden lg:block" />
        <img
          src={more_1}
          alt=""
          className="object-fit w-full hidden lg:hidden md:block"
        />
        <img src={more_2} alt="" className="object-fit w-full  md:hidden" />
      </section>
    </>
  );
};
