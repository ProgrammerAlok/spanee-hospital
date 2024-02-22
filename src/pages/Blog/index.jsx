import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import BlogStack from "components/BlogStack";
import Footer from "components/Footer";
import Header1 from "components/Header1";

const BlogPage = () => {
  const navigate = useNavigate();

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
        <div className="flex flex-col gap-[9px] items-center justify-start max-w-[1223px] mt-[105px] mx-auto md:px-5 w-full">
          <Text
            className="text-2xl md:text-[22px] text-center text-red-A700 sm:text-xl"
            size="txtInterMedium24RedA700"
          >
            Latest From Blog
          </Text>
          <Text
            className="sm:text-[34px] md:text-[40px] text-[44px] text-center text-indigo-900"
            size="txtInterBold44Indigo900"
          >
            Read our News & Blog
          </Text>
          <Text
            className="leading-[30.00px] text-2xl md:text-[22px] text-center text-gray-600 sm:text-xl"
            size="txtInterRegular24"
          >
            <>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in <br />
              some form, by injected humour, or randomised words which don&#39;t
              look even slightly believable.
            </>
          </Text>
        </div>
        <div className="h-[1813px] md:h-[3032px] sm:h-[5484px] max-w-[1441px] mt-[47px] mx-auto md:px-5 relative w-full">
          <div className="bg-white-A700 flex flex-col gap-5 h-full items-center justify-start pb-4 rounded-[14px] shadow-bs w-[33%]">
            <Img
              className="h-[316px] md:h-auto object-cover rounded-tl-[14px] rounded-tr-[14px] w-full"
              src="images/img_rectangle57_2.png"
              alt="rectangleFiftySeven"
            />
            <div className="flex flex-col items-center justify-start w-[90%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row items-start justify-between w-[98%] md:w-full">
                  <div className="flex flex-row gap-2.5 items-start justify-start w-[32%]">
                    <Img
                      className="h-5 w-5"
                      src="images/img_frame_indigo_900_20x20.svg"
                      alt="frame"
                    />
                    <Text
                      className="text-base text-indigo-900"
                      size="txtInterMedium16Indigo900"
                    >
                      Jun 03,2023
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-base text-indigo-900"
                      size="txtInterMedium16Indigo900"
                    >
                      Upload By : Admin
                    </Text>
                  </div>
                </div>
                <Text
                  className="mt-[17px] text-3xl sm:text-[26px] md:text-[28px] text-indigo-900 tracking-[0.60px]"
                  size="txtInterBold30"
                >
                  <>
                    How to Determine the
                    <br />
                    Length of a Time -Out
                  </>
                </Text>
                <Text
                  className="mt-[9px] text-gray-600 text-xl w-full"
                  size="txtInterRegular20Gray600"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been.
                </Text>
                <div className="flex flex-row gap-[9px] items-center justify-start mt-[19px] w-[31%] md:w-full">
                  <a href="javascript:" className="text-lg text-red-A700">
                    <Text size="txtInterSemiBold18RedA700">Read More</Text>
                  </a>
                  <Img
                    className="h-[22px] w-[22px]"
                    src="images/img_frame_red_a700.svg"
                    alt="frame_One"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="md:gap-5 gap-[26px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-full">
                <div
                  className="common-pointer md:h-[581px] h-[589px] relative w-full"
                  onClick={() => navigate("/blogone")}
                >
                  <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[18px] rounded-[14px] shadow-bs w-full">
                    <div className="flex flex-col items-start justify-start mt-[317px] w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-row items-start justify-between w-full">
                            <div className="flex flex-col items-center justify-start">
                              <div className="flex flex-row gap-2.5 items-start justify-start w-full">
                                <Img
                                  className="h-5 w-5"
                                  src="images/img_frame_indigo_900_20x20.svg"
                                  alt="frame"
                                />
                                <Text
                                  className="text-base text-indigo-900"
                                  size="txtInterMedium16Indigo900"
                                >
                                  Jun 03,2023
                                </Text>
                              </div>
                            </div>
                            <Text
                              className="text-base text-indigo-900"
                              size="txtInterMedium16Indigo900"
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
                      </div>
                      <Text
                        className="mt-[18px] text-2xl md:text-[22px] text-indigo-900 sm:text-xl tracking-[0.48px] w-full"
                        size="txtInterBold24"
                      >
                        How to Determine the Length of a Time -Out
                      </Text>
                      <Text
                        className="mt-[13px] text-gray-600 text-xl w-full"
                        size="txtInterRegular20Gray600"
                      >
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been.
                      </Text>
                      <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] mt-6 w-[30%] md:w-full">
                        <div className="flex flex-row gap-2.5 items-start justify-between w-full">
                          <Text
                            className="text-lg text-red-A700"
                            size="txtInterSemiBold18RedA700"
                          >
                            Read More
                          </Text>
                          <Img
                            className="h-[21px] w-[21px]"
                            src="images/img_frame_red_a700.svg"
                            alt="frame_One"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute h-[316px] inset-x-[0] mx-auto object-cover rounded-tl-[14px] rounded-tr-[14px] top-[0] w-full"
                    src="images/img_rectangle57_3.png"
                    alt="rectangleFiftySeven"
                  />
                </div>
                <BlogStack
                  className="md:h-[581px] h-[589px] relative w-full"
                  uploadbytext={
                    <Text className="font-medium text-base text-indigo-900">
                      <span className="text-indigo-900 font-inter text-left">
                        Upload By :{" "}
                      </span>
                      <span className="text-gray-600 font-inter text-left">
                        Admin
                      </span>
                    </Text>
                  }
                />
                <BlogStack
                  className="md:h-[581px] h-[589px] relative w-full"
                  uploadbytext={
                    <Text className="font-medium text-base text-indigo-900">
                      <span className="text-indigo-900 font-inter text-left">
                        Upload By :{" "}
                      </span>
                      <span className="text-gray-600 font-inter text-left">
                        Admin
                      </span>
                    </Text>
                  }
                  rectanglefiftyseven="images/img_rectangle57_5.png"
                />
                <BlogStack
                  className="md:h-[581px] h-[589px] relative w-full"
                  uploadbytext={
                    <Text className="font-medium text-base text-indigo-900">
                      <span className="text-indigo-900 font-inter text-left">
                        Upload By :{" "}
                      </span>
                      <span className="text-gray-600 font-inter text-left">
                        Admin
                      </span>
                    </Text>
                  }
                  rectanglefiftyseven="images/img_rectangle57_6.png"
                />
                <BlogStack
                  className="md:h-[581px] h-[589px] relative w-full"
                  uploadbytext={
                    <Text className="font-medium text-base text-indigo-900">
                      <span className="text-indigo-900 font-inter text-left">
                        Upload By :{" "}
                      </span>
                      <span className="text-gray-600 font-inter text-left">
                        Admin
                      </span>
                    </Text>
                  }
                  rectanglefiftyseven="images/img_rectangle57_7.png"
                />
                <BlogStack
                  className="md:h-[581px] h-[589px] relative w-full"
                  uploadbytext={
                    <Text className="font-medium text-base text-indigo-900">
                      <span className="text-indigo-900 font-inter text-left">
                        Upload By :{" "}
                      </span>
                      <span className="text-gray-600 font-inter text-left">
                        Admin
                      </span>
                    </Text>
                  }
                  rectanglefiftyseven="images/img_rectangle57_8.png"
                />
                <BlogStack
                  className="md:h-[581px] h-[589px] relative w-full"
                  uploadbytext={
                    <Text className="font-medium text-base text-indigo-900">
                      <span className="text-indigo-900 font-inter text-left">
                        Upload By :{" "}
                      </span>
                      <span className="text-gray-600 font-inter text-left">
                        Admin
                      </span>
                    </Text>
                  }
                  rectanglefiftyseven="images/img_rectangle57_9.png"
                />
                <BlogStack
                  className="md:h-[581px] h-[589px] relative w-full"
                  uploadbytext={
                    <Text className="font-medium text-base text-indigo-900">
                      <span className="text-indigo-900 font-inter text-left">
                        Upload By :{" "}
                      </span>
                      <span className="text-gray-600 font-inter text-left">
                        Admin
                      </span>
                    </Text>
                  }
                  rectanglefiftyseven="images/img_rectangle57_10.png"
                />
                <BlogStack
                  className="md:h-[581px] h-[589px] relative w-full"
                  uploadbytext={
                    <Text className="font-medium text-base text-indigo-900">
                      <span className="text-indigo-900 font-inter text-left">
                        Upload By :{" "}
                      </span>
                      <span className="text-gray-600 font-inter text-left">
                        Admin
                      </span>
                    </Text>
                  }
                  rectanglefiftyseven="images/img_rectangle57_11.png"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-indigo-900 flex items-center justify-center mt-[100px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default BlogPage;
