import React from 'react'
import KayanBread from '@/components/common/kayanBread/KayanBread'
import Image from "next/image"

import { AuthFetchAboutValues } from '@/services/FetchAllContent'

const OurValues = () => {
  const {loading , AboutSectionValues} = AuthFetchAboutValues()
  return (
    <div className='container mx-auto pt-10 pb-10 px-4'>
        <div className="flex items-center justify-center w-full">
        <KayanBread  title="القيم"/>
        </div>
      <div className=" grid gird-cols-1 lg:grid-cols-4  mt-10">
        {
          AboutSectionValues?.map((item) => {
            return (
              <div key={item?.id} className="w-full lg:w-[295px] h-[130px] mb-4  shadow-lg border border-[#EBEEF2] rounded-[14px] flex gap-3 items-center justify-center p-3">
              <div className="w-[56px] h-[48px] rounded-[14px] bg-[#5C9CEE] flex items-center justify-center">
                <Image   priority src={item?.img} width={200} height={200} alt="hand-image" />
              </div>
              <p className='text-[#69696A]'>
                  {
                    item?.title
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