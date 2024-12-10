import React from 'react'
import Image from "next/image"
import image from "@/public/images/R 1 (1).png"
import Contact from '@/components/ui/contactSection/Contact'

const contact = () => {
  return (
    <div className='w-full'>
         <Image src={image} alt="blog-image" className="w-full h-[70vh] object-cover mb-20	" />
        <Contact />
    </div>
  )
}

export default contact