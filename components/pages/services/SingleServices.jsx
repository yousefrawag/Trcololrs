import HeroCover from '@/components/common/kayanBread/heroCover/HeroCover'
import Contact from '@/components/ui/contactSection/Contact';
import singleImg from "@/public/images/single-img.svg";
import Image from 'next/image'
import RenderContact from '@/components/ui/contactSection/RenderContact';
const SingleSevice = ({currentServices}) => {

  
  return (
    <div>
       <HeroCover/>
       <section className='pt-[80px]'>
        <div className="container mx-auto px-4">
            <div className='flex flex-col gap-4 lg:gap-0 md:flex-row items-center justify-between mb-[80px]'>
                <div className="w-full md:w-1/2">
                <div>
                    <h1 className='text-[#2C2C2E] font-bold text-[32px] max-w-lg'><span className='text-[#00AEEF]'>01</span> {currentServices?.name} </h1>
                </div>
                <div className='py-8'>
             <p>
              {
                currentServices?.details
              }
             </p>
                </div>
                <div  className='pt-4'>
                <h1 className='text-[#2C2C2E] font-bold text-[32px] max-w-lg'><span className='text-[#00AEEF]'>02 </span>مميزات الخدمة</h1>
                </div>
                <div>
                <ul className='grid grid-cols-2 gap-4 mt-5'>
                      {
                        currentServices?.features?.map((item) => {
                          return  <li key={item}> {item}</li>
                        })
                      }
                       
                  
                    </ul>
                </div>
                </div>
                <div className="w-full md:w-1/2 text-center items-start flex justify-center">
                    <Image
                      src={currentServices?.image}
                      alt="feat"
                      style={{ objectFit: 'contain', width: '420px', height: '650px' }}
                      className="rounded"
                      width={200}
                      height={200}
                    />
                  </div>
            </div>
            {/* contact */}
            <RenderContact contactype={currentServices?.categoray}/>
        </div>
       </section>
    </div>
  )
}

export default SingleSevice
