import HeroCover from '@/components/common/kayanBread/heroCover/HeroCover';
import KayanBread from '@/components/common/kayanBread/KayanBread';
import Contact from '@/components/ui/contactSection/Contact';
import frame2 from "@/public/images/frame2.svg";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import data from "./data.json";

const Services = () => {
  return (
    <div>
      <HeroCover />
      <div className='py-[80px] flex flex-col items-center justify-center gap-2 px-4'>
        <h1 className="text-black text-[36px]">خدمات تأسيس الشركات</h1>
        <p className='text-[#404041] text-[18px] max-w-lg text-center'>
          تقدم شركة كيان للسياحة مجموعة متكاملة من الخدمات القانونية والإدارية لتأسيس الشركات تشمل
        </p>
      </div>

      {/* sections */}
      <div className='[&>section:nth-child(odd)]:bg-[#F1F1F1] [&>section:nth-child(even)]:bg-white'>

        {data.map((item, index) => {
          return (
            <section key={item.id} className={`py-[80px]`}>
              <div className="container mx-auto px-4">
                <div
                  className={`flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-0 w-full items-center ${
                    index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="w-full md:w-1/2">
                    <KayanBread title={item.title} />
                    <p className="text-[22px] text-justify max-w-lg leading-10 py-10 text-[#69696A]">
                      {item.desc}
                    </p>
                    <Link
                      href={`/services/${item.id}`}
                      className="py-2 px-10 inline-block text-white text-[16px] rounded-lg bg-[#00AEEF] font-medium"
                    >
                      قراءة البند
                    </Link>
                  </div>
                  <div className="w-full md:w-1/2 text-center items-center flex justify-center">
                    <Image
                      src={item.image}
                      alt="feat"
                      style={{ objectFit: 'cover', width: '450px', height: '383px' }}
                      className="rounded"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* contact */}
      <Contact />
    </div>
  );
};

export default Services;
