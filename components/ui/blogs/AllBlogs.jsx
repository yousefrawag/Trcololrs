"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

import KayanBread from '@/components/common/kayanBread/KayanBread';
import { AuthFetchBlog } from '@/services/FetchAllContent';
const AllBlogs = ({blogs}) => {

  return (
    <div className='container mx-auto mt-5'>
              <div className="flex flex-col lg:justify-between lg:flex-row  mb-7">
                  <KayanBread title="المدونة" />
                    <span className='text-[#00AEEF] underline w-[120px] h-[40px]'>
                  
                    </span>
                </div>
            <div className="grid grid-cols-1 lg:grid-cols-3  gap-4">
                {
                    blogs?.map((item) => {
                        return (
                            <div className={cardStyle} key={item?.id}>
                            <div className='w-[100%] h-[220px]'>
                            <Image
                                src={item?.img}
                                alt="feat"
                                width={400} // Specify a width
                                height={220} // Specify a height matching your design
                                quality={100} 
                                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                className="rounded"
                                priority
                            />
                            </div>
                            <div className='p-4'>
                            <div className="py-4">
                            <h2 className=" text-[#2C2C2E] font-semibold mb-2">{item?.title} </h2>
                            <div>
                                <p className="text-[#69696A] text-[12px]"> {item?.details?.slice(0 , 70)}</p>
                                </div> 
                            </div>
                            <div>
                            <Link className="py-1 inline-block rounded px-6 bg-[#00AEEF] text-white" href={`/blogs/${item.id}`}>قراءه المدونة</Link>
                            </div>
                            </div>
                        </div>
                        )
                    })
                }
    
        </div>
    </div>
  )
}
const cardStyle = "h-auto bg-white rounded shadow-lg border-1 border-gray-600 flex flex-col items-start mb-5";

export default AllBlogs