"use client"
import React from 'react'
import AllBlogs from '@/components/ui/blogs/AllBlogs'
import Contact from '@/components/ui/contactSection/Contact'
import { AuthFetchBlog } from '@/services/FetchAllContent'
const BLOGS = () => {
      const {loading, blogs} = AuthFetchBlog()
  if(loading) {
      return <h2>loadding ...</h2>
  }
  return (
    <div className='mb-10'>
        <AllBlogs  blogs={blogs}/>
        <Contact />
    </div>
  )
}

export default BLOGS