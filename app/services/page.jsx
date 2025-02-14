"use client"
import Services from "@/components/pages/services/Services"

import Loadding from '@/components/common/kayanBread/Loadding'
import { AuthFetchServices } from "@/services/FetchAllContent"
const page = () => {
  const {loading, Services:getServices} = AuthFetchServices()
if(loading){
  return <Loadding />
}
  return (
    <>
      <Services serVicesData={getServices}/>
    </>
  )
}

export default page
