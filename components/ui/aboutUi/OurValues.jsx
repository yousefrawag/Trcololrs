import React from 'react'
import KayanBread from '@/components/common/kayanBread/KayanBread'
import Image from "next/image"



const OurValues = () => {

  const values = ["الالتزام بالشفافية والمصداقية." , "تحقيق رضا العملاء في جميع مراحل الخدمة" , "بناء شراكات قوية مع المؤسسات الحكومية." , "الابتكار لتقديم خدمات تلبي احتياجات العملاء."]
  return (
    <div className='container mx-auto pt-10 pb-10 px-4'>
        <div className="flex items-center justify-center w-full">
        <KayanBread  title="القيم"/>
        </div>
      <div className=" grid gird-cols-1 lg:grid-cols-4  mt-10">
        {
          values?.map((item) => {
            return (
              <div key={item} className="w-full lg:w-[295px] h-[130px] mb-4  shadow-lg border border-[#EBEEF2] rounded-[14px] flex gap-3 items-center justify-center p-3">
            
              <p className='text-[#69696A]'>
                  {
                    item
                  }
              </p>
          </div>
            )
          })
        }
 

      </div>
      
 
    </div>
  )
}

export default OurValues