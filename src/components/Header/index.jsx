import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <Img
          className="h-14 sm:h-auto ml-60 md:ml-[0] md:mt-0 my-[22px] object-cover w-[8%] md:w-full"
          src="images/img_image2.png"
          alt="imageTwo"
        />
        <ul className="flex md:flex-col flex-row gap-10 md:hidden items-start justify-start mb-9 md:ml-[0] ml-[249px] md:mt-0 mt-[39px] w-auto md:w-full common-row-list">
          <li>
            <Text
              className="common-pointer hover:font-bold text-gray-600 text-lg hover:text-red-A700"
              size="txtInterMedium18"
              onClick={() => navigate("/")}
            >
              Home
            </Text>
          </li>
          <li>
            <Text
              className="common-pointer hover:font-bold text-gray-600 text-lg hover:text-red-A700"
              size="txtInterMedium18"
              onClick={() => navigate("/aboutus")}
            >
              About Us{" "}
            </Text>
          </li>
          <li>
            <Text
              className="common-pointer hover:font-bold text-gray-600 text-lg hover:text-red-A700"
              size="txtInterMedium18"
              onClick={() => navigate("/services")}
            >
              Services
            </Text>
          </li>
          <li>
            <Text
              className="hover:font-bold text-lg text-red-A700"
              size="txtInterBold18"
            >
              Gallery{" "}
            </Text>
          </li>
          <li>
            <Text
              className="common-pointer hover:font-bold text-gray-600 text-lg hover:text-red-A700"
              size="txtInterMedium18"
              onClick={() => navigate("/blog")}
            >
              Blog{" "}
            </Text>
          </li>
          <li>
            <Text
              className="common-pointer hover:font-bold text-gray-600 text-lg hover:text-red-A700"
              size="txtInterMedium18"
              onClick={() => navigate("/teamone")}
            >
              Team{" "}
            </Text>
          </li>
          <li>
            <Text
              className="common-pointer hover:font-bold text-gray-600 text-lg hover:text-red-A700"
              size="txtInterMedium18"
              onClick={() => navigate("/contactus")}
            >
              Contacts Us{" "}
            </Text>
          </li>
        </ul>
        <Button
          className="cursor-pointer font-inter font-semibold leading-[normal] min-w-[177px] ml-44 md:ml-[0] mr-60 md:mt-0 my-6 rounded-[14px] text-base text-center"
          color="red_500"
          size="md"
          variant="fill"
        >
          Free Cansultation
        </Button>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
