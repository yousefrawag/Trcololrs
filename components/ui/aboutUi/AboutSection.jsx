import React from 'react'
import Image from "next/image"
import KayanBread from '@/components/common/kayanBread/KayanBread'
const AboutSection = ({AboutSectiondetails}) => {
  return (
    <>
    {
      AboutSectiondetails?.map((item) => {
        return (
    <div key ={item?.id} className=' px-4 flex gap-4 flex-col lg:flex-row container  mx-auto md:p-3'>
        <div className='flex flex-col  justify-center ' >
            <KayanBread title="من نحن" />
            <h2 className='text-[#2C2C2E] text-xl	font-semibold mb-3'>
            {
              item?.title
            }
          </h2>
            <p className=' lg:w-[80%] w-full leading-8	text-[#69696A]'>
                  {
                    item?.details
                  }
            </p>
        </div>
        <Image   priority style={{ objectFit: "cover"}} src={item?.img} width={400} height={100} alt="about-iamge" className='w-full h-[80%]'/>
    </div>
        )
      })
    }
</>
  )
}

export default AboutSection