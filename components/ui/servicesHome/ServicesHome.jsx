import KayanBread from "@/components/common/kayanBread/KayanBread";
import Link from "next/link";
import Image from "next/image";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import {Services} from "@/components/data/ServicesData"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";  // Added navigation styles
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';

const ServicesHome = () => {

  return (
    <section className="py-[80px] bg-[#eee] overflow-hidden ">
      <div className="container mx-auto  container ">
        <div className="flex items-center lg:w-[50%]  px-4  justify-center w-[100%]  mx-auto mb-10">
          <KayanBread title="اكتشف خدماتنا المميزة" />
        </div>
        <Swiper
        slidesPerView={2}
        spaceBetween={0}
        navigation={true}
      
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper1 h-auto "
      >         {
          Services.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <Link href={`/services/${item.id}`}>
              <div className="relative w-[220px] h-[150px]">
                <Image
                  src={item?.image}
                  alt="feat"
                  width={150}
                  height={150}
                  priority
                  style={{ objectFit: "cover" }}
                  className="rounded-[30px] w-full h-full transition-all duration-300"
                />
                {/* Gradient Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent rounded-[30px]"></div>
                <span className="absolute bottom-2 right-5 text-lg font-bold text-white z-10">
                  {item.name}
                </span>
              </div>
              </Link>
            </SwiperSlide>
            
            
            )
          })
         }
    
         
        
        
        </Swiper>
      </div>
    </section>
  );
};

const cardStyle = " h-[150px] w-[250px] bg-white rounded-[20px] shadow-lg flex flex-col items-center";
const contentStyle = "flex items-center gap-2 py-2"

export default ServicesHome;
