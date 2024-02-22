import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  NavBar,
  PagerIndicator,
  Slider,
  Text,
} from "components";
import Footer from "components/Footer";
import { HomeBanner } from "./HomeBanner";
import { AboutUs } from "components/Home";
import { OurServices } from "components/Home";

const Home1Page = () => {
  const navigate = useNavigate();

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto">
        <NavBar />
        <HomeBanner />
        <AboutUs />
        <OurServices />
        
        {/* secondary banner */}
        <div className="relative h-[39rem] w-screen bg-gray-50_03 ">
          <div className="absolute inset-x-[0] mx-auto top-[0] max-w-[1440px]">
            <div className="relative md:h-[1147px] h-[1148px] sm:h-[1212px] mx-auto w-[97%]">
              {/* <div className="absolute bg-gray-50_03 h-[576px] inset-x-[0] mx-auto top-[0] w-full"></div> */}
              {/* <div
                className="absolute bg-contain bg-no-repeat flex flex-col inset-[0] items-center justify-center w-[100%]"
                style={{ 
                  backgroundImage: "url('images/img_group19.svg')"
               }}
              >
                <div className="flex flex-col items-center justify-start mb-[654px] mt-[82px] w-full">
                  <Text
                    className="sm:text-[34px] md:text-[40px] text-[44px] text-center text-indigo-900"
                    size="txtInterBold44Indigo900"
                  >
                    <span className="text-indigo-900 font-inter font-bold">
                      Leading The Way In{" "}
                    </span>
                    <span className="text-red-500 font-inter font-bold">
                      <>
                        Medical
                        <br />
                      </>
                    </span>
                    <span className="text-indigo-900 font-inter font-bold">
                      {" "}
                      Excellence
                    </span>
                  </Text>
                  <Text
                    className="leading-[30.00px] mt-[19px] text-center text-gray-600 text-xl w-full"
                    size="txtInterRegular20Gray600"
                  >
                    <>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                      when an unknown printe.
                    </>
                  </Text>
                  <div className="flex sm:flex-col flex-row gap-[15px] items-center justify-center mt-10 w-[47%] md:w-full">
                    <Button
                      className="cursor-pointer font-semibold leading-[normal] min-w-[238px] text-center text-lg"
                      shape="round"
                      color="indigo_900"
                      size="md"
                      variant="fill"
                    >
                      Get Free Consultation
                    </Button>
                    <Button
                      className="common-pointer cursor-pointer flex items-center justify-center min-w-[245px]"
                      onClick={() => navigate("/contactus")}
                      leftIcon={
                        <Img
                          className="h-[22px] mb-px mr-2.5"
                          src="images/img_call.svg"
                          alt="call"
                        />
                      }
                      shape="round"
                      color="red_500"
                      size="md"
                      variant="fill"
                    >
                      <div className="font-semibold leading-[normal] text-left text-lg">
                        +2819 (4631)2930
                      </div>
                    </Button>
                  </div>
                </div>
              </div> */}
            </div>
            {/* <div className="absolute flex sm:flex-col flex-row md:gap-10 inset-x-[0] items-start justify-between mx-auto top-[2%] w-[82%]">
              <div className="bg-blue-50 h-[195px] sm:mt-0 mt-14 rotate-[152deg] rounded-[97px] w-[195px]"></div>
              <div className="bg-blue-50 h-[183px] mb-[68px] rotate-[-161deg] rounded-[91px] w-[183px]"></div>
            </div> */}
          </div>
        </div>

        {/* <div className="md:h-[1552px] h-[100rem] sm:h-[1813px] mt-[100px] md:px-5 relative w-[100%]">
          <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-3/4">
            <div className="flex flex-col items-center justify-start w-full">
              <Text
                className="sm:text-[34px] md:text-[40px] text-[44px] text-indigo-900_02"
                size="txtInterBold44Indigo90002"
              >
                Our Gallery
              </Text>
              <Text
                className="leading-[30.00px] mt-[9px] text-center text-gray-600 text-xl w-[71%] sm:w-full"
                size="txtInterMedium20"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                hendrerit magna at dui commodo facilisis. Vestibulum viverra
                risus id diam hendrerit vehicula.
              </Text>
              <div className="flex flex-col items-center justify-start mt-[50px] w-full">
                <div className="flex flex-col gap-[26px] items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row gap-[26px] items-center justify-between w-full">
                    <Img
                      className="h-[496px] md:h-auto object-cover rounded-[10px]"
                      src="images/img_rectangle45.png"
                      alt="rectangleFortyFive"
                    />
                    <div className="flex flex-col gap-[26px] items-center justify-start">
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
                          className="h-[235px] md:h-auto object-cover rounded-[10px]"
                          src="images/img_rectangle57.png"
                          alt="rectangleFiftySeven"
                        />
                        <Img
                          className="h-[235px] md:h-auto object-cover rounded-[10px]"
                          src="images/img_rectangle54.png"
                          alt="rectangleFiftyFour"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[26px] items-center justify-between w-full">
                    <Img
                      className="h-[235px] md:h-auto object-cover rounded-[10px]"
                      src="images/img_rectangle59.png"
                      alt="rectangleFiftyNine"
                    />
                    <Img
                      className="h-[235px] md:h-auto object-cover rounded-[10px]"
                      src="images/img_rectangle60.png"
                      alt="rectangleSixty"
                    />
                    <Img
                      className="h-[235px] md:h-auto object-cover rounded-[10px]"
                      src="images/img_rectangle58.png"
                      alt="rectangleFiftyEight"
                    />
                    <Img
                      className="h-[235px] md:h-auto object-cover rounded-[10px]"
                      src="images/img_rectangle55.png"
                      alt="rectangleFiftyFive"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <Button
          className="common-pointer border border-red-500 border-solid cursor-pointer flex h-[50px] items-center justify-center min-w-[185px] mt-[50px]"
          onClick={() => navigate("/gallery")}
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
          <div className="font-semibold leading-[normal] text-left text-lg">
            View More
          </div>
        </Button>
        <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1441px] mt-[105px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[9px] items-center justify-start">
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
                some form, by injected humour, or randomised words which
                don&#39;t look even slightly believable.
              </>
            </Text>
          </div>
          <List
            className="sm:flex-col flex-row gap-[26px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
            orientation="horizontal"
          >
            <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col gap-5 items-center justify-start pb-[19px] rounded-[10px] hover:shadow-bs shadow-bs hover:w-full w-full">
              <Img
                className="h-[316px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                src="images/img_rectangle57_316x463.png"
                alt="rectangleFiftySeven"
              />
              <div className="flex flex-col items-start justify-start w-[92%] md:w-full">
                <div className="flex flex-row items-start justify-between w-full">
                  <div className="flex flex-row gap-2.5 items-start justify-start w-[31%]">
                    <Img
                      className="h-5 w-5"
                      src="images/img_frame_indigo_900_20x20.svg"
                      alt="frame"
                    />
                    <Text
                      className="text-base text-gray-600"
                      size="txtInterMedium16"
                    >
                      Jun 03,2023
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start">
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
                <Text
                  className="mt-[18px] md:text-2xl sm:text-[22px] text-[26px] text-indigo-900 tracking-[0.52px] w-full"
                  size="txtInterSemiBold26"
                >
                  How to Determine the Length of a Time - Out
                </Text>
                <Text
                  className="mt-3.5 text-gray-600 text-xl w-[99%] sm:w-full"
                  size="txtInterRegular20Gray600"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been.
                </Text>
                <div className="flex flex-row items-center justify-start mt-6 w-[29%] md:w-full">
                  <Text
                    className="text-lg text-red-A700"
                    size="txtInterSemiBold18RedA700"
                  >
                    Read More
                  </Text>
                  <Img
                    className="h-[22px] ml-[5px] w-[22px]"
                    src="images/img_frame_red_a700.svg"
                    alt="frame_One"
                  />
                </div>
              </div>
            </div>
            <div className="hover:cursor-pointer md:h-[587px] h-[592px] hover:relative relative hover:shadow-bs hover:w-full w-full">
              <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[19px] rounded-[10px] shadow-bs w-full">
                <div className="flex flex-col items-start justify-start mt-[316px] w-full">
                  <div className="flex flex-row items-start justify-between w-full">
                    <div className="flex flex-row gap-2.5 items-start justify-start w-[31%]">
                      <Img
                        className="h-5 w-5"
                        src="images/img_frame_indigo_900_20x20.svg"
                        alt="frame"
                      />
                      <Text
                        className="text-base text-gray-600"
                        size="txtInterMedium16"
                      >
                        Jun 03,2023
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start">
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
                  <Text
                    className="mt-[18px] md:text-2xl sm:text-[22px] text-[26px] text-indigo-900 tracking-[0.52px] w-full"
                    size="txtInterSemiBold26"
                  >
                    Top 10 Greatest outdoor Activities That Kids Lovel
                  </Text>
                  <Text
                    className="mt-3.5 text-gray-600 text-xl w-[99%] sm:w-full"
                    size="txtInterRegular20Gray600"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been.
                  </Text>
                  <Text
                    className="mt-6 text-indigo-900 text-lg"
                    size="txtInterSemiBold18Indigo900"
                  >
                    Read More
                  </Text>
                </div>
              </div>
              <Img
                className="absolute h-[316px] inset-x-[0] mx-auto object-cover rounded-tl-[10px] rounded-tr-[10px] top-[0] w-full"
                src="images/img_rectangle57_1.png"
                alt="rectangleFiftySeven"
              />
            </div>
            <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col gap-5 items-center justify-start pb-[19px] rounded-[10px] hover:shadow-bs shadow-bs hover:w-full w-full">
              <Img
                className="h-[316px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
                src="images/img_rectangle58_316x463.png"
                alt="rectangleFiftyEight"
              />
              <div className="flex flex-col items-start justify-start w-[92%] md:w-full">
                <div className="flex flex-row items-start justify-between w-full">
                  <div className="flex flex-row gap-2.5 items-start justify-start w-[31%]">
                    <Img
                      className="h-5 w-5"
                      src="images/img_frame_indigo_900_20x20.svg"
                      alt="frame"
                    />
                    <Text
                      className="text-base text-gray-600"
                      size="txtInterMedium16"
                    >
                      Jun 03,2023
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start">
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
                <Text
                  className="mt-[18px] md:text-2xl sm:text-[22px] text-[26px] text-indigo-900 tracking-[0.52px]"
                  size="txtInterSemiBold26"
                >
                  <>
                    Health Casre That Cobnvien
                    <br />
                    And Affordable{" "}
                  </>
                </Text>
                <Text
                  className="mt-3.5 text-gray-600 text-xl w-[99%] sm:w-full"
                  size="txtInterRegular20Gray600"
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been.
                </Text>
                <Text
                  className="mt-6 text-indigo-900 text-lg"
                  size="txtInterSemiBold18Indigo900"
                >
                  Read More
                </Text>
              </div>
            </div>
          </List>
          <Button
            className="common-pointer border border-red-500 border-solid cursor-pointer flex h-[50px] items-center justify-center min-w-[186px]"
            onClick={() => navigate("/blog")}
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
            <div className="font-semibold leading-[normal] text-left text-lg">
              Read More
            </div>
          </Button>
        </div>
        <div className="flex flex-col items-end mt-[103px] pl-60 md:px-5 w-full">
          <div className="flex flex-col gap-[50px] items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-2xl md:text-[22px] text-center text-red-A700 sm:text-xl"
                size="txtInterMedium24RedA700"
              >
                Team Membar
              </Text>
              <Text
                className="mt-[11px] sm:text-[34px] md:text-[40px] text-[44px] text-center text-indigo-900"
                size="txtInterBold44Indigo900"
              >
                Our Experts
              </Text>
              <Text
                className="leading-[30.00px] mt-[9px] text-center text-gray-600 text-lg w-full"
                size="txtInterRegular18"
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
              className="sm:flex-col flex-row gap-[22px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 justify-center w-full"
              orientation="horizontal"
            >
              <div className="md:h-[298px] h-[359px] relative w-full">
                <div className="absolute bg-white-A700 bottom-[0] flex flex-col gap-[11px] inset-x-[0] items-center justify-end mx-auto p-[18px] rounded-[10px] shadow-bs4 w-full">
                  <Text
                    className="mt-[198px] md:text-2xl sm:text-[22px] text-[26px] text-indigo-900"
                    size="txtInterSemiBold26"
                  >
                    Dr. Barlione Croudo
                  </Text>
                  <Text
                    className="text-blue-400 text-lg"
                    size="txtInterRegular18Blue400"
                  >
                    Neurologist
                  </Text>
                </div>
                <Img
                  className="absolute h-64 inset-x-[0] mx-auto rounded-[50%] top-[0] w-64"
                  src="images/img_ellipse20.png"
                  alt="ellipseTwenty"
                />
              </div>
              <div className="md:h-[298px] h-[359px] relative w-full">
                <div className="absolute bg-white-A700 bottom-[0] flex flex-col gap-[9px] inset-x-[0] items-center justify-end mx-auto p-[18px] rounded-[10px] shadow-bs4 w-full">
                  <Text
                    className="mt-[200px] md:text-2xl sm:text-[22px] text-[26px] text-indigo-900"
                    size="txtInterSemiBold26"
                  >
                    Dr.Omar Siphron
                  </Text>
                  <Text
                    className="text-blue-400 text-lg"
                    size="txtInterRegular18Blue400"
                  >
                    Neurologist
                  </Text>
                </div>
                <Img
                  className="absolute h-64 inset-x-[0] mx-auto rounded-[50%] top-[0] w-64"
                  src="images/img_ellipse19.png"
                  alt="ellipseNineteen"
                />
              </div>
              <div className="md:h-[298px] h-[359px] relative w-full">
                <div className="absolute bg-white-A700 bottom-[0] flex flex-col gap-[9px] inset-x-[0] items-center justify-end mx-auto p-[18px] rounded-[10px] shadow-bs4 w-full">
                  <Text
                    className="mt-[200px] md:text-2xl sm:text-[22px] text-[26px] text-indigo-900"
                    size="txtInterSemiBold26"
                  >
                    Dr. Ryan Levin
                  </Text>
                  <Text
                    className="text-blue-400 text-lg"
                    size="txtInterRegular18Blue400"
                  >
                    Neurologist
                  </Text>
                </div>
                <Img
                  className="absolute h-64 inset-x-[0] mx-auto rounded-[50%] top-[0] w-64"
                  src="images/img_ellipse18.png"
                  alt="ellipseEighteen"
                />
              </div>
              <div className="md:h-[298px] h-[359px] relative w-full">
                <div className="absolute bg-white-A700 bottom-[0] flex flex-col gap-[9px] inset-x-[0] items-center justify-end mx-auto p-[18px] rounded-[10px] shadow-bs4 w-full">
                  <Text
                    className="mt-[200px] md:text-2xl sm:text-[22px] text-[26px] text-indigo-900"
                    size="txtInterSemiBold26"
                  >
                    Dr. Haylie Croudo
                  </Text>
                  <Text
                    className="text-blue-400 text-lg"
                    size="txtInterRegular18Blue400"
                  >
                    Neurologist
                  </Text>
                </div>
                <Img
                  className="absolute h-64 inset-x-[0] mx-auto rounded-[50%] top-[0] w-64"
                  src="images/img_ellipse21.png"
                  alt="ellipseTwentyOne"
                />
              </div>
              <div className="md:h-[298px] h-[359px] relative w-full">
                <div className="absolute bg-white-A700 bottom-[0] flex flex-col gap-3 inset-x-[0] items-center justify-end mx-auto p-[18px] rounded-[10px] shadow-bs4 w-full">
                  <Text
                    className="mt-[198px] md:text-2xl sm:text-[22px] text-[26px] text-indigo-900"
                    size="txtInterSemiBold26"
                  >
                    Dr. Anika Croudo
                  </Text>
                  <Text
                    className="text-blue-400 text-lg"
                    size="txtInterRegular18Blue400"
                  >
                    Neurologist
                  </Text>
                </div>
                <Img
                  className="absolute h-64 inset-x-[0] mx-auto rotate-[180deg] rounded-[50%] top-[0] w-64"
                  src="images/img_ellipse22.png"
                  alt="ellipseTwentyTwo"
                />
              </div>
            </List>
            <Button
              className="common-pointer cursor-pointer flex h-[50px] items-center justify-center min-w-[185px]"
              onClick={() => navigate("/teamone")}
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
              <div className="font-semibold leading-[normal] text-left text-lg">
                View More
              </div>
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-3.5 items-center justify-start mt-[97px] md:px-5">
          <Text
            className="sm:text-[34px] md:text-[40px] text-[44px] text-center text-indigo-900"
            size="txtInterBold44Indigo900"
          >
            Our Reviews
          </Text>
          <Text
            className="text-center text-gray-600 text-xl w-full"
            size="txtInterRegular20Gray600"
          >
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which.
          </Text>
        </div>
        <Slider
          autoPlay
          autoPlayInterval={2000}
          activeIndex={sliderState}
          responsive={{
            0: { items: 1 },
            550: { items: 1 },
            1050: { items: 1 },
          }}
          onSlideChanged={(e) => {
            setsliderState(e?.item);
          }}
          ref={sliderRef}
          className="max-w-[1439px] mt-[49px] mx-auto md:px-5 w-full"
          items={[...Array(3)].map(() => (
            <React.Fragment key={Math.random()}>
              <List
                className="sm:flex-col flex-row gap-[22px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mx-2.5"
                orientation="horizontal"
              >
                <div className="bg-white-A700 flex flex-col gap-2.5 items-start justify-end sm:ml-[0] p-[18px] rounded-[10px] shadow-bs5 w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-start w-[67%] md:w-full">
                    <Img
                      className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                      src="images/img_ellipse23.png"
                      alt="ellipseTwentyThree"
                    />
                    <div className="flex flex-col gap-[7px] items-start justify-start w-3/5">
                      <Text
                        className="md:text-2xl sm:text-[22px] text-[26px] text-indigo-900"
                        size="txtInterSemiBold26"
                      >
                        Hanna Philips
                      </Text>
                      <Img
                        className="h-[17px]"
                        src="images/img_close.svg"
                        alt="close"
                      />
                    </div>
                  </div>
                  <Text
                    className="text-gray-600 text-xl w-full"
                    size="txtInterRegular20Gray600"
                  >
                    <>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and.
                    </>
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-col gap-2.5 items-start justify-end sm:ml-[0] p-[18px] rounded-[10px] shadow-bs5 w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-start w-[69%] md:w-full">
                    <Img
                      className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                      src="images/img_ellipse24.png"
                      alt="ellipseTwentyFour"
                    />
                    <div className="flex flex-col gap-[7px] items-start justify-start w-[62%]">
                      <Text
                        className="md:text-2xl sm:text-[22px] text-[26px] text-indigo-900"
                        size="txtInterSemiBold26"
                      >
                        Davis Bergson
                      </Text>
                      <Img
                        className="h-[17px]"
                        src="images/img_close.svg"
                        alt="close"
                      />
                    </div>
                  </div>
                  <Text
                    className="text-gray-600 text-xl w-full"
                    size="txtInterRegular20Gray600"
                  >
                    <>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and.
                    </>
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-col gap-2.5 items-start justify-end sm:ml-[0] p-[18px] rounded-[10px] shadow-bs5 w-full">
                  <div className="flex flex-row gap-[15px] items-center justify-start w-[67%] md:w-full">
                    <Img
                      className="h-[100px] md:h-auto rounded-[50%] w-[100px]"
                      src="images/img_ellipse24_100x100.png"
                      alt="ellipseTwentyFour"
                    />
                    <div className="flex flex-col gap-[9px] items-start justify-start w-3/5">
                      <Text
                        className="md:text-2xl sm:text-[22px] text-[26px] text-indigo-900"
                        size="txtInterSemiBold26"
                      >
                        Zaire Stanton
                      </Text>
                      <Img
                        className="h-[17px]"
                        src="images/img_close.svg"
                        alt="close"
                      />
                    </div>
                  </div>
                  <Text
                    className="text-gray-600 text-xl w-full"
                    size="txtInterRegular20Gray600"
                  >
                    <>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&#39;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and.
                    </>
                  </Text>
                </div>
              </List>
            </React.Fragment>
          ))}
          renderDotsItem={({ isActive }) => {
            if (isActive) {
              return (
                <div className="inline-block cursor-pointer rounded-[50%] h-2.5 bg-indigo-900 w-2.5" />
              );
            }
            return (
              <div
                className="inline-block cursor-pointer rounded-[50%] h-2.5 bg-blue_gray-100 w-2.5"
                role="button"
                tabIndex={0}
              />
            );
          }}
        />
        <PagerIndicator
          className="flex h-2.5 justify-center mt-[50px] w-[50px]"
          count={3}
          activeCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-indigo-900 w-2.5"
          activeIndex={sliderState}
          inactiveCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-blue_gray-100 w-2.5"
          sliderRef={sliderRef}
          selectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
          unselectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
        />
        <div className="bg-red-500 flex flex-col items-center justify-start mt-[100px] p-[77px] md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between max-w-[1440px] mx-auto w-full">
            <div className="flex flex-col gap-[15px] items-start justify-start">
              <Text
                className="sm:text-2xl md:text-[26px] text-[28px] text-center text-white-A700"
                size="txtInterSemiBold28"
              >
                Subscribe Newsletter
              </Text>
              <Text
                className="ml-0.5 md:ml-[0] text-lg text-white-A700_01 w-full"
                size="txtInterRegular18WhiteA70001"
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has took a galley of type and scrambled
                book.
              </Text>
            </div>
            <div className="flex md:flex-1 sm:flex-col flex-row gap-[7px] items-center justify-between md:mt-0 mt-[65px] w-[42%] md:w-full">
              <Input
                name="group1000003850"
                placeholder="Your Email Address....."
                className="leading-[normal] p-0 placeholder:text-gray-600 text-left text-sm w-full"
                wrapClassName="sm:w-full"
                type="email"
              ></Input>
              <Button
                className="common-pointer !text-red-500 cursor-pointer font-semibold leading-[normal] min-w-[130px] text-center text-sm"
                onClick={() => navigate("/contactus")}
                shape="round"
                color="white_A700"
                size="md"
                variant="fill"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <Footer className="bg-indigo-900 flex items-center justify-center md:px-5 w-full" />
      </div>
    </>
  );
};

export default Home1Page;
