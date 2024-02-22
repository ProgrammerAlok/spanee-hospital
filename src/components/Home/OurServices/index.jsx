import { Button, Img, List, Text } from 'components'
import { Heading1 } from 'components/Heading'
import React from 'react'

const OurServices = () => {
  return (
    <div className="sm:h-[1272px] h-[557px] md:h-[963px] max-w-[1440px] mt-[99px] mx-auto md:px-5 relative w-[90%]">
            {/* <Text
                className="absolute bottom-[15%] inset-x-[0] mx-auto sm:text-3xl md:text-[32px] text-[34px] text-indigo-900 w-max"
                size="txtInterBold34"
            >
                Pathology
            </Text>
            <Text
                className="absolute bottom-[15%] right-[41%] sm:text-3xl md:text-[32px] text-[34px] text-center text-indigo-900"
                size="txtInterBold34"
            >
                Pathology
            </Text> */}
          <div className="absolute flex flex-col gap-[50px] h-full inset-[0] items-center justify-center m-auto w-full">
            <div className="flex flex-col items-center justify-start">
              <Heading1 
                className={`text-center`}
                heading={`Our Services`}   
                title={{
                    title1: `Provide The Best Treatment For your`,
                    title2: `Child’s Health`,
                }}           
              />
              <Text
                className="leading-[30.00px] mt-3.5 text-center text-gray-600_99 text-xl w-[85%]"
                size="txtInterRegular20Gray60099"
              >
                <>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s, when an unknown
                  printe.
                </>
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row gap-[18px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
              orientation="horizontal"
            >
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] shadow-bs3 w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-start w-[66%] md:w-full">
                    <Img
                      className="h-20 w-20"
                      src="images/img_thumbsup.svg"
                      alt="thumbsup"
                    />
                    <Text
                      className="md:text-2xl sm:text-[22px] text-[26px] text-center text-indigo-900"
                      size="txtInterSemiBold26"
                    >
                      Immunizations
                    </Text>
                  </div>
                  <Text
                    className="mt-5 text-gray-600 text-xl w-full"
                    size="txtInterRegular20Gray600"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been.
                  </Text>
                  <Button
                    className="border border-indigo-900 border-solid cursor-pointer flex h-[50px] items-center justify-center min-w-[186px] mt-[29px]"
                    rightIcon={
                      <Img
                        className="h-[22px] mb-px ml-2.5"
                        src="images/img_frame_indigo_900.svg"
                        alt="Frame"
                      />
                    }
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    <div className="font-semibold leading-[normal] text-left text-lg">
                      Read More
                    </div>
                  </Button>
                </div>
              </div>
              <div className="bg-indigo-900 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] shadow-bs3 w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-start w-[53%] md:w-full">
                    <Img
                      className="h-20 w-20"
                      src="images/img_user.svg"
                      alt="user"
                    />
                    <Text
                      className="md:text-2xl sm:text-[22px] text-[26px] text-center text-white-A700"
                      size="txtInterSemiBold26WhiteA700"
                    >
                      Pathology
                    </Text>
                  </div>
                  <Text
                    className="mt-5 text-white-A700 text-xl w-full"
                    size="txtInterRegular20"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been.
                  </Text>
                  <Button
                    className="common-pointer border border-red-500 border-solid cursor-pointer flex h-[50px] items-center justify-center min-w-[186px] mt-[29px]"
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
                      Read More
                    </div>
                  </Button>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] shadow-bs3 w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-start w-3/4 md:w-full">
                    <Img
                      className="h-20 w-20"
                      src="images/img_thumbsup_blue_gray_600_01.svg"
                      alt="thumbsup"
                    />
                    <Text
                      className="md:text-2xl sm:text-[22px] text-[26px] text-center text-indigo-900"
                      size="txtInterSemiBold26"
                    >
                      Precise Diagnosis
                    </Text>
                  </div>
                  <Text
                    className="mt-5 text-gray-600 text-xl w-full"
                    size="txtInterRegular20Gray600"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been.
                  </Text>
                  <Button
                    className="border border-indigo-900 border-solid cursor-pointer flex h-[50px] items-center justify-center min-w-[186px] mt-[29px]"
                    rightIcon={
                      <Img
                        className="h-[22px] mb-px ml-2.5"
                        src="images/img_frame_indigo_900.svg"
                        alt="Frame"
                      />
                    }
                    shape="round"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  >
                    <div className="font-semibold leading-[normal] text-left text-lg">
                      Read More
                    </div>
                  </Button>
                </div>
              </div>
            </List>
          </div>
        </div>
  )
}

export {OurServices}