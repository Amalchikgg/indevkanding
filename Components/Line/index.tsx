import React from "react";

interface Props {
  className?: string;
}

const Line = ({ className }: Props) => {
  return (
    <div className={`flex justify-end `}>
      <div className={`w-[956px] bg-white h-[1px] mb-12 ${className}`} />
    </div>
  );
};

export default Line;
