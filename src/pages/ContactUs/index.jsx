import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Footer1 from "components/Footer1";
import MainLayout from "layout/MainLayout";
import { BannerPrimary } from "components/Banner";
import { Heading1 } from "components/Heading";

const ContactUsPage = () => {
  const navigate = useNavigate();

  return (
    <MainLayout title={`Contact Us`}>
      <div className=' w-full mx-auto'>
        <BannerPrimary text={`Contact Us`} />
        <Heading1
          heading={{
            text: ``,
            className: ``,
          }}
          title={{
            title1: ``,
            className: ``,
          }}
          description={{
            text: ``,
            className: ``,
          }}
        />
      </div>
      {/* <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 w-full">
          <Img
            className="md:flex-1 h-14 sm:h-auto ml-60 md:ml-[0] md:mt-0 my-[22px] object-cover w-[8%] md:w-full"
            src="images/img_image2.png"
            alt="imageTwo"
          />
          <ul className="flex md:flex-1 md:flex-col flex-row gap-10 md:hidden items-start justify-start mb-9 md:ml-[0] ml-[249px] md:mt-0 mt-[39px] w-auto md:w-full common-row-list">
            <li>
              <a className="hover:font-bold text-gray-600 text-lg hover:text-red-A700">
                <Text
                  className="common-pointer"
                  size="txtInterMedium18"
                  onClick={() => navigate("/")}
                >
                  Home
                </Text>
              </a>
            </li>
            <li>
              <a className="hover:font-bold text-gray-600 text-lg hover:text-red-A700">
                <Text
                  className="common-pointer"
                  size="txtInterMedium18"
                  onClick={() => navigate("/aboutus")}
                >
                  About Us{" "}
                </Text>
              </a>
            </li>
            <li>
              <a className="hover:font-bold text-gray-600 text-lg hover:text-red-A700">
                <Text
                  className="common-pointer"
                  size="txtInterMedium18"
                  onClick={() => navigate("/services")}
                >
                  Services
                </Text>
              </a>
            </li>
            <li>
              <a className="hover:font-bold text-gray-600 text-lg hover:text-red-A700">
                <Text
                  className="common-pointer"
                  size="txtInterMedium18"
                  onClick={() => navigate("/gallery")}
                >
                  Gallery{" "}
                </Text>
              </a>
            </li>
            <li>
              <a className="hover:font-bold text-gray-600 text-lg hover:text-red-A700">
                <Text
                  className="common-pointer"
                  size="txtInterMedium18"
                  onClick={() => navigate("/blog")}
                >
                  Blog{" "}
                </Text>
              </a>
            </li>
            <li>
              <a className="hover:font-bold text-gray-600 text-lg hover:text-red-A700">
                <Text
                  className="common-pointer"
                  size="txtInterMedium18"
                  onClick={() => navigate("/teamone")}
                >
                  Team{" "}
                </Text>
              </a>
            </li>
            <li>
              <a
                href="javascript:"
                className="hover:font-bold text-lg text-red-A700"
              >
                <Text size="txtInterBold18">Contacts Us </Text>
              </a>
            </li>
          </ul>
          <Button
            className="cursor-pointer font-semibold leading-[normal] min-w-[177px] ml-44 md:ml-[0] mr-60 md:mt-0 my-6 rounded-[14px] text-base text-center"
            color="red_500"
            size="md"
            variant="fill"
          >
            Free Cansultation
          </Button>
        </header>
        <div className="bg-indigo-900 flex md:flex-col flex-row md:gap-5 items-start justify-start md:px-10 sm:px-5 px-[279px] w-full">
          <Line className="bg-gradient  md:h-0.5 h-[450px] w-0.5 md:w-full" />
          <Line className="bg-black-900 h-px mb-[435px] md:mt-0 mt-3.5 w-px" />
          <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[131px] w-0.5 md:w-full" />
          <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[132px] w-0.5 md:w-full" />
          <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[132px] w-0.5 md:w-full" />
          <div
            className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[450px] items-center justify-start md:ml-[0] ml-[78px] pb-3 px-3 md:px-5 w-[30%] md:w-full"
            style={{ backgroundImage: "url('images/img_group1000004043.png')" }}
          >
            <div className="flex flex-col gap-[22px] justify-start mb-[166px] w-full">
              <Line className="bg-gradient  h-[173px] md:ml-[0] ml-[310px] w-0.5" />
              <Text
                className="md:text-5xl text-[62px] text-center text-white-A700 underline"
                size="txtInterBold62"
              >
                Contacts Us{" "}
              </Text>
            </div>
          </div>
          <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[58px] w-0.5 md:w-full" />
          <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[132px] w-0.5 md:w-full" />
          <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[132px] w-0.5 md:w-full" />
          <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[131px] w-0.5 md:w-full" />
        </div>
        <div className="bg-white-A700 flex flex-col items-end justify-start max-w-[1440px] mt-[100px] mx-auto pl-[63px] md:px-5 py-[63px] rounded-[10px] shadow-bs6 w-full">
          <div className="flex flex-col justify-start mb-[9px] w-[94%] md:w-full">
            <div className="flex flex-col gap-[18px] items-center justify-start md:ml-[0] ml-[141px] w-[67%] md:w-full">
              <div className="flex flex-col font-inter items-center justify-start">
                <Text
                  className="sm:text-[34px] md:text-[40px] text-[44px] text-center text-red-500"
                  size="txtInterBold44Red500"
                >
                  Get In Touch
                </Text>
              </div>
              <Text
                className="text-center text-gray-500 text-lg tracking-[0.36px] w-full"
                size="txtLatoMedium18"
              >
                <>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since.
                </>
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-12 items-start justify-between ml-1.5 md:ml-[0] mt-[59px] w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-2 w-[56%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[25px] items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-5 items-center justify-between w-full">
                      <Text
                        className="bg-white-A700 border border-gray-300 border-solid h-[60px] justify-center pl-3 sm:pr-5 pr-[35px] py-[18px] rounded-[5px] text-gray-500 text-lg w-[345px]"
                        size="txtInterRegular18Gray500"
                      >
                        First Name{" "}
                      </Text>
                      <Text
                        className="bg-white-A700 border border-gray-300 border-solid h-[60px] justify-center pl-3 sm:pr-5 pr-[35px] py-[18px] rounded-[5px] text-gray-500 text-lg w-[345px]"
                        size="txtInterRegular18Gray500"
                      >
                        Last Name{" "}
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[60px] items-start justify-start p-3 w-full"
                        style={{
                          backgroundImage:
                            "url('images/img_group1000003856.svg')",
                        }}
                      >
                        <Text
                          className="my-1.5 text-gray-500 text-lg"
                          size="txtInterRegular18Gray500"
                        >
                          Email
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[60px] items-start justify-start p-3 w-full"
                        style={{
                          backgroundImage:
                            "url('images/img_group1000003856.svg')",
                        }}
                      >
                        <Text
                          className="my-1.5 text-gray-500 text-lg"
                          size="txtInterRegular18Gray500"
                        >
                          Phone Number
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="bg-white-A700 border border-gray-300 border-solid flex flex-col items-start justify-start p-3 rounded-[5px] w-full">
                          <Text
                            className="mb-[143px] mt-[13px] text-gray-500 text-lg"
                            size="txtInterRegular18Gray500"
                          >
                            Message
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col gap-10 items-start justify-start w-[42%] md:w-full">
                <div className="flex flex-col gap-2 justify-start w-full">
                  <div className="flex flex-row gap-5 items-center justify-start w-[35%] md:w-full">
                    <Button
                      className="flex h-[41px] items-center justify-center rounded-[20px] w-[41px]"
                      color="gray_500_01"
                      size="sm"
                      variant="outline"
                    >
                      <Img
                        className="h-[23px]"
                        src="images/img_frame_indigo_900_41x41.svg"
                        alt="frame"
                      />
                    </Button>
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-indigo-900"
                      size="txtInterMedium30"
                    >
                      Address
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[60px] text-gray-500_01 text-lg w-[89%] sm:w-full"
                    size="txtInterRegular18Gray50001"
                  >
                    10-11,Gr. Floor, Ambedakar Shopping Center, Mandarwaja, Ring
                    Road, Surat, Gujarat-395002
                  </Text>
                </div>
                <div className="flex flex-col gap-[9px] justify-start w-[72%] md:w-full">
                  <div className="flex flex-row gap-5 items-center justify-start w-[41%] md:w-full">
                    <Button
                      className="flex h-[41px] items-center justify-center rounded-[20px] w-[41px]"
                      color="gray_600"
                      size="xs"
                      variant="outline"
                    >
                      <Img
                        className="h-6"
                        src="images/img_frame_41x41.svg"
                        alt="frame_One"
                      />
                    </Button>
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-indigo-900"
                      size="txtInterMedium30"
                    >
                      Phone
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[60px] text-gray-500_01 text-lg"
                    size="txtInterRegular18Gray50001"
                  >
                    +91-9825117510 (Naresh K. Sarasiya)
                  </Text>
                </div>
                <div className="flex flex-col gap-2 justify-start w-[86%] md:w-full">
                  <div className="flex flex-row gap-5 items-center justify-start w-[31%] md:w-full">
                    <Button
                      className="flex h-[41px] items-center justify-center rounded-[20px] w-[41px]"
                      color="gray_600"
                      size="xs"
                      variant="outline"
                    >
                      <Img
                        className="h-6"
                        src="images/img_frame_1.svg"
                        alt="frame_Two"
                      />
                    </Button>
                    <Text
                      className="text-3xl sm:text-[26px] md:text-[28px] text-indigo-900"
                      size="txtInterMedium30"
                    >
                      Email
                    </Text>
                  </div>
                  <Text
                    className="leading-[28.00px] md:ml-[0] ml-[60px] text-gray-500_01 text-lg"
                    size="txtInterRegular18Gray50001"
                  >
                    <>
                      inquiry@Spanee.in
                      <br />
                      nksabb@yahoo.co.in <br />
                      Spanee_ Hospital@yahoo.com
                    </>
                  </Text>
                </div>
              </div>
            </div>
            <Button
              className="cursor-pointer font-semibold min-w-[223px] mr-[1068px] mt-[41px] rounded-[7px] text-center text-lg"
              color="indigo_900"
              size="lg"
              variant="fill"
            >
              Send Message
            </Button>
          </div>
        </div>
        <Footer1 className="bg-indigo-900 flex items-center justify-center mt-[100px] md:px-5 w-full" />
      </div> */}
    </MainLayout>
  );
};

export default ContactUsPage;
