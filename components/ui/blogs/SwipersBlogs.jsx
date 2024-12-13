"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import serFeat from "@/public/images/ser-feat.svg";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { AuthFetchBlog } from '@/services/FetchAllContent';

const SwiperSlick = () => {
  const {loadding  , blogs} = AuthFetchBlog()
  console.log(blogs);
  
  return (
    <div className='py-8'>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        pagination={{
            clickable: true,
        }}
        modules={[Pagination,  Navigation]}
        className="mySwiper h-auto"
        >
          {
            blogs?.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                <div className={cardStyle}>
                    <div className='w-[100%] h-[220px]'>
                      <Image
                        src={item.img}
                        alt="feat"
                        width={400} // Specify a width
                        height={220} // Specify a height matching your design
                        style={{ objectFit: "cover", width: "100%", height: "100%" }}
                        className="rounded"
                      />
                    </div>
                    <div className='p-4'>
                    <div className="py-4">
                      <h2 className=" text-[#2C2C2E] font-semibold mb-2"> {item.title}</h2>
                      <div>
                        <p className="text-[rgb(105,105,106)] text-[12px]">
                          {
                            item.details.slice(0, 40)
                          }
                        </p>
                        </div> 
                    </div>
                    <div>
                      <Link href={`blogs/${item.id}`} className="py-1 inline-block rounded px-6 bg-[#00AEEF] text-white" >قراءه المدونة</Link>
                    </div>
                    </div>
                  </div>
                </SwiperSlide>
              )
             
            })
          }
      
     
       
    
      </Swiper>
    </div>
  );
}

const cardStyle = "h-auto bg-white rounded shadow-lg border-1 border-gray-600 flex flex-col items-start";



export default SwiperSlick
