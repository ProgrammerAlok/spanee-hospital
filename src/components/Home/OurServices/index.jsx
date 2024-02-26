import { OurServicesData } from "Data/our-services-data";
import { Button, Img, List, Slider, Text } from "components";
import { BtnPrimary } from "components/Button/BtnPrimary";
import { Heading1 } from "components/Heading";
import React from "react";
import { useNavigate } from "react-router-dom";

const OurServices = () => {
  const navigate = useNavigate();

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  return (
    <div className="sm:h-[0px] h-[557px] md:h-[963px] max-w-[1440px] mt-[99px] md:mt-[270px] md:mb-20 mx-auto md:px-5 relative w-[90%]">
      <div className="absolute flex flex-col gap-[50px] h-full inset-[0] items-center justify-center m-auto w-full">
        <div className="flex flex-col items-center justify-start">
          <Heading1
            heading={{
              text: `Our Services`,
              className: `text-center text-[#FF3E3D] `,
            }}
            title={{
              title1: `Provide The Best Treatment For your`,
              title2: `Child’s Health`,
              className: `text-center`,
            }}
            description={{
              text: `Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&#39;s standard dummy
              text ever since the 1500s, when an unknown printe.`,
              className: ` text-center md:w-full w-[80%] mx-auto mt-2 `
            }}
          />
        </div>

        {/* slider */}
        <Slider
          autoPlay
          autoPlayInterval={1000}
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
          className="max-w-[1440px] w-full mt-8 md:mt-0"
          items={OurServicesData.map((obj, key) => (
            <Card key={key} {...obj} />
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

        <div className='hidden md:block'>
          <BtnPrimary 
            text={'Read More'} 
            className={``}
            handleOnClick={()=>{}}  
          />
        </div>
      </div>
    </div>
  );
};

const Card = ({ logo, title, description, colorScheme }) => {
  return (
    <div
      className={`${
        colorScheme === "primary" ? "bg-white-A700" : "bg-indigo-900"
      } flex flex-1 flex-col items-center justify-start p-5 rounded-[10px] shadow-bs3 w-[95%]`}
    >
      <div className="flex flex-col items-start justify-start w-full">
        <div className="flex flex-row gap-[15px] items-center justify-start w-3/4 md:w-full">
          <Img className=" w-20 md:w-10 aspect-square" src={logo} alt="thumbsup" />
          <Text
            className={`md:text-[18px] text-[26px] font-[600] md:font-[700] leading-[31.47px] md:leading-[21.78px] font-inter text-center ${colorScheme==='primary'?'text-indigo-900':'text-white-A700'}`}
            size="txtInterSemiBold26"
          >
            {title}
          </Text>
        </div>
        <Text
          className={`mt-5 ${
            colorScheme === "primary" ? "text-gray-600" : "text-white-A700"
          } text-xl w-full font-[400] text-[20px] md:text-[12px] leading-[24.2px] md:leading-[18px] font-inter `}
          size="txtInterRegular20Gray600"
        >
          {description}
        </Text>
        {colorScheme === "primary" ? (
          <Button
            className="border border-indigo-900 border-solid mt-[29px] common-pointer cursor-pointer flex h-[50px] md:h-[32px] items-center justify-center md:w-[130px] md:px-[15px] md:py-[7px]"
            rightIcon={
              <Img
                className="h-[22px] md:h-[14px] mb-px ml-2.5"
                src="images/img_frame_indigo_900.svg"
                alt="Frame"
              />
            }
            shape="round"
            color="white_A700"
            size="md"
            variant="fill"
          >
            <div className="font-semibold font-poppins text-[18px] md:text-[12px] leading-[21.78px] md:leading-[18px]">
              Read More
            </div>
          </Button>
        ) : (
          <Button
            className="common-pointer border border-red-500 border-solid mt-[29px] common-pointer cursor-pointer flex h-[50px] md:h-[32px] items-center justify-center md:w-[130px] md:px-[15px] md:py-[7px]"
            onClick={() => navigate("/services")}
            rightIcon={
              <Img
                className="h-[22px] md:h-[14px] mb-px ml-2.5"
                src="images/img_frame.svg"
                alt="Frame"
              />
            }
            shape="round"
            color="red_500"
            size="md"
            variant="fill"
          >
            <div className="!text-gray-50 font-semibold font-poppins text-[18px] md:text-[12px] leading-[21.78px] md:leading-[18px]">
              Read More
            </div>
          </Button>
        )}
      </div>
    </div>
  );
};

export { OurServices };
