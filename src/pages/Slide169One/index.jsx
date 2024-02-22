import React from "react";

import { Img } from "components";

const Slide169OnePage = () => {
  return (
    <>
      <div className="bg-blue-50_01 flex sm:flex-col md:flex-col flex-row sm:gap-5 md:gap-5 items-start justify-end mx-auto pt-[67px] md:px-10 sm:px-5 px-[67px] w-full">
        <Img
          className="h-[282px] sm:h-auto md:mt-0 mt-16 object-cover w-[39%] md:w-full"
          src="images/img_image2.png"
          alt="imageTwo"
        />
        <div className="md:h-[1081px] h-[1778px] md:mt-0 mt-16 relative w-[61%] md:w-full">
          <div className="absolute bottom-[0] md:h-[1081px] h-[1506px] inset-x-[0] mx-auto w-full">
            <Img
              className="absolute bottom-[0] h-[603px] left-[7%] object-cover w-[22%]"
              src="images/img_divpattern1.png"
              alt="divpatternOne"
            />
            <Img
              className="absolute h-[1081px] inset-x-[0] mx-auto object-cover top-[0] w-[1081px]"
              src="images/img_group17.png"
              alt="groupThree"
            />
          </div>
          <Img
            className="absolute h-[977px] object-cover right-[6%] top-[0] w-[81%]"
            src="images/img_doctorbulkbil.png"
            alt="doctorbulkbil"
          />
        </div>
      </div>
    </>
  );
};

export default Slide169OnePage;
