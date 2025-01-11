"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from "@/public/images/home/logo.jpg"
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const getLinkClass = (href) =>
    pathname === href
      ? "text-main border-b-[1px] border-main py-2"
      : "text-main2 hover:text-main py-2";

  return (
    <nav className="py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="w-[140px] h-[91px] relative">
          <Image src={logo} alt="logo" fill style={{ objectFit: "cover" }} />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[16px] font-medium">
          <Link href="/" className={getLinkClass("/")}>
            الرئيسية
          </Link>
          <Link href="/services" className={getLinkClass("/services")}>
            خدماتنا
          </Link>
          <Link href="/about" className={getLinkClass("/about")}>
            من نحن
          </Link>
          <Link href="/visa" className={getLinkClass("/visa")}>
          التأشيرات
          </Link>
          <Link href="/contact" className={getLinkClass("/contact")}>
            تواصل معنا
          </Link>
        </div>

        {/* Request Service Button */}
        <div className="hidden md:block">
          <div>
          <Link href="/" className="before:ease inline-block relative py-2 px-4 rounded overflow-hidden border border-main bg-main text-white shadow-lg transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-[#141414] before:opacity-10 before:duration-700 hover:shadow-[#1d1d1d58] hover:before:-translate-x-40">
      <span relative="relative z-10">طلب الخدمة</span>
    </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-main"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-[122px] right-0 bg-white shadow-lg rounded-b-lg w-full z-50 p-4">
            <div className="flex flex-col gap-4 text-[16px] font-medium">
              <Link
                href="/"
                className={getLinkClass("/")}
                onClick={() => setMenuOpen(false)}
              >
                الرئيسية
              </Link>
              <Link
                href="/services"
                className={getLinkClass("/services")}
                onClick={() => setMenuOpen(false)}
              >
                خدماتنا
              </Link>
              <Link
                href="/about"
                className={getLinkClass("/about")}
                onClick={() => setMenuOpen(false)}
              >
                من نحن
              </Link>
              <Link
                href="/visa"
                className={getLinkClass("/visa")}
                onClick={() => setMenuOpen(false)}
              >
                التأشيرات
              </Link>
              <Link
                href="/contact"
                className={getLinkClass("/contact")}
                onClick={() => setMenuOpen(false)}
              >
                تواصل معنا
              </Link>
              <div>
          <Link href="/contact" className="before:ease inline-block relative py-2 px-4 rounded overflow-hidden border border-main bg-main text-white shadow-lg transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-[#141414] before:opacity-10 before:duration-700 hover:shadow-[#1d1d1d58] hover:before:-translate-x-40">
      <span relative="relative z-10">طلب الخدمة</span>
    </Link>
          </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
