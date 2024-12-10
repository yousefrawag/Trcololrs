import React from 'react'
import KayanBread from '@/components/common/kayanBread/KayanBread'
import Image from "next/image"
import handimage from "@/public/images/hand.png"
import valuesimage from "@/public/images/values.png"
import ligthimage from "@/public/images/ligth.png"
import companyimage from "@/public/images/company.png"
const OurValues = () => {
  return (
    <div className='container mx-auto pt-10 pb-10'>
        <div className="flex items-center justify-center w-full">
        <KayanBread  title="القيم"/>
        </div>
      <div className=" grid gird-cols-1 lg:grid-cols-4  mt-10">
      <div className="w-full lg:w-[295px] h-[130px] mb-4 shadow-lg border border-[#EBEEF2] rounded-[14px] flex gap-3 items-center justify-center p-3 ">
        <div className="w-[56px] h-[48px] rounded-[14px] bg-[#5C9CEE] flex items-center justify-center">
          <Image src={handimage} alt="hand-image" />
        </div>
        <p className='text-[#69696A]'>
        الالتزام بالشفافية والمصداقية.
        </p>
    </div>
    <div className="w-full lg:w-[295px] h-[130px] mb-4  shadow-lg border border-[#EBEEF2] rounded-[14px] flex gap-3 items-center justify-center p-3">
        <div className="w-[56px] h-[48px] rounded-[14px] bg-[#5C9CEE] flex items-center justify-center">
          <Image src={valuesimage} alt="hand-image" />
        </div>
        <p className='text-[#69696A]'>
        حقيق رضا العملاء في جميع مراحل الخدمة
        </p>
    </div>
    <div className="w-full lg:w-[295px] h-[130px] mb-4  shadow-lg border border-[#EBEEF2] rounded-[14px] flex gap-3 items-center justify-center p-3 ">
        <div className="w-[56px] h-[48px] rounded-[14px] bg-[#5C9CEE] flex items-center justify-center">
          <Image src={companyimage} alt="hand-image" />
        </div>
        <p className='text-[#69696A]'>
        بناء شراكات قوية مع المؤسسات الحكومية.
        </p>
    </div>
    <div className="w-full lg:w-[295px] h-[130px] mb-4  shadow-lg border border-[#EBEEF2] rounded-[14px] flex gap-3 items-center justify-center p-3">
        <div className="w-[56px] h-[48px] rounded-[14px] bg-[#5C9CEE] flex items-center justify-center">
          <Image src={ligthimage} alt="hand-image" />
        </div>
        <p className='text-[#69696A]'>
        الابتكار لتقديم خدمات تلبي  احتياجات العملاء.
        </p>
    </div>
      </div>
      
 
    </div>
  )
}

export default OurValues