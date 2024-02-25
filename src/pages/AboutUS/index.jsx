import React from "react";

import { Button, Img, Line, NavBar, Text } from "components";
import Footer1 from "components/Footer1";
import Header from "components/Header";
import { BannerPrimary } from "components/Banner";
import Footer from "components/Footer";
import { AboutUs } from "components/Home";
import { Heading1 } from "components/Heading";
import MainLayout from "layout/MainLayout";

const AboutUSPage = () => {
  return (
    <MainLayout>
      <BannerPrimary text={`About Us`} />
      <AboutUs />

      <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1440px] mt-6 mx-auto w-[90%]">
        <Heading1
          title={{
            title1: `Professionalism And Commitment Is Our Dedication`,
            title2: ``,
            className: `text-center w-[65%] md:w-full mx-auto `,
          }}
        />
        <div className="flex md:flex-col flex-row gap-8 md:gap-4 items-center justify-between w-full">
          <Img
            className=" h-full object-cover rounded-[10px] w-[45%] md:w-full "
            src="images/img_rectangle72.png"
            alt="rectangleSeventyTwo"
          />
          <div className="flex flex-col mb-4 items-start justify-start w-[55%] md:w-full ">
            <Text
              className=" font-inter font-[700] md:text-[20px] text-[44px] leading-[53.25px] md:leading-[24.2px] text-blue_gray-900"
              size="txtInterBold44"
            >
              <span className="text-blue_gray-900">Our </span>
              <span className="text-red-500">Vision</span>
            </Text>
            <Text
              className="font-inter font-[500] text-[20px] leading-[30px] tracking-[2%] text-gray-600 w-full md:text-[14px] md:leading-[18px] "
              size="txtInterMedium20"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod see tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. reprehenderit in
              voluptate.
            </Text>
            <Text
              className="font-inter font-[500] text-[20px] leading-[30px] tracking-[2%] text-gray-600 w-full md:text-[14px] md:leading-[18px] "
              size="txtInterMedium20"
            >
              That ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor to be incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate.
            </Text>
          </div>
        </div>
        <div className="flex md:flex-col flex-row-reverse gap-8 md:gap-4 items-center justify-between w-full">
          <Img
            className=" h-full object-cover rounded-[10px] w-[45%] md:w-full "
            src="images/img_rectangle73.png"
            alt="rectangleSeventyThree"
          />
          <div className="flex flex-col mb-4 items-start justify-start w-[55%] md:w-full ">
            <Text
              className=" font-inter font-[700] md:text-[20px] text-[44px] leading-[53.25px] md:leading-[24.2px] text-blue_gray-900"
              size="txtInterBold44"
            >
              <span className="text-blue_gray-900">Our </span>
              <span className="text-red-500">Mission</span>
            </Text>
            <Text
              className="font-inter font-[500] text-[20px] leading-[30px] tracking-[2%] text-gray-600 w-full md:text-[14px] md:leading-[18px] "
              size="txtInterMedium20"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod see tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. reprehenderit in
              voluptate.
            </Text>
            <Text
              className="font-inter font-[500] text-[20px] leading-[30px] tracking-[2%] text-gray-600 w-full md:text-[14px] md:leading-[18px] "
              size="txtInterMedium20"
            >
              That ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor to be incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate.
            </Text>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutUSPage;
