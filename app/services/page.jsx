"use client"
import Services from "@/components/pages/services/Services"

import { AuthFetchServices } from '@/services/FetchAllContent'
import Loadding from '@/components/common/kayanBread/Loadding'
const page = () => {
  const {loading , Services:serVicesData } = AuthFetchServices()
  if(loading) {
    return <Loadding />
  }
  return (
    <>
      <Services serVicesData={serVicesData}/>
    </>
  )
}

export default page
