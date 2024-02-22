import React from "react";

const List = ({ children, className, as, ...restProps }) => {
  const Component = as || 'div';
  return (
    <Component className={className} {...restProps}>
      {children}
    </Component>
  );
};
export { List };
