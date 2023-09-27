import React, { useState } from "react";
import * as Scroll from "react-scroll";
import { Link } from "react-scroll";
import menu from "../../../assets/menu.svg";
import logo from "../../../assets/logo.svg";
import close from "../../../assets/close.png";

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <div
        className={`h-[5.4rem]  lg:h-[7.9rem] bg-upsel-black text-upsel-white lg:px-[6.24rem] lg:pt-[3.125rem] lg:pb-[1.88rem] py-[1.25rem] px-[2.5rem] flex mx-auto justify-between align-center font-normal ${
          navbar ? "sticky top-0 z-[1000000]" : ""
        } `}
      >
        <div className="lg:flex lg:justify-start lg:items-center w-[6.5rem] cursor-pointer">
          <Link
            activeClass="active"
            to="/"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="hidden md:flex justify-center items-center">
          <ul className="flex gap-[1.875rem] text-[1.25rem] ">
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
            <li className="cursor-pointer transition ease-in-out delay-150 hover:text-upsel-light-purple">
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
          </ul>
        </div>
        <div>
          <button className="hidden md:block text-[1rem] rounded-[0.25rem] bg-upsel-light-purple px-[1.5rem] py-[0.75rem] transition ease-in-out delay-150 hover:bg-upsel-purple">
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
          </button>
          <div
            className="pt-3 cursor-pointer md:hidden"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              // <img src={close} width={20} height={20} alt="close" />
              <span className="text-[1.4rem]">&#10006;</span>
            ) : (
              <span className="text-[1.4rem]">&#9776;</span>
              // <img
              //   src={menu}
              //   alt="menu"
              //   width={30}
              //   height={30}
              //   className="focus:border-none active:border-none"
              // />
            )}
          </div>
        </div>
      </div>
      <div
        className={`flex-1 justify-self-center pb-3  bg-upsel-black md:hidden transition-transform transform translate-y-[0%]  ease-in-out  fixed  w-full z-[1000000] md:pb-0 md:mt-0 ${
          navbar ? "p-12 block" : "hidden"
        }`}
      >
        <ul className="h-screen md:h-auto items-center justify-center md:flex ">
          <li className="cursor-pointer pb-2 text-xl text-white py-6 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-upsel-purple  border-upsel-purple md:hover:text-upsel-purple md:hover:bg-transparent">
            <Link
              activeClass="active"
              to="aboutus"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="navbanner-text"
              onClick={() => setNavbar(!navbar)}
            >
              About Us
            </Link>
          </li>
          <li className="cursor-pointer pb-2 text-xl text-white py-6 px-6 text-center  border-b-2 md:border-b-0  hover:bg-upsel-purple  border-upsel-purple md:hover:text-upsel-purple md:hover:bg-transparent">
            <Link
              activeClass="active"
              to="Service"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="navbanner-text"
              onClick={() => setNavbar(!navbar)}
            >
              Services
            </Link>
          </li>
          <li className="cursor-pointer pb-2 text-xl text-white py-6 px-6 text-center  border-b-2 md:border-b-0  hover:bg-upsel-purple  border-upsel-purple md:hover:text-upsel-purple md:hover:bg-transparent">
            <Link
              activeClass="active"
              to="Projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="navbanner-text"
              onClick={() => setNavbar(!navbar)}
            >
              Projects
            </Link>
          </li>
          <li className="cursor-pointer pb-2 text-xl text-white py-6 px-6 text-center  border-b-2 md:border-b-0  hover:bg-upsel-purple  border-upsel-purple md:hover:text-upsel-purple md:hover:bg-transparent">
            <Link
              activeClass="active"
              to="faq"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="navbanner-text"
              onClick={() => setNavbar(!navbar)}
            >
              FAQ
            </Link>
          </li>
          <li className="pb-2 text-xl text-white py-6 px-6 text-center md:border-b-0  hover:bg-upsel-purple  border-upsel-purple md:hover:text-upsel-purple md:hover:bg-transparent">
            <button className="block text-[1rem] w-full rounded-[0.25rem] bg-upsel-light-purple px-[1.5rem] py-[0.75rem] transition ease-in-out delay-150 hover:bg-upsel-purple">
              <Link
                activeClass="active"
                to="contactus"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="navbanner-text"
                onClick={() => setNavbar(!navbar)}
              >
                Contact Us
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
