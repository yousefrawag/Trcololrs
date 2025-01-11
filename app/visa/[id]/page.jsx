"use client";

import React, { use } from 'react';
import Singelblogher from '@/components/ui/Allvisa/Singelblogher';
import RelatedBlogs from '@/components/ui/Allvisa/RelatedBlogs';
import { AuthFetchBlog } from '@/services/FetchAllContent';
import { countryData } from '@/components/data/countryDatat';
const SinagelBlog = ({params}) => {
  const { id } = use(params);
  const { loadding, blogs } = AuthFetchBlog();

  if (loadding) {
    return <h2>Loading...</h2>;
  }

  const currentCountry = countryData.find((item) => item.id === id);

  

  return (
    <div className="mt-5 bg-[#eee] pb-20">
      <RelatedBlogs  blogs={blogs}/>
      <Singelblogher currentCountry ={currentCountry} loadding={loadding} />
      
    </div>
  );
};

export default SinagelBlog;
