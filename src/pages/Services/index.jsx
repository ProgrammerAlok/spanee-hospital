import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, NavBar, Text } from "components";
import Footer from "components/Footer";
import { BannerPrimary } from "components/Banner";
import { Heading1 } from "components/Heading";

const ServicesPage = () => {
  const navigate = useNavigate();

  const Data = [
    {
      logo: `images/img_thumbsup_blue_gray_600_01_80x80.svg`,
      image: `images/img_rectangle2241.png`,
      title: `Immunizations`,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin.`,
      className: `flex-row`,
    },
    {
      logo: `images/img_menu.svg`,
      image: "images/img_rectangle2241_400x703.png",
      title: `Pathology`,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin.`,
      className: `flex-row-reverse`,
    },
    {
      logo: `images/img_thumbsup_80x80.svg`,
      image: "images/img_rectangle2241.png",
      title: `Precise Diagnosis`,
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin.`,
      className: `flex-row`,
    },
  ]

  return (
    <div className="bg-white-A700 flex flex-col font-inter items-center justify-start mx-auto w-full">
      <NavBar />
      <BannerPrimary text={`Services`} />
      <div className=' max-w-[1440px] w-[90%] mx-auto flex flex-col gap-12 py-20 md:py-10 '>
        <Heading1
          heading={{
            text: `Our Services`,
            className: `text-center text-[#FF3E3D]`
          }}
          title={{
            title1: `Provide The Best Treatment For your Child’s Health`,
            className: `text-center w-[60%] md:w-full mx-auto`
          }}
          description={{
            text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printe.`,
            className: `text-center w-[80%] mx-auto md:w-full `
          }}
        />
        {Data.map((obj, key) => <Card key={key} { ...obj } />)}
      </div>
      <Footer />
    </div>
  );
};


const Card = ({
  logo,
  image,
  title,
  description,
  className
}) => {
  return (
<div className={`flex md:flex-col gap-10 items-center justify-center ${className}`}>
          <div className="flex md:flex-1 flex-col items-center justify-start w-[49%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <Img
                className="object-cover rounded-[10px] w-full"
                src={image}
                alt="rectangle2241"
              />
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-center justify-between w-[48%] md:w-full">
            <div className="flex flex-col gap-5 items-start justify-start w-full">
              <div className="flex flex-row gap-5 items-center justify-start w-[42%] md:w-full">
                <Img
                  className="aspect-square w-[80px] md:w-[35px]"
                  src={logo}
                  alt="thumbsup"
                />
                <Text
                  className="md:text-[20px] text-[26px] text-center text-indigo-900 font-[600] md:font-[700] leading-[31.47px] md:leading-[24.2px] font-inter "
                  size="txtInterSemiBold26"
                >
                  {title}
                </Text>
              </div>
              <Text
                className="font-inter font-[400] text-[18px] leading-[30px] md:text-[14px] md:leading-[18px] text-gray-600"
                size="txtInterRegular18"
              >
                <>
                  {description}
                </>
              </Text>
            </div>
          </div>
        </div>
  )
}

export default ServicesPage;
