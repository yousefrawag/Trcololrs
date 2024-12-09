import logo from "@/public/images/footer-logo.svg"
import Image from "next/image"
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='w-full bg-[#F1F1F1]'>
      <div className="container mx-auto">
        <div className='flex py-[80px] justify-between'>
          <div>
          <div className="w-[140px] h-[91px] relative">
                <Image
                src={logo}
                alt="logo"
                fill
                style={{ objectFit: "cover" }}
                />
            </div>
            <p className="max-w-[400px] py-4 text-[16px] text-[#69696A]">شركة  كيان تأسست عام 2020 متخصصة في تقديم حلول شاملة في مجالات السفر والسياحة والخدمات الحكومية. تميزت الشركة منذ انطلاقها بتقديم خدمات مبتكرة لتلبية احتياجات العملاء</p>
            <div className="text-[#00AEEF] flex items-center gap-4">
              <Link href="#"><FaFacebookF /></Link>
              <Link href="#"><FaTwitter />
              </Link>
              <Link href="#"><FaInstagram /></Link>
              <Link href="#"><FaLinkedinIn />
              </Link>
              <Link href="#"><FaYoutube />
              </Link>
            </div>
          </div>
          <div>
            <h2 className={headStyle}>الخدمات</h2>
            <ul className="text-[#757575]">
              <li className={liStyle}><Link href="#">المميزات</Link></li>
              <li className={liStyle}><Link href="#">السعر</Link></li>
              <li className={liStyle}><Link href="#">دراسات الحالة</Link></li>
              <li className={liStyle}><Link href="#">ملاحظات</Link></li>
              <li className={liStyle}><Link href="#">التحديثات</Link></li>
            </ul>
          </div>
          <div>
            <h2 className={headStyle}>الشركة</h2>
            <ul className="text-[#757575]">
              <li className={liStyle}><Link href="#">عنا</Link></li>
              <li className={liStyle}><Link href="#">تواصل معنا</Link></li>
              <li className={liStyle}><Link href="#">وظائف</Link></li>
              <li className={liStyle}><Link href="#">الثقافة</Link></li>
              <li className={liStyle}><Link href="#">المدونات</Link></li>
            </ul>
          </div>
          <div>
            <h2 className={headStyle}>الدعم</h2>
            <ul className="text-[#757575]">
              <li className={liStyle}><Link href="#">البداية</Link></li>
              <li className={liStyle}><Link href="#">مركز المساعدة</Link></li>
              <li className={liStyle}><Link href="#">حالة الخادم</Link></li>
              <li className={liStyle}><Link href="#">الابلاغ عن خطأ</Link></li>
              <li className={liStyle}><Link href="#">دعم الدردشة</Link></li>
            </ul>
            </div>
        </div>
        <div className="border-t-[1px] border-[#D9DBE9] flex items-center justify-between w-full py-8">
          <div>
            <p className="text-[#2B2B2B] text-[14px]">Copyright &copy; 2024 CAYYAN</p>
          </div>
          <div>
            <p className="text-[#757575]  text-[15px]">جميع الحقوق محفوظة <span className="text-[#00AEEF]">| الشروط والأحكام | سياسة الخصوصية</span></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

const headStyle = "font-bold text-black text-[20px] mb-4"
const liStyle = "my-2 hover:text-[#00AEEF]"

export default Footer
