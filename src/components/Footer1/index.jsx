import React from "react";

import { Img, Line, Text } from "components";

const Footer1 = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col items-center justify-center mb-3 mt-12 w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-3/4 md:w-full">
              <div className="flex flex-col gap-5 items-start justify-start w-1/4 md:w-full">
                <div className="flex flex-col items-center justify-start w-[44%] md:w-full">
                  <Img
                    className="h-[65px] md:h-auto object-cover w-full"
                    src="images/img_image2.png"
                    alt="imageTwo_One"
                  />
                </div>
                <Text
                  className="text-lg text-white-A700 w-full"
                  size="txtInterRegular18WhiteA700"
                >
                  207,208 Vasupujya Complex, Opp. Trinity Mall, Adajan, Surat -
                  395009, Gujarat,India
                </Text>
                <Img
                  className="h-10"
                  src="images/img_group1000003731.svg"
                  alt="group1000003731"
                />
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start md:ml-[0] ml-[219px] md:mt-0 mt-0.5 w-[8%] md:w-full">
                <Text
                  className="text-center text-white-A700 text-xl"
                  size="txtInterBold20"
                >
                  Pages{" "}
                </Text>
                <ul className="flex flex-col items-start justify-start w-full common-column-list">
                  <li>
                    <Text
                      className="text-center text-lg text-white-A700"
                      size="txtInterRegular18WhiteA700"
                    >
                      About Us
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="mt-[9px] text-center text-lg text-white-A700"
                      size="txtInterRegular18WhiteA700"
                    >
                      Our Services
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="mt-[11px] text-center text-lg text-white-A700"
                      size="txtInterRegular18WhiteA700"
                    >
                      Our Gallery
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="mt-2.5 text-center text-lg text-white-A700"
                      size="txtInterRegular18WhiteA700"
                    >
                      Our Blog
                    </Text>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-[18px] items-center justify-start md:ml-[0] ml-[69px] md:mt-0 mt-0.5 w-[9%] md:w-full">
                <Text
                  className="text-center text-white-A700 text-xl"
                  size="txtInterBold20"
                >
                  Department{" "}
                </Text>
                <ul className="flex flex-col items-start justify-start w-full common-column-list">
                  <li>
                    <Text
                      className="text-center text-lg text-white-A700"
                      size="txtInterRegular18WhiteA700"
                    >
                      Quick Links
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="mt-[9px] text-center text-lg text-white-A700"
                      size="txtInterRegular18WhiteA700"
                    >
                      Our Services
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="mt-[11px] text-center text-lg text-white-A700"
                      size="txtInterRegular18WhiteA700"
                    >
                      Our Gallery
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="mt-[9px] text-center text-lg text-white-A700"
                      size="txtInterRegular18WhiteA700"
                    >
                      Appointment
                    </Text>
                  </li>
                  <li>
                    <Text
                      className="mt-2.5 text-center text-lg text-white-A700"
                      size="txtInterRegular18WhiteA700"
                    >
                      Privacy Policy
                    </Text>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start md:ml-[0] ml-[70px] w-[13%] md:w-full">
                <Text
                  className="text-center text-white-A700 text-xl"
                  size="txtInterBold20"
                >
                  Links{" "}
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <ul className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <Text
                        className="text-center text-lg text-white-A700"
                        size="txtInterRegular18WhiteA700"
                      >
                        Useful Links
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-center text-lg text-white-A700"
                        size="txtInterRegular18WhiteA700"
                      >
                        Privacy Policy
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-center text-lg text-white-A700"
                        size="txtInterRegular18WhiteA700"
                      >
                        Terms and Conditions
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-center text-lg text-white-A700"
                        size="txtInterRegular18WhiteA700"
                      >
                        Discaimer
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-center text-lg text-white-A700"
                        size="txtInterRegular18WhiteA700"
                      >
                        Support
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-center text-lg text-white-A700"
                        size="txtInterRegular18WhiteA700"
                      >
                        FAQ
                      </Text>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col gap-[18px] items-start justify-start md:ml-[0] ml-[70px] md:mt-0 mt-0.5 w-[17%] md:w-full">
                <Text
                  className="text-center text-white-A700 text-xl"
                  size="txtInterBold20"
                >
                  Opening Hours{" "}
                </Text>
                <div className="flex flex-col items-center justify-start w-full">
                  <ul className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full common-column-list">
                    <li>
                      <Text
                        className="text-center text-lg text-white-A700"
                        size="txtInterRegular18WhiteA700"
                      >
                        Mon to Tues - 8AM to 5PM
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-center text-lg text-white-A700"
                        size="txtInterRegular18WhiteA700"
                      >
                        Wed to Thu - 9AM to 6PM
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-center text-lg text-white-A700"
                        size="txtInterRegular18WhiteA700"
                      >
                        Fri to Sat - 8AM to 5PM
                      </Text>
                    </li>
                    <li>
                      <Text
                        className="text-center text-lg text-white-A700"
                        size="txtInterRegular18WhiteA700"
                      >
                        Sunday - Emergency Only
                      </Text>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:h-[59px] h-px mt-[58px] relative w-full">
              <Line className="bg-white-A700 h-px m-auto w-full" />
              <Line className="absolute bg-white-A700 h-px inset-[0] justify-center m-auto w-full" />
            </div>
            <Text
              className="mt-4 text-base text-blue_gray-100_01"
              size="txtPoppinsRegular16"
            >
              © 2000-2021, SpaneeHospital All Rights Reserved
            </Text>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer1.defaultProps = {};

export default Footer1;
