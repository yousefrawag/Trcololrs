"use client"
import SingleSevice from "@/components/pages/services/SingleServices";
import React, { use } from 'react';

import { AuthFetchServices } from '@/services/FetchAllContent'
import Loadding from '@/components/common/kayanBread/Loadding'

function Page({ params }) {
  const {loading , Services } = AuthFetchServices()
  if(loading) {
    return <Loadding />
  }
  const { id } = use(params);
  const currentServices = Services.find((item) => item.id === id)
  console.log("current services " , currentServices);
    return (
      <div>
        <SingleSevice  currentServices={currentServices}/>
      </div>
    );
  }
  
  export default Page;
  