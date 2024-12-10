import React from 'react'
import Image from "next/image"
import image from "@/public/images/owner-about.png"
import KayanBread from '@/components/common/kayanBread/KayanBread'
const AboutSection = () => {
  return (
    <div className='flex gap-4 flex-col lg:flex-row container  mx-auto'>
        <div className='flex flex-col  justify-center ' >
            <KayanBread title="من نحن" />
            <h2>
            كل ما يخص السفر والسياحة والحجوزات
            </h2>
            <p>
            شركة  كيان تأسست عام 2020 متخصصة في تقديم حلول شاملة في مجالات السفر والسياحة والخدمات الحكومية. 
            تميزت الشركة منذ انطلاقها بتقديم خدمات مبتكرة لتلبية احتياجات العملاء، مع بناء علاقات قوية مع المؤسسات الحكومية والخاصة في السعودية، الإمارات، الأردن، مصر، وسلطنة عمان.
            </p>
        </div>
        <Image src={image} alt="about-iamge" className='w-full h-[80%]'/>
    </div>
  )
}

export default AboutSection