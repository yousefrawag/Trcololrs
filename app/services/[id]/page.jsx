"use client"
import SingleSevice from "@/components/pages/services/SingleServices";
import React, { use } from 'react';

import { AuthFetchServices } from '@/services/FetchAllContent'
import Loadding from '@/components/common/kayanBread/Loadding'

function Page({ params }) {

  const { id } = use(params);
  const {loading, Services:getServices} = AuthFetchServices()
  const currentServices = getServices.find((item) => item?._id === id)
if(loading){
  return <Loadding />
}
    return (
      <div>
        <SingleSevice  currentServices={currentServices}/>
      </div>
    );
  }
  
  export default Page;
  