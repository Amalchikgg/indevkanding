"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Container from "../Container";
import LinkScroll from "../Link";
import Form from "../ModalForm";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <footer className='flex items-center justify-between mb-[65px] mobile:flex-col'>
        <Image
          src={"/assets/icons/logo.svg"}
          alt='logo'
          width={45}
          height={55}
          className='mobile:w-[43px] mobile:h-[51px] mobile:mb-[54px]'
        />
        <ul className='flex items-center gap-x-[80px] tablet:gap-x-[31px] mobile:hidden'>
          <li className='text-[20px] text-white tablet:text-base element tablet:hidden font-bold cursor-pointer'>
            <LinkScroll link='services'>{t("services")}</LinkScroll>
          </li>
          <Form />
          <li className='text-[20px] text-white element tablet:text-base font-bold cursor-pointer'>
            <LinkScroll link='startup'>{t("ourStartup")}</LinkScroll>
          </li>
        </ul>
        <div className='flex items-center gap-x-9 tablet:gap-x-[31px] mobile:gap-x-9'>
          <Image
            src={"/assets/icons/instagram.svg"}
            alt='instagram'
            width={40}
            height={40}
          />
          <Image
            src={"/assets/icons/facebook.svg"}
            alt='facebook'
            width={40}
            height={40}
          />
          <Image
            src={"/assets/icons/telegram.svg"}
            alt='telegram'
            width={40}
            height={40}
          />
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
