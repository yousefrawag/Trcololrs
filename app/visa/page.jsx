"use client"
import React from 'react'
import AllBlogs from '@/components/ui/Allvisa/AllBlogs'
import Contact from '@/components/ui/contactSection/Contact'
import { AuthFetchVisa } from '@/services/FetchAllContent'
import Loadding from '@/components/common/kayanBread/Loadding'
import coverImage from "@/public/images/home/hero.png";
import Image from "next/image";
const BLOGS = () => {
      const {loading, Visa} = AuthFetchVisa()
  if(loading) {
      return  <Loadding />
  }
  return (
    <div className='mb-10'>
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
     التأشيرات                   </h1>
                          <p className="text-black my-6 text-[20px] leading-9 md:text-[25px] md:max-w-[60%] max-w-[100%]">
                            مع الوان المسافر يمكنك الحصول على تأشيرات السفر بكل سهولة
                          </p>
                    
                        </div>
                      </header>
        <AllBlogs  blogs={Visa}/>
        <Contact />
    </div>
  )
}

export default BLOGS