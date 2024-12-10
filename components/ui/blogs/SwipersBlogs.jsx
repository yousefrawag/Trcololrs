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

const SwiperSlick = () => {
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
        <SwiperSlide>
        <div className={cardStyle}>
            <div className='w-[100%] h-[220px]'>
              <Image
                src={serFeat}
                alt="feat"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                className="rounded"
              />
            </div>
            <div className='p-4'>
            <div className="py-4">
              <h2 className="font-medium text-[#2C2C2E] font-semibold mb-2">نصائح لجعل رحلتك السياحية تجربة لا تُنسى</h2>
              <div>
                <p className="text-[#69696A] text-[12px]">التخطيط لرحلة سياحية يمكن أن يكون ممتعًا ومليئًا بالتحديات.</p>
                </div> 
            </div>
            <div>
              <Link className="py-1 inline-block rounded px-6 bg-[#00AEEF] text-white" href="#">قراءه المدونة</Link>
            </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={cardStyle}>
            <div className='w-[100%] h-[220px]'>
              <Image
                src={serFeat}
                alt="feat"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                className="rounded"
              />
            </div>
            <div className='p-4'>
            <div className="py-4">
              <h2 className="text-[#2C2C2E] font-semibold mb-2">نصائح لجعل رحلتك السياحية تجربة لا تُنسى</h2>
              <div>
                <p className="text-[#69696A] text-[12px]">التخطيط لرحلة سياحية يمكن أن يكون ممتعًا ومليئًا بالتحديات.</p>
                </div> 
            </div>
            <div>
              <Link className="py-1 inline-block rounded px-6 bg-[#00AEEF] text-white" href="#">قراءه المدونة</Link>
            </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={cardStyle}>
            <div className='w-[100%] h-[220px]'>
              <Image
                src={serFeat}
                alt="feat"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                className="rounded"
              />
            </div>
            <div className='p-4'>
            <div className="py-4">
              <h2 className=" text-[#2C2C2E] font-semibold mb-2">نصائح لجعل رحلتك السياحية تجربة لا تُنسى</h2>
              <div>
                <p className="text-[#69696A] text-[12px]">التخطيط لرحلة سياحية يمكن أن يكون ممتعًا ومليئًا بالتحديات.</p>
                </div> 
            </div>
            <div>
              <Link className="py-1 inline-block rounded px-6 bg-[#00AEEF] text-white" href="#">قراءه المدونة</Link>
            </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={cardStyle}>
            <div className='w-[100%] h-[220px]'>
              <Image
                src={serFeat}
                alt="feat"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                className="rounded"
              />
            </div>
            <div className='p-4'>
            <div className="py-4">
              <h2 className=" text-[#2C2C2E] font-semibold mb-2">نصائح لجعل رحلتك السياحية تجربة لا تُنسى</h2>
              <div>
                <p className="text-[#69696A] text-[12px]">التخطيط لرحلة سياحية يمكن أن يكون ممتعًا ومليئًا بالتحديات.</p>
                </div> 
            </div>
            <div>
              <Link className="py-1 inline-block rounded px-6 bg-[#00AEEF] text-white" href="#">قراءه المدونة</Link>
            </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className={cardStyle}>
            <div className='w-[100%] h-[220px]'>
              <Image
                src={serFeat}
                alt="feat"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                className="rounded"
              />
            </div>
            <div className='p-4'>
            <div className="py-4">
              <h2 className=" text-[#2C2C2E] font-semibold mb-2">نصائح لجعل رحلتك السياحية تجربة لا تُنسى</h2>
              <div>
                <p className="text-[#69696A] text-[12px]">التخطيط لرحلة سياحية يمكن أن يكون ممتعًا ومليئًا بالتحديات.</p>
                </div> 
            </div>
            <div>
              <Link className="py-1 inline-block rounded px-6 bg-[#00AEEF] text-white" href="#">قراءه المدونة</Link>
            </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

const cardStyle = "h-auto bg-white rounded shadow-lg border-1 border-gray-600 flex flex-col items-start";



export default SwiperSlick
