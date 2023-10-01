import React from "react";
import footerbg from "../../../assets/footerbg.svg";
import linkedin from "../../../assets/linkedin.svg";
import instagram from "../../../assets/instagram.svg";
import facebook from "../../../assets/facebook.svg";
import twitter from "../../../assets/twitter.svg";
import star from "../../../assets/star-whites.svg";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";

export const Footer = () => {
  return (
    <section className="flex flex-col justify-center items-center relative bg-[#1F1F1F] py-[5rem] overflow-hidden">
      <ul className="flex flex-wrap gap-[40px] justify-center items-center text-[.85rem] text-upsel-footer-grey md:text-[1.15rem] lg:text-[1.7rem]">
        <li className="cursor-pointer transition ease-in-out delay-150 hover:text-upsel-light-purple">
          <Link
            activeClass="active"
            to="aboutus"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="navbanner-text"
          >
            About Us
          </Link>
        </li>
        <li className="cursor-pointer transition ease-in-out delay-150 hover:text-upsel-light-purple">
          <Link
            activeClass="active"
            to="Service"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="navbanner-text"
          >
            Services
          </Link>
        </li>
        <li className="cursor-pointer transition ease-in-out delay-150 hover:text-upsel-light-purple">
          <Link
            activeClass="active"
            to="Projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="navbanner-text"
          >
            Projects
          </Link>
        </li>
        <li className="hidden cursor-pointer transition ease-in-out delay-150 hover:text-upsel-light-purple lg:block">
          <Link
            activeClass="active"
            to="faq"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="navbanner-text"
          >
            FAQ
          </Link>
        </li>
        <li className="cursor-pointer transition ease-in-out delay-150 hover:text-upsel-light-purple">
          <Link
            activeClass="active"
            to="contactus"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="navbanner-text"
          >
            Contact Us
          </Link>
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
        <a href="tel:+234-818-6866-200">
          <p className=" text-[0.87rem] lg:text-[1.1rem] mt-1">
            +234-818-6866-200
          </p>
        </a>
        <a href="tel:+234-818-6866-200">
          <p className=" text-[0.87rem] lg:text-[1.1rem] mt-1">
            +234-818-6866-200
          </p>
        </a>
        <a href="mailto:upselgroups@gmail.com" target="_blank">
          {" "}
          <p className=" text-[1.1rem] lg:text-[1.5rem] mt-1">
            upselgroups@gmail.com
          </p>
        </a>
      </div>

      <div className="flex justify-around items-center w-4/5 py-[5rem] lg:w-2/5">
        <div className="cursor-pointer">
          <a href="https://www.linkedin.com/company/weareupsel" target="_blank">
            <img src={linkedin} alt="upsel linkedin" />
          </a>
        </div>
        <div className="cursor-pointer">
          <a href="https://instagram.com/weareupsel" target="_blank">
            <img src={instagram} alt="upsel instagram" />
          </a>
        </div>
        <div className="cursor-pointer">
          <a href=" https://facebook.com/weareupsel" target="_blank">
            <img src={facebook} alt="upsel facebook" />
          </a>
        </div>
        <div className="cursor-pointer">
          <a href="https://twitter.com/weareupsel" target="_blank">
            <img src={twitter} alt="upsel twitter" />
          </a>
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
