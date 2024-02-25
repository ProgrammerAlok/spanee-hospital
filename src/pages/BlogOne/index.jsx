import { useEffect } from "react";
import MainLayout from "layout/MainLayout";
import { useLocation, useNavigate } from "react-router-dom";
import { BannerPrimary } from "components/Banner";
import { Img, Text } from "components";

const BlogOnePage = () => {
  const { state: blog } = useLocation();
  const navigate = useNavigate();

  const List = [
    `Orthopedics`,
    `Dental`,
    `Orthopedics`,
    `Neurosciences`,
    `Cancer Care`,
    `Gastroenterology`,
    `Medicine`,
    `Cardiology`,
    `Surgery`,
    `Physiotherapy`,
    `Dermatology`,
  ];

  useEffect(() => {
    if (!blog) {
      return navigate("/blog");
    }
  }, []);

  return (
    <MainLayout title={blog?.title}>
      <BannerPrimary text={`Blog`} />
      <div className=" max-w-[1440px] w-[90%] mx-auto py-10 md:py-4 ">
        <div className="flex md:flex-col justify-start items-center gap-8 md:gap-4">
          <div className=" w-[60%] md:w-full ">
            <Img src="images/img_rectangle57_3.png" alt="avatar" />
          </div>
          <div className=" w-[40%] md:w-full  ">
            <div className=" w-full flex flex-col gap-4 ">
              <div className="w-full flex justify-center items-center bg-gray-300 p-1">
                <input
                  className="bg-gray-300 inline-block w-full border-0 font-inter font-[500] text-[24px] md:text-[14px] leading-[29.05px] md:leading-[16.94px] text-[#7F7F7F] "
                  type="text"
                  placeholder="Search"
                />
                <div>
                  <SearchIcon />
                </div>
              </div>
              <div>
                <div className="p-2 font-inter font-[700] text-[26px] md:text-[18px] leading-[31.47px] md:leading-[21.78px] rounded-sm bg-blue-900 text-[#FFF]">
                  Categories
                </div>
                <ul className=" bg-gray-300">
                  {List.map((title, ind) => (
                    <li key={ind}>
                      <div className="flex items-center gap-1 justify-between px-3 py-1 ">
                        <div className="font-inter font-[500] text-[24px] md:text-[14px] leading-[29.05px] md:leading-[16.94px] text-[#7F7F7F] ">
                          {title}
                        </div>
                        <div>
                          <RightArrow />
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div 
          className='flex flex-col gap-4 md:gap-2 py-8 md:py-4'
        >
          <h1
            className=' font-inter font-[700] text-[44px] md:text-[18px] leading-[53.25px] tracking-[2%] md:leading-[21.78px] text-[#1C396A] '
          >{blog?.title}</h1>
          <div className=' md:order-first ' >
            <div className="flex flex-row items-center justify-between w-[40%] md:w-full">
              <div className="flex flex-row gap-2.5 items-center justify-start w-[50%]">
                <Img
                  className="w-[23px] md:w-[15px] aspect-square"
                  src="images/img_frame_indigo_900_20x20.svg"
                  alt="frame"
                />
                <Text
                  className=" text-[#1C396A] font-poppins font-[600] text-[20px] md:text-[12px] leading-[24.2px] md:leading-[18px] "
                  size="txtInterMedium16"
                >
                  03 JAN 2024
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-base text-indigo-900"
                  size="txtInterMedium16Indigo900"
                >
                  <span className="text-[#1C396A] font-poppins font-[600] text-[20px] md:text-[12px] leading-[24.2px] md:leading-[18px]">
                    Upload By :{" "}
                  </span>
                  <span className=" font-inter font-[400] text-[18px] md:text-[12px] leading-[27px] md:leading-[15.52px] text-[#7F7F7F] ">
                    Admin
                  </span>
                </Text>
              </div>
            </div>
          </div>
          <p
            className=' font-inter font-[400] text-[18px] md:text-[12px] leading-[27px] md:leading-[15.52px] text-[#7F7F7F] '
          >
            High blood pressure, also known as hypertension, affects millions worldwide. It is a condition that increases the risk of various health problems such as strokes, heart attacks, and more. While there are several well-known causes of hypertension, such as a poor diet, smoking and lack of exercise, there are other factors that can contribute to high blood pressure. In this post, let's explore some surprising causes of hypertension that you may not know. smoking and lack of exercise, there are other factors that can contribute to high blood pressure. In this post, let's explore some surprising causes of hypertension that you may not know. High blood pressure, also known as hypertension, affects millions worldwide.
          </p>
          <p
            className=' font-inter font-[400] text-[18px] md:text-[12px] leading-[27px] md:leading-[15.52px] text-[#7F7F7F] '
          >
            <span className=' text-[#1C396A] font-poppins font-[600] text-[20px] md:text-[12px] leading-[24.2px] md:leading-[18px] ' >Poor sleep : {" "}</span>
             One of the surprising causes of hypertension is poor sleep. Research shows people who don't get enough quality sleep are at risk of developing hypertension. This is because sleep helps regulate the body's stress hormones, which affect blood pressure. If you're not getting enough restful sleep each night, it could be contributing to your high blood pressure.
          </p>
          <p
            className=' font-inter font-[400] text-[18px] md:text-[12px] leading-[27px] md:leading-[15.52px] text-[#7F7F7F] '
          >
            <span className=' text-[#1C396A] font-poppins font-[600] text-[20px] md:text-[12px] leading-[24.2px] md:leading-[18px] ' >Oral health problems : {" "}</span>
             Poor oral health can contribute to hypertension. Studies show people with gum disease and other oral health conditions are more likely to have high blood pressure; this could be due to inflammation caused by oral bacteria, which can affect blood vessels and increase blood pressure.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

const RightArrow = () => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M4.64068 3.85938C4.42122 4.0791 4.29796 4.37695 4.29796 4.6875C4.29796 4.99805 4.42122 5.2959 4.64068 5.51563L11.6235 12.5L4.63912 19.4844C4.42575 19.7055 4.30777 20.0016 4.31058 20.3088C4.3134 20.6161 4.43678 20.91 4.65416 21.1271C4.87154 21.3443 5.16552 21.4674 5.47278 21.4699C5.78005 21.4725 6.07601 21.3542 6.29693 21.1406L14.1094 13.3281C14.3289 13.1084 14.4521 12.8105 14.4521 12.5C14.4521 12.1895 14.3289 11.8916 14.1094 11.6719L6.29693 3.85938C6.1881 3.75048 6.05888 3.66409 5.91665 3.60515C5.77443 3.54621 5.62198 3.51588 5.46802 3.51588C5.31407 3.51588 5.16162 3.54621 5.01939 3.60515C4.87716 3.66409 4.74794 3.75048 4.63912 3.85938H4.64068Z"
      fill="#7F7F7F"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.4532 3.85938C12.2337 4.0791 12.1105 4.37695 12.1105 4.6875C12.1105 4.99805 12.2337 5.2959 12.4532 5.51563L19.436 12.5L12.4516 19.4844C12.2383 19.7055 12.1203 20.0016 12.1231 20.3088C12.1259 20.6161 12.2493 20.91 12.4667 21.1271C12.684 21.3443 12.978 21.4674 13.2853 21.4699C13.5925 21.4725 13.8885 21.3542 14.1094 21.1406L21.9219 13.3281C22.1414 13.1084 22.2646 12.8105 22.2646 12.5C22.2646 12.1895 22.1414 11.8916 21.9219 11.6719L14.1094 3.85938C14.0006 3.75048 13.8714 3.66409 13.7292 3.60515C13.5869 3.54621 13.4345 3.51588 13.2805 3.51588C13.1266 3.51588 12.9741 3.54621 12.8319 3.60515C12.6897 3.66409 12.5604 3.75048 12.4516 3.85938H12.4532Z"
      fill="#7F7F7F"
    />
  </svg>
);

const SearchIcon = () => (
  <svg
    width="35"
    height="35"
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M14.5837 5.10417C9.35262 5.10417 5.10449 9.3523 5.10449 14.5833C5.10449 19.8144 9.35262 24.0625 14.5837 24.0625C19.8147 24.0625 24.0628 19.8144 24.0628 14.5833C24.0628 9.3523 19.8147 5.10417 14.5837 5.10417ZM14.5837 6.56251C19.0112 6.56251 22.6045 10.1558 22.6045 14.5833C22.6045 19.0108 19.0112 22.6042 14.5837 22.6042C10.1562 22.6042 6.56283 19.0108 6.56283 14.5833C6.56283 10.1558 10.1562 6.56251 14.5837 6.56251Z"
      fill="#1C396A"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M29.6831 28.6504L21.2846 20.2533C21.147 20.1205 20.9628 20.047 20.7717 20.0487C20.5805 20.0503 20.3976 20.127 20.2624 20.2622C20.1272 20.3974 20.0505 20.5803 20.0489 20.7715C20.0472 20.9627 20.1207 21.1469 20.2535 21.2844L28.6506 29.6829C28.7906 29.8036 28.971 29.8669 29.1557 29.8601C29.3404 29.8532 29.5156 29.7768 29.6463 29.6461C29.777 29.5154 29.8534 29.3402 29.8602 29.1555C29.8671 28.9708 29.8038 28.7904 29.6831 28.6504Z"
      fill="#1C396A"
    />
  </svg>
);

export default BlogOnePage;
