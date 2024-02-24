import React from "react";

import { Img, Line, Text } from "components";

const Footer = () => {
  return (
    <>
      <footer className={`bg-indigo-900 flex items-center justify-center w-full overflow-hidden`}>
        <div className="flex flex-col items-center justify-center mb-3 mt-12 max-w-[1440px] w-[90%] ">
          <div className="flex flex-col items-center w-full">
            {/* upper */}
            <div className="flex md:flex-wrap md:gap-5 gap-0 items-start justify-between w-full ">
              {/* 1 */}
              <div className="flex flex-col gap-5 md:gap-3 items-start justify-start w-[25%] md:w-[70%] md:mx-auto mr-40 ">
                <div className="flex flex-col items-center justify-start w-[44%] md:w-full">
                  <Img
                    className="object-fit w-full md:w-1/2 aspect-auto"
                    src="images/img_image2.png"
                    alt="imageTwo_One"
                  />
                </div>
                <Text
                  className="text-lg md:text-sm md:text-center text-white-A700 w-full mx-auto"
                  size="txtInterRegular18WhiteA700"
                >
                  207,208 Vasupujya Complex, Opp. Trinity Mall, Adajan, Surat -
                  395009, Gujarat,India
                </Text>
                <Img
                  className="h-10 md:h-8 md:w-full"
                  src="images/img_group1000003731.svg"
                  alt="group1000003731"
                />
              </div>
              {/* 2 */}
              <div className="flex flex-col gap-[1.1rem] md:gap-3 items-start justify-start md:ml-[0] md:mt-0 mt-0.5 w-[10%] md:w-[29%]">
                <Text
                  className="text-center text-white-A700 text-xl md:text-sm"
                  size="txtInterBold20"
                >
                  Pages{" "}
                </Text>
                <ul className="flex flex-col gap-2 items-start justify-start w-full common-column-list">
                  {['About Us', 'Our Services', 'Our Services', 'Our Gallery', 'Our Blog'].map(
                    (item, key) => <li key={key}>
                    <Text
                      className="text-lg md:text-sm text-white-A700"
                      size="txtInterRegular18WhiteA700"
                    >{item}</Text>
                  </li>)}                  
                </ul>
              </div>
              {/* 3 */}
              <div className="flex flex-col gap-[18px] md:gap-3 justify-start md:mt-0 mt-0.5 w-[10%] md:w-[29%]">
                <Text
                  className="text-white-A700 text-xl md:text-sm"
                  size="txtInterBold20"
                >
                  Department{" "}
                </Text>
                <ul className="flex flex-col gap-2.5 items-start justify-start w-full common-column-list">
                  {['Quick Links', 'Our Services', 'Our Gallery', 'Appointment', 'Privacy Policy'].map(
                    (item, key) => 
                      (<li key={key}>
                      <Text
                        className="text-lg md:text-sm text-white-A700"
                        size="txtInterRegular18WhiteA700"
                      > {item} </Text>
                    </li>)
                  )}
                </ul>
              </div>
              {/* 4 */}
              <div className="flex flex-col gap-5 md:gap-3 items-start justify-start w-[15%] md:w-[29%]">
                <Text
                  className="text-white-A700 text-xl md:text-sm"
                  size="txtInterBold20"
                >
                  Links{" "}
                </Text>
                <div className="flex flex-col justify-start w-full">
                  <ul className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full common-column-list">
                    {['Useful Links', 'Privacy Policy', 'Terms and Conditions', 'Discaimer', 'Support', 'FAQ'].map((item, key) => <li key={key}>
                      <Text
                        className="text-lg text-white-A700 md:text-sm"
                        size="txtInterRegular18WhiteA700"
                      >{item}</Text>
                    </li>)}
                  </ul>
                </div>
              </div>
              {/* 5 */}
              <div className="flex flex-col gap-[18px] md:gap-3 items-start justify-start md:mt-0 mt-0.5 w-[20%] md:w-full">
                <Text
                  className="text-center text-white-A700 text-xl md:text-sm"
                  size="txtInterBold20"
                >
                  Opening Hours{" "}
                </Text>
                <div className="flex flex-col items-start justify-start w-full">
                  <ul className="flex flex-col gap-2.5 items-start justify-start w-auto md:w-full common-column-list">
                    {['Mon to Tues - 8AM to 5PM', 'Wed to Thu - 9AM to 6PM', 'Fri to Sat - 8AM to 5PM', 'Sunday - Emergency Only'].map((item, key) => <li>
                      <Text
                        className="text-lg md:text-sm text-white-A700"
                        size="txtInterRegular18WhiteA700"
                      >{item}</Text>
                    </li>)}
                  </ul>
                </div>
              </div>
            </div>

            {/* Below line */}
            <Line className="bg-white-A700 h-px mt-[3.7rem] sm:mt-3 md:mt-4 w-screen " />
            <Text
              className="mt-4 md:mt-2 text-base sm:text-xs md:text-lg text-blue_gray-100_01"
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

Footer.defaultProps = {};

export default Footer;
