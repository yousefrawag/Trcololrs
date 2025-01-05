
import KayanBread from "@/components/common/kayanBread/KayanBread"
import aboutimage from "@/public/images/about/about-home.47762faa.svg"
import Image from "next/image"
const About = () => {

  
  return (
    <section className='py-[80px]'>
      <div className="container mx-auto px-4">
    

        <div  className='flex justify-between flex-col gap-10 md:gap-2 md:flex-row items-center   mb-4'>
        <div className="w-full md:w-[50%]">
            <KayanBread title="من نحن"/>
            <div>
                <h1 className="text-[32px] font-medium my-4 text-[#2C2C2E]">
          
                دعنا نتكلم عنا
                </h1>
                <p className="text-[#69696A] leading-8 max-w-[100%] md:max-w-[80%] "
                > 
            شركة ألوان المسافر متخصصة في تقديم حلول شاملة في مجالات السفر والسياحة والخدمات الحكومية. تميزت الشركة منذ انطلاقها بتقديم خدمات مبتكرة لتلبية احتياجات العملاء، مع بناء علاقات قوية مع المؤسسات الحكومية والخاصة في السعودية، الإمارات، الأردن، مصر، وسلطنة عمان.
                  </p>
            </div>
        </div>
        <div className="w-[100%] md:w-[50%] flex items-center md:items-start justify-center md:justify-end">
        <Image
                src={aboutimage }
                alt="about Image"
                width={100}
                height={100}
                priority
                style={{ objectFit: "cover", width: "403px", height: "448px" }}
                />
        </div>
        </div>

   
      </div>
    </section>
  )
}

export default About
