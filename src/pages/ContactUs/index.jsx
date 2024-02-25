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
      <BannerPrimary text={`Contact Us`} />
      <div className="max-w-[1440px] w-[90%] mx-auto my-10">
        <Heading1
          heading={{
            text: ``,
            className: ``,
          }}
          title={{
            title1: `Get In Touch`,
            className: `text-[#FF3E3D] text-center`,
          }}
          description={{
            text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.`,
            className: `w-[80%] mx-auto md:w-full text-center`,
          }}
        />
        <div className="flex gap-3 mt-20 w-[80%] mx-auto overflow-hidden ">
          {/* left */}
          <div className="w-[60%]">
            <form
              action="submit"
              className="grid grid-cols-2 gap-4 font-inter font-[400] text-[18px] leading-[21.78px] "
            >
              <input
                type="text"
                className=" rounded-[5px] border px-3 py-4 "
                placeHolder="First Name "
              />
              <input
                className=" rounded-[5px] border px-3 py-4 "
                type="text"
                placeHolder="Last Name "
              />
              <input
                type="email"
                className=" col-span-2 rounded-[5px] border px-3 py-4"
                placeHolder="Email "
              />
              <input
                type="number"
                className=" col-span-2 rounded-[5px] border px-3 py-4"
                placeHolder="Phone Number "
              />
              <textarea
                placeHolder="Message "
                className="col-span-2 resize-none overflow-y-scroll rounded-[5px] border px-3 py-4"
                name=""
                id=""
                cols="30"
                rows="6"
              />
            </form>
            <div>
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
          {/* right */}
          <div className="w-[40%]">
            <div className="flex md:flex-1 flex-col gap-10 items-start justify-start w-full">
              <div className="flex flex-col gap-2 justify-start w-full">
                <div className="flex flex-row gap-5 items-center justify-start w-full">
                  <Button
                    className="flex h-[41px] items-center justify-center rounded-[20px] w-[41px]"
                    color="gray_500_01"
                    size="sm"
                    variant="outline"
                  >
                    <Img
                      className="h-[23px] aspect-square"
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
                <div className="flex flex-row gap-5 items-center justify-start w-full">
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
                <div className="flex flex-row gap-5 items-center justify-start w-full">
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
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactUsPage;
