import KayanBread from "@/components/common/kayanBread/KayanBread";
import Link from "next/link";
import serFeat from "@/public/images/ser-feat.svg";
import Image from "next/image";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";

const Services = () => {
  return (
    <section className="py-[80px] bg-[#D6ECF7] overflow-hidden ">
      <div className="container mx-auto">
        <div className="flex items-center w-[50%] translate-x-[-25%] m-auto">
          <KayanBread title="اكتشف خدماتنا المميزة" />
        </div>
        <div className="grid grid-cols-4 pt-12 gap-4 justify-between">
          <div className={cardStyle}>
            <div>
              <Image
                src={serFeat}
                alt="feat"
                style={{ objectFit: "cover", width: "100%", height: "190px" }}
                className="rounded"
              />
            </div>
            <div className="py-4 text-center">
              <h2 className="font-medium text-[#2C2C2E] font-semibold mb-2">تنسيق الرحلات</h2>
              <div className={contentStyle}>
                <TfiLayoutGrid3Alt className="text-[#00AEEF]"/>
                <p className="text-[#69696A] text-[12px]">حجوزات الفنادق في جميع أنحاء العالم</p>
                </div> 
                <div className={contentStyle}>
                <TfiLayoutGrid3Alt className="text-[#00AEEF]"/>
                <p className="text-[#69696A] text-[12px]">حجوزات الفنادق في جميع أنحاء العالم</p>
                </div> 
            </div>
            <div>
              <Link className="py-2 inline-block rounded px-6 bg-[#00AEEF] text-white" href="#">اعرف المزيد</Link>
            </div>
          </div>
          <div className={cardStyle}>
            <div>
              <Image
                src={serFeat}
                alt="feat"
                style={{ objectFit: "cover", width: "100%", height: "190px" }}
                className="rounded"
              />
            </div>
            <div className="py-4 text-center">
              <h2 className="font-medium text-[#2C2C2E] font-semibold mb-2">تنسيق الرحلات</h2>
              <div className={contentStyle}>
                <TfiLayoutGrid3Alt className="text-[#00AEEF]"/>
                <p className="text-[#69696A] text-[12px]">حجوزات الفنادق في جميع أنحاء العالم</p>
                </div> 
                <div className={contentStyle}>
                <TfiLayoutGrid3Alt className="text-[#00AEEF]"/>
                <p className="text-[#69696A] text-[12px]">حجوزات الفنادق في جميع أنحاء العالم</p>
                </div> 
            </div>
            <div>
              <Link className="py-2 inline-block rounded px-6 bg-[#00AEEF] text-white" href="#">اعرف المزيد</Link>
            </div>
          </div>
          <div className={cardStyle}>
            <div>
              <Image
                src={serFeat}
                alt="feat"
                style={{ objectFit: "cover", width: "100%", height: "190px" }}
                className="rounded"
              />
            </div>
            <div className="py-4 text-center">
              <h2 className="font-medium text-[#2C2C2E] font-semibold mb-2">تنسيق الرحلات</h2>
              <div className={contentStyle}>
                <TfiLayoutGrid3Alt className="text-[#00AEEF]"/>
                <p className="text-[#69696A] text-[12px]">حجوزات الفنادق في جميع أنحاء العالم</p>
                </div> 
                <div className={contentStyle}>
                <TfiLayoutGrid3Alt className="text-[#00AEEF]"/>
                <p className="text-[#69696A] text-[12px]">حجوزات الفنادق في جميع أنحاء العالم</p>
                </div> 
            </div>
            <div>
              <Link className="py-2 inline-block rounded px-6 bg-[#00AEEF] text-white" href="#">اعرف المزيد</Link>
            </div>
          </div>
          <div className={cardStyle}>
            <div>
              <Image
                src={serFeat}
                alt="feat"
                style={{ objectFit: "cover", width: "100%", height: "190px" }}
                className="rounded"
              />
            </div>
            <div className="py-4 text-center">
              <h2 className="font-medium text-[#2C2C2E] font-semibold mb-2">تنسيق الرحلات</h2>
              <div className={contentStyle}>
                <TfiLayoutGrid3Alt className="text-[#00AEEF]"/>
                <p className="text-[#69696A] text-[12px]">حجوزات الفنادق في جميع أنحاء العالم</p>
                </div> 
                <div className={contentStyle}>
                <TfiLayoutGrid3Alt className="text-[#00AEEF]"/>
                <p className="text-[#69696A] text-[12px]">حجوزات الفنادق في جميع أنحاء العالم</p>
                </div> 
            </div>
            <div>
              <Link className="py-2 inline-block rounded px-6 bg-[#00AEEF] text-white" href="#">اعرف المزيد</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const cardStyle = "p-4 h-auto bg-white rounded shadow-lg flex flex-col items-center";
const contentStyle = "flex items-center gap-2 py-2"

export default Services;
