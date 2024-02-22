import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[10px]" };
const variants = {
  fill: {
    white_A700: "bg-white-A700 text-indigo-900",
    indigo_900: "bg-indigo-900 text-white-A700",
    red_500: "bg-red-500 text-white-A700",
  },
  outline: {
    gray_500_01: "border border-gray-500_01 border-solid",
    gray_600: "border border-gray-600 border-solid",
  },
};
const sizes = { xs: "p-[7px]", sm: "p-[11px]", md: "p-[15px]", lg: "p-[19px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "white_A700",
    "indigo_900",
    "red_500",
    "gray_500_01",
    "gray_600",
  ]),
};

export { Button };
