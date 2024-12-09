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
      <div className="container mx-auto relative z-10 flex flex-col justify-center w-full h-full">
        <h1 className="text-white text-[48px] max-w-[55%] font-bold">
          ريادة في خدمات السفر والسياحة بمنطقة الشرق الأوسط
        </h1>
        <p className="text-white my-6 text-[25px] max-w-[60%]">
          تسعي كيان لتوفير تجربة فريدة لعملائنا من خلال تسهيل الإجراءات، تقديم خدمات عالية الجودة، وبناء شراكات قوية تلبي تطلعات العملاء في مختلف الدول
        </p>
        <div className=" flex gap-4 items-center">
          <Link
            href="#"
            className="py-2 px-6 font-medium text-white rounded-lg bg-[#00AEEF] font-medium"
          >
            استكشف خدماتنا
          </Link>
          <Link className="font-medium text-white flex gap-2 items-center" href="#">
            اتصل بنا
            <GoArrowUpRight />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
