import { Button, Img, Text } from "components";

const HomeBanner = () => {
  return (
    <div className="banner-container-wrapper relative bg-indigo-900 w-full py-[10rem] md:pt-2 md:pb-0">
      {/* container */}
      <div className="banner-container relative grid grid-cols-2 sm:grid-cols-1 gap-4 max-w-[1440px] w-[90%] mx-auto">
        {/* left */}
        <div className="flex flex-col h-max items-start justify-start my-auto w-[90%] sm:w-full">
          <Text
            className="leading-[140.00%] md:text-3xl text-5xl text-white-A700 w-full"
            size="txtInterBold65"
          >
            Dedicated to Hope, Healing & Recovery
          </Text>
          <Text
            className="leading-6 mt-[15px] text-white-A700 text-[1rem] md:text-xs w-[88%] sm:w-full"
            size="txtInterRegular20"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a
            grav ida sapien. Suspendisse porttitor lectus at mauris convallis
            pellen tesque. Aliquam in nisi .
          </Text>
          <Button
            className="common-pointer border border-red-500 border-solid cursor-pointer flex h-[3rem] md:h-[2rem] items-center justify-center min-w-[16rem] md:min-w-[8rem] mt-[25px]"
            onClick={() => navigate("/services")}
            rightIcon={
              <Img
                className="h-[1.4rem] mb-px ml-2.5"
                src="images/img_frame.svg"
                alt="Frame"
              />
            }
            shape="round"
            color="red_500"
            size="sm"
            variant="fill"
          >
            <div className="!text-gray-50 font-semibold leading-[normal] text-left text-lg md:text-sm">
              Meet Our Specialist
            </div>
          </Button>
        </div>
        {/* right */}
        <div className="relative h-[16.5rem]">
          <div
            className="absolute bg-cover bg-no-repeat flex flex-col  inset-y-[0] items-end justify-start my-auto  w-[100%] h-fit mt-auto sm:mt-0"
            style={{ backgroundImage: "url('images/img_group17.png')" }}
          >
            <Img
              className="w-[70%] object-cover mx-auto"
              src="images/img_doctorbulkbil.png"
              alt="doctorbulkbil"
            />
          </div>
        </div>
      </div>
        <LGCard />
        <SMCard />
    </div>
  );
};

const LGCard = () => {
  return (
    <div
      className="absolute bg-cover bg-no-repeat bottom-0 right-0 flex flex-col h-[17%] items-start justify-end pt-[50px] md:px-10 sm:px-5 px-[55px] w-[60vw] sm:w-[150vw] sm:hidden"
      style={{ backgroundImage: "url('images/img_group18.svg')" }}
    >
      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[10%] gap-10 h-full my-auto sm:w-screen">
        {/* RP */}
        <div className="flex flex-row gap-4 items-center justify-center max-w-[20rem]">
          <div className="bg-amber-600 flex flex-col w-[70px] aspect-square items-center justify-center p-4 rounded-[10px]">
            <Img
              className="w-[40px] aspect-square"
              src="images/img_frame_gray_100.svg"
              alt="frame"
            />
          </div>
          <div className="flex flex-col items-center justify-start">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="sm:text-[28px] text-xl text-indigo-900_01 tracking-[0.64px]"
                size="txtInterExtraBold32"
              >
                262K+
              </Text>
              <Text
                className="text-blue_gray-700 text-lg tracking-[0.40px]"
                size="txtInterSemiBold20"
              >
                Recovered Patients
              </Text>
            </div>
          </div>
        </div>

        {/* SR */}
        <div className="flex gap-0 items-center justify-between">
          <div className=" w-[32%] aspect-square">
            <Img
              className=" w-full h-full"
              src="images/img_info.svg"
              alt="info"
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <Text
              className="md:text-3xl sm:text-[28px] text-xl text-indigo-900_01 tracking-[0.64px]"
              size="txtInterExtraBold32"
            >
              94%
            </Text>
            <Text
              className="text-blue_gray-700 text-center text-sm tracking-[0.40px]"
              size="txtInterSemiBold20"
            >
              Satisfactian Rate
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

const SMCard = () => {
  return (
    <div
      className="hidden md:flex justify-center items-center py-4 bg-white-A700_01"
    >
      <div className="flex gap-3 items-center justify-between w-[90%] my-auto">
        {/* RP */}
        <div className="flex flex-row gap-4 items-center justify-center">
          <div className="bg-amber-600 flex flex-col w-[30%] aspect-square items-center justify-center p-2 rounded-[.5rem]">
            <Img
              className="w-full h-full"
              src="images/img_frame_gray_100.svg"
              alt="frame"
            />
          </div>
          <div className="flex items-center justify-start">
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="text-xs text-indigo-900_01 tracking-[0.64px]"
                size="txtInterExtraBold32"
              >
                262K+
              </Text>
              <Text
                className="text-blue_gray-700 text-[.6rem] tracking-[0.40px]"
                size="txtInterSemiBold20"
              >
                Recovered Patients
              </Text>
            </div>
          </div>
        </div>

        {/* SR */}
        <div className="flex items-center justify-start gap-3">
          <div className="w-[30%] aspect-square">
            <Img
              className=" w-full h-full"
              src="images/img_info.svg"
              alt="info"
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <Text
              className="text-xs text-indigo-900_01 tracking-[0.64px]"
              size="txtInterExtraBold32"
            >
              94%
            </Text>
            <Text
              className="text-blue_gray-700 text-center text-[.6rem] tracking-[0.40px]"
              size="txtInterSemiBold20"
            >
              Satisfactian Rate
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

const d = () => {
  return (
    <div className="md:h-[800px] h-[10%] md:px-5 relative w-full">
      <div className="md:h-[800px] h-[825px] m-auto w-full">
        <div className="absolute bg-indigo-900 h-[800px] inset-[0] justify-center m-auto w-full"></div>
        <div
          className="absolute bg-cover bg-no-repeat flex flex-col md:h-auto h-max inset-y-[0] items-end justify-start my-auto p-[27px] sm:px-5 right-[9%] w-[792px]"
          style={{ backgroundImage: "url('images/img_group17.png')" }}
        >
          <Img
            className="h-[595px] md:h-auto mb-[143px] mr-[79px] object-cover w-[73%]"
            src="images/img_doctorbulkbil.png"
            alt="doctorbulkbil"
          />
        </div>
      </div>
      <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[13%] my-auto w-2/5">
        <Text
          className="leading-[140.00%] md:text-5xl text-[65px] text-white-A700 w-full"
          size="txtInterBold65"
        >
          Dedicated to Hope, Healing & Recovery
        </Text>
        <Text
          className="leading-[30.00px] mt-[15px] text-white-A700 text-xl w-[88%] sm:w-full"
          size="txtInterRegular20"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a grav
          ida sapien. Suspendisse porttitor lectus at mauris convallis pellen
          tesque. Aliquam in nisi .
        </Text>
        <Button
          className="common-pointer border border-red-500 border-solid cursor-pointer flex h-[50px] items-center justify-center min-w-[263px] mt-[25px]"
          onClick={() => navigate("/services")}
          rightIcon={
            <Img
              className="h-[22px] mb-px ml-2.5"
              src="images/img_frame.svg"
              alt="Frame"
            />
          }
          shape="round"
          color="red_500"
          size="md"
          variant="fill"
        >
          <div className="!text-gray-50 font-semibold leading-[normal] text-left text-lg">
            Meet Our Specialist
          </div>
        </Button>
      </div>
      <div
        className="absolute bg-cover bg-no-repeat bottom-[3%] flex flex-col h-[130px] items-start justify-end pt-[55px] md:px-10 sm:px-5 px-[55px] right-[0] w-[57%]"
        style={{ backgroundImage: "url('images/img_group18.svg')" }}
      >
        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[83px] w-[73%] md:w-full">
          <div className="flex flex-row gap-[22px] items-center justify-between w-[45%] md:w-full">
            <div className="bg-amber-600 flex flex-col h-[90px] items-center justify-start p-4 rounded-[10px] w-[90px]">
              <Img
                className="h-[58px] w-[58px]"
                src="images/img_frame_gray_100.svg"
                alt="frame"
              />
            </div>
            <div className="flex flex-col items-center justify-start w-[64%]">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="md:text-3xl sm:text-[28px] text-[32px] text-indigo-900_01 tracking-[0.64px]"
                  size="txtInterExtraBold32"
                >
                  262K+
                </Text>
                <Text
                  className="md:ml-[0] ml-[3px] text-blue_gray-700 text-center text-xl tracking-[0.40px]"
                  size="txtInterSemiBold20"
                >
                  Recovered Patients
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-[22px] items-center justify-between w-[41%] md:w-full">
            <Img
              className="h-[90px] w-[90px]"
              src="images/img_info.svg"
              alt="info"
            />
            <div className="flex flex-col items-start justify-start">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-indigo-900_01 tracking-[0.64px]"
                size="txtInterExtraBold32"
              >
                94%
              </Text>
              <Text
                className="text-blue_gray-700 text-center text-xl tracking-[0.40px]"
                size="txtInterSemiBold20"
              >
                Satisfactian Rate
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HomeBanner };
