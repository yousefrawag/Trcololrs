import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";  // Added navigation styles
import "swiper/css/pagination";

import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { countryData } from "@/components/data/countryDatat";

const RelatedBlogs = ({ blogs }) => {
  return (
    <div>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        navigation={true}  // Enables navigation
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
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation, Autoplay]}  // Included Navigation module
        className="mySwiper   container"
      >
        {countryData?.map((item) => {
          return (
            <SwiperSlide key={item.id} className='mt-10'>
              <Link href={`/visa/${item.id}`} className={cardStyle}>
                <Image
                  src={item.icon}
                  alt="feat"
                  width={50}
                  height={50}
                  style={{ objectFit: "cover" }}
                  className="rounded-full  w-[70px] h-[70px] "
                />
                <h2 className="text-[#2C2C2E] font-bold mb-2 flex text-xl mt-5 items-center justify-center text-center">
                  {item?.name}
                </h2>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  )
}

const cardStyle = "rounded border-1 border-gray-600 flex items-center gap-2 justify-center";

export default RelatedBlogs;
