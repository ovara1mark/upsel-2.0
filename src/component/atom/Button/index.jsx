import React from "react";

export const Button = ({ children }) => {
  return (
    <>
      <button className="flex justify-center text-center items-center text-upsel-white bg-upsel-light-purple rounded-[0.25rem] italic lg:w-[16.25rem] lg:h-[3.25rem] lg:px-[1rem] lg:py-[2rem] md:w-[13.75rem] md:h-[2.5rem] md:px-[1.5rem] md:py-[0.75rem] w-[7.5rem] h-[1.8rem] py-[0.5rem] px-[1rem] text-[0.875rem] md:text-[1rem] lg:text-[1.25rem] cursor-pointer transition ease-in-out delay-150 hover:bg-upsel-purple">
        {children}
      </button>
    </>
  );
};
