import React from "react";

import { Img, Text } from "components";

const BlogStack = (props) => {
  return (
    <>
      <div className={props.className}>
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
                        {props?.datetext}
                      </Text>
                    </div>
                  </div>
                  {props?.uploadbytext}
                </div>
              </div>
            </div>
            <Text
              className="mt-[18px] text-2xl md:text-[22px] text-indigo-900 sm:text-xl tracking-[0.48px] w-full"
              size="txtInterBold24"
            >
              {props?.howtodeterminetext}
            </Text>
            <Text
              className="mt-[13px] text-gray-600 text-xl w-full"
              size="txtInterRegular20Gray600"
            >
              {props?.loremipsumtext}
            </Text>
            <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] mt-6 w-[30%] md:w-full">
              <div className="flex flex-row gap-2.5 items-start justify-between w-full">
                <Text
                  className="text-lg text-red-A700"
                  size="txtInterSemiBold18RedA700"
                >
                  {props?.readmoretext}
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
          alt="rectangleFiftySeven"
          src={props?.rectanglefiftyseven}
        />
      </div>
    </>
  );
};

BlogStack.defaultProps = {
  datetext: "Jun 03,2023",
  uploadbytext: (
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
  ),
  howtodeterminetext: "How to Determine the Length of a Time -Out",
  loremipsumtext:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
  readmoretext: "Read More",
  rectanglefiftyseven: "images/img_rectangle57_4.png",
};

export default BlogStack;
