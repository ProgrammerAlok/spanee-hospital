import { Text } from "components";

export const Heading1 = ({ 
    className, 
    heading, 
    title:{ title1, title2 }, 
    as 
}) => {
  
  const Component = as || 'div';

  return (
    <Component className={`flex flex-col w-full`}>
        <Text
            className={`text-indigo-900 font-inter md:leading-[24.2px] md:font-[700] ${className}`}
            size="txtInterMedium24"
        >{heading}</Text>
        <Text
            className={`mt-1 sm:text-[1.2rem] md:text-[2.2rem] text-[2.8rem] text-blue_gray-900 ${className}`}
            size="txtInterBold65"
        >{title1} <br /> {title2}</Text>
    </Component>
  );
};
