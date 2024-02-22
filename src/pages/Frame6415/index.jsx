import React from "react";

import { Img } from "components";

const Frame6415Page = () => {
  return (
    <>
      <div className="bg-blue_gray-700_01 flex flex-col mx-auto relative w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-auto mx-auto w-full">
          <div className="h-[834px] md:px-5 relative w-[65%] md:w-full">
            <Img
              className="absolute h-[724px] left-[0] object-cover top-[0] w-[87%]"
              src="images/img_ellipse34.png"
              alt="ellipseThirtyFour"
            />
            <Img
              className="absolute h-[783px] left-[0] object-cover top-[0] w-[94%]"
              src="images/img_ellipse35.png"
              alt="ellipseThirtyFive"
            />
            <Img
              className="absolute h-[834px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_ellipse36.png"
              alt="ellipseThirtySix"
            />
          </div>
          <div className="h-80 md:mt-0 mt-[493px] md:px-5 relative w-[12%] md:w-full">
            <Img
              className="absolute h-[246px] inset-y-[0] my-auto object-cover right-[0] w-[76%]"
              src="images/img_ellipse37.png"
              alt="ellipseThirtySeven"
            />
            <Img
              className="absolute h-[286px] inset-y-[0] my-auto object-cover right-[0] w-[89%]"
              src="images/img_ellipse38.png"
              alt="ellipseThirtyEight"
            />
            <Img
              className="absolute h-80 inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_ellipse39.png"
              alt="ellipseThirtyNine"
            />
          </div>
        </div>
        <div className="flex sm:flex-col flex-row md:gap-10 gap-[73px] items-start justify-start max-w-[1113px] mt-[-834px] mx-auto md:px-5 w-full z-[1]">
          <Img
            className="sm:flex-1 h-[2590px] md:h-auto sm:mt-0 mt-[101px] object-cover w-[59%] sm:w-full"
            src="images/img_image3.png"
            alt="imageThree"
          />
          <Img
            className="sm:flex-1 h-[769px] md:h-auto object-cover w-[35%] sm:w-full"
            src="images/img_image4.png"
            alt="imageFour"
          />
        </div>
      </div>
    </>
  );
};

export default Frame6415Page;
