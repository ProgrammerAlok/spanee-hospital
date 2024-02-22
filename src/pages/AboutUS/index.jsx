import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer1 from "components/Footer1";
import Header from "components/Header";

const AboutUSPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <Header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
          <div className="bg-indigo-900 flex md:flex-col flex-row md:gap-5 items-start justify-start md:px-10 sm:px-5 px-[279px] w-full">
            <Line className="bg-gradient  md:h-0.5 h-[450px] w-0.5 md:w-full" />
            <Line className="bg-black-900 h-px mb-[435px] md:mt-0 mt-3.5 w-px" />
            <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[131px] w-0.5 md:w-full" />
            <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[132px] w-0.5 md:w-full" />
            <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[132px] w-0.5 md:w-full" />
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[450px] items-center justify-start md:ml-[0] ml-[78px] pb-[58px] md:px-5 px-[58px] w-[30%] md:w-full"
              style={{
                backgroundImage: "url('images/img_group1000004043.png')",
              }}
            >
              <div className="flex flex-col gap-[21px] justify-start mb-[121px] w-full">
                <Line className="bg-gradient  h-[173px] md:ml-[0] ml-[264px] w-0.5" />
                <Text
                  className="md:text-5xl text-[62px] text-center text-white-A700 underline"
                  size="txtInterBold62"
                >
                  About Us{" "}
                </Text>
              </div>
            </div>
            <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[58px] w-0.5 md:w-full" />
            <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[132px] w-0.5 md:w-full" />
            <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[132px] w-0.5 md:w-full" />
            <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[131px] w-0.5 md:w-full" />
          </div>
          <div className="flex md:flex-col flex-row gap-[50px] items-center justify-center max-w-[1440px] mt-[101px] mx-auto md:px-5 w-full">
            <div className="h-[610px] relative w-[43%] md:w-full">
              <Img
                className="absolute h-[610px] inset-[0] justify-center m-auto rounded-[50%] w-[610px]"
                src="images/img_ellipse10.png"
                alt="ellipseTen"
              />
              <div className="absolute bg-gray-50_02 flex flex-col h-[173px] items-center justify-center p-[31px] sm:px-5 right-[0] rounded-[86px] shadow-bs1 top-[6%] w-[173px]">
                <Text
                  className="mt-1.5 sm:text-[40px] md:text-[46px] text-[54px] text-red-500 tracking-[1.08px]"
                  size="txtInterExtraBold54"
                >
                  24+
                </Text>
                <Text
                  className="mb-[11px] md:text-2xl sm:text-[22px] text-[26px] text-red-500 tracking-[0.52px]"
                  size="txtInterBold26"
                >
                  Years
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-start justify-start w-[55%] md:w-full">
              <div className="flex flex-col gap-[7px] items-start justify-start">
                <Text
                  className="text-2xl md:text-[22px] text-center text-red-500 sm:text-xl"
                  size="txtInterMedium24"
                >
                  About Us
                </Text>
                <Text
                  className="sm:text-[34px] md:text-[40px] text-[44px] text-blue_gray-900"
                  size="txtInterBold44"
                >
                  <>
                    We Are Always Ensure
                    <br />
                    Best Medical Treatment
                  </>
                </Text>
              </div>
              <Text
                className="leading-[30.00px] mt-[9px] text-gray-600 text-lg w-[99%] sm:w-full"
                size="txtInterMedium18"
              >
                <>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.{" "}
                </>
              </Text>
              <div className="flex flex-col gap-[30px] items-start justify-start mt-[15px] w-full">
                <Text
                  className="leading-[30.00px] text-gray-600 text-xl tracking-[0.40px] w-full"
                  size="txtInterMedium20"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod see tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, ut aliquip ex ea commodo
                  consequat. reprehenderit in voluptate.
                </Text>
                <div className="bg-white-A700 flex sm:flex-col flex-row gap-5 items-center justify-start p-[13px] rounded-[10px] shadow-bs2 w-[70%] md:w-full">
                  <Img
                    className="h-[87px] md:h-auto rounded-[50%] w-[87px]"
                    src="images/img_ellipse4.png"
                    alt="ellipseFour"
                  />
                  <Text
                    className="text-lg text-white-A700"
                    size="txtInterSemiBold18"
                  >
                    <span className="text-indigo-900 font-inter text-left font-normal">
                      “
                    </span>
                    <span className="text-indigo-900 font-inter text-left font-semibold">
                      There are many variations
                    </span>
                    <span className="text-white-A700 font-inter text-left font-normal">
                      {" "}
                    </span>
                    <span className="text-gray-600_93 font-inter text-left font-normal">
                      <>
                        of passages of the
                        <br />
                        lorem ipsum available, but the majority have a<br />
                        suffered antirationing Sime form.”
                      </>
                    </span>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1440px] mt-[100px] mx-auto md:px-5 w-full">
            <Text
              className="sm:text-[34px] md:text-[40px] text-[44px] text-blue_gray-900 text-center tracking-[0.88px] w-[58%] sm:w-full"
              size="txtInterBold44"
            >
              Professionalism And Commitment Is Our Dedication
            </Text>
            <div className="flex md:flex-col flex-row md:gap-[50px] items-center justify-between w-full">
              <Img
                className="h-[401px] md:h-auto object-cover rounded-[10px]"
                src="images/img_rectangle72.png"
                alt="rectangleSeventyTwo"
              />
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="sm:text-[34px] md:text-[40px] text-[44px] text-blue_gray-900"
                  size="txtInterBold44"
                >
                  <span className="text-blue_gray-900 font-inter text-left font-bold">
                    Our{" "}
                  </span>
                  <span className="text-red-500 font-inter text-left font-bold">
                    Vision
                  </span>
                </Text>
                <Text
                  className="leading-[30.00px] mt-[9px] text-gray-600 text-xl tracking-[0.40px] w-full"
                  size="txtInterMedium20"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod see tempor incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  reprehenderit in voluptate.
                </Text>
                <Text
                  className="leading-[30.00px] mt-[15px] text-gray-600 text-xl w-full"
                  size="txtInterMedium20"
                >
                  That ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor to be incididunt ut labore et dolore magna
                  aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate.
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[1440px] mt-[50px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-[50px] items-center justify-between w-full">
              <div className="flex flex-col items-center justify-start">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="sm:text-[34px] md:text-[40px] text-[44px] text-blue_gray-900"
                      size="txtInterBold44"
                    >
                      <span className="text-blue_gray-900 font-inter text-left font-bold">
                        Our
                      </span>
                      <span className="text-red-500 font-inter text-left font-bold">
                        {" "}
                        Mission
                      </span>
                    </Text>
                    <Text
                      className="leading-[30.00px] mt-[9px] text-gray-600 text-xl tracking-[0.40px] w-full"
                      size="txtInterMedium20"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod see tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis in reprehenderit in voluptate.
                    </Text>
                    <Text
                      className="leading-[30.00px] mt-[15px] text-gray-600 text-xl w-full"
                      size="txtInterMedium20"
                    >
                      That ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor to be incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo
                      consequat. Duis aute irure dolor reprehenderit in
                      voluptate.
                    </Text>
                  </div>
                </div>
              </div>
              <Img
                className="h-[401px] md:h-auto object-cover rounded-[10px]"
                src="images/img_rectangle73.png"
                alt="rectangleSeventyThree"
              />
            </div>
          </div>
          <Footer1 className="bg-indigo-900 flex items-center justify-center mt-[100px] md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default AboutUSPage;
