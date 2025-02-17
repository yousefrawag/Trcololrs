import React from 'react'
import Image from "next/image"
import KayanBread from '@/components/common/kayanBread/KayanBread'
import aboutimage from "@/public/images/about/Group_2.png"

const KayanMessage = () => {
 
  return (
    <div className='bg-[#D6ECF7] w-full pt-7 pb-5 mt-7'>
        <div className="container mx-auto px-4">
         
       
             
                     <div className="flex flex-col gap-20 items-center justify-center  lg:flex-row text-right">
                          <Image   priority  src={aboutimage} alt="message-image" width={400} height={100}  />
                          <div className="mt-2 flex items-center justify-center  flex-col">
                              <KayanBread  title="الرسالة"/>
                              <p className='text-[#00AEEF] mt-3 w-full font-semibold	text-lg		 lg:w-[36%]  leading-7	'>
                              أن تكون ألوان المسافر الخيار الأول للعملاء الذين يبحثون عن الاحترافية.


                              </p>
                              <p className='w-full lg:w-[50%] leading-7 text-[#69696A]'>
                              تقديم تجربة متكاملة ومميزة تجمع بين سهولة الإجراءات وسرعة التنفيذ، مع الالتزام بالتميز في خدمة العملاء والشراكات المؤسسية


                              </p>
                          </div>

                  </div>
          
        </div>
    </div>
  )
}

export default KayanMessage