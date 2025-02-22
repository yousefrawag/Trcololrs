"use client"
import React from 'react'
import coverImage from "@/public/images/home/hero.png";
import Image from "next/image";
import Contact from '@/components/ui/contactSection/Contact'
import { FaWhatsapp } from 'react-icons/fa'
const contact = () => {
  return (
    <div className='w-full'>

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
     تواصل معنا                   </h1>
                          <p className="text-black my-6 text-[20px] leading-9 md:text-[25px] md:max-w-[60%] max-w-[100%]">
                            مع الوان المسافر يمكنك الحصول على تأشيرات السفر بكل سهولة
                          </p>
                    
                        </div>
                      </header> 
                      <div className="w-full p-7">
      <div className="grid md:grid-cols-2 ">
        {/* WhatsApp Section */}
        <div className="whatsapp-section space-y-4 w-full ">
          <h2 className="text-xl font-semibold">تواصل معنا عبر الارقام التالية</h2>
          
          <div className="whatsapp-links space-y-3">
            <a href="http://wa.me/966558741741" target="_blank" className="flex items-center border-[1px] border-main2 p-3 rounded-[5px] gap-3 text-blue-600 hover:text-blue-800 lg:w-[50%]">
              <FaWhatsapp className="text-2xl text-green-500" />
              <span>966558741741</span>
            </a>
            <a href="http://wa.me/966557155472" target="_blank" className="flex items-center border-[1px] border-main2 p-3 rounded-[5px] gap-3 text-blue-600 hover:text-blue-800 lg:w-[50%]">
            <FaWhatsapp className="text-2xl text-green-500" />
              <span>966557155472</span>
            </a>
            <a href="http://wa.me/966552791800" target="_blank" className="flex items-center border-[1px] border-main2 p-3 rounded-[5px] gap-3 text-blue-600 hover:text-blue-800 lg:w-[50%]">
            <FaWhatsapp className="text-2xl text-green-500" />
              <span>
              966552791800
              </span>
            </a>
          </div>
        </div>

        {/* Google Map Section */}
        <div className="map-section w-full min-h-[400px] lg:w-[100%] flex-grow  md:h-auto">
         
          <iframe 
            className="w-full h-full rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14486.188994003382!2d46.6461819!3d24.8109522!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f01b654ba264b%3A0x30a7fd8506bf489a!2z2KfZhNmI2KfZhiDYp9mE2YXYs9in2YHYsSDZhNmE2LPZgdixINmIINin2YTYs9mK2KfYrdip!5e0!3m2!1sar!2s!4v1734735780234!5m2!1sar!2s"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>      
                      
       
      

        <Contact />
    </div>
  )
}

export default contact