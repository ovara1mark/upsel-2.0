import React from "react";
import menu from "../../../assets/menu.svg";
export const Navbar = () => {
  return (
    <>
      <div className="h-[5.4rem] lg:h-[7.9rem] bg-upsel-black text-upsel-white lg:px-[6.24rem] lg:pt-[3.125rem] lg:pb-[1.88rem] py-[1.25rem] px-[2.5rem] flex mx-auto justify-between font-normal">
        <div className="flex justify-center items-center">upsel</div>
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
          <div className="pt-3 cursor-pointer md:hidden">
            <img src={menu} alt="menu" />
          </div>
        </div>
      </div>
    </>
  );
};
