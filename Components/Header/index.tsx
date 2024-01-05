"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Container from "../Container";
import LinkScroll from "../Link";
import Form from "../ModalForm";
import Burger from "../Burger";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [open, $open] = useState(false);
  const [activeLng, $activeLng] = useState("РУ");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSelectLng = (lng: string, active: string) => () => {
    if (open) {
      $activeLng(active);
      i18n.changeLanguage(lng);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      $open(false);
    }
  };

  const handleOpen = () => {
    $open(!open);
  };
  return (
    <Container>
      <header className='flex items-center justify-between pt-[65px]'>
        <Image
          src={"/assets/icons/logo.svg"}
          alt='logo'
          width={45}
          height={55}
          className='mobile:w-[31px] mobile:h-[37px]'
        />
        <div className='flex items-center gap-x-20 tablet:gap-x-[33px]'>
          <LinkScroll
            link='startup'
            className='text-white element text-[20px] tablet:hidden font-bold cursor-pointer uppercase'
          >
            {t("ourStartup")}
          </LinkScroll>
          <LinkScroll
            link='services'
            className='text-white element text-[20px] tablet:hidden font-bold cursor-pointer'
          >
            {t("services")}
          </LinkScroll>
          <div className='tablet:hidden'>
            <Form />
          </div>
          <div onClick={handleOpen} className='relative' ref={dropdownRef}>
            <button
              onClick={handleOpen}
              className='rounded-full border text-white border-white w-11 h-11 text-[20px] font-bold cursor-pointer'
            >
              <p onClick={handleOpen} className='text-[20px] font-bold'>
                {activeLng}
              </p>
            </button>
            <div
              className={`absolute rounded-full z-[100] bg-white transition_dropdown top-0 h-[125px] w-11 flex items-center flex-col justify-between pt-3 pb-4 ${
                open ? "dropdown_open" : ""
              }`}
            >
              <p
                className='text-black element text-[20px] font-bold cursor-pointer'
                onClick={handleSelectLng("ru", "РУ")}
              >
                РУ
              </p>
              <p
                className='text-black element text-[20px] z-[10] font-bold cursor-pointer'
                onClick={handleSelectLng("en", "EN")}
              >
                EN
              </p>
            </div>
          </div>
          <Burger />
        </div>
      </header>
    </Container>
  );
};

export default Header;
