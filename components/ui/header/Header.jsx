import coverImage from "@/public/images/background-cover.svg";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const Header = () => {
  return (
    <header className="w-full h-[583px] relative">
      {/* Background image */}
      <Image
        src={coverImage}
        alt="logo"
        fill
        style={{ objectFit: "cover" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Content */}
      <div className="container px-4 mx-auto relative z-10 flex flex-col justify-center text-center md:text-start  md:items-start items-center w-full h-full">
        <h1 className="text-white text-[26px]  md:text-[48px] max-w-[100%] lg:max-w-[55%] font-bold">
          ريادة في خدمات السفر والسياحة بمنطقة الشرق الأوسط
        </h1>
        <p className="text-white my-6 text-[20px] leading-9 md:text-[25px] md:max-w-[60%] max-w-[100%]">
          تسعي كيان لتوفير تجربة فريدة لعملائنا من خلال تسهيل الإجراءات، تقديم خدمات عالية الجودة، وبناء شراكات قوية تلبي تطلعات العملاء في مختلف الدول
        </p>
        <div className=" flex gap-4 items-center">
        <div>
          <Link href="/services" className="before:ease inline-block relative font-medium py-2 px-6 rounded overflow-hidden border border-[#00AEEF] bg-[#00AEEF] text-white shadow-lg transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-[#141414] before:opacity-10 before:duration-700 hover:shadow-[#1d1d1d58] hover:before:-translate-x-60">
      <span relative="relative z-10">استكشف خدماتنا</span>
    </Link>
          </div>

          <Link className="font-medium hover:opacity-50 transition-all text-white flex gap-2 items-center" href="#">
            اتصل بنا
            <GoArrowUpRight />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
