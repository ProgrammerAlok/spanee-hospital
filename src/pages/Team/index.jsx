import React from "react";
import { Slider } from "components";
import MainLayout from "layout/MainLayout";
import { Heading1 } from "components/Heading";
import { BannerPrimary } from "components/Banner";
import { BtnPrimary } from "components/Button/BtnPrimary";
import { OurExpertsCard } from "components/Home/OurExperts";
import { OurExpertPageData } from "Data/our-experts-data";
import { useNavigate } from 'react-router-dom';

const TeamPage = () => {
  const navigate = useNavigate();

  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);


  return (
    <MainLayout title={`Team`}>      
      <div className='max-w-[1440px] w-[90%] mx-auto flex flex-col justify-center items-center'>
        <BannerPrimary text={`Team`} />
        <div className='md:mt-6 mt-10' />
        <Heading1
          heading={{
            text: `Team Membar`,
            className: ` text-center text-[#FC0606] `,
          }}        
          title={{
            title1: `Our Experts`,
            className: ` text-center `,
          }}
          description={{
            text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printe.`,
            className: ` text-center w-[80%] md:w-full mx-auto `,
          }}
        />

        {/* teams card for grater than md screen */}
        <div className='w-full grid grid-cols-4 gap-y-8 py-8 md:hidden'>
          {OurExpertPageData.map((obj, ind) => 
            <OurExpertsCard key={ind} { ...obj } ind={ind} className={` w-full`} />
          )}          
        </div>

        {/* team card for less than equals md screen */}
        {/* slider */}
        <div>

        </div>
        <Slider
          autoPlay
          autoPlayInterval={1000}
          activeIndex={sliderState}
          responsive={{
            0: { items: 1 },
            550: { items: 2 },
            1050: { items: 4 },
          }}
          onSlideChanged={(e) => {
            setsliderState(e?.item);
          }}
          ref={sliderRef}
          className=" w-full mx-auto mt-5 hidden md:block "
          items={OurExpertPageData.map((obj, key) => (
            <OurExpertsCard key={key} { ...obj } ind={key} className={``} />
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

        <div className=' my-10'>
          <BtnPrimary text={`View More`} />
        </div>
      </div>
    </MainLayout>
  );
};

export default TeamPage;
