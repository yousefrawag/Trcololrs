"use client"
import React from 'react'
import Image from "next/image"
import image from "@/public/images/sinagle-blog-image.png"
import { AuthFetchBlog } from '@/services/FetchAllContent';

const Singelblogher = ({currentBlog , loadding}) => {
  if(loadding) {
    return <h2>loadding...</h2>
  }
console.log(" from blog" , currentBlog);

  return (
    <div className='w-full '>
        <Image   
      width={400}
      height ={50}
      alt="blog-image"
      layout="responsive"
      className="w-full h-[50vh] object-cover" // Custom classes for styling
      quality={100} // High-quality rendering
     src={currentBlog?.img ? currentBlog?.img :image } 
   
    />
        <div className='container mx-auto mt-20'>
                <div className="flex flex-col lg:justify-between lg:flex-row ">
                    <h1 className="text-2xl text-[#2C2C2E] 	font-semibold">
                   {currentBlog?.title}
                    </h1>
                    <span className='text-[#00AEEF] mt-5'>
                    تاريخ النشر: 5 اكتوبر 2024
                    </span>
                </div>
                <p className="leading-9	text-[#69696A] mt-10 w-full lg:w-[90%]">
                          {
                            currentBlog?.details
                          }
                </p>
        </div>
    
    </div>
  )
}

export default Singelblogher