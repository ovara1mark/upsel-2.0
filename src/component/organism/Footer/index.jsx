import React from "react";
import footerbg from "../../../assets/footerbg.svg";
import linkedin from "../../../assets/linkedin.svg";
import instagram from "../../../assets/instagram.svg";
import facebook from "../../../assets/facebook.svg";
import twitter from "../../../assets/twitter.svg";
import star from "../../../assets/star-whites.svg";

export const Footer = () => {
  return (
    <section className="flex flex-col justify-center items-center relative bg-[#1F1F1F] py-[5rem] overflow-hidden">
      <ul className="flex flex-wrap gap-[40px] justify-center items-center text-[.85rem] text-upsel-footer-grey md:text-[1.15rem] gap-[2.35rem] lg:text-[1.7rem] gap-[4.55rem] ">
        <li className="cursor-pointer transition ease-in-out delay-150 hover:text-upsel-light-purple">
          About Us
        </li>
        <li className="cursor-pointer transition ease-in-out delay-150 hover:text-upsel-light-purple">
          Services
        </li>
        <li className="cursor-pointer transition ease-in-out delay-150 hover:text-upsel-light-purple">
          Projects
        </li>
        <li className="hidden cursor-pointer transition ease-in-out delay-150 hover:text-upsel-light-purple lg:block">
          FAQ
        </li>
        <li className="cursor-pointer transition ease-in-out delay-150 hover:text-upsel-light-purple">
          Contact Us
        </li>
      </ul>

      <div className="flex overflow-hidden  rotate-[358deg] my-[40px] bg-upsel-purple py-[9px] w-[120vw]">
        <div className="flex items-center justify-evenly whitespace-nowrap gap-[20px] animate-scrollLeft">
          <div className="text-[1.3rem] md:text-[1.3rem] lg:text-[1.8rem] ">
            Elevate Your Online Presence with a tailored Tech Solutions{" "}
          </div>
          <div className="w-[20px] lg:w-[30px]">
            <img className="" src={star} alt="" />
          </div>
          <div className="text-[1.3rem] md:text-[1.3rem] lg:text-[1.8rem] ">
            Elevate Your Online Presence with a tailored Tech Solutions{" "}
          </div>
          <div className="w-[20px] lg:w-[30px]">
            <img className="" src={star} alt="" />
          </div>
          <div className="text-[1.3rem] md:text-[1.3rem] lg:text-[1.8rem]">
            Elevate Your Online Presence with a tailored Tech Solutions{" "}
          </div>
          <div className="w-[20px] lg:w-[30px]">
            <img className="" src={star} alt="" />
          </div>
          <div className="text-[1.3rem] md:text-[1.3rem] lg:text-[1.8rem]">
            Elevate Your Online Presence with a tailored Tech Solutions{" "}
          </div>
          <div className="w-[20px] lg:w-[30px]">
            <img className="" src={star} alt="" />
          </div>
        </div>
      </div>
      <div className="text-upsel-footer-grey text-center ">
        <a href="tel:+234-000-0000-788">
          <p className=" text-[0.87rem] lg:text-[1.1rem] mt-1">
            +234-000-0000-788
          </p>
        </a>
        <a href="tel:+234-000-0000-788">
          <p className=" text-[0.87rem] lg:text-[1.1rem] mt-1">
            +234-000-0000-788
          </p>
        </a>
        <a href="mailto:upsel@gmail.com">
          {" "}
          <p className=" text-[1.1rem] lg:text-[1.5rem] mt-1">
            upsel@gmail.com
          </p>
        </a>
      </div>

      <div className="flex justify-around items-center w-4/5 py-[5rem] lg:w-2/5">
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
      <div className="flex justify-center gap-[40px] items-center w-4/5 my-[1.6rem] text-[1rem] lg:w-1/5 ">
        <p className="cursor-pointer text-upsel-footer-grey hover:text--upsel-light-purple hover:text-upsel-light-purple">
          Terms& Condition
        </p>
        <p className="cursor-pointer text-upsel-footer-grey hover:text-upsel-light-purple">
          Privacy
        </p>
      </div>
      <p className="text-upsel-footer-grey text-[0.9rem]">© 2023 -Upsel</p>
    </section>
  );
};
