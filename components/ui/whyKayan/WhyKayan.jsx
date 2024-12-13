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
                style={{ objectFit: "cover", width: "109px", height: "157px",position:"absolute", top:"0", right:"0", transform: "rotateZ(180deg)" }}
                />
      <div className="container mx-auto px-4">
      <div className='flex gap-10 lg:gap-0 justify-between flex-col lg:flex-row items-center'>
        <div className="w-[100%] lg:w-[50%]">
            <KayanBread title="لماذا كيان؟"/>
            <div>
                <p className="mt-6 text-[#69696A] leading-8 max-w-[100%] lg:max-w-[80%] ">نتميز في كيان كوم بشبكة علاقات حكومية قوية تمتد عبر عدة دول، مما يتيح لنا تقديم حلول مرنة وسريعة تلبي احتياجات العملاء بكفاءة. نفخر بفريق عمل محترف يمتلك خبرة واسعة في مجالات السفر والخدمات الحكومية، مما يضمن تقديم خدمات متكاملة تشمل جميع الجوانب، لتكون تجربتك معنا سلسة ومتميزة في كل خطوة</p>
            </div>
        </div>
        <div className="w-[100%] lg:w-[50%] flex items-start justify-center lg:justify-end">
        <Image
                src={whyKayan}
                alt="why Kayan"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                className="w-[100%]"
                />
        </div>
        </div>
      </div>
    </section>
  )
}

export default WhyKayan
