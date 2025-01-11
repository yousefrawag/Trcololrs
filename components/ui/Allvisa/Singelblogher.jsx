"use client";
import React from "react";
import Image from "next/image";
import image from "@/public/images/sinagle-blog-image.png";
import Link from "next/link";

const Singelblogher = ({ currentCountry, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="w-full h-full mb-10 bg-[#eee] pt-5">
      <h1 className="w-full text-4xl font-bold text-center">متطلبات التأشيره</h1>
      <span className="w-full text-center font-bold text-3xl flex items-center justify-center mt-10 text-main">
        {currentCountry?.name}
      </span>
      <div className="container flex items-center justify-center w-full bg-white mx-auto mt-10">
        <div className="w-full border-y-[1px] border-gray-400">
          {
            currentCountry?.requerments?.map((item ,i) => {
              return (
                <div key={`${i+1}-${item.id}`} className="w-full flex flex-col lg:flex-row gap-0 border-b border-gray-400">
                <div className="border-l border-gray-400 p-5 w-[30%] flex items-center justify-center">
                 <span>{item.title}</span> 
                </div>
                <div className="p-5 text-right">
                  {
                    item?.refrances.map((ref) => {
                      return (
                        <p key={ref}>
                          {ref}
                        </p>
                      )
                    })
                  }
                 
                </div>
              </div>
              )
            })
          }
       
      
          
          {/* Add more grid items here if needed */}
          
        </div>

      </div>
      <div
       className="w-full flex items-center justify-center">
      <Link href="/visa/visa-apication" className="w-[90%] lg:w-[70%] flex rounded-[2px] text-lg items-center justify-center  p-6 bg-main text-white mt-10">تقدم بطلب تأشيره {currentCountry?.name} الأن</Link>

       </div>

    </div>
  );
};

export default Singelblogher;
