import { useEffect } from 'react';
import MainLayout from "layout/MainLayout";
import { useLocation, useNavigate } from 'react-router-dom'
import { Heading1 } from 'components/Heading';
import { Img } from 'components';
import { BannerPrimary } from 'components/Banner';

const TeamOnePage = () => {
  const { state: doctor } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(!doctor) {
      return navigate('/team');
    }
  }, []);

  console.log(doctor);

  return (
    <MainLayout title={doctor?.name}>
      <BannerPrimary text={`Team`} />
      <div
        className=' max-w-[1440px] w-[90%] mxau py-10 md:py-5 '
      >
        <Heading1 
          heading={{
            text: `Team Membar`,
            className: `text-center text-[#FC0606] `,
          }}
          title={{
            title1: `Our Experts`,
            className: `text-center `,
          }}
          description={{
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam hendrerit magna at .`,
            className: `text-center `,
          }}
        />

        <div className='flex md:flex-col justify-start items-center gap-8 md:gap-2 py-8 md:py-2'>
          <div className='w-[53%] md:w-full'>
            <Img
              className={``}
              src={`images/img_unsplashsakqlf78kvo.png`}
              alt='avatar'
            />
          </div>
          <div className='w-[45%] md:w-full flex flex-col gap-2'>
            <h2
              className='font-inter font-[700] text-[44px] leading-[53.25px] text-[#1C396A] md:text-[20px] md:leading-[24.2px]'
            >{doctor?.name}</h2>
            <h4
              className='font-inter font-[400] text-[18px] leading-[21.78px] text-[#5D95E8] md:text-[14px] md:leading-[16.94px]'
              >{doctor?.specialization}</h4>
            <h4            
            className='font-inter font-[400] text-[16px] leading-[19.36px] text-[#1C396A] md:text-[14px] md:leading-[16.94px]'
            >MD obstetrics and gynecology</h4>
            <p
              className='font-inter font-[400] text-[20px] leading-[30px] text-[#7F7F7F] md:text-[14px] md:leading-[16.94px]'
            >
              MBBS, MSexperience of more than 10 years private practice, good administrative skills, experienced to work efficiently as a part of team.
            </p>
            <p 
              className='font-inter font-[400] text-[20px] leading-[30px] text-[#7F7F7F] md:text-[14px] md:leading-[16.94px] '
            >
              Lorem Ipsum is simply dummy text of the printing  typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 150 when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap in electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>

        <div>
          <p
            className='font-inter font-[400] text-[20px] leading-[30px] text-[#7F7F7F] md:text-[14px] md:leading-[16.94px]'
          >
            High blood pressure, also known as hypertension, affects millions worldwide. It is a condition that increases the risk of various health problems such as strokes, heart attacks, and more. While there are several well-known causes of hypertension, such as a poor diet, smoking and lack of exercise, there are other factors that can contribute to high blood pressure. In this post, let's explore some surprising causes of hypertension that you may not know. smoking and lack of exercise, there are other factors that can contribute to high blood pressure. In this post, let's explore some surprising causes of hypertension that you may not know. High blood pressure, also known as hypertension, affects millions worldwide.
          </p>
        </div>
        
      </div>
    </MainLayout>
  );
};

export default TeamOnePage;
