import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer1 from "components/Footer1";
import Header1 from "components/Header1";

const BlogOnePage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <Header1 className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="bg-indigo-900 flex md:flex-col flex-row md:gap-5 items-start justify-start md:px-10 sm:px-5 px-[279px] w-full">
          <Line className="bg-gradient  md:h-0.5 h-[450px] w-0.5 md:w-full" />
          <Line className="bg-black-900 h-px mb-[435px] md:mt-0 mt-3.5 w-px" />
          <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[131px] w-0.5 md:w-full" />
          <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[132px] w-0.5 md:w-full" />
          <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[132px] w-0.5 md:w-full" />
          <div
            className="bg-cover bg-no-repeat flex md:flex-1 flex-col gap-[22px] h-[450px] items-center justify-start md:ml-[0] ml-[78px] pb-[74px] md:px-5 px-[74px] w-[30%] md:w-full"
            style={{ backgroundImage: "url('images/img_group1000004043.png')" }}
          >
            <Line className="bg-gradient  h-[173px] w-0.5" />
            <Text
              className="mb-[104px] md:text-5xl text-[62px] text-center text-white-A700 underline"
              size="txtInterBold62"
            >
              Blog{" "}
            </Text>
          </div>
          <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[58px] w-0.5 md:w-full" />
          <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[132px] w-0.5 md:w-full" />
          <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[132px] w-0.5 md:w-full" />
          <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[131px] w-0.5 md:w-full" />
        </div>
        <div className="flex flex-col items-start justify-start max-w-[1440px] mt-[797px] mx-auto md:px-5 w-full">
          <Text
            className="sm:text-[34px] md:text-[40px] text-[44px] text-indigo-900 tracking-[0.88px]"
            size="txtInterBold44Indigo900"
          >
            How to Determine the Length of a Time -Out
          </Text>
          <div className="flex flex-row font-inter gap-[75px] items-center justify-start mt-3.5 w-[28%] md:w-full">
            <div className="flex flex-row gap-2.5 items-center justify-start w-[38%]">
              <Img
                className="h-[25px] w-[25px]"
                src="images/img_frame_indigo_900_20x20.svg"
                alt="frame"
              />
              <Text className="text-gray-600 text-xl" size="txtInterMedium20">
                Jun 15,2023
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-indigo-900 text-xl"
                size="txtInterMedium20Indigo900"
              >
                <span className="text-indigo-900 font-inter text-left font-medium">
                  Upload By :{" "}
                </span>
                <span className="text-gray-600 font-inter text-left font-medium">
                  Admin
                </span>
              </Text>
            </div>
          </div>
          <Text
            className="mt-[17px] text-gray-600 text-lg w-full"
            size="txtPoppinsRegular18"
          >
            <span className="text-gray-600 font-inter text-left font-normal">
              High blood pressure, also known as hypertension, affects millions
              worldwide. It is a condition that increases the risk of various
              health problems such as{" "}
            </span>
            <span className="text-gray-600 font-inter text-left font-normal">
              strokes
            </span>
            <span className="text-gray-600 font-inter text-left font-normal">
              ,{" "}
            </span>
            <span className="text-gray-600 font-inter text-left font-normal">
              heart attacks
            </span>
            <span className="text-gray-600 font-inter text-left font-normal">
              <>
                , and more. While there are several well-known causes of
                hypertension, such as a poor diet, smoking and lack of exercise,
                there are other factors that can contribute to high blood
                pressure. In this post, let&#39;s explore some surprising causes
                of hypertension that you may not know. smoking and lack of
                exercise, there are other factors that can contribute to high
                blood pressure. In this post, let&#39;s explore some surprising
                causes of hypertension that you may not know. High blood
                pressure, also known as hypertension, affects millions
                worldwide.
              </>
            </span>
          </Text>
          <Text
            className="mt-[25px] text-gray-600 text-lg w-full"
            size="txtPoppinsRegular18"
          >
            <span className="text-indigo-900 font-inter text-left text-xl font-semibold">
              Poor sleep
            </span>
            <span className="text-gray-600 font-inter text-left font-normal">
              <>
                {" "}
                : One of the surprising causes of hypertension is poor sleep.
                Research shows people who don&#39;t get enough quality sleep are
                at{" "}
              </>
            </span>
            <span className="text-gray-600 font-inter text-left font-normal">
              risk of developing hypertension
            </span>
            <span className="text-gray-600 font-inter text-left font-normal">
              <>
                . This is because sleep helps regulate the body&#39;s stress
                hormones, which affect blood pressure. If you&#39;re not getting
                enough restful sleep each night, it could be contributing to
                your high blood pressure.
              </>
            </span>
          </Text>
          <div className="flex flex-col font-poppins items-center justify-start mt-5 w-full">
            <Text
              className="text-gray-600 text-lg w-full"
              size="txtPoppinsRegular18"
            >
              <span className="text-indigo-900 font-inter text-left font-semibold">
                Oral health problems
              </span>
              <span className="text-gray-600 font-inter text-left font-normal">
                {" "}
                : Poor oral health can contribute to hypertension. Studies show
                people with gum disease and other oral health conditions are
                more likely to have high blood pressure; this could be due to
                inflammation caused by oral bacteria, which can affect blood
                vessels and increase blood pressure.
              </span>
            </Text>
          </div>
        </div>
        <Footer1 className="bg-indigo-900 flex items-center justify-center mt-[90px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default BlogOnePage;
