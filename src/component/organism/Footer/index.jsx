import React from "react";
import footerbg from "../../../assets/footerbg.svg";
import linkedin from "../../../assets/linkedin.svg";
import instagram from "../../../assets/instagram.svg";
import facebook from "../../../assets/facebook.svg";
import twitter from "../../../assets/twitter.svg";
import star from "../../../assets/star.svg";

export const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center z-[-3] relative bg-upsel-black py-[5rem] overflow-hidden">
      <ul className="flex gap-[2.95rem] justify-center items-center text-[1.25rem] text-upsel-footer-grey ">
        <li className="cursor-pointer transition ease-in-out delay-150 hover:text-upsel-light-purple">
          About Us
        </li>
        <li className="cursor-pointer transition ease-in-out delay-150 hover:text-upsel-light-purple">
          Services
        </li>
        <li className="cursor-pointer transition ease-in-out delay-150 hover:text-upsel-light-purple">
          Projects
        </li>
        <li className="cursor-pointer transition ease-in-out delay-150 hover:text-upsel-light-purple">
          FAQ
        </li>
        <li className="cursor-pointer transition ease-in-out delay-150 hover:text-upsel-light-purple">
          Contact Us
        </li>
      </ul>

      {/* <img
        className="w-full"
        src={footerbg}
        alt="elevate Your Online Presence"
      /> */}
      <div className="flex overflow-hidden z-[-2] rotate-[358deg] my-[20px] bg-upsel-purple py-[9px] w-[120vw]">
        <div className="flex items-center justify-between w-[200vw] animate-[scrollLeft_20s_linear_infinite]">
          <div className="text-[1.8rem] w-[30em] ">
            Elevate Your Online Presence with a tailored Tech Solutions{" "}
          </div>
          <div className="">
            <img className="" src={star} alt="" />
          </div>
          <div className="text-[1.8rem] w-[30em]">
            Elevate Your Online Presence with a tailored Tech Solutions{" "}
          </div>
          <div className="">
            <img className="" src={star} alt="" />
          </div>
          <div className="text-[1.8rem] w-[30em]">
            Elevate Your Online Presence with a tailored Tech Solutions{" "}
          </div>
          <div className="">
            <img className="" src={star} alt="" />
          </div>
        </div>
      </div>
      <div className="text-upsel-footer-grey">
        <p className="text-[1.25rem] mt-1">+234-000-0000-788</p>
        <p className="text-[1.25rem] mt-1">+234-000-0000-788</p>
        <p className="text-[1.75rem] mt-1">upsel@gmail.com</p>
      </div>

      <div className="flex justify-around items-center w-2/5 py-[5rem]">
        <div>
          <img src={linkedin} alt="upsel linkedin" />
        </div>
        <div>
          <img src={instagram} alt="upsel instagram" />
        </div>
        <div>
          <img src={facebook} alt="upsel facebook" />
        </div>
        <div>
          <img src={twitter} alt="upsel twitter" />
        </div>
      </div>
      <div className="flex justify-around items-center w-1/5 my-[1.6rem] text-[1rem] ">
        <p className="cursor-pointer text-upsel-footer-grey hover:text--upsel-light-purple hover:text-upsel-light-purple">
          Terms& Condition
        </p>
        <p className="cursor-pointer text-upsel-footer-grey hover:text-upsel-light-purple">
          Privacy
        </p>
      </div>
      <p className="text-upsel-footer-grey text-[0.9rem]">© 2023 -Upsel</p>
    </div>
  );
};
