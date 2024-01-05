"use client";
import React, { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import { gilroy } from "@/app/layout";
import Button from "../Button";

interface Props {
  className?: string;
}

const Form = ({ className }: Props) => {
  const [open, $open] = useState(false);
  const { t } = useTranslation();
  const handleOpen = () => {
    $open(!open);
  };
  return (
    <>
      <p
        onClick={handleOpen}
        className={`text-white element tablet:text-base text-[20px] font-bold cursor-pointer ${className}`}
      >
        {t("sendApplication")}
      </p>
      <Transition show={open} appear as={Fragment}>
        <Dialog
          as='div'
          className='relative z-[100]'
          onClose={() => $open(false)}
        >
          <div className='fixed top-0 inset-0 overflow-y-auto bg-mainBg'>
            <div className='flex min-h-full items-center justify-center p-4 backdrop-blur-sm'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel
                  className='relative overflow-y-auto transform rounded-[5px]
               bg-black shadow-xl transition-all flex flex-col px-[55px] py-[68px] w-[1065px] tablet:w-[500px] mobile:w-[322px] tablet:py-10 tablet:px-8 mobile:p-[10px]'
                >
                  <Image
                    src={"/assets/icons/close.svg"}
                    alt='close'
                    width={24}
                    height={24}
                    className='absolute top-2 right-2'
                    onClick={handleOpen}
                  />
                  <p className='text-[64px] text-white font-light leading-[1.1] mb-[57px] mobile:w-[284px] mobile:mb-[53px] tablet:text-[40px] mobile:text-[32px] tablet:mb-5 tablet:w-[400px]'>
                    <span className='modalText'>{t("contactUs")}</span>{" "}
                    {t("startNow")}
                  </p>
                  <form className='flex flex-col'>
                    <label
                      htmlFor='name'
                      className={`${gilroy.className} text-[20px] text-white mobile:text-base font-bold mb-3 mobile:mb-5`}
                    >
                      {t("name")}
                    </label>
                    <input
                      id='name'
                      type='text'
                      className='outline-none w-[850px] text-white tablet:w-full border-b border-white bg-transparent mb-[54px]'
                    />
                    <label
                      htmlFor='email'
                      className={`${gilroy.className} text-[20px] text-white font-bold mobile:text-base mb-3 mobile:mb-5`}
                    >
                      {t("email")}
                    </label>
                    <input
                      id='email'
                      type='email'
                      className='outline-none w-[850px] text-white tablet:w-full border-b border-white bg-transparent mb-[54px]'
                    />
                    <label
                      htmlFor='message'
                      className={`${gilroy.className} text-[20px] text-white font-bold mobile:text-base mb-3 mobile:mb-5`}
                    >
                      {t("message")}
                    </label>
                    <textarea
                      id='message'
                      className='outline-none w-[850px] text-white tablet:w-full border-b resize-none h-[100px] border-white bg-transparent mb-[54px] tablet:mb-[70px]'
                    />
                    <div className='tablet:flex tablet:justify-end mobile:justify-center'>
                      <Button className='w-[300px] text-white mobile:w-[206px] mobile:h-11 mobile:rounded-[30px] submit h-[44px] border border-white rounded-full text-[20px] font-bold'>
                        <span className='buttonText text-white'>
                          {t("submit")}
                        </span>
                      </Button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Form;
