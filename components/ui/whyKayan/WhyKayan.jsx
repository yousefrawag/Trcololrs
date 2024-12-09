import KayanBread from "@/components/common/kayanBread/KayanBread"
import Image from "next/image"
import whyKayan from "@/public/images/whyKayan.svg"
import frame1 from "@/public/images/frame1.svg"

const WhyKayan = () => {
  return (
    <section className="py-[80px] relative ">
                <Image
                src={frame1}
                alt="frame1"
                style={{ objectFit: "cover", width: "109px", height: "157px",position:"absolute", top:"0", left:"0" }}
                />
      <div className="container mx-auto">
      <div className='flex justify-between items-center'>
        <div className="w-[50%]">
            <KayanBread title="لماذا كيان؟"/>
            <div>
                <p className="mt-6 text-[#69696A] leading-8 max-w-[80%] ">نتميز في كيان كوم بشبكة علاقات حكومية قوية تمتد عبر عدة دول، مما يتيح لنا تقديم حلول مرنة وسريعة تلبي احتياجات العملاء بكفاءة. نفخر بفريق عمل محترف يمتلك خبرة واسعة في مجالات السفر والخدمات الحكومية، مما يضمن تقديم خدمات متكاملة تشمل جميع الجوانب، لتكون تجربتك معنا سلسة ومتميزة في كل خطوة</p>
            </div>
        </div>
        <div className="w-[50%] flex items-start justify-end">
        <Image
                src={whyKayan}
                alt="why Kayan"
                style={{ objectFit: "cover", width: "450px", height: "550px" }}
                />
        </div>
        </div>
      </div>
    </section>
  )
}

export default WhyKayan
