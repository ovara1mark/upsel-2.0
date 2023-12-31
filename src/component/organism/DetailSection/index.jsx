import React, { useState } from "react";
import arrow_down from "../../../assets/arrow-down-1.svg";
import arrow_down_2 from "../../../assets/arrow-down-2.svg";
import arrow_up_2 from "../../../assets/arrow-up-2.svg";
import { Card } from "../../molecule";
import { detail } from "./detail";

export const DetailSection = () => {
  const [activeItem, setActiveItem] = useState(null);

  const toggleAccordion = (index) => {
    if (activeItem === index) {
      // Clicked on the currently active item, so close it.
      setActiveItem(null);
    } else {
      // Clicked on a different item, so open it and close the others.
      setActiveItem(index);
    }
  };

  const isItemActive = (index) => {
    return activeItem === index;
  };

  const holder = {
    details: ["web", "mobile"],
  };
  return (
    <>
      <section className="pb-[5rem] md:pb-[32rem]" id="Service">
        <div className="flex flex-col overflow-hidden items-center md:block lg:grid lg:grid-cols-2 md:gap-4 md:px-[2.5rem] px-[1rem] lg:px-[4rem] xl:px-[10rem]">
          <div
            className={`lg:mt-[5rem]  md:mt-[5rem] lg:block md:flex md:flex-col md:items-center  mt-[7rem]  ${
              isItemActive(0) ? "lg:pt-[14.65rem]" : ""
            } ${
              isItemActive(1)
                ? "first_order lg:order-2 lg:flex lg:justify-end"
                : ""
            }
             `}
          >
            <div className="flex justify-center">
              <div className="md:w-[20.75rem] ">
                <div className="w-[17.5rem]">
                  <span className="text-[2.5rem] font-bold  text-upsel-white">
                    Software Engineering
                  </span>
                </div>

                <div className="w-[17.5rem] py-[2rem]">
                  <p className="text-[1rem] font-normal leading-6 text-upsel-white">
                    We provide software solutions for your business needs and
                    help you stand out, providing you with the best advice for
                    achieving success.
                  </p>
                </div>
                <div className="flex justify-end w-[17.5rem] md:w-full">
                  <button
                    className={`rounded-full flex justify-center items-center bg-upsel-grey w-[5rem] h-[5rem] ${
                      isItemActive(0) ? "bg-upsel-light-purple" : ""
                    } `}
                    onClick={() => toggleAccordion(0)}
                  >
                    {isItemActive(0) ? (
                      <>
                        <img
                          src={arrow_down}
                          alt="arrow up"
                          className="lg:hidden flip-down"
                        />

                        <img
                          src={arrow_up_2}
                          alt="arrow up"
                          className="hidden lg:block "
                        />
                      </>
                    ) : (
                      <>
                        <img
                          src={arrow_down}
                          alt="arrow-down"
                          className="lg:hidden"
                        />
                        <img
                          src={arrow_down_2}
                          alt="arrow-down"
                          className="hidden lg:block"
                        />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div
              className={`card  mt-[2.55rem] ${
                isItemActive(0)
                  ? "block transition ease-in-out delay-150"
                  : "hidden transition ease-in-out delay-150"
              }`}
            >
              <div className="flex flex-wrap lg:flex-nowrap lg:justify-start justify-center  gap-3">
                <Card
                  header={detail.cardine.levelone.header}
                  detail={detail.cardine.levelone.details}
                  text={detail.cardine.levelone.text}
                />
                <Card
                  header={detail.cardine.leveltwo.header}
                  detail={detail.cardine.leveltwo.details}
                  text={detail.cardine.leveltwo.text}
                />
                <Card
                  header={detail.cardine.levelthree.header}
                  detail={detail.cardine.levelthree.details}
                  text={detail.cardine.levelthree.text}
                />
              </div>
            </div>
          </div>

          <div
            className={` lg:mt-[20.65rem] md:mt-[5rem] mt-[7rem] ${
              isItemActive(0) ? "second_order" : ""
            } ${isItemActive(1) ? "lg:mt-[10.65rem] lg:order-1" : ""}`}
          >
            <div
              className={`  flex justify-center md:justify-start lg:justify-end ${
                isItemActive(1)
                  ? "lg:flex lg:flex-row-reverse lg:justify-start"
                  : ""
              }`}
            >
              <div className="md:w-[20.75rem]">
                <span className="text-[2.5rem] font-bold text-upsel-white">
                  Product Design
                </span>
                <div className="w-[17.5rem] py-[2rem]">
                  <p className="text-[1rem] font-normal leading-6 text-upsel-white">
                    We are constantly improving the experience of users by
                    gathering information inorder to see things through the lens
                    of their eyes, propose solutions and test them to ensure the
                    problems are solved and Business needs are met.Happy Users
                    ,Growing Business.
                  </p>
                </div>
                <div className="flex justify-end w-[17.5rem] md:w-full">
                  <button
                    className={`rounded-full flex justify-center items-center bg-upsel-grey w-[5rem] h-[5rem] ${
                      isItemActive(1) ? "bg-upsel-light-purple" : ""
                    }`}
                    onClick={() => toggleAccordion(1)}
                  >
                    {isItemActive(1) ? (
                      <>
                        <img
                          src={arrow_down}
                          alt="arrow up"
                          className="lg:hidden flip-down"
                        />

                        <img
                          src={arrow_up_2}
                          alt="arrow up"
                          className="hidden lg:block "
                        />
                      </>
                    ) : (
                      <>
                        <img
                          src={arrow_down}
                          alt="arrow-down"
                          className="lg:hidden"
                        />
                        <img
                          src={arrow_down_2}
                          alt="arrow-down"
                          className="hidden lg:block"
                        />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div
              className={`card mt-[2.55rem] flex flex-wrap justify-center lg:flex-nowrap lg:justify-start  gap-3   ${
                isItemActive(1) ? "block" : "hidden"
              } `}
            >
              <Card
                header={detail.cardini.levelone.header}
                detail={detail.cardini.levelone.details}
                text={detail.cardini.levelone.text}
              />
              <Card
                header={detail.cardini.leveltwo.header}
                detail={detail.cardini.leveltwo.details}
                text={detail.cardini.leveltwo.text}
              />
              <Card
                header={detail.cardini.levelthree.header}
                detail={detail.cardini.levelthree.details}
                text={detail.cardini.levelthree.text}
              />
            </div>
          </div>

          <div
            className={`lg:mt-[5rem] md:mt-[5rem] lg:block md:flex md:flex-col md:items-end mt-[7rem] order-3`}
          >
            <div className="flex justify-center">
              <div className="md:w-[20.75rem] ">
                <div className="w-[17.5rem]">
                  <span className="text-[2.5rem] font-bold  text-upsel-white">
                    Brand Design & Graphics
                  </span>
                </div>
                <div className="w-[17.5rem] py-[2rem]">
                  <p className="text-[1rem] font-normal leading-6 text-upsel-white">
                    We understand that brand identity is a critical component of
                    any business, and that's why we focus on delivering brand
                    and graphic design solutions that are memorable, effective,
                    and distinctive.
                  </p>
                </div>
                <div className="flex justify-end w-[17.5rem] md:w-full">
                  <button
                    onClick={() => toggleAccordion(2)}
                    className={`rounded-full flex justify-center items-center bg-upsel-grey w-[5rem] h-[5rem] ${
                      isItemActive(2) ? "bg-upsel-light-purple" : ""
                    }`}
                  >
                    {isItemActive(2) ? (
                      <>
                        <img
                          src={arrow_down}
                          alt="arrow up"
                          className="lg:hidden flip-down"
                        />

                        <img
                          src={arrow_up_2}
                          alt="arrow up"
                          className="hidden lg:block "
                        />
                      </>
                    ) : (
                      <>
                        <img
                          src={arrow_down}
                          alt="arrow-down"
                          className="lg:hidden"
                        />
                        <img
                          src={arrow_down_2}
                          alt="arrow-down"
                          className="hidden lg:block"
                        />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div
              className={`card  mt-[2.55rem] flex flex-wrap justify-center lg:flex-nowrap lg:justify-start  gap-3  ${
                isItemActive(2) ? "block" : "hidden"
              }`}
            >
              <Card
                header={detail.cardinie.levelone.header}
                detail={detail.cardinie.levelone.details}
                text={detail.cardinie.levelone.text}
              />
              <Card
                header={detail.cardinie.leveltwo.header}
                detail={detail.cardinie.leveltwo.details}
                text={detail.cardinie.leveltwo.text}
              />
            </div>
          </div>

          <div
            className={` lg:mt-[14.65rem] md:mt-[5rem] mt-[7rem] order-4 ${
              isItemActive(2) ? "third_order" : ""
            }`}
          >
            <div className="lg:flex lg:justify-end">
              <div className="md:w-[20.75rem]">
                <span className="text-[2.5rem] font-bold text-upsel-white">
                  Marketing
                </span>
                <div className="w-[17.5rem] py-[2rem]">
                  <p className="text-[1rem] font-normal leading-6 text-upsel-white">
                    Our digital marketing services are designed to help our
                    clients increase their online visibility, drive traffic to
                    their website, and generate leads that convert to sales
                  </p>
                </div>
                <div className="flex justify-end w-[17.5rem] md:w-full">
                  <button
                    onClick={() => toggleAccordion(3)}
                    className={`rounded-full flex justify-center items-center bg-upsel-grey w-[5rem] h-[5rem] ${
                      isItemActive(3) ? "bg-upsel-light-purple" : ""
                    }`}
                  >
                    {isItemActive(3) ? (
                      <>
                        <img
                          src={arrow_down}
                          alt="arrow up"
                          className="lg:hidden flip-down"
                        />

                        <img
                          src={arrow_up_2}
                          alt="arrow up"
                          className="hidden lg:block "
                        />
                      </>
                    ) : (
                      <>
                        <img
                          src={arrow_down}
                          alt="arrow-down"
                          className="lg:hidden"
                        />
                        <img
                          src={arrow_down_2}
                          alt="arrow-down"
                          className="hidden lg:block"
                        />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div
              className={`card  mt-[2.55rem] flex gap-3 lg:justify-end ${
                isItemActive(3) ? "block" : "hidden"
              }`}
            >
              <Card
                header={detail.cardiny.levelone.header}
                detail={detail.cardiny.levelone.details}
                text={detail.cardiny.levelone.text}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
