import React from "react";

export const ContactForm = () => {
  return (
    <div className="w-full px-[1.4rem] mt-[37px] lg:w-4/5">
      <form>
        <div className="flex flex-wrap gap-x-[7px] gap-y-[30px] whitespace-nowrap w-full md:gap-x-[10px] gap-y-[35px]">
          <div className="">
            <input
              className="w-0 peer"
              type="checkbox"
              name="checkboxes"
              id="web-design"
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
              //   value={fullName}
              //   onChange={(e) => setFullName(e.target.value)}
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
              placeholder="Enter your name"
              name="name"
              //   value={fullName}
              //   onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className=" mb-[10px] md:mb-[30px] ">
            <label className="text-upsel-white text-[12px] pl-[5px] pb-[5px] md:text-[1rem] lg-text-[1.125rem] ">
              Phone Number
            </label>
            <input
              className="w-full outline-upsel-purple text-[14px] p-[14px] rounded-lg placeholder:italic "
              type="text"
              placeholder="Enter your name"
              name="name"
              //   value={fullName}
              //   onChange={(e) => setFullName(e.target.value)}
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
              placeholder="Enter your name"
              name="name"
              //   value={fullName}
              //   onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className=" mb-[10px] md:mb-[30px] ">
            <label className="text-upsel-white text-[12px] pl-[5px] pb-[5px] md:text-[1rem] lg-text-[1.125rem] ">
              What is your budget for the project?
            </label>
            <input
              className="w-full outline-upsel-purple text-[14px] p-[14px] rounded-lg placeholder:italic "
              type="text"
              placeholder="Enter your name"
              name="name"
              //   value={fullName}
              //   onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
};
