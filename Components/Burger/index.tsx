"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import LinkScroll from "../Link";
import Form from "../ModalForm";

const Burger = () => {
  const [active, $active] = useState(false);
  const { t } = useTranslation();

  const handleActive = () => {
    $active(!active);
  };
  return (
    <>
      <Image
        src={"/assets/icons/burder.svg"}
        alt='hamburger'
        width={50}
        height={19}
        className='hidden tablet:block'
        onClick={handleActive}
      />
      <div className={`menu ${active && "active"} h-[100vh]`}>
        <div className='flex justify-end p-10 flex-col items-end'>
          <button type='submit' className='mb-[72px] mobile:mb-[111px]'>
            <Image
              src={"/assets/icons/close.svg"}
              alt='close'
              width={35}
              height={35}
              className=''
              onClick={handleActive}
            />
          </button>
          <LinkScroll
            link='startup'
            onClick={handleActive}
            className='text-[48px] font-bold text-white mb-10 leading-[1.1] mobile:text-[24px]'
          >
            {t("ourStartup")}
          </LinkScroll>
          <LinkScroll
            link='services'
            onClick={handleActive}
            className='text-[48px] text-white font-bold mb-12 leading-[1.1] mobile:text-[24px]'
          >
            {t("services")}
          </LinkScroll>
          <Form className='!text-[48px] !font-bold !mb-[117px] mobile:!text-[24px] mobile:!mb-12' />
          <div className='flex items-center gap-x-12 mobile:gap-x-[72px]'>
            <Image
              src={"/assets/icons/instagram.svg"}
              alt='instagram'
              width={64}
              height={64}
              className='mobile:w-10 mobile:h-10'
            />
            <Image
              src={"/assets/icons/facebook.svg"}
              alt='facebook'
              width={64}
              height={64}
              className='mobile:w-10 mobile:h-10'
            />
            <Image
              src={"/assets/icons/telegram.svg"}
              alt='telegram'
              width={64}
              height={64}
              className='mobile:w-10 mobile:h-10'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Burger;
