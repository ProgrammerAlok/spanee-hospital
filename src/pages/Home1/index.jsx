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
import {
  AboutUs,
  OurExperts,
  OurGallery,
  OurNewsBlog,
  OurReviews,
} from "components/Home";
import { OurServices } from "components/Home";
import MainLayout from "layout/MainLayout";

const Home1Page = () => {
  const navigate = useNavigate();

  return (
    <MainLayout title={`Home`}>
      <HomeBanner />
      <AboutUs />
      <OurServices />

      {/* secondary banner */}
      <div className="relative h-[33rem] md:h-[11rem] bg-gray-50_03 mt-[8rem] w-screen ">
        <div className="absolute inset-x-[0] mx-auto top-[0] max-w-[1440px] w-[90%] md:mt-2 ">
          <div className="relative md:h-[175px] h-[1228px] mx-auto">
            <div className="absolute bg-gray-50_03 inset-x-[0] mx-auto top-[0] w-full"></div>
            <div
              className="absolute bg-contain bg-no-repeat flex flex-col inset-[0] md:top-0 items-center justify-center w-[90%] md:w-full mx-auto"
              style={{
                backgroundImage: "url('images/img_group19.svg')",
              }}
            >
              <div className="flex flex-col items-center justify-start mb-[654px] md:mb-6  w-full">
                <Text
                  className="md:text-[20px] text-[44px] font-inter font-[700] leading-[53.25px] md:leading-[30px] text-center text-indigo-900  "
                  size="txtInterBold44Indigo900"
                >
                  <span className=" font-inter font-[700] text-[44px] md:text-[20px] md:leading-[30px] leading-[53.25px] text-center ">
                    Leading The Way In{" "}
                  </span>
                  <span className="text-red-500">
                    <>
                      Medical
                      <br />
                    </>
                  </span>
                  <span className=" font-inter font-bold"> Excellence</span>
                </Text>
                <Text
                  className="leading-[30px] md:leading-[18px] font-inter font-[400] md:text-[14px] text-[20px] mt-[19px] md:mt-2 text-center text-gray-600 w-[80%] md:w-full "
                  size="txtInterRegular20Gray600"
                >
                  <>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. <span className=' md:hidden ' > Lorem Ipsum has been the
                    industry&#39;s standard dummy text ever since the 1500s,
                    when an unknown printe. </span>
                  </>
                </Text>

                <div className="flex gap-4 md:gap-2 items-center justify-center mt-10 md:mt-2 w-[47%] md:w-full">
                  <Button
                    className="cursor-pointer font-inter font-[600] text-[18px] leading-[21.78px] md:text-[12px] md:leading-[18px] md:font-poppins "
                    shape="round"
                    color="indigo_900"
                    size="md"
                    variant="fill"
                  >
                    Get Free Consultation
                  </Button>
                  <Button
                    className="common-pointer cursor-pointer flex items-center justify-center"
                    onClick={() => navigate("/contactus")}
                    leftIcon={
                      <Img
                        className="h-[22px] md:h-[12px] mb-px mr-2.5"
                        src="images/img_call.svg"
                        alt="call"
                      />
                    }
                    shape="round"
                    color="red_500"
                    size="md"
                    variant="fill"
                  >
                    <div className="cursor-pointer font-inter font-[600] text-[18px] leading-[21.78px] md:text-[12px] md:leading-[18px] md:font-poppins ">
                      +2819 (4631)2930
                    </div>
                  </Button>
                </div>

              </div>
            </div>
          </div>

          <div className="absolute md:hidden flex sm:flex-col flex-row md:gap-10 inset-x-[0] items-start justify-between mx-auto top-[2%] w-[82%]">
            <div className="bg-blue-50 h-[195px] sm:mt-0 mt-14 rotate-[152deg] rounded-[97px] w-[195px]"></div>
            <div className="bg-blue-50 h-[183px] mb-[68px] rotate-[-161deg] rounded-[91px] w-[183px]"></div>
          </div>

        </div>
      </div>

      <OurGallery />
      <OurNewsBlog />
      <OurExperts />
      <OurReviews />

      {/* subscriber news letter */}
      <div className="bg-red-500 mt-16 md:mt-8 w-screen py-[77px] md:py-5">
        <div className="flex md:flex-col md:gap-4 gap-10 items-center justify-between max-w-[1440px] w-[90%] mx-auto ">
          {/* left */}
          <div className="flex flex-col gap-[15px] w-[30%] md:w-full my-auto items-start justify-start">
            <Text
              className="md:text-xl text-2xl md:text-center text-white-A700 md:w-full"
              size="txtInterSemiBold28"
            >
              Subscribe Newsletter
            </Text>
            <Text
              className="ml-0.5 md:ml-[0] text-xl md:text-sm md:text-center text-white-A700_01 w-full"
              size="txtInterRegular18WhiteA70001"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has took a galley of type and scrambled
              book.
            </Text>
          </div>
          {/* right */}
          <div className="flex gap-2 items-center justify-between md:mt-0 md:w-full w-[40%]">
            <Input
              name="group1000003850"
              placeholder="Your Email Address....."
              className="leading-[normal] p-0 placeholder:text-gray-600 text-left text-sm "
              wrapClassName="w-full"
              type="email"
            ></Input>
            <Button
              className="common-pointer !text-red-500 cursor-pointer font-semibold leading-[normal] min-w-[100px] text-center text-sm"
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
    </MainLayout>
  );
};

export default Home1Page;
