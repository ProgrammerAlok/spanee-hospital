import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";
import BlogStack from "components/BlogStack";
import Footer from "components/Footer";
import Header1 from "components/Header1";
import MainLayout from "layout/MainLayout";
import { Heading1 } from "components/Heading";
import { NewsBlogCard } from "components/Home/OurNewsBlog";
import { OurNewsBlogPageData } from "Data/our-news-blog-data";
import { BannerPrimary } from "components/Banner";
import { BtnPrimary } from "components/Button/BtnPrimary";

const BlogPage = () => {
  const navigate = useNavigate();

  return (
    <MainLayout title={`Blog`} className={``}>
      <div className='mx-auto'>
        <BannerPrimary text={`Blog`} />
        <div className=" mt-10"></div>
        <Heading1 
          className={``}
          heading={{
            text: `Latest From Blog`,
            className: `text-center text-[#FC0606]`,
          }}
          title={{
            title1: `Read our News & Blog`,
            className: `text-center`,
          }}     
          description={{
            text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
            className: `text-center w-[80%] md:w-full mx-auto`
          }} 
        />

        <div className=' grid grid-cols-3 md:grid-cols-1 items-center justify-between max-w-[1440px] w-[90%] mx-auto my-8 ' >
          {OurNewsBlogPageData.map((obj, ind) => 
            <NewsBlogCard key={ind} { ...obj } className={`w-full my-4  ${ind>=3?'md:hidden':''}`} />
          )}      
        </div>
        
        <div className=' flex flex-col justify-center items-center mb-10'>
          <BtnPrimary 
            className={`md:flex hidden`}
            text={`Load More`}
          />          
        </div>
      </div>
    </MainLayout>
  );
};



export default BlogPage;
