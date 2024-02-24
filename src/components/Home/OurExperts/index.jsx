import { OurExpertsData } from "Data/our-experts-data";
import { Button, Img, Slider, Text } from "components";
import { BtnPrimary } from "components/Button/BtnPrimary";
import { Heading1 } from "components/Heading";
import React from "react";
import { useNavigate } from "react-router-dom";

const OurExperts = () => {
  const navigate = useNavigate();

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <div className="flex flex-col mt-[103px] max-w-[1440px] w-[90%] ">
      <div className="flex flex-col gap-[50px] items-center justify-start w-full">
        <Heading1
          className={` text-center `}
          heading={{
            text: `Team Membar`,
            className: `text-[#FC0606]`,
          }}
          title={{
            title1: `Our Experts`,
            className: ``,
          }}
          description={{
            text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printe.`,
            className: `w-[80%] mx-auto md:w-full`,
          }}
        />

        {/* slider */}
        <Slider
          autoPlay
          autoPlayInterval={1000}
          activeIndex={sliderState}
          responsive={{
            0: { items: 1.6 },
            550: { items: 2.6 },
            1050: { items: 4.6 },
          }}
          onSlideChanged={(e) => {
            setsliderState(e?.item);
          }}
          ref={sliderRef}
          className="max-w-[1440px] md:px-0 px-5 w-screen ml-auto"
          items={OurExpertsData?.map((obj, key) => (
            <Card key={key} { ...obj } />
          ))}
          gap={10}
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

        <BtnPrimary text={`View More`} />
      </div>
    </div>
  );
};

const Card = ({ avatar, name, specialization }) => {
  return (
    <div className="md:h-[200px] h-[359px] relative w-[95%] ">
      <div className="absolute bg-white-A700 bottom-[0] flex flex-col gap-[11px] inset-x-[0] items-center justify-end mx-auto p-[18px] rounded-[10px] shadow-bs4 w-full">
        <Text
          className="mt-[198px] md:text-[18px] text-[26px] text-indigo-900 md:font-[700] font-[600] md:leading-[21.78px] leading-[31.47px] "
          size="txtInterSemiBold26"
        >{name}</Text>
        <Text className="text-blue-400 font-inter font-[18px] font-[400] md:text-[14px] leading-[21.78px] " size="txtInterRegular18Blue400">
          {specialization}
        </Text>
      </div>
      <Img
        className="absolute h-64 md:h-3/5 inset-x-[0] mx-auto rounded-[50%] top-[0]"
        src={avatar}
        alt="ellipseTwenty"
      />
    </div>
  );
};

export { OurExperts };
