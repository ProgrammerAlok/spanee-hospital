import { Button, Img, Text } from "components";
import { Heading1 } from "components/Heading";
import React from "react";

const ImageComp = ({ className }) => {
    return (
        <div className={`relative ${className}`}>
        <Img
          className="absolute h-auto aspect-square inset-[0] justify-center m-auto rounded-[50%]"
          src="images/img_ellipse10.png"
          alt="ellipseTen"
        />
        <div className="absolute bg-gray-50_02 flex flex-col items-center justify-center p-[2rem]  sm:px-4 right-[0] rounded-full shadow-bs1 top-[5%] sm:p-2">
          <Text
            className="mt-1.5 sm:text-[1.2rem] md:text-[2rem] text-[2.2rem] text-red-500 tracking-[1.08px]"
            size="txtInterExtraBold54"
          >
            24+
          </Text>
          <Text
            className="mb-[.5rem] md:text-2xl sm:text-[1.2rem] text-[26px] text-red-500 tracking-[0.52px]"
            size="txtInterBold26"
          >
            Years
          </Text>
        </div>
      </div>
    )
}

const AboutUs = () => {
  return (
    <div className="flex md:flex-col flex-row md:gap-10 gap-[4.4rem] items-center justify-center max-w-[1440px] mt-[75px] mx-auto w-[90%]">
      {/* left */}
      <ImageComp className={`w-[60%] aspect-square md:w-full sm:hidden`} />

      {/* right */}
      <div className="flex flex-col items-center justify-start w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <Heading1
            className={`sm:text-center w-full`}
            heading={`About Us`}
            title={{
              title1: `We Are Always Ensure`,
              title2: `Best Medical Treatment`,
            }}
          />
          <Text
            className="leading-[1.9rem] mt-3.5 text-gray-600 text-xl sm:text-sm sm:text-center w-full"
            size="txtInterRegular20Gray600"
          >
            Vestibulum mollis convallis velit sed commodo. Morbi gravida, nunc
            sed tempor egestas, risus est facilisis urna, in dignissim tellus ex
            quis tellus. Sed euismod volutpat lacus, ut dignissim turpis
            elementum eu. Aenean condimentum luctus scelerisque.Vestibulum
            mollis convallis velit sed commodo. Morbi gravida.
          </Text>
          <ImageComp className={`w-[20%] aspect-square md:w-full hidden sm:block my-8`} />
          <div className="bg-white-A700 flex flex-col items-center justify-start mt-[25px] shadow-bs2 w-full">
            <div className="flex flex-row gap-5 items-center justify-start w-full">
              <Img
                className="h-[5.2rem] sm:h-[3rem] md:h-auto aspect-square rounded-[50%]"
                src="images/img_ellipse4.png"
                alt="ellipseFour"
              />
              <Text
                className="sm:text-xs md:text-lg text-white-A700"
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
          <Button
            className="common-pointer border sm:hidden border-red-500 border-solid cursor-pointer flex h-[50px] items-center justify-center min-w-[222px] mt-[30px]"
            onClick={() => navigate("/services")}
            rightIcon={
              <Img
                className="h-[22px] mb-px ml-2.5"
                src="images/img_frame.svg"
                alt="Frame"
              />
            }
            shape="round"
            color="red_500"
            size="md"
            variant="fill"
          >
            <div className="!text-gray-50 font-semibold leading-[normal] text-left text-lg">
              More About Us
            </div>
          </Button>
          <Button
            className="common-pointer border sm:flex hidden border-red-500 border-solid cursor-pointer h-[2.5rem] items-center justify-center min-w-[200px] mx-auto mt-[1.9rem]"
            onClick={() => navigate("/services")}
            rightIcon={
              <Img
                className="h-[22px] mb-px ml-2.5"
                src="images/img_frame.svg"
                alt="Frame"
              />
            }
            shape="round"
            color="red_500"
            size="sm"
            variant="fill"
          >
            <div className="!text-gray-50 font-semibold leading-[normal] text-left text-sm">
              More About Us
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export { AboutUs };
