import React from "react";

interface Props {
  className?: string;
}

export const SquareBracket = ({ className }: Props) => {
  return (
    <p
      className={`${className} text-[128px] font-[100] bracketSquare mobile:text-[64px] mobile:leading-[1]`}
    >
      {"["}
    </p>
  );
};

export const Tilda = ({ className }: Props) => {
  return (
    <p className={`font-[100] text-[128px] tilda mr-[27px] ${className}`}>~</p>
  );
};

export const CurlyBracket = ({ className }: Props) => {
  return (
    <p
      className={`${className} font-[100] text-[128px] curlyBracket tablet:text-[64px] mobile:text-[48px]`}
    >
      {"{"}
    </p>
  );
};

export const Arrow = ({ className }: Props) => {
  return (
    <p
      className={`${className} font-[100] text-[128px] arrow tablet:text-[64px] mobile:text-[58px]`}
    >
      {"<>"}
    </p>
  );
};
