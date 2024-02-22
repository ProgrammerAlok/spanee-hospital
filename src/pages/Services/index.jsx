import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import Footer from "components/Footer";

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
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
              <a
                href="javascript:"
                className="hover:font-bold text-lg text-red-A700"
              >
                <Text size="txtInterBold18">Services</Text>
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
              <a className="hover:font-bold text-gray-600 text-lg hover:text-red-A700">
                <Text
                  className="common-pointer"
                  size="txtInterMedium18"
                  onClick={() => navigate("/contactus")}
                >
                  Contacts Us{" "}
                </Text>
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
            className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[450px] items-center justify-start md:ml-[0] ml-[78px] pb-[66px] md:px-5 px-[66px] w-[30%] md:w-full"
            style={{ backgroundImage: "url('images/img_group1000004043.png')" }}
          >
            <div className="flex flex-col gap-5 justify-start mb-[114px] w-full">
              <Line className="bg-gradient  h-[173px] ml-64 md:ml-[0] w-0.5" />
              <Text
                className="md:text-5xl text-[62px] text-center text-white-A700 underline"
                size="txtInterBold62"
              >
                Services{" "}
              </Text>
            </div>
          </div>
          <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[58px] w-0.5 md:w-full" />
          <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[132px] w-0.5 md:w-full" />
          <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[132px] w-0.5 md:w-full" />
          <Line className="bg-gradient  md:h-0.5 h-[450px] md:ml-[0] ml-[131px] w-0.5 md:w-full" />
        </div>
        <div className="flex flex-col items-center justify-start mt-[99px] md:px-5">
          <Text
            className="text-2xl md:text-[22px] text-red-500 sm:text-xl tracking-[0.48px]"
            size="txtInterMedium24"
          >
            Our Services
          </Text>
          <Text
            className="mt-1 sm:text-[34px] md:text-[40px] text-[44px] text-blue_gray-900 text-center"
            size="txtInterBold44"
          >
            <>
              Provide The Best Treatment For your
              <br /> Child’s Health
            </>
          </Text>
          <Text
            className="leading-[30.00px] mt-3.5 text-center text-gray-600 text-xl w-full"
            size="txtInterRegular20Gray600"
          >
            <>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#39;s standard dummy
              text ever since the 1500s, when an unknown printe.
            </>
          </Text>
        </div>
        <div className="flex md:flex-col flex-row gap-[50px] items-center justify-center max-w-[1438px] mt-12 mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start w-[49%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Img
                className="h-[400px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                src="images/img_rectangle2241.png"
                alt="rectangle2241"
              />
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-start w-[48%] md:w-full">
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <div className="flex flex-row gap-5 items-center justify-start w-[42%] md:w-full">
                <Img
                  className="h-20 w-20"
                  src="images/img_thumbsup_blue_gray_600_01_80x80.svg"
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
                className="leading-[30.00px] text-gray-600 text-lg w-full"
                size="txtInterRegular18"
              >
                <>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&#39;s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishin.
                </>
              </Text>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1439px] mt-[50px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex md:flex-col flex-row md:gap-[51px] items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col items-center justify-start w-[48%] md:w-full">
                <div className="flex flex-col gap-5 items-start justify-start w-full">
                  <div className="flex flex-row gap-5 items-center justify-start ml-0.5 md:ml-[0] w-[34%] md:w-full">
                    <Img
                      className="h-20 w-20"
                      src="images/img_menu.svg"
                      alt="menu"
                    />
                    <Text
                      className="md:text-2xl sm:text-[22px] text-[26px] text-center text-indigo-900"
                      size="txtInterSemiBold26"
                    >
                      Pathology
                    </Text>
                  </div>
                  <Text
                    className="leading-[30.00px] text-gray-600 text-lg w-full"
                    size="txtInterRegular18"
                  >
                    <>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged. It was
                      popularised in the 1960s with the release of Letraset
                      sheets containing Lorem Ipsum passages, and more recently
                      with desktop publishin.
                    </>
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start w-[49%] md:w-full">
                <Img
                  className="h-[400px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                  src="images/img_rectangle2241_400x703.png"
                  alt="rectangle2241_One"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1438px] mt-[50px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-[50px] items-center justify-between w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start w-[49%] md:w-full">
              <Img
                className="h-[400px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                src="images/img_rectangle2241.png"
                alt="rectangle2241_Two"
              />
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start w-[48%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <div className="flex flex-row gap-5 items-center justify-start w-[48%] md:w-full">
                      <Img
                        className="h-20 w-20"
                        src="images/img_thumbsup_80x80.svg"
                        alt="thumbsup_One"
                      />
                      <Text
                        className="md:text-2xl sm:text-[22px] text-[26px] text-center text-indigo-900"
                        size="txtInterSemiBold26"
                      >
                        Precise Diagnosis
                      </Text>
                    </div>
                    <Text
                      className="leading-[30.00px] text-gray-600 text-lg w-full"
                      size="txtInterRegular18"
                    >
                      <>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry&#39;s standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishin.
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="bg-indigo-900 flex items-center justify-center mt-[100px] md:px-5 w-full" />
      </div>
    </>
  );
};

export default ServicesPage;
