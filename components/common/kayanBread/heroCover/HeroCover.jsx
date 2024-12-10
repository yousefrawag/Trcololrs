import Image from 'next/image'
import React from 'react'
import coverImage from "@/public/images/background-cover.svg";
import KayanBread from '../KayanBread';

const HeroCover = () => {
  return (
    <section className='w-full  h-[406px] relative'>
            <Image
        src={coverImage}
        alt="logo"
        fill
        style={{ objectFit: "cover" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20 z-0"></div>
      <div className="container mx-auto">
        <div className=" z-5 relative  flex items-center justify-center flex-col h-[406px]">
            <KayanBread className="text-white" title="خدمتنا"/>
            <p className='text-white max-w-sm text-center leading-7'> تقدم شركه كيان مجموعة واسعة من الخدمات المصممة خصيصًا لتلبية احتياجاتك. من حجوزات السفر إلى الخدمات الحكومية، نحن هنا لضمان تجربة استثنائية.</p>
        </div>
      </div>
    </section>
  )
}

export default HeroCover
