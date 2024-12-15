"use client"
import KayanBread from "@/components/common/kayanBread/KayanBread"
import Image from "next/image"
import frame1 from "@/public/images/frame1.svg"
import { AuthFetchHomeWhyKayan } from "@/services/FetchAllContent"
const WhyKayan = () => {
  const {loadding  , homeKayan} = AuthFetchHomeWhyKayan()
  if(loadding) {
    return <h2>loadding ... </h2>
  }
  return (
    <section className="py-[80px] relative ">
                <Image
                src={frame1}
                alt="frame1"
                style={{ objectFit: "cover", width: "109px", height: "157px",position:"absolute", top:"0", right:"0", transform: "rotateZ(180deg)" }}
                />
      <div className="container mx-auto px-4">
        {
          homeKayan?.map((item) => {
            return (
              <div key={item?.id} className='flex gap-10 lg:gap-0 justify-between flex-col lg:flex-row items-center mb-3'>
              <div className="w-[100%] lg:w-[50%]">
                  <KayanBread title="لماذا كيان؟"/>
                  <div>
                      <p className="mt-6 text-[#69696A] leading-8 max-w-[100%] lg:max-w-[80%] "
                      >
                        {
                          item?.details
                        }   

                      </p>
                  </div>
              </div>
              <div className="w-[100%] lg:w-[50%] flex items-start justify-center lg:justify-end">
              <Image
                      src={item?.img }
                      alt="why Kayan"
                      width={100}
                      height={100}
                      priority
                      style={{ objectFit: "cover", width: "100%", height: "100%" }}
                      className="w-[100%]"
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

export default WhyKayan
