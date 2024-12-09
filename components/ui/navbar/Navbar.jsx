import Link from "next/link"
import logo from "@/public/images/logo.svg"
import Image from "next/image"
const Navbar = () => {
  return (
    <nav className="py-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
            <div className="w-[140px] h-[91px] relative">
                <Image
                src={logo}
                alt="logo"
                objectFit="cover"
                layout="fill"
                />
            </div>
            <div className="flex items-center gap-6 font-bold text-[#2C2C2E]">
                    <Link href="#">الرئيسية</Link>
                    <Link href="#">خدماتنا</Link>
                    <Link href="#">من نحن</Link>
                    <Link href="#">المدونة</Link>
                    <Link href="#">تواصل معنا</Link>
            </div>
            <div>
                <Link className=" py-3 px-6 text-white rounded-lg bg-[#00AEEF] font-medium" href="#">طلب الخدمة</Link>
            </div>
        </div>
      </div>
    </nav>
  )
}



export default Navbar
