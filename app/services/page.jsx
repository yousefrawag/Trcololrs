"use client"
import Services from "@/components/pages/services/Services"
import { Services as ServicesDATA } from "@/components/data/ServicesData"
import { AuthFetchServices } from '@/services/FetchAllContent'
import Loadding from '@/components/common/kayanBread/Loadding'
const page = () => {

  return (
    <>
      <Services serVicesData={ServicesDATA}/>
    </>
  )
}

export default page
