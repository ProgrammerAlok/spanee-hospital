import React from "react";

import { Button, Img, Line, Text } from "components";
import Footer1 from "components/Footer1";
import Header from "components/Header";

const GalleryPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <Header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full" />
        <div className="bg-indigo-900 flex md:flex-col flex-row md:gap-5 items-start justify-start md:px-10 sm:px-5 px-[279px] w-full">
          <Line className="bg-gradient  md:h-0.5 h-[450px] w-0.5 md:w-full" />
          <Line className="bg-black-900 h-px mb-[435px] md:mt-0 mt-3.5 w-px" />
          <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[131px] w-0.5 md:w-full" />
          <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[132px] w-0.5 md:w-full" />
          <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[132px] w-0.5 md:w-full" />
          <div
            className="bg-cover bg-no-repeat flex md:flex-1 flex-col gap-[21px] h-[450px] items-center justify-start md:ml-[0] ml-[78px] pb-[74px] md:px-5 px-[74px] w-[30%] md:w-full"
            style={{ backgroundImage: "url('images/img_group1000004043.png')" }}
          >
            <Line className="bg-gradient  h-[173px] w-0.5" />
            <Text
              className="mb-[105px] md:text-5xl text-[62px] text-center text-white-A700 underline"
              size="txtInterBold62"
            >
              Gallery{" "}
            </Text>
          </div>
          <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[58px] w-0.5 md:w-full" />
          <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[132px] w-0.5 md:w-full" />
          <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[132px] w-0.5 md:w-full" />
          <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[131px] w-0.5 md:w-full" />
        </div>
        <div className="flex flex-col gap-[9px] items-center justify-start mt-[104px] md:px-5">
          <Text
            className="sm:text-[34px] md:text-[40px] text-[44px] text-indigo-900_02"
            size="txtInterBold44Indigo90002"
          >
            Our Gallery
          </Text>
          <Text
            className="leading-[30.00px] text-center text-gray-600 text-xl w-full"
            size="txtInterMedium20"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            hendrerit magna at dui commodo facilisis. Vestibulum viverra risus
            id diam hendrerit vehicula.
          </Text>
        </div>
        <div className="flex sm:h-[1317px] md:h-[1330px] h-[758px] justify-end max-w-[1440px] mt-[50px] mx-auto md:px-5 relative w-full">
          <Img
            className="h-[235px] ml-[367px] mt-auto object-cover rounded-[10px] w-[24%]"
            src="images/img_rectangle60.png"
            alt="rectangleSixty"
          />
          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[26px] items-center justify-start w-full">
                <div className="flex md:flex-col flex-row gap-[26px] items-center justify-between w-full">
                  <div className="h-[496px] relative w-1/2 md:w-full">
                    <Img
                      className="h-[496px] m-auto object-cover rounded-[10px] w-full"
                      src="images/img_rectangle45.png"
                      alt="rectangleFortyFive"
                    />
                    <div className="absolute bg-gradient1  flex flex-col h-full inset-[0] items-center justify-center m-auto p-[216px] md:px-10 sm:px-5 rounded-[10px] w-full">
                      <Img
                        className="h-[55px] mt-[9px] w-[55px]"
                        src="images/img_grid.svg"
                        alt="grid"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-[26px] items-center justify-start w-1/2 md:w-full">
                    <div className="flex sm:flex-col flex-row gap-[26px] items-center justify-between w-full">
                      <Img
                        className="h-[235px] md:h-auto object-cover rounded-[10px]"
                        src="images/img_rectangle56.png"
                        alt="rectangleFiftySix"
                      />
                      <Img
                        className="h-[235px] md:h-auto object-cover rounded-[10px]"
                        src="images/img_rectangle48.png"
                        alt="rectangleFortyEight"
                      />
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[26px] items-center justify-between w-full">
                      <Img
                        className="h-[235px] md:h-auto object-cover rounded-[14px]"
                        src="images/img_rectangle57_235x340.png"
                        alt="rectangleFiftySeven"
                      />
                      <Img
                        className="h-[235px] md:h-auto object-cover rounded-[14px]"
                        src="images/img_rectangle54_235x340.png"
                        alt="rectangleFiftyFour"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
                  <Img
                    className="sm:flex-1 h-[235px] md:h-auto object-cover rounded-[10px] w-[24%] sm:w-full"
                    src="images/img_rectangle59.png"
                    alt="rectangleFiftyNine"
                  />
                  <Img
                    className="sm:flex-1 h-[235px] md:h-auto sm:ml-[0] ml-[393px] object-cover rounded-[10px] w-[24%] sm:w-full"
                    src="images/img_rectangle58.png"
                    alt="rectangleFiftyEight"
                  />
                  <Img
                    className="sm:flex-1 h-[235px] md:h-auto sm:ml-[0] ml-[26px] object-cover rounded-[10px] w-[24%] sm:w-full"
                    src="images/img_rectangle55.png"
                    alt="rectangleFiftyFive"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer1 className="bg-indigo-900 flex items-center justify-center mt-[100px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default GalleryPage;
