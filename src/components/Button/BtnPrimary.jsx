import { Button, Img } from "components";

export const BtnPrimary = ({ text }) => {
  return (
    <Button
      className="common-pointer cursor-pointer flex h-[50px] md:h-[32px] items-center justify-center md:w-[130px] md:px-[15px] md:py-[7px]"
      onClick={() => navigate("/teamone")}
      rightIcon={
        <Img
          className="h-[22px] md:h-[14px] mb-px ml-2.5"
          src="images/img_frame.svg"
          alt="Frame"
        />
      }
      shape="round"
      color="red_500"
      size="md"
      variant="fill"
    >
      <div className="font-semibold font-poppins text-[18px] md:text-[12px] leading-[21.78px] md:leading-[18px]">
        {text}
      </div>
    </Button>
  );
};
