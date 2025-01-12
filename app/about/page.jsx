"use client"
import React from 'react'
import AboutSection from '@/components/ui/aboutUi/AboutSection'
import KayanMessage from '@/components/ui/aboutUi/KayanMessage'
import OurValues from '@/components/ui/aboutUi/OurValues'
import Contact from '@/components/ui/contactSection/Contact'
import { AuthFetchAboutSection } from '@/services/FetchAllContent'
import Loadding from '@/components/common/kayanBread/Loadding'
import coverImage from "@/public/images/home/hero.png";
import Image from "next/image";
const About = () => {

  return (
    <div className='mt-0'>
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
من نحن                    </h1>
                    <p className="text-black my-6 text-[20px] leading-9 md:text-[25px] md:max-w-[60%] max-w-[100%]">
                      مع الوان المسافر يمكنك الحصول على تأشيرات السفر بكل سهولة
                    </p>
              
                  </div>
                </header>
        <AboutSection  />
        <KayanMessage />
        <OurValues />
        <Contact />
    </div>
  )
}

export default About