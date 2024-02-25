import { OurNewsBlogData } from "Data/our-news-blog-data";
import { Button, Img, List, Slider, Text } from "components";
import { BtnPrimary } from "components/Button/BtnPrimary";
import { Heading1 } from "components/Heading";
import React from "react";
import { useNavigate } from "react-router-dom";

const OurNewsBlog = () => {
  const navigate = useNavigate();

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1440px] mt-[105px] mx-auto w-[90%] ">
      <Heading1
        className={``}
        heading={{
          text: `Latest From Blog`,
          className: `text-[#FC0606] text-center`,
        }}
        title={{
          title1: `Read our News & Blog`,
          className: `text-center`,
        }}
        description={{
          text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in 
            some form, by injected humour, or randomised words which don't look even slightly believable.`,
          className: `w-[80%] md:w-full mx-auto text-center pt-4 md:pt-2 `,
        }}
      />

      <Slider
        autoPlay
        autoPlayInterval={1}
        animationDuration={1000}
        activeIndex={sliderState}
        responsive={{
          0: { items: 1 },
          550: { items: 2 },
          1050: { items: 3 },
        }}
        onSlideChanged={(e) => {
          setsliderState(e?.item);
        }}
        ref={sliderRef}
        className="w-full"
        items={OurNewsBlogData.map((obj, key) => (
          <NewsBlogCard key={key} {...obj} ind={key} />
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
      <BtnPrimary text={`Read More`} />
    </div>
  );
};

const NewsBlogCard = ({
  avatar,
  date,
  uploadedBy,
  title,
  description,
  ind,
  className,
}) => {
  return (
    <div className={`bg-white-A700 hover:cursor-pointer flex flex-1 flex-col gap-5 items-center justify-start pb-[19px] rounded-[10px] hover:shadow-bs shadow-bs w-[95%] ${className}`}>
      <Img
        className="h-[316px] md:h-auto object-cover rounded-tl-[10px] rounded-tr-[10px] w-full"
        src={avatar}
        alt="rectangleFiftySeven"
      />
      <div className="flex flex-col items-start justify-start w-[92%] md:w-full">
        <div className="flex flex-row items-start justify-between w-full">
          <div className="flex flex-row gap-2.5 items-start justify-start w-[50%]">
            <Img
              className="w-[19px] md:w-[15px] aspect-square"
              src="images/img_frame_indigo_900_20x20.svg"
              alt="frame"
            />
            <Text
              className="text-gray-600 font-[500] text-[16px] md:text-[14px] leading-[19.36px] md:leading-[16.94px] font-inter"
              size="txtInterMedium16"
            >
              {date}
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start">
            <Text
              className="text-base text-indigo-900"
              size="txtInterMedium16Indigo900"
            >
              <span className="text-indigo-900 font-[500] text-[16px] md:text-[14px] leading-[19.36px] md:leading-[16.94px] font-inter ">
                Upload By :{" "}
              </span>
              <span className="text-gray-600 font-inter text-left font-[500] text-[16px] md:text-[14px] leading-[19.36px] md:leading-[16.94px] ">
                {uploadedBy}
              </span>
            </Text>
          </div>
        </div>
        <Text
          className="mt-[15px] md:mt-[6px] text-[26px] md:text-[18px] text-indigo-900 md:font-[700] font-[600] md:leading-[21.78px] leading-[31.47px] tracking-[2%] "
          size="txtInterSemiBold26"
        >
          {title}
        </Text>
        <Text
          className="mt-3.5 text-gray-600 font-[400] font-inter text-[20px] md:text-[12px] md:leading-[14.52px] leading-[24.2px] "
          size="txtInterRegular20Gray600"
        >
          {description}
        </Text>

        {ind === 0 ? (
          <div className="flex flex-row items-center justify-start mt-6 w-[40%] md:w-full">
            <Text
              className="text-red-A700 text-[18px] md:text-[16px] font-[600] leading-[21.78px] md:leading-[19.36px] font-inter "
              size="txtInterSemiBold18RedA700"
            >
              Read More
            </Text>
            <Img
              className="h-[22px] ml-[5px] w-[22px] md:w-[14.67px] md:h-[10.67px] "
              src="images/img_frame_red_a700.svg"
              alt="frame_One"
            />
          </div>
        ) : (
          <Text
            className="mt-6 text-indigo-900 text-[18px] md:text-[16px] font-[600] leading-[21.78px] md:leading-[19.36px] font-inter "
            size="txtInterSemiBold18Indigo900"
          >
            Read More
          </Text>
        )}
      </div>
    </div>
  );
};

export { OurNewsBlog, NewsBlogCard };
