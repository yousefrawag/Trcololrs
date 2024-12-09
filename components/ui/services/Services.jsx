import KayanBread from "@/components/common/kayanBread/KayanBread";
import Link from "next/link";
import serFeat from "@/public/images/ser-feat.svg";
import Image from "next/image";

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
            <div>
              <h2>تنسيق الرحلات</h2>
              <div></div> 
              <div></div>
            </div>
            <div>
              <Link href="#">اعرف المزيد</Link>
            </div>
          </div>
          <div className={cardStyle}>
            <div>
              <Image
                src={serFeat}
                alt="feat"
                style={{ objectFit: "cover", width: "100%", height: "190px" }}
              />
            </div>
            <div>
              <h2>تنسيق الرحلات</h2>
              <div></div> 
              <div></div>
            </div>
            <div>
              <Link href="#">اعرف المزيد</Link>
            </div>
          </div>
          <div className={cardStyle}>
            <div>
              <Image
                src={serFeat}
                alt="feat"
                style={{ objectFit: "cover", width: "100%", height: "190px" }}
              />
            </div>
            <div>
              <h2>تنسيق الرحلات</h2>
              <div></div> 
              <div></div>
            </div>
            <div>
              <Link href="#">اعرف المزيد</Link>
            </div>
          </div>
          <div className={cardStyle}>
            <div>
              <Image
                src={serFeat}
                alt="feat"
                style={{ objectFit: "cover", width: "100%", height: "190px" }}
              />
            </div>
            <div>
              <h2>تنسيق الرحلات</h2>
              <div></div> 
              <div></div>
            </div>
            <div>
              <Link href="#">اعرف المزيد</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const cardStyle = "p-4 bg-white rounded shadow-lg";

export default Services;
