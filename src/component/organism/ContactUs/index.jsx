import React from "react";
import { ContactForm } from "../../molecule";

export const ContactUs = () => {
  return (
    <>
      <section
        id="contactus"
        className="flex flex-col justify-center items-left gradient-bg py-[3.125rem] lg:py-[9.625rem] lg:pl-[9rem] lg:bg-contact-us-bg lg:bg-cover "
      >
        <div className="w-full px-[1.4rem] lg:w-3/5">
          <h2 className="font-bold tracking-wide text-upsel-white text-[2rem] leading-[38px] md:text-[2.875rem] lg:text-[6rem] lg:leading-[112px] ">
            Request a consultation
          </h2>
          <p className="font-bold mt-[24px] text-upsel-white text-[1rem] leading-[21px] md:text-[2.05rem] md:mt-[44px]  lg:text-[3.75rem] lg:leading-[64px] mt-[55px]">
            What service(s) are you interested in?
            <span className="font-thin text-[.9rem] text-upsel-white md:hidden lg:text-[1.5rem] lg:block">
              (you can select multiple ones)
            </span>
          </p>
        </div>
        <ContactForm />
      </section>
    </>
  );
};
