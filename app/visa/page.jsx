"use client"
import React from 'react'
import AllBlogs from '@/components/ui/Allvisa/AllBlogs'
import Contact from '@/components/ui/contactSection/Contact'
import { AuthFetchBlog } from '@/services/FetchAllContent'
import Loadding from '@/components/common/kayanBread/Loadding'
const BLOGS = () => {
      const {loading, blogs} = AuthFetchBlog()
  if(loading) {
      return  <Loadding />
  }
  return (
    <div className='mb-10'>
        <AllBlogs  blogs={blogs}/>
        <Contact />
    </div>
  )
}

export default BLOGS