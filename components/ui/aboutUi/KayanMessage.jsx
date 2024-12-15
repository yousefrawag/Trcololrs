import React from 'react'
import Image from "next/image"
import KayanBread from '@/components/common/kayanBread/KayanBread'
import { AuthFetchAboutMessage } from '@/services/FetchAllContent'
const KayanMessage = () => {
  const {loading, AboutSectionMessage} = AuthFetchAboutMessage()
  if(loading){
    return <h1> loadding ... </h1>
  }
  return (
    <div className='bg-[#D6ECF7] w-full pt-7 pb-5'>
        <div className="container mx-auto px-4">
          {
            AboutSectionMessage?.map((item) => {
              return (
                     <div key={item?.id} className="flex flex-col gap-20 items-center justify-center  lg:flex-row text-right">
                          <Image   priority e src={item?.img} alt="message-image" width={400} height={100}  />
                          <div className="mt-2 flex items-center justify-center  flex-col">
                              <KayanBread  title="الرسالة"/>
                              <p className='text-[#00AEEF] mt-3 w-full font-semibold	text-lg		 lg:w-[36%]  leading-7	'>
                             {
                              item?.title
                             }
                              </p>
                              <p className='w-full lg:w-[50%] leading-7 text-[#69696A]'>
                                        {
                                          item?.details
                                        }
                              </p>
                          </div>

                  </div>
              )
            })
          }
     
        </div>
    </div>
  )
}

export default KayanMessage