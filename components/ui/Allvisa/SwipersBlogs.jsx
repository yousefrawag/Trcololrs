"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { countryData } from "@/components/data/countryDatat";
import { AuthFetchVisa } from '@/services/FetchAllContent';

const SwipersBlogs = () => {
  const { loading, Visa } = AuthFetchVisa();
if(loading){
  return <h1>loading Data...</h1>
}

  return (
    <div className="py-8">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
          renderBullet: (index, className) => {
            return '<span class="' + className + '"></span>';
          }
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper1 h-auto"
      >
        {Visa?.map((item) => {
          return (
            <SwiperSlide key={item._id}>
              <Link href={`/visa/${item._id}`} className={cardStyle}>
                <div className='w-[100%] h-[150px] relative'>
                  <Image
                    src={item.image?.imageURL}
                    alt="feat"
                    width={400}
                    height={50}
                    style={{ objectFit: "cover", width: "100%", height: "100%" }}
                    className="rounded-[20px]"
                  />
                  <Image
                    src={item.flag?.imageURL}
                    alt="feat"
                    width={50}
                    height={50}
                    style={{ objectFit: "cover" }}
                    className="rounded-full absolute w-[50px] h-[50px] bottom-[-15px] left-1/2 transform -translate-x-1/2"
                  />
                </div>
                <div className="py-4 flex items-center justify-center w-full">
                  <h2 className="text-[#2C2C2E] font-bold mb-2 flex text-xl mt-5 items-center justify-center text-center">
                    {item?.title}
                  </h2>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

const cardStyle = "h-[240px] bg-white rounded-[20px] shadow-lg border-1 border-gray-600 flex flex-col items-start";

export default SwipersBlogs;
