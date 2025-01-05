import React from 'react'
import KayanBread from "@/components/common/kayanBread/KayanBread";

const Loadding = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-20 bg-main bottom-0 w-full h-full bg-red ">
       <div className='w-full h-full flex items-center justify-center flex-col bg-red'>
        <span className="loader mb-20"></span>
      <KayanBread titel="ألوان مسافر" />
       </div>
       

    </div>
  )
}

export default Loadding