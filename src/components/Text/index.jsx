import React from "react";

const sizeClasses = {
  txtInterRegular18Gray500: "font-inter font-normal",
  txtInterBold26Indigo900: "font-bold font-inter",
  txtInterRegular20: "font-inter font-normal",
  txtInterBold26WhiteA700: "font-bold font-inter",
  txtInterBold26: "font-bold font-inter",
  txtInterMedium24: "font-inter font-medium",
  txtInterSemiBold26: "font-inter font-semibold",
  txtInterMedium22: "font-inter font-medium",
  txtInterBold65: "font-bold font-inter",
  txtInterBold44: "font-bold font-inter",
  txtInterSemiBold28: "font-inter font-semibold",
  txtInterBold24: "font-bold font-inter",
  txtInterBold62: "font-bold font-inter",
  txtInterSemiBold18Indigo900: "font-inter font-semibold",
  txtInterRegular18Gray50001: "font-inter font-normal",
  txtInterMedium16Indigo900: "font-inter font-medium",
  txtInterBold20: "font-bold font-inter",
  txtInterMedium24RedA700: "font-inter font-medium",
  txtInterMedium30: "font-inter font-medium",
  txtInterExtraBold32: "font-extrabold font-inter",
  txtInterExtraBold54: "font-extrabold font-inter",
  txtInterBold44Indigo900: "font-bold font-inter",
  txtInterRegular24: "font-inter font-normal",
  txtInterBold44Red500: "font-bold font-inter",
  txtInterMedium18: "font-inter font-medium",
  txtInterBold18: "font-bold font-inter",
  txtInterSemiBold18RedA700: "font-inter font-semibold",
  txtPoppinsRegular18: "font-normal font-poppins",
  txtInterSemiBold18: "font-inter font-semibold",
  txtInterMedium16: "font-inter font-medium",
  txtInterBold34: "font-bold font-inter",
  txtPoppinsRegular16: "font-normal font-poppins",
  txtInterRegular18WhiteA70001: "font-inter font-normal",
  txtInterRegular20Gray60099: "font-inter font-normal",
  txtInterRegular18Blue400: "font-inter font-normal",
  txtLatoMedium18: "font-lato font-medium",
  txtInterBold44Indigo90002: "font-bold font-inter",
  txtInterBold30: "font-bold font-inter",
  txtInterSemiBold26WhiteA700: "font-inter font-semibold",
  txtInterMedium20: "font-inter font-medium",
  txtInterMedium20Indigo900: "font-inter font-medium",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterRegular18WhiteA700: "font-inter font-normal",
  txtPoppinsRegular20: "font-normal font-poppins",
  txtInterRegular16: "font-inter font-normal",
  txtInterRegular20Gray600: "font-inter font-normal",
  txtInterRegular18: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
