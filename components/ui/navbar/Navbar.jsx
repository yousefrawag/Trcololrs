"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/public/images/logo.svg";

const Navbar = () => {
  const pathname = usePathname();

  const getLinkClass = (href) =>
    pathname === href
      ? "text-[#00AEEF] border-b-[1px] border-[#00AEEF]"
      : "text-[#2C2C2E] hover:text-[#00AEEF]";

  return (
    <nav className="py-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="w-[140px] h-[91px] relative">
            <Image src={logo} alt="logo" fill style={{ objectFit: "cover" }} />
          </div>
          <div className="flex items-center gap-8 text-[16px] font-medium">
            <Link href="/" className={getLinkClass("/")}>
              الرئيسية
            </Link>
            <Link href="/services" className={getLinkClass("/services")}>
              خدماتنا
            </Link>
            <Link href="/about" className={getLinkClass("/about")}>
              من نحن
            </Link>
            <Link href="/blogs" className={getLinkClass("/blog")}>
              المدونة
            </Link>
            <Link href="/contact" className={getLinkClass("/contact")}>
              تواصل معنا
            </Link>
          </div>
          <div>
            <Link
              className="py-1 px-6 text-white text-[16px] rounded-lg bg-[#00AEEF] font-medium"
              href="/request-service"
            >
              طلب الخدمة
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
