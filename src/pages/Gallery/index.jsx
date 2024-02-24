import React from "react";
import { Button, Img, Line, Text } from "components";
import Header from "components/Header";
import MainLayout from "layout/MainLayout";
import { BannerPrimary } from "components/Banner";
import { Heading1 } from "components/Heading";

const GalleryPage = () => {
  return (
    <MainLayout>
      <BannerPrimary text={`Gallery`} />
      <div className="our-gallery-container max-w-[1440px] w-[90%] mx-auto py-20 md:py-10 ">
        <Heading1
          className={``}
          title={{
            title1: "Our Gallery",
            className: "text-center",
          }}
          description={{
            text: "Lorem ipsum dolor sit amet, consectetur elit. will Pellentesque efficitur ac quam in congue.",
            className: "text-center w-[80%] md:w-full mx-auto ",
          }}
        />
        <div className="grid grid-cols-4 md:grid-cols-2 gap-4 md:gap-2 mt-10 md:mt-4">
          <div className=' relative rounded-[10px] col-span-2 row-span-2 md:col-span-[1/3]  '>
            <Img
              className=" first-letter:md:h-auto object-cover "
              src="images/img_rectangle45.png"
              alt="rectangleFortyFive"
            />
            <div className="absolute bg-gradient1  flex flex-col inset-0 items-center justify-center m-auto rounded-[10px]">
              <Img
                className="mt-[9px] w-[10%] aspect-square"
                src="images/img_grid.svg"
                alt="grid"
              />
            </div>
          </div>
          <Img
            className=" md:h-auto object-cover rounded-[10px]"
            src="images/img_rectangle56.png"
            alt="rectangleFiftySix"
          />
          <Img
            className=" md:h-auto object-cover rounded-[10px] md:hidden "
            src="images/img_rectangle48.png"
            alt="rectangleFortyEight"
          />
          <Img
            className=" md:h-auto object-cover rounded-[10px] md:hidden "
            src="images/img_rectangle57.png"
            alt="rectangleFiftySeven"
          />
          <Img
            className=" md:h-auto object-cover rounded-[10px] md:hidden "
            src="images/img_rectangle54.png"
            alt="rectangleFiftyFour"
          />
          <Img
            className="md:h-auto object-cover rounded-[10px]"
            src="images/img_rectangle59.png"
            alt="rectangleFiftyNine"
          />
          <Img
            className=" md:h-auto object-cover rounded-[10px]"
            src="images/img_rectangle60.png"
            alt="rectangleSixty"
          />
          <Img
            className=" md:h-auto object-cover rounded-[10px]"
            src="images/img_rectangle58.png"
            alt="rectangleFiftyEight"
          />
          <Img
            className=" md:h-auto object-cover rounded-[10px]"
            src="images/img_rectangle55.png"
            alt="rectangleFiftyFive"
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default GalleryPage;
