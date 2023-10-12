import React from "react";
// import more from "../../../assets/more-on-us.svg";
// import more_1 from "../../../assets/more-on-us-1.svg";
// import more_2 from "../../../assets/more-on-us-2.svg";
export const More = () => {
  return (
    <>
      <section className="more lg:pt-[7.5rem] md:pt-[6.96rem] pt-[5rem] lg:pb-[2.25rem] md:pb-[2.8rem] pb-[7.5rem]">
        {/* <img src={more} alt="" className="object-fit w-full hidden lg:block" />
        <img
          src={more_1}
          alt=""
          className="object-fit w-full hidden lg:hidden md:block"
        />
        <img src={more_2} alt="" className="object-fit w-full  md:hidden" /> */}
        <div>
          <div className="mt-[26.75rem] md:mt-[26.56rem] lg:mt-[24rem] flex justify-center md:flex md:justify-end md:pr-[4.38rem] lg:pr-[14.69rem]">
            <p className="md:text-[1.125rem] text-[1rem] text-upsel-white md:w-[25.3rem] w-[17.4rem] leading-6">
              Our passion is helping people and companies succeed online. From
              business to marketing and technology, we know our stuff because
              we've been there from the beginning. We're honest, hard-working,
              responsive, convenient, and helpful.
            </p>
          </div>
          <div className="flex justify-center md:justify-start md:pl-[3.19rem] lg:pl-[11rem] lg:mt-[22.75rem] md:mt-[23.25rem] mt-[20.17rem] lg:mb-[23.78rem] md:mb-[18.02rem] mb-[11.13rem]">
            <p className="md:text-[3rem] font-bold text-[2rem] text-upsel-light-black md:leading-[4.18rem] leading-[3.25rem] md:w-[34.2rem] w-[18.4rem]">
              Our experience with startups and corporations across the globe
              provides us with a ­­­­solid foundation for success.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
