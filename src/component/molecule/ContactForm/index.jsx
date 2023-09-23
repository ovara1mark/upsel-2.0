import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import checked from "../../../assets/Check.svg";

export const ContactForm = () => {
  const [submit, setSubmit] = useState(false);
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );
      console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
      e.target.reset();
      setSubmit(true);
    } catch (error) {
      console.log(error);
    }
  };
  const closeThankyou = () => {
    setSubmit(false);
  };
  return (
    <>
      <div className="w-full px-[1.4rem] mt-[37px] lg:w-4/5">
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex flex-wrap gap-x-[7px] gap-y-[30px] whitespace-nowrap w-full md:gap-x-[10px] gap-y-[35px]">
            <div className="">
              <input
                className="w-0 peer"
                type="checkbox"
                name="checkboxes"
                id="web-design"
                value="Web design"
              />
              <label
                htmlFor="web-design"
                className="bg-upsel-white cursor-pointer text-upsel-black-2 px-[26px] py-[11px]  text-[0.75rem] rounded-full  mr-[15px] border-2 border-solid md:text-[1rem] lg:text-[1.125rem] peer-checked:border-upsel-light-border-purple peer-checked:bg-upsel-purple peer-checked:text-upsel-white"
              >
                Web Design
              </label>
            </div>
            <div className="">
              <input
                className="w-0 peer"
                type="checkbox"
                name="checkboxes"
                id="web-development"
                value="Web development"
              />
              <label
                htmlFor="web-development"
                className="bg-upsel-white cursor-pointer text-upsel-black-2 px-[26px] py-[11px]  text-[0.75rem] rounded-full  mr-[15px] border-2 border-solid md:text-[1rem] lg:text-[1.125rem] peer-checked:border-upsel-light-border-purple peer-checked:bg-upsel-purple peer-checked:text-upsel-white"
              >
                Web Development
              </label>
            </div>
            <div className="">
              <input
                className="w-0 peer"
                type="checkbox"
                name="checkboxes"
                id="branding"
                value="Branding"
              />
              <label
                htmlFor="branding"
                className="bg-upsel-white cursor-pointer text-upsel-black-2 px-[26px] py-[11px]  text-[0.75rem] rounded-full mr-[15px] border-2 border-solid  md:text-[1rem] lg:text-[1.125rem]peer-checked:border-upsel-light-border-purple peer-checked:bg-upsel-purple peer-checked:text-upsel-white"
              >
                Branding
              </label>
            </div>
            <div className="">
              <input
                className="w-0 peer"
                type="checkbox"
                name="checkboxes"
                id="marketing"
                value="Marketing"
              />
              <label
                htmlFor="marketing"
                className="bg-upsel-white cursor-pointer text-upsel-black-2 px-[26px] py-[11px]  text-[0.75rem] rounded-full mr-[15px] border-2 border-solid  md:text-[1rem] lg:text-[1.125rem]peer-checked:border-upsel-light-border-purple peer-checked:bg-upsel-purple peer-checked:text-upsel-white"
              >
                Marketing
              </label>
            </div>
            <div className="">
              <input
                className="w-0 peer"
                type="checkbox"
                name="checkboxes"
                id="others"
                value="Others"
              />
              <label
                htmlFor="others"
                className="bg-upsel-white cursor-pointer text-upsel-black-2 px-[26px] py-[11px]  text-[0.75rem] rounded-full mr-[15px] border-2 border-solid  md:text-[1rem] lg:text-[1.125rem]peer-checked:border-upsel-light-border-purple peer-checked:bg-upsel-purple peer-checked:text-upsel-white "
              >
                Others
              </label>
            </div>
          </div>
          <div>
            <div className="mt-[42px] mb-[10px] md:mb-[30px] md:mt-[91px]">
              <label className="text-upsel-white text-[12px] pl-[5px] pb-[5px] md:text-[1rem] lg-text-[1.125rem] ">
                Name
              </label>
              <input
                className="w-full outline-upsel-purple text-[14px] p-[14px] rounded-lg placeholder:italic "
                type="text"
                placeholder="Enter your name"
                name="name"
                required
              />
            </div>
            <div className=" mb-[10px] md:mb-[30px] ">
              <label className="text-upsel-white text-[12px] pl-[5px] pb-[5px] md:text-[1rem] lg-text-[1.125rem] ">
                E-mail
              </label>
              <input
                className="w-full outline-upsel-purple text-[14px] p-[14px] rounded-lg placeholder:italic "
                type="text"
                placeholder="Enter your E-mail"
                name="email"
                required
              />
            </div>
            <div className=" mb-[10px] md:mb-[30px] ">
              <label className="text-upsel-white text-[12px] pl-[5px] pb-[5px] md:text-[1rem] lg-text-[1.125rem] ">
                Phone Number
                <span className="italic text-[12px] block">
                  please add your country code{" "}
                </span>
              </label>
              <input
                className="w-full outline-upsel-purple text-[14px] p-[14px] rounded-lg placeholder:italic "
                type="number"
                placeholder="Phone Number"
                name="tel_number"
                required
              />
            </div>
            <div className=" mb-[10px] md:mb-[30px] ">
              <label className="text-upsel-white text-[12px] pl-[5px] pb-[5px] md:text-[1rem] lg-text-[1.125rem] ">
                Tell Us About Your Project
              </label>
              <textarea
                className="w-full outline-upsel-purple text-[14px] p-[14px] rounded-lg placeholder:italic "
                type="text"
                placeholder="Tell Us About Your Project"
                name="message"
                autoComplete="off"
                required
              />
            </div>
            <div className=" mb-[10px] md:mb-[30px] ">
              <label className="text-upsel-white text-[12px] pl-[5px] pb-[5px] md:text-[1rem] lg-text-[1.125rem] ">
                What is your budget for the project?{" "}
                <span className="italic">($)</span>
              </label>
              <input
                className="w-full outline-upsel-purple text-[14px] p-[14px] rounded-lg placeholder:italic "
                type="number"
                placeholder="Enter your budget"
                name="budget"
                autoComplete="off"
                required
              />
            </div>
            <div className="text-upsel-white text-[16px] mt-[10px] bg-upsel-light-purple cursor-pointer rounded-[4px] text-center mb-[10px] md:mb-[30px] lg:text-[18px] hover:bg-upsel-purple">
              <input
                className="py-[8px] px-[16px]  cursor-pointer w-full"
                type="submit"
                value="Send your request"
              />
            </div>
          </div>
        </form>
      </div>
      {/* Thank you component */}
      {submit ? (
        <section
          onClick={closeThankyou}
          className="flex flex-col justify-center items-center bg-upsel-transparent-purple z-[1000] w-[100vw] h-[100vh] fixed top-0 right-0"
        >
          <div className="flex flex-col justify-center items-center  rounded-[28px] py-[26px] px-[24px] bg-upsel-white w-[86vw] md:px-[34px]  md:w-[55vw] lg:w-[45vw] ">
            <div className="w-full flex justify-end">
              <span
                onClick={closeThankyou}
                className="text-[1.1rem] cursor-pointer"
              >
                &#128473;
              </span>
            </div>
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
        </section>
      ) : (
        ""
      )}
    </>
  );
};
