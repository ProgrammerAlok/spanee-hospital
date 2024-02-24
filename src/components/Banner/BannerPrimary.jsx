import { Line, Text } from "components";
import React from "react";

const BannerPrimary = ({ text, className }) => {
  return (
    <div
      className={`bg-indigo-900 w-screen overflow-hidden `}
    >
      <div className={`max-w-[1440px] w-[90%] mx-auto flex md:flex-col flex-row md:gap-5 items-start justify-start ${className} `}>
        <Line className="bg-gradient  md:h-0.5 h-[450px] w-0.5 md:w-full md:hidden" />
        <Line className="bg-black-900 h-px mb-[435px] md:mt-0 mt-3.5 w-px md:hidden" />
        <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[131px] w-0.5 md:w-full md:hidden" />
        <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[132px] w-0.5 md:w-full md:hidden" />
        <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[132px] w-0.5 md:w-full md:hidden" />
        <div
          className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[65vh] md:h-[10vh] items-center justify-center md:ml-[0] ml-[2%] pb-[58px] md:px-5 px-[58px] w-full md:w-[50%] md:mx-auto "
          style={{
            backgroundImage: "url('images/img_group1000004043.png')",
          }}
        >
          <div className="flex flex-col gap-[21px] w-full">
            <Line className="bg-gradient  h-[173px] md:ml-[0] ml-[264px] w-0.5 md:hidden"  />
            <Text
              className="md:text-[22px] text-[62px] font-inter font-[700] leading-[75.03px] md:leading-[26.63px] text-center text-white-A700 underline"
              size="txtInterBold62"
            >
              {text}
            </Text>
          </div>
        </div>
        <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[58px] w-0.5 md:w-full md:hidden" />
        <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[132px] w-0.5 md:w-full md:hidden" />
        <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[132px] w-0.5 md:w-full md:hidden" />
        <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[131px] w-0.5 md:w-full md:hidden" />
      </div>
    </div>
  );
};

export default BannerPrimary;
