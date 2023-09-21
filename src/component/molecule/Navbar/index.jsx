import React, { useState } from "react";
import menu from "../../../assets/menu.svg";
import logo from "../../../assets/logo.svg";
import close from "../../../assets/close.png";
export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <>
      <div className="h-[5.4rem]  lg:h-[7.9rem] bg-upsel-black text-upsel-white lg:px-[6.24rem] lg:pt-[3.125rem] lg:pb-[1.88rem] py-[1.25rem] px-[2.5rem] flex mx-auto justify-between font-normal">
        <div className="lg:flex lg:justify-start lg:items-center w-[6.5rem]">
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden md:flex justify-center items-center">
          <ul className="flex gap-[1.875rem] text-[1.25rem] ">
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
          </ul>
        </div>
        <div>
          <button className="hidden md:block text-[1rem] rounded-[0.25rem] bg-upsel-light-purple px-[1.5rem] py-[0.75rem] transition ease-in-out delay-150 hover:bg-upsel-purple">
            Contact Us
          </button>
          <div
            className="pt-3 cursor-pointer md:hidden"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <img src={close} width={30} height={30} alt="close" />
            ) : (
              <img
                src={menu}
                alt="menu"
                width={40}
                height={40}
                className="focus:border-none active:border-none"
              />
            )}
          </div>
        </div>
      </div>
      <div
        className={`flex-1 justify-self-center pb-3 mt-8 bg-upsel-black md:hidden transition-transform transform translate-y-[0%]  ease-in-out rounded-t-lg fixed  w-full z-[1000000] md:pb-0 md:mt-0 ${
          navbar ? "p-12 block" : "hidden"
        }`}
      >
        <ul className="h-screen md:h-auto items-center justify-center md:flex ">
          <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-upsel-purple  border-upsel-purple md:hover:text-upsel-purple md:hover:bg-transparent">
            <a href="#about" onClick={() => setNavbar(!navbar)}>
              About Us
            </a>
          </li>
          <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-upsel-purple  border-upsel-purple md:hover:text-upsel-purple md:hover:bg-transparent">
            <a href="#services" onClick={() => setNavbar(!navbar)}>
              Services
            </a>
          </li>
          <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-upsel-purple  border-upsel-purple md:hover:text-upsel-purple md:hover:bg-transparent">
            <a href="#projects" onClick={() => setNavbar(!navbar)}>
              Projects
            </a>
          </li>
          <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-upsel-purple  border-upsel-purple md:hover:text-upsel-purple md:hover:bg-transparent">
            <a href="#faq" onClick={() => setNavbar(!navbar)}>
              FAQ
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
