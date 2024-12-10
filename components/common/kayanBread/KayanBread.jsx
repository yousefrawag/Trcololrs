import Image from 'next/image'
import smallLogo from "@/public/images/ser-logo.svg"

const KayanBread = ({title}) => {
  return (
    <div className='justify-start flex'>
        <div className='items-center flex flex-col'>
        <h1 className="text-[30px] font-medium text-[#2C2C2E]">{title}</h1>
                  <div className="flex items-center gap-1">
                <span className="h-[2px] w-12 bg-[#00AEEF]"></span>
                <Image
                src={smallLogo}
                alt="logo"
                style={{ objectFit: "cover", width: "52px", height: "34px" }}
                priority // لتحميل الصورة بشكل أسرع إن كانت صغيرة ومهمة
                />
                <span className="h-[2px] w-12 bg-[#00AEEF]"></span>
            </div>
        </div>
            </div>
  )
}

export default KayanBread
