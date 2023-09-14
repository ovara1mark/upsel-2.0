import React from "react";
import checked from "../../../assets/Check.svg";

export const Thankyou = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center rounded-[28px] py-[16px] px-[54px] bg-upsel-white w-[86vw] md:w-[55vw] lg:w-[45vw] ">
        <div>
          <img src={checked} alt="" />
        </div>
        <div>
          <h2 className="text-[1.4rem] font-bold text-center">
            Thank you for reaching out!
          </h2>
          <p className="text-[1.1rem] text-center  mb-[10px]">
            We appreciate your interest in our services.{" "}
          </p>
          <p className="text-[1.1rem] text-center mb-[10px]">
            Our team will review your message and get back to you as soon as
            possible.
          </p>
          <p className="text-[1.1rem] text-center mb-[10px]">
            In the meantime, feel free to explore our website and learn more
            about what we can offer.
          </p>
        </div>
      </div>
    </>
  );
};
