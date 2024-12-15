"use client"
import KayanBread from "@/components/common/kayanBread/KayanBread"
import { AuthFetchHomeAbout } from "@/services/FetchAllContent"

import Image from "next/image"
const About = () => {
  const {loadding , homeAbout} = AuthFetchHomeAbout()
  console.log(homeAbout);
  
  return (
    <section className='py-[80px]'>
      <div className="container mx-auto px-4">
        {
          homeAbout?.map((item) => {
return (
        <div key={item?.id} className='flex justify-between flex-col gap-10 md:gap-2 md:flex-row items-center   mb-4'>
        <div className="w-full md:w-[50%]">
            <KayanBread title="من نحن"/>
            <div>
                <h1 className="text-[32px] font-medium my-4 text-[#2C2C2E]">
                {
                  item?.title
                }
                </h1>
                <p className="text-[#69696A] leading-8 max-w-[100%] md:max-w-[80%] "
                > 
              {
                item?.details
              }
                  </p>
            </div>
        </div>
        <div className="w-[100%] md:w-[50%] flex items-center md:items-start justify-center md:justify-end">
        <Image
                src={item?.img }
                alt="about Image"
                width={100}
                height={100}
                priority
                style={{ objectFit: "cover", width: "403px", height: "448px" }}
                />
        </div>
        </div>
)
          })
        }
   
      </div>
    </section>
  )
}

export default About
