import { Text } from "components";

export const Heading1 = ({ 
    className, 
    heading, 
    title, 
    as,
    description
}) => {
  
  const Component = as || 'div';

  return (
    <Component className={`flex flex-col w-full`}>
        <Text
            className={`text-indigo-900 font-inter text-[24px] md:text-[14px] font-[500] leading-[36px] md:leading-[21px] ${className} ${heading?.className}`}
            size="txtInterMedium24"
        >{heading?.text}</Text>
        <Text
            className={`mt-1 md:text-[20px] text-[44px] leading-[53.25px] md:leading-[24.2px] text-blue_gray-900 font-inter font-[700] ${className} ${title?.className}`}
            size="txtInterBold65"
        >{title?.title1} <br /> {title?.title2}</Text>
        <Text
          className={`text-gray-600 text-[24px] font-inter font-[400] md:text-[14px] leading-[30px] md:leading-[18px] mt-4 ${description?.className}`}
          size="txtInterRegular20Gray600"
        > {description?.text} </Text>
    </Component>
  );
};
