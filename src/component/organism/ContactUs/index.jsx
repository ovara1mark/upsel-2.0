import React from "react";
import { ContactForm } from "../../molecule";

export const ContactUs = () => {
  return (
    // <section className="px-[10.9rem] bg-gradient-to-r from-#7000FF to-rgba(0, 1, 1, 0.00)">
    <section className="flex flex-col justify-center items-left py-[3.125rem] gradient-bg lg:py-[7.125rem] lg:pl-[9rem]">
      <div className="w-full px-[1.4rem] lg:w-3/5">
        <h2 className="font-bold tracking-wide text-upsel-white text-[2rem] leading-[38px] md:text-[2.875rem] lg:text-[6rem] lg:leading-[112px] ">
          Request a consultation
        </h2>
        <p className="font-bold mt-[24px] text-upsel-white text-[1rem] leading-[21px] md:text-[2.05rem] md:mt-[44px]  lg:text-[3.75rem] lg:leading-[64px] mt-[55px]">
          What service(s) are you interested in?{" "}
          <span className="font-thin text-[.9rem] text-upsel-white md:hidden lg:text-[1.5rem] lg:block">
            (you can select multiple ones)
          </span>
        </p>
      </div>
      <ContactForm />
    </section>
  );
};
