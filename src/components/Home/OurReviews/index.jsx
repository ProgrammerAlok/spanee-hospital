import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Button, Img, List, PagerIndicator, Slider, Text } from 'components';
import { OurReviewsData } from 'Data/our-review-data';
import { Heading1 } from 'components/Heading';

const OurReviews = () => {
  const navigate = useNavigate();

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);

  return (
    <div className=' max-w-[1440px] w-[90%] flex flex-col justify-center items-center md:gap-6 pt-6 '>
        <div className="flex flex-col gap-3.5 md:gap-0 items-center justify-start  ">          
          <Heading1 
            className={`text-center`}
            title={{
              title1: 'Our Reviews'
            }}
          />
          <Text
            className="text-center text-gray-600 text-xl md:w-full w-[70%] font-inter md:font-[400] md:text-[14px] md:leading-[18px] "
            size="txtInterRegular20Gray600"
          >
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which.
          </Text>
        </div>
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
          items={OurReviewsData.map((obj, key) => <Card key={key} {...obj} />)}
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
          className="flex h-2.5 justify-center mt-[50px] w-[50px] md:hidden"
          count={3}
          activeCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-indigo-900 w-2.5"
          activeIndex={sliderState}
          inactiveCss="inline-block cursor-pointer rounded-[50%] h-2.5 bg-blue_gray-100 w-2.5"
          sliderRef={sliderRef}
          selectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
          unselectedWrapperCss="inline-block md:ml-[0] mx-[5.00px] sm:ml-[0]"
        />

        {/* view more button */}
        <Button
          className="common-pointer cursor-pointer h-[32px] items-center justify-center w-[120px] md:flex hidden px-[15px] py-[7px] "
          onClick={() => navigate("/teamone")}
          rightIcon={
            <Img
              className="h-[14px] mb-px ml-2.5"
              src="images/img_frame.svg"
              alt="Frame"
            />
          }
          shape="round"
          color="red_500"
          size="md"
          variant="fill"
        >
          <div className="font-semibold font-poppins text-[12px] leading-[18px] ">
            View More
          </div>
        </Button>
    </div>
  )
}

const Card = ({ customerName, avatar, review }) => {
  return (
    <div className="bg-white-A700 flex flex-col gap-2.5 items-start justify-end sm:ml-[0] rounded-[10px] shadow-bs5 w-[95%] p-4">
      <div className="flex flex-row gap-[15px] items-center justify-start w-full md:w-full md:ml-2 ">
        <Img
          className="h-[100px] md:h-auto rounded-[50%] w-[6.2rem] md:w-14"
          src={avatar}
          alt="ellipseTwentyFour"
        />
        <div className="flex flex-col gap-[7px] items-start justify-start ">
          <Text
            className="md:text-[20] sm:text-[18] text-2xl text-indigo-900 font-inter font-[700] text-[18px] leading-[21.78px] "
            size="txtInterSemiBold26"
          >
            {customerName}
          </Text>
          <Img
            className="h-[17px] md:h-3"
            src="images/img_close.svg"
            alt="close"
          />
        </div>
      </div>
      <Text
        className="text-gray-600 w-full font-inter md:font-[400] md:text-[14px] md:leading-[18px] "
        size="txtInterRegular20Gray600"
      >
        <>
          {review}
        </>
      </Text>
    </div>
  );
}

export {
  OurReviews
}