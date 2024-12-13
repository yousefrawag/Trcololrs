"use client";

import React, { use } from 'react';
import Singelblogher from '@/components/ui/blogs/Singelblogher';
import RelatedBlogs from '@/components/ui/blogs/RelatedBlogs';
import { AuthFetchBlog } from '@/services/FetchAllContent';

const SinagelBlog = ({params}) => {
  const { id } = use(params);
  const { loadding, blogs } = AuthFetchBlog();

  if (loadding) {
    return <h2>Loading...</h2>;
  }

  const currentBlog = blogs.find((item) => item.id === id);
  console.log(currentBlog);
  

  return (
    <div className="mt-5">
      <Singelblogher currentBlog ={currentBlog} loadding={loadding} />
      <RelatedBlogs />
    </div>
  );
};

export default SinagelBlog;
