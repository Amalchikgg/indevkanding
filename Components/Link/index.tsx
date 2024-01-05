"use client";
import React, { ReactNode } from "react";
import { Link } from "react-scroll";

interface Props {
  children: ReactNode;
  link: string;
  className?: string;
  onClick?: (() => void) & React.MouseEventHandler<HTMLButtonElement>;
}

const LinkScroll = ({ children, link, className, onClick }: Props) => {
  return (
    <Link
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      to={link}
      className={className}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default LinkScroll;
