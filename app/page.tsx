"use client";
import "@/Localization/index";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import Container from "@/Components/Container";
import { gilroy } from "./layout";
import { startups } from "@/Constants";
import Button from "@/Components/Button";
import {
  Arrow,
  CurlyBracket,
  SquareBracket,
  Tilda,
} from "@/Components/FigureGradient";
import Line from "@/Components/Line";

export default function Home() {
  const { t } = useTranslation();
  return (
    <main className='mt-[85px] tablet:mt-[59px] mobile:mt-[43px]'>
      <Container>
        <section className='mb-[87px] tablet:mb-[59px] mobile:mb-[35px] relative'>
          <Image
            src={"/assets/images/gradient.png"}
            alt='gradient'
            width={420}
            height={347}
            className='object2 mobile:!w-[300px] mobile:!h-[200px]'
          />
          <div className='flex items-center flex-wrap '>
            <p className='text-white text-[64px] tablet:text-[52px] mobile:text-[30px] font-light leading-[0] tablet:leading-[0.8] mr-1 tablet:mr-4'>
              {t("realize")}
            </p>
            <div className='h-9 w-[352px] p-[4px] bgGradient rounded-full cursor-pointer container tablet:hidden'>
              <div className='bg-black w-full h-full rounded-full px-[2px] pt-[0px] flex relative'>
                <Image
                  src={"/assets/icons/circle.svg"}
                  alt='circle'
                  width={24}
                  height={24}
                  className='absolute circle'
                />
              </div>
            </div>
            <span className='textGradient text-white text-[64px] tablet:mr-4 tablet:text-[52px] mobile:text-[30px] tablet:leading-[1] tablet:-ml-0 -ml-1 font-light leading-[1.1]'>
              <span className='hidden tablet:inline'>O</span>
              {`${t("original")} `}
            </span>
            <span className='textGradient text-white text-[64px] tablet:leading-[1] tablet:text-[52px] mr-4 mobile:text-[30px] tablet:mr-4 font-light leading-[1.1] '>
              {t("dinamic")}
            </span>
            <span className='text-white text-[64px] tablet:text-[52px] mobile:text-[30px] inline font-light leading-[1] relative  tablet:ml-0'>
              {t("itSolutions")}
            </span>
            <span className='text-white text-[64px] mr-4 mobile:mr-1 tablet:text-[52px] mobile:text-[30px] inline font-light leading-[1] relative'>
              {t("buisiness")}{" "}
            </span>{" "}
            <Image
              src={"/assets/images/textImage.png"}
              alt='image'
              width={604}
              height={43}
              className='mr-4 tablet:hidden'
            />
            <span className='text-white overflow-w text-[64px] tablet:text-[52px] mobile:text-[30px] inline font-light leading-[1] relative'>
              {t("teams")}
            </span>
            <p className='text-white text-[64px] tablet:text-[52px] mobile:text-[30px] font-light leading-[1]'>
              {t("teamProfessional")}
            </p>
          </div>
        </section>
      </Container>
      <Image
        src={"/assets/images/mainImage.png"}
        alt='image'
        width={1908}
        height={569}
        className='mb-[106px] tablet:mb-[78px] mobile:mb-12 tablet:!h-[317px] tablet:w-full mobile:!h-[141px]'
      />
      <Container>
        <section
          id='startup'
          className='flex mb-[166px] tablet:mb-[111px] mobile:mb-0'
        >
          <div className='mr-[180px] tablet:hidden'>
            <p
              className={`${gilroy.className} text-white text-[20px] font-semibold mb-[135px]`}
            >
              {t("ourStartup")}
            </p>
            <ul className='list-none cursor-pointer'>
              <li
                className={`${gilroy.className} text-[#C9C9C9] font-medium text-[20px] mb-[22px]`}
              >
                Landing Page
              </li>
              <li
                className={`${gilroy.className} text-[#C9C9C9] font-medium text-[20px] mb-[22px]`}
              >
                Mobile App
              </li>
              <li
                className={`${gilroy.className} text-[#C9C9C9] font-medium text-[20px] mb-[22px]`}
              >
                Websites
              </li>
              <li
                className={`${gilroy.className} text-[#C9C9C9] font-medium text-[20px] mb-[229px]`}
              >
                E-commerce
              </li>
            </ul>
            <div className='flex items-center'>
              <Image
                src={"/assets/icons/arrow.svg"}
                alt='arrow'
                width={80}
                height={0}
                className='mr-[30px]'
              />
              <Image
                src={"/assets/icons/arrow.svg"}
                alt='arrow'
                width={80}
                height={0}
                className='rotate-180'
              />
            </div>
          </div>
          <div className='w-full'>
            <div className='flex items-end justify-between mb-[53px] tablet:mb-12 tablet:relative'>
              <p className='text-[64px] text-white mobile:text-[40px] font-light leading-[0.79]'>
                {t("startDown")} <br />
                <span className='lume'>LUME</span>
              </p>
              <Button className='w-[220px] mobile:w-[166px] mobile:h-[23px] tablet:right-2 tablet:bottom-2 h-20 rounded-full border border-white tablet:absolute tablet:w-[415px] tablet:h-[39px]'>
                <Image
                  src={"/assets/icons/arrowBtn.svg"}
                  alt='arrow'
                  width={163}
                  height={0}
                  className='ml-7 tablet:hidden'
                />
                <Image
                  src={"/assets/icons/mobileLine.svg"}
                  alt='arrow'
                  width={367}
                  height={0}
                  className='hidden tablet:block ml-7 mobile:w-[138px] mobile:ml-3'
                />
              </Button>
            </div>
            <div className='hidden tablet:flex items-center justify-between mb-[45px] mobile:mb-8 mobile:block'>
              <p
                className={`${gilroy.className} text-[20px] text-white font-semibold mobile:mb-[31px]`}
              >
                {t("ourStartup")}
              </p>
              <div className='flex items-center justify-between flex-wrap mobile:gap-y-[26px] gap-x-4'>
                <p className={`${gilroy.className} text-[#C9C9C9] font-medium`}>
                  Landing Page
                </p>
                <p className={`${gilroy.className} text-[#C9C9C9] font-medium`}>
                  Mobile App
                </p>
                <p className={`${gilroy.className} text-[#C9C9C9] font-medium`}>
                  Websites
                </p>
                <p className={`${gilroy.className} text-[#C9C9C9] font-medium`}>
                  E-commerce
                </p>
              </div>
            </div>
            <div className='flex items-center gap-x-[30px] tablet:justify-between tablet:mb-[65px] mobile:flex-col mobile:gap-y-5 mobile:gap-x-0'>
              {startups.map((data, i) => (
                <div key={data.name} className=''>
                  <div className='w-[300px] h-[364px] mb-3 mobile:!w-[324px] mobile:h-[126px] relative'>
                    <Image
                      src={`/assets/icons/startupLogo${i + 1}.svg`}
                      alt='logo'
                      width={40}
                      height={20}
                      className='absolute top-8 right-10'
                    />
                    <Image
                      src={data.image}
                      alt='image'
                      width={300}
                      height={364}
                      className='mb-3 w-full h-full object-cover'
                    />
                  </div>
                  <p
                    className={`${gilroy.className} text-[#C9C9C9] font-semibold mr-3`}
                  >
                    {data.domain}
                  </p>
                  <p
                    className={`${gilroy.className} text-white text-[20px] font-semibold mr-3`}
                  >
                    {data.name}
                  </p>
                </div>
              ))}
            </div>
            <div className='hidden tablet:flex justify-between items-center mobile:hidden'>
              <Image
                src={"/assets/icons/arrow.svg"}
                alt='arrow'
                width={80}
                height={0}
                className='mr-[30px]'
              />
              <Image
                src={"/assets/icons/arrow.svg"}
                alt='arrow'
                width={80}
                height={0}
                className='rotate-180'
              />
            </div>
          </div>
        </section>
        <section
          id='services'
          className='mb-[88px] tablet:mb-[47px] mobile:mb-3'
        >
          <div className='flex justify-between mb-[89px] mobile:mb-9 tablet:mb-[81px] tablet:items-end tablet:flex-row-reverse mobile:flex-col-reverse mobile:items-start'>
            <p
              className={`${gilroy.className} text-white text-[20px] mobile:text-base font-semibold tablet:text-[#C1C1C1]`}
            >
              {t("services")}
            </p>
            <p className='text-[60px] mobile:text-[36px] text-white font-light w-[960px] tablet:w-[610px] mobile:w-full leading-[1] mobile:mb-[27px]'>
              {t("yourDevelop")}{" "}
              <span className='complecs'>{t("complecs")}</span>{" "}
              {t("complecsServices")}
            </p>
          </div>
          <div className='flex justify-end items-center mr-3 tablet:mb-12 tablet:flex-col-reverse tablet:items-end mobile:items-start mobile:mb-5'>
            <p
              className={`${gilroy.className} w-[422px] text-white font-light mr-[249px] mobile:w-[240px] tablet:mr-[190px] mobile:text-[12px]`}
            >
              {t("startupTitle")}
            </p>
            <div className='flex items-center mobile:justify-end mobile:w-full mobile:mb-6'>
              <Tilda className='tablet:leading-[1] mobile:text-[48px] mobile:mr-[11px]' />
              <p className='text-[96px] text-white font-light mobile:text-[40px]'>
                STARTUP
              </p>
            </div>
          </div>
          <Line className='mobile:w-full mobile:mb-8' />

          <div className='flex justify-end'>
            <p
              className={`${gilroy.className} text-white text-[20px] font-medium text-right mobile:text-base w-[850px] mb-[68px] tablet:mb-12 mobile:mb-8`}
            >
              {t("startupText")}
            </p>
          </div>
          <div className='flex justify-between tablet:flex-col-reverse tablet:items-center'>
            <div className='flex flex-col'>
              {[...Array(4)].map((data, i) => (
                <div
                  className='flex w-[747px] tablet:w-full items-start mb-6'
                  key={i}
                >
                  <Image
                    src={"/assets/icons/dot.svg"}
                    alt='dor'
                    width={7}
                    height={7}
                    className='mr-3 mt-2'
                  />
                  <p
                    className={`${gilroy.className} text-white text-[24px] leading-[1.2] mobile:text-base`}
                  >
                    {t(`startupTitle${i + 1}`)}{" "}
                    <span className='font-light'>
                      {t(`startupText${i + 1}`)}
                    </span>
                  </p>
                </div>
              ))}
            </div>
            <div className='w-[520px] h-[343px] tablet:mb-12 tablet:w-full tablet:h-[193px] mobile:mb-8 mobile:w-full'>
              <Image
                src={"/assets/images/startupImage.png"}
                alt='image'
                width={520}
                height={343}
                className='h-full w-full object-cover'
              />
            </div>
          </div>
        </section>
        <section className='mb-[112px] tablet:mb-[85px]'>
          <div className='flex justify-between items-center mb-[63px] mobile:mb-6 tablet:flex-col tablet:items-start'>
            <div className='flex items-center mobile:mb-2'>
              <SquareBracket />
              <p className='text-[96px] tablet:text-[90px] text-white font-light mobile:text-[46px]'>
                OUTSOURCING
              </p>
              <SquareBracket className='rotate-180 mt-2 mobile:mt-0 mobile:mb-1' />
            </div>
            <p
              className={`${gilroy.className} text-[20px] text-white font-light w-[481px] mobile:text-[14px] mobile:w-full`}
            >
              {t("outsorcingText")}
            </p>
          </div>
          <div className='flex items-center justify-end tablet:justify-between'>
            <p
              className={`${gilroy.className} text-[20px] text-white tablet:text-[14px] mobile:text-[12px] font-light w-[233px] mr-[409px] tablet:mr-0`}
            >
              {t("uiux")}
            </p>
            <div className='flex items-center'>
              <Tilda className='tablet:leading-[1] tablet:text-[96px] mobile:text-[48px] mobile:mr-4' />
              <p className='uppercase text-[96px] font-light text-white tablet:text-[48px] mobile:text-[40px]'>
                ui/ux
              </p>
            </div>
          </div>
          <Line className='mb-[10px] tablet:w-full' />
          <div className='flex items-center justify-between mobile:flex-col-reverse'>
            <p
              className={`${gilroy.className} text-[20px] text-white mobile:mb-4 font-light w-[237px] mobile:w-full tablet:text-[14px] mobile:text-[12px]`}
            >
              {t("development")}
            </p>
            <div className='flex items-center'>
              <CurlyBracket />
              <p className='text-[96px] font-light uppercase text-white tablet:text-[48px] mobile:text-[40px]'>
                Development
              </p>
              <CurlyBracket className='rotate-180 mb-1' />
            </div>
          </div>
          <Line className='mb-[10px] tablet:w-full' />
          <div className='flex items-center justify-end tablet:justify-between mobile:flex-col-reverse'>
            <p
              className={`${gilroy.className} text-[20px] text-white mobile:text-[12px] font-light mobile:w-full mobile:mb-4 w-[237px] tablet:w-[147px] mr-[39px] tablet:mr-0 tablet:text-[14px]`}
            >
              {t("mobileDevelop")}
            </p>
            <div className='flex items-center'>
              <Arrow className='mr-[33px] mobile:mr-[10px]' />
              <p className='uppercase text-[96px] font-light text-white tablet:text-[48px] mobile:text-[34px]'>
                Mobile develop
              </p>
            </div>
          </div>
          <Line className='mb-[33px] tablet:w-full mobile:mb-4' />
          <div className='flex items-center justify-end mb-[10px] tablet:justify-between'>
            <p
              className={`${gilroy.className} text-white text-[20px] font-light w-[272px] tablet:w-[297px] mobile:w-[175px] mobile:text-[12px] mr-[12px] tablet:text-[14px]`}
            >
              {t("seo")}
            </p>
            <div className='flex items-center'>
              <Image
                src={"/assets/icons/search.svg"}
                alt='search'
                width={72}
                height={72}
                className='mr-6 tablet:w-10 tablet:mr-[7px] mobile:w-8'
              />
              <p className='uppercase text-[96px] text-white font-light tablet:text-[48px] mobile:text-[40px]'>
                SEO <span className='tablet:hidden'>optimization</span>
              </p>
            </div>
          </div>
          <Line className='tablet:w-full' />
        </section>
      </Container>
    </main>
  );
}
