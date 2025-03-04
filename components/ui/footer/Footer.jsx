"use client"
import logo from "@/public/images/home/logo.jpg"
import Image from "next/image"
import Link from "next/link";
import { FaSquareXTwitter } from "react-icons/fa6";
import intsa from "../../../public/images/instagram.png"
import Twiter from "../../../public/images/x.png"

import { FaFacebookF, FaTiktok, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

import { AuthFetchServices } from '@/services/FetchAllContent'

const Footer = () => {
  const {loading ,  Services} = AuthFetchServices()
  return (
    <footer className='w-full bg-[#F1F1F1]'>
      <div className="container mx-auto px-4">
        <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8 items-center py-[80px] justify-between'>
          <div>
          <div className="w-[140px] h-[91px] relative">
                <Image
                src={logo}
                alt="logo"
                fill
                style={{ objectFit: "cover" }}
                />
            </div>
            <p className="max-w-[400px] py-4 text-[16px] text-[#69696A]">شركة الوان المسافر متخصصة في تقديم حلول شاملة في مجالات السفر والسياحة والخدمات الحكومية. تميزت الشركة منذ انطلاقها بتقديم خدمات مبتكرة لتلبية احتياجات العملاء</p>
            <div className="text-[#00AEEF] flex items-center gap-4">
              <Link href="https://www.facebook.com/Travelercolors"><FaFacebookF /></Link>
           
              <Link  href="https://www.instagram.com/travelercolors/"><Image className="w-5 h-5" src={intsa} alt="instagram" /></Link>
            
              <Link href="https://www.instagram.com/travelercolors/"><Image  src={Twiter} alt="twiter" className="w-5 h-5" />
              </Link>
            </div>
          </div>
          <div>
            <h2 className={headStyle}>الخدمات</h2>
            <ul className="text-[#757575]">
       <li className={liStyle}>
       <Link href={`services/`}>حجوزات الفنادق</Link>
  
       </li>
       <li className={liStyle}>
 
       <Link href={`services/`}>حجوزات الطيران</Link>
       </li>
       <li className={liStyle}>

       <Link href={`services/`}>التأشيرات </Link>
 
       </li>
            </ul>
          </div>
          <div>
            <h2 className={headStyle}>الشركة</h2>
            <ul className="text-[#757575]">
              <li className={liStyle}><Link href="/about">عنا</Link></li>
              <li className={liStyle}><Link href="/contact">تواصل معنا</Link></li>
              <li className={liStyle}><Link href="/services">الخدمات</Link></li>

              <li className={liStyle}><Link href="/blogs">المدونات</Link></li>
            </ul>
          </div>
          {/* <div>
            <h2 className={headStyle}>الدعم</h2>
            <ul className="text-[#757575]">
              <li className={liStyle}><Link href="#">البداية</Link></li>
              <li className={liStyle}><Link href="#">مركز المساعدة</Link></li>
              <li className={liStyle}><Link href="#">حالة الخادم</Link></li>
              <li className={liStyle}><Link href="#">الابلاغ عن خطأ</Link></li>
              <li className={liStyle}><Link href="#">دعم الدردشة</Link></li>
            </ul>
            </div> */}
        </div>
        <div className="border-t-[1px] border-[#D9DBE9] flex gap-2 flex-col md:flex-row items-center justify-center text-center md:justify-between w-full py-8">
          <div className="order-2 md:order-1">
            <p className="text-[#2B2B2B] text-[14px]">Copyright &copy; 2025 trcolors</p>
          </div>
          <div className="order-1 md:order-2">
            <Link href="/PrivacyPolicy" className="text-[#757575]  text-[15px]">جميع الحقوق محفوظة <span className="text-[#00AEEF]">| الشروط والأحكام | سياسة الخصوصية</span></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

const headStyle = "font-bold text-black text-[20px] mb-4"
const liStyle = "my-2 hover:text-[#00AEEF]"

export default Footer
