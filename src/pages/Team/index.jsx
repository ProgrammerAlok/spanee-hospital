import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const TeamPage = () => {
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
              Team{" "}
            </Text>
          </div>
          <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[58px] w-0.5 md:w-full" />
          <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[132px] w-0.5 md:w-full" />
          <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[132px] w-0.5 md:w-full" />
          <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[131px] w-0.5 md:w-full" />
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1440px] mt-[103px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <div className="flex flex-col gap-2.5 items-center justify-start w-[52%] md:w-full">
              <div className="flex flex-col gap-[11px] items-center justify-start">
                <Text
                  className="text-2xl md:text-[22px] text-center text-red-A700 sm:text-xl"
                  size="txtInterMedium24RedA700"
                >
                  Team Membar
                </Text>
                <Text
                  className="sm:text-[34px] md:text-[40px] text-[44px] text-center text-indigo-900"
                  size="txtInterBold44Indigo900"
                >
                  Our Experts
                </Text>
              </div>
              <Text
                className="leading-[30.00px] text-center text-gray-600 text-xl w-full"
                size="txtInterRegular20Gray600"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                hendrerit magna at .
              </Text>
            </div>
            <div className="flex flex-col gap-[15px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row font-inter gap-[34px] items-center justify-between w-full">
                <Img
                  className="h-[535px] md:h-auto object-cover rounded-[10px]"
                  src="images/img_unsplashsakqlf78kvo.png"
                  alt="unsplashsakqlfSeven"
                />
                <div className="flex flex-col items-center justify-start">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="sm:text-[34px] md:text-[40px] text-[44px] text-indigo-900"
                      size="txtInterBold44Indigo900"
                    >
                      Dr. Ryan Levin
                    </Text>
                    <Text
                      className="mt-[7px] text-blue-400 text-lg"
                      size="txtInterRegular18Blue400"
                    >
                      Neurologist
                    </Text>
                    <Text
                      className="mt-[9px] text-base text-indigo-900"
                      size="txtInterRegular16"
                    >
                      MD obstetrics and gynecology
                    </Text>
                    <Text
                      className="leading-[30.00px] mt-[18px] text-gray-600 text-xl w-[98%] sm:w-full"
                      size="txtInterRegular20Gray600"
                    >
                      MBBS, MSexperience of more than 10 years private practice,
                      good administrative skills, experienced to work
                      efficiently as a part of team.
                    </Text>
                    <Text
                      className="leading-[30.00px] mt-5 text-gray-600 text-xl w-full"
                      size="txtInterRegular20Gray600"
                    >
                      <>
                        Lorem Ipsum is simply dummy text of the printing
                        typesetting industry. Lorem Ipsum has been the
                        industry&#39;s standard dummy text ever since the 150
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap in
                        electronic typesetting, remaining essentially unchanged.
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <Text
                className="leading-[30.00px] text-gray-600 text-xl w-full"
                size="txtPoppinsRegular20"
              >
                <span className="text-gray-600 font-inter text-left font-normal">
                  High blood pressure, also known as hypertension, affects
                  millions worldwide. It is a condition that increases the risk
                  of various health problems such as{" "}
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
                    hypertension, such as a poor diet, smoking and lack of
                    exercise, there are other factors that can contribute to
                    high blood pressure. In this post, let&#39;s explore some
                    surprising causes of hypertension that you may not know.
                    smoking and lack of exercise, there are other factors that
                    can contribute to high blood pressure. In this post,
                    let&#39;s explore some surprising causes of hypertension
                    that you may not know. High blood pressure, also known as
                    hypertension, affects millions worldwide.
                  </>
                </span>
              </Text>
            </div>
          </div>
        </div>
        <Footer className="bg-indigo-900 flex items-center justify-center mt-[107px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default TeamPage;
