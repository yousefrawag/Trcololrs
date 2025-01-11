import React from 'react'
import coverImage from "@/public/images/home/hero.png";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
const VisaaolicationHeader = () => {
  return (
    <header className="w-full h-[70vh] relative bg-custom-gradient">
    {/* Background image */}
    <Image
      src={coverImage}
      alt="logo"
      layout="fill"
      objectFit="cover"
      className="z-0"
    />

    {/* Content */}
    <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-black text-[26px] md:text-[48px] max-w-[100%] lg:max-w-[55%] font-bold">
       أحجز تأشيرتك الأن
      </h1>
      <p className="text-black my-6 text-[20px] leading-9 md:text-[25px] md:max-w-[60%] max-w-[100%]">
        مع الوان المسافر يمكنك الحصول على تأشيرات السفر بكل سهولة
      </p>
      {/* <div className="flex gap-4 items-center">
        <Link
          href="/services"
          className="before:ease inline-block relative font-medium py-2 px-6 rounded overflow-hidden border border-main bg-main text-white shadow-lg transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-[#141414] before:opacity-10 before:duration-700 hover:shadow-[#1d1d1d58] hover:before:-translate-x-60"
        >
          <span className="relative z-10">استكشف خدماتنا</span>
        </Link>
        <Link
          className="font-medium hover:opacity-50 transition-all text-main flex gap-2 items-center"
          href="/contact"
        >
          اتصل بنا
          <GoArrowUpRight />
        </Link>
      </div> */}
    </div>
  </header>
  )
}

export default VisaaolicationHeader