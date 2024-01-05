import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Container = ({ children }: Props) => {
  return (
    <div className='max-w-[1440px] w-full m-[0px_auto] px-[70px] tablet:px-[40px] mobile:px-[15px]'>
      {children}
    </div>
  );
};

export default Container;
