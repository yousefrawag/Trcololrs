"use client";

import React, { use } from 'react';
import Singelblogher from '@/components/ui/Allvisa/Singelblogher';
import RelatedBlogs from '@/components/ui/Allvisa/RelatedBlogs';
import { AuthFetchVisa } from '@/services/FetchAllContent';
import { countryData } from '@/components/data/countryDatat';
import Loadding from '@/components/common/kayanBread/Loadding';
const SinagelBlog = ({params}) => {
  const { id } = use(params);
  const {loading, Visa} = AuthFetchVisa()
  if(loading) {
      return  <Loadding />
  }



  const currentCountry = Visa.find((item) => item._id === id);

  console.log("current" , currentCountry);
  

  return (
    <div className="mt-5 bg-[#eee] pb-20">
      <RelatedBlogs  blogs={Visa}/>
      <Singelblogher currentCountry ={currentCountry}  />
      
    </div>
  );
};

export default SinagelBlog;
