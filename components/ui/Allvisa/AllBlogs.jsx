"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { countryData } from "@/components/data/countryDatat";
import KayanBread from '@/components/common/kayanBread/KayanBread';
import { AuthFetchBlog } from '@/services/FetchAllContent';
const AllBlogs = ({blogs}) => {

  return (
    <div className='container mx-auto mt-5 px-4'>
              <div className="flex flex-col lg:justify-between lg:flex-row  mb-7">
                  <KayanBread title="التأشيرات" />
                    <span className='text-[#00AEEF] underline w-[120px] h-[40px]'>
                  
                    </span>
                </div>
            <div className="grid grid-cols-1 lg:grid-cols-3  gap-4">
                {
                    countryData?.map((item) => {
                        return (
                            <Link href={`/visa/${item.id}`} className={cardStyle} key={item.id}>
                            <div className='w-[100%] h-[150px] relative'>
                              <Image
                                src={item.image}
                                alt="feat"
                                width={400}
                                height={50}
                                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                className="rounded-[20px]"
                              />
                              <Image
                                src={item.icon}
                                alt="feat"
                                width={50}
                                height={50}
                                style={{ objectFit: "cover" }}
                                className="rounded-full absolute w-[50px] h-[50px] bottom-[-15px] left-1/2 transform -translate-x-1/2"
                              />
                            </div>
                            <div className="py-4 flex items-center justify-center w-full">
                              <h2 className="text-[#2C2C2E] font-bold mb-2 flex text-xl mt-5 items-center justify-center text-center">
                                {item?.name}
                              </h2>
                            </div>
                          </Link>
                        )
                    })
                }
    
        </div>
    </div>
  )
}
const cardStyle = "h-[240px] bg-white rounded-[20px] shadow-lg border-1 border-gray-600 flex flex-col items-start";

export default AllBlogs