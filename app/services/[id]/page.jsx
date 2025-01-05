"use client"
import SingleSevice from "@/components/pages/services/SingleServices";
import React, { use } from 'react';
import { Services as ServicesDATA } from "@/components/data/ServicesData"
import { AuthFetchServices } from '@/services/FetchAllContent'
import Loadding from '@/components/common/kayanBread/Loadding'

function Page({ params }) {

  const { id } = use(params);
  const currentServices = ServicesDATA.find((item) => item.id === id)

    return (
      <div>
        <SingleSevice  currentServices={currentServices}/>
      </div>
    );
  }
  
  export default Page;
  