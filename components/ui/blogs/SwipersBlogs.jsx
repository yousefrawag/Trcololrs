"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import serFeat from "@/public/images/ser-feat.svg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const SwiperSlick = () => {
  return (
    <div className="py-8">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper h-auto"
      >
        <SwiperSlide>
          <div className={cardStyle}>
            <div className="w-[100%] h-[220px] group overflow-hidden">
              <Image
                src={serFeat}
                alt="feat"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                className="rounded transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
              />
            </div>
            <div className="p-4">
              <div className="py-4">
                <h2 className="font-medium text-[#2C2C2E] font-semibold mb-2">
                  نصائح لجعل رحلتك السياحية تجربة لا تُنسى
                </h2>
                <div>
                  <p className="text-[#69696A] text-[12px]">
                    التخطيط لرحلة سياحية يمكن أن يكون ممتعًا ومليئًا بالتحديات.
                  </p>
                </div>
              </div>
              <div>
                <Link
                  href="/"
                  className="before:ease inline-block relative font-medium py-2 px-4 rounded overflow-hidden border border-[#00AEEF] bg-[#00AEEF] text-white shadow-lg transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-[#141414] before:opacity-10 before:duration-700 hover:shadow-[#1d1d1d58] hover:before:-translate-x-60"
                >
                  <span relative="relative z-10">قراءه المدونة</span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cardStyle}>
            <div className="w-[100%] h-[220px] group overflow-hidden">
              <Image
                src={serFeat}
                alt="feat"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                className="rounded transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
              />
            </div>
            <div className="p-4">
              <div className="py-4">
                <h2 className="text-[#2C2C2E] font-semibold mb-2">
                  نصائح لجعل رحلتك السياحية تجربة لا تُنسى
                </h2>
                <div>
                  <p className="text-[#69696A] text-[12px]">
                    التخطيط لرحلة سياحية يمكن أن يكون ممتعًا ومليئًا بالتحديات.
                  </p>
                </div>
              </div>
              <div>
                <Link
                  href="/"
                  className="before:ease inline-block relative font-medium py-2 px-6 rounded overflow-hidden border border-[#00AEEF] bg-[#00AEEF] text-white shadow-lg transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-[#141414] before:opacity-10 before:duration-700 hover:shadow-[#1d1d1d58] hover:before:-translate-x-60"
                >
                  <span relative="relative z-10">قراءه المدونة</span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cardStyle}>
            <div className="w-[100%] h-[220px] group overflow-hidden">
              <Image
                src={serFeat}
                alt="feat"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                className="rounded transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
              />
            </div>
            <div className="p-4">
              <div className="py-4">
                <h2 className=" text-[#2C2C2E] font-semibold mb-2">
                  نصائح لجعل رحلتك السياحية تجربة لا تُنسى
                </h2>
                <div>
                  <p className="text-[#69696A] text-[12px]">
                    التخطيط لرحلة سياحية يمكن أن يكون ممتعًا ومليئًا بالتحديات.
                  </p>
                </div>
              </div>
              <div>
                <Link
                  href="/"
                  className="before:ease inline-block relative font-medium py-2 px-6 rounded overflow-hidden border border-[#00AEEF] bg-[#00AEEF] text-white shadow-lg transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-[#141414] before:opacity-10 before:duration-700 hover:shadow-[#1d1d1d58] hover:before:-translate-x-60"
                >
                  <span relative="relative z-10">قراءه المدونة</span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cardStyle}>
            <div className="w-[100%] h-[220px] group overflow-hidden">
              <Image
                src={serFeat}
                alt="feat"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                className="rounded transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
              />
            </div>
            <div className="p-4">
              <div className="py-4">
                <h2 className=" text-[#2C2C2E] font-semibold mb-2">
                  نصائح لجعل رحلتك السياحية تجربة لا تُنسى
                </h2>
                <div>
                  <p className="text-[#69696A] text-[12px]">
                    التخطيط لرحلة سياحية يمكن أن يكون ممتعًا ومليئًا بالتحديات.
                  </p>
                </div>
              </div>
              <div>
                <Link
                  href="/"
                  className="before:ease inline-block relative font-medium py-2 px-6 rounded overflow-hidden border border-[#00AEEF] bg-[#00AEEF] text-white shadow-lg transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-[#141414] before:opacity-10 before:duration-700 hover:shadow-[#1d1d1d58] hover:before:-translate-x-60"
                >
                  <span relative="relative z-10">قراءه المدونة</span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cardStyle}>
            <div className="w-[100%] h-[220px] group overflow-hidden">
              <Image
                src={serFeat}
                alt="feat"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                className="rounded transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
              />
            </div>
            <div className="p-4">
              <div className="py-4">
                <h2 className=" text-[#2C2C2E] font-semibold mb-2">
                  نصائح لجعل رحلتك السياحية تجربة لا تُنسى
                </h2>
                <div>
                  <p className="text-[#69696A] text-[12px]">
                    التخطيط لرحلة سياحية يمكن أن يكون ممتعًا ومليئًا بالتحديات.
                  </p>
                </div>
              </div>
              <div>
                <Link
                  href="/"
                  className="before:ease inline-block relative font-medium py-2 px-6 rounded overflow-hidden border border-[#00AEEF] bg-[#00AEEF] text-white shadow-lg transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-[#141414] before:opacity-10 before:duration-700 hover:shadow-[#1d1d1d58] hover:before:-translate-x-60"
                >
                  <span relative="relative z-10">قراءه المدونة</span>
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const cardStyle =
  "h-auto bg-white rounded shadow-lg border-1 border-gray-600 flex flex-col items-start";

export default SwiperSlick;
