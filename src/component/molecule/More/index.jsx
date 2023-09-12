import React from "react";
import more from "../../../assets/more-on-us.svg";
import more_1 from "../../../assets/more-on-us-1.svg";
import more_2 from "../../../assets/more-on-us-2.svg";
export const More = () => {
  return (
    <>
      <section className="more border">
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
