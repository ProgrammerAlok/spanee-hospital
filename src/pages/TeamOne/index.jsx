import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer1 from "components/Footer1";
import Header1 from "components/Header1";

const TeamOnePage = () => {
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
        <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1440px] mt-[103px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-3/4 md:w-full">
            <div className="flex flex-col gap-[11px] items-center justify-start w-full">
              <Text
                className="text-[22px] text-center sm:text-lg text-red-A700 md:text-xl"
                size="txtInterMedium22"
              >
                Team Membar
              </Text>
              <Text
                className="sm:text-[34px] md:text-[40px] text-[44px] text-center text-indigo-900"
                size="txtInterBold44Indigo900"
              >
                Our Experts
              </Text>
              <Text
                className="leading-[30.00px] text-center text-gray-600 text-xl w-full"
                size="txtInterRegular20Gray600"
              >
                <>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s, when an unknown
                  printe.
                </>
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                <div className="md:h-[313px] h-[371px] relative w-full">
                  <div className="absolute bg-indigo-900 bottom-[0] flex flex-col gap-[19px] inset-x-[0] items-center justify-end mx-auto p-[25px] sm:px-5 rounded-[14px] shadow-bs4 w-full">
                    <Text
                      className="mt-[191px] md:text-2xl sm:text-[22px] text-[26px] text-white-A700"
                      size="txtInterBold26WhiteA700"
                    >
                      Dr. Ryan Levin
                    </Text>
                    <Text
                      className="text-lg text-white-A700"
                      size="txtInterRegular18WhiteA700"
                    >
                      Neurologist
                    </Text>
                  </div>
                  <Img
                    className="absolute h-64 inset-x-[0] mx-auto rounded-[50%] top-[0] w-64"
                    src="images/img_ellipse18_256x256.png"
                    alt="ellipseEighteen"
                  />
                </div>
                <div className="md:h-[314px] h-[371px] relative w-full">
                  <div className="absolute bg-white-A700 bottom-[0] flex flex-col gap-[22px] inset-x-[0] items-center justify-end mx-auto p-[25px] sm:px-5 rounded-[14px] shadow-bs4 w-full">
                    <Text
                      className="mt-[189px] md:text-2xl sm:text-[22px] text-[26px] text-indigo-900"
                      size="txtInterBold26Indigo900"
                    >
                      Dr. Barlione Croudo
                    </Text>
                    <Text
                      className="text-blue-400 text-lg"
                      size="txtInterRegular18Blue400"
                    >
                      Neurologist
                    </Text>
                  </div>
                  <Img
                    className="absolute h-64 inset-x-[0] mx-auto rounded-[50%] top-[0] w-64"
                    src="images/img_ellipse20.png"
                    alt="ellipseTwenty"
                  />
                </div>
                <div className="md:h-[313px] h-[371px] relative w-full">
                  <div className="absolute bg-white-A700 bottom-[0] flex flex-col gap-[19px] inset-x-[0] items-center justify-end mx-auto p-[25px] sm:px-5 rounded-[14px] shadow-bs4 w-full">
                    <Text
                      className="mt-[191px] md:text-2xl sm:text-[22px] text-[26px] text-indigo-900"
                      size="txtInterBold26Indigo900"
                    >
                      Dr.Omar Siphron
                    </Text>
                    <Text
                      className="text-blue-400 text-lg"
                      size="txtInterRegular18Blue400"
                    >
                      Neurologist
                    </Text>
                  </div>
                  <Img
                    className="absolute h-64 inset-x-[0] mx-auto rounded-[50%] top-[0] w-64"
                    src="images/img_ellipse19.png"
                    alt="ellipseNineteen"
                  />
                </div>
                <div className="md:h-[313px] h-[371px] relative w-full">
                  <div className="absolute bg-white-A700 bottom-[0] flex flex-col gap-[19px] inset-x-[0] items-center justify-end mx-auto p-[25px] sm:px-5 rounded-[14px] shadow-bs4 w-full">
                    <Text
                      className="mt-[191px] md:text-2xl sm:text-[22px] text-[26px] text-indigo-900"
                      size="txtInterBold26Indigo900"
                    >
                      Dr. Ryan Levin
                    </Text>
                    <Text
                      className="text-blue-400 text-lg"
                      size="txtInterRegular18Blue400"
                    >
                      Neurologist
                    </Text>
                  </div>
                  <Img
                    className="absolute h-64 inset-x-[0] mx-auto rounded-[50%] top-[0] w-64"
                    src="images/img_ellipse18.png"
                    alt="ellipseEighteen"
                  />
                </div>
                <div className="md:h-[314px] h-[371px] relative w-full">
                  <div className="absolute bg-white-A700 bottom-[0] flex flex-col gap-[22px] inset-x-[0] items-center justify-end mx-auto p-[25px] sm:px-5 rounded-[14px] shadow-bs4 w-full">
                    <Text
                      className="mt-[189px] md:text-2xl sm:text-[22px] text-[26px] text-indigo-900"
                      size="txtInterBold26Indigo900"
                    >
                      Dr. Anika Croudo
                    </Text>
                    <Text
                      className="text-blue-400 text-lg"
                      size="txtInterRegular18Blue400"
                    >
                      Neurologist
                    </Text>
                  </div>
                  <Img
                    className="absolute h-64 inset-x-[0] mx-auto rotate-[180deg] rounded-[50%] top-[0] w-64"
                    src="images/img_ellipse23_256x256.png"
                    alt="ellipseTwentyThree"
                  />
                </div>
                <div className="md:h-[314px] h-[371px] relative w-full">
                  <div className="absolute bg-white-A700 bottom-[0] flex flex-col gap-[22px] inset-x-[0] items-center justify-end mx-auto p-[25px] sm:px-5 rounded-[14px] shadow-bs4 w-full">
                    <Text
                      className="mt-[189px] md:text-2xl sm:text-[22px] text-[26px] text-indigo-900"
                      size="txtInterBold26Indigo900"
                    >
                      Dr. Barlione Croudo
                    </Text>
                    <Text
                      className="text-blue-400 text-lg"
                      size="txtInterRegular18Blue400"
                    >
                      Neurologist
                    </Text>
                  </div>
                  <Img
                    className="absolute h-64 inset-x-[0] mx-auto rounded-[50%] top-[0] w-64"
                    src="images/img_ellipse20.png"
                    alt="ellipseTwenty"
                  />
                </div>
                <div className="md:h-[313px] h-[371px] relative w-full">
                  <div className="absolute bg-white-A700 bottom-[0] flex flex-col gap-[19px] inset-x-[0] items-center justify-end mx-auto p-[25px] sm:px-5 rounded-[14px] shadow-bs4 w-full">
                    <Text
                      className="mt-[191px] md:text-2xl sm:text-[22px] text-[26px] text-indigo-900"
                      size="txtInterBold26Indigo900"
                    >
                      Dr.Omar Siphron
                    </Text>
                    <Text
                      className="text-blue-400 text-lg"
                      size="txtInterRegular18Blue400"
                    >
                      Neurologist
                    </Text>
                  </div>
                  <Img
                    className="absolute h-64 inset-x-[0] mx-auto rounded-[50%] top-[0] w-64"
                    src="images/img_ellipse19_256x256.png"
                    alt="ellipseNineteen"
                  />
                </div>
                <div className="md:h-[313px] h-[371px] relative w-full">
                  <div className="absolute bg-white-A700 bottom-[0] flex flex-col gap-[19px] inset-x-[0] items-center justify-end mx-auto p-[25px] sm:px-5 rounded-[14px] shadow-bs4 w-full">
                    <Text
                      className="mt-[191px] md:text-2xl sm:text-[22px] text-[26px] text-indigo-900"
                      size="txtInterBold26Indigo900"
                    >
                      Dr. Ryan Levin
                    </Text>
                    <Text
                      className="text-blue-400 text-lg"
                      size="txtInterRegular18Blue400"
                    >
                      Neurologist
                    </Text>
                  </div>
                  <Img
                    className="absolute h-64 inset-x-[0] mx-auto rounded-[50%] top-[0] w-64"
                    src="images/img_ellipse18_256x256.png"
                    alt="ellipseEighteen"
                  />
                </div>
                <div className="md:h-[314px] h-[371px] relative w-full">
                  <div className="absolute bg-white-A700 bottom-[0] flex flex-col gap-[17px] inset-x-[0] items-center justify-end mx-auto p-[25px] sm:px-5 rounded-[14px] shadow-bs4 w-full">
                    <Text
                      className="mt-[189px] text-3xl sm:text-[26px] md:text-[28px] text-indigo-900"
                      size="txtInterBold30"
                    >
                      Dr. Anika Croudo
                    </Text>
                    <Text
                      className="text-blue-400 text-lg"
                      size="txtInterRegular18Blue400"
                    >
                      Neurologist
                    </Text>
                  </div>
                  <Img
                    className="absolute h-64 inset-x-[0] mx-auto rotate-[180deg] rounded-[50%] top-[0] w-64"
                    src="images/img_ellipse22.png"
                    alt="ellipseTwentyThree"
                  />
                </div>
                <div className="md:h-[314px] h-[371px] relative w-full">
                  <div className="absolute bg-white-A700 bottom-[0] flex flex-col gap-[17px] inset-x-[0] items-center justify-end mx-auto p-[25px] sm:px-5 rounded-[14px] shadow-bs4 w-full">
                    <Text
                      className="mt-[189px] text-3xl sm:text-[26px] md:text-[28px] text-indigo-900"
                      size="txtInterBold30"
                    >
                      Dr. Barlione Croudo
                    </Text>
                    <Text
                      className="text-blue-400 text-lg"
                      size="txtInterRegular18Blue400"
                    >
                      Neurologist
                    </Text>
                  </div>
                  <Img
                    className="absolute h-64 inset-x-[0] mx-auto rounded-[50%] top-[0] w-64"
                    src="images/img_ellipse20.png"
                    alt="ellipseTwenty"
                  />
                </div>
                <div className="md:h-[314px] h-[371px] relative w-full">
                  <div className="absolute bg-white-A700 bottom-[0] flex flex-col gap-3.5 inset-x-[0] items-center justify-end mx-auto p-[25px] sm:px-5 rounded-[14px] shadow-bs4 w-full">
                    <Text
                      className="mt-48 text-3xl sm:text-[26px] md:text-[28px] text-indigo-900"
                      size="txtInterBold30"
                    >
                      Dr.Omar Siphron
                    </Text>
                    <Text
                      className="text-blue-400 text-lg"
                      size="txtInterRegular18Blue400"
                    >
                      Neurologist
                    </Text>
                  </div>
                  <Img
                    className="absolute h-64 inset-x-[0] mx-auto rounded-[50%] top-[0] w-64"
                    src="images/img_ellipse19_256x256.png"
                    alt="ellipseNineteen"
                  />
                </div>
                <div className="md:h-[314px] h-[371px] relative w-full">
                  <div className="absolute bg-white-A700 bottom-[0] flex flex-col gap-3.5 inset-x-[0] items-center justify-end mx-auto p-[25px] sm:px-5 rounded-[14px] shadow-bs4 w-full">
                    <Text
                      className="mt-48 text-3xl sm:text-[26px] md:text-[28px] text-indigo-900"
                      size="txtInterBold30"
                    >
                      Dr. Ryan Levin
                    </Text>
                    <Text
                      className="text-blue-400 text-lg"
                      size="txtInterRegular18Blue400"
                    >
                      Neurologist
                    </Text>
                  </div>
                  <Img
                    className="absolute h-64 inset-x-[0] mx-auto rounded-[50%] top-[0] w-64"
                    src="images/img_ellipse18_256x256.png"
                    alt="ellipseEighteen"
                  />
                </div>
              </div>
            </div>
          </div>
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[184px] rounded-[5px]"
            rightIcon={
              <Img
                className="h-[22px] mb-px ml-2.5"
                src="images/img_frame.svg"
                alt="Frame"
              />
            }
            color="red_500"
            size="sm"
            variant="fill"
          >
            <div className="font-semibold leading-[normal] text-left text-lg">
              Load More
            </div>
          </Button>
        </div>
        <Footer1 className="bg-indigo-900 flex items-center justify-center mt-[100px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default TeamOnePage;
