import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  className?: string;
}

const Button = ({ children, className, ...props }: Props) => {
  return (
    <button {...props} className={`${className}`}>
      {children}
    </button>
  );
};

export default Button;
