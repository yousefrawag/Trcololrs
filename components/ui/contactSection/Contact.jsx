import KayanBread from "@/components/common/kayanBread/KayanBread";
import contact from "@/public/images/contact.svg";
import Image from "next/image";
import { FaBorderAll, FaPhoneSquare, FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="p-[30px] px-5 lg:px-[50px] mb-[80px] rounded-lg w-[100%] lg:w-[75%] mx-auto bg-[#D6ECF7]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <KayanBread title="تواصل معنا" />
          <div className="text-center w-[50%]">
            <h4 className="text-[#00AEEF] font-medium text-[18px] lg:text-[20px]">
              اطلب خدمتك
            </h4>
            <h1 className="text-[24px] lg:text-[32px] font-medium text-[#2C2C2E]">
              نحن هنا من اجل خدمتك
            </h1>
          </div>
        </div>
        <div className="pt-[50px] flex flex-col md:flex-row justify-between items-center">
          <div>
            <Image
              src={contact}
              alt="Contact"
              layout="intrinsic"
              className="rounded"
              priority
            />
          </div>
          <div className="w-[50%]">
            <form className="mx-auto flex flex-col gap-6">



          <label
            htmlFor="UserEmail"
            className="relative block overflow-hidden border-b border-gray-500 bg-transparent pt-3"
          >
            <input
              type="text"
              id="UserEmail"
              placeholder="Email"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent  focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span
              className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
            >
              الإسم
            </span>
          </label>
          <label
            htmlFor="UserEmail"
            className="relative block overflow-hidden border-b border-gray-500 bg-transparent pt-3 "
          >
            <input
              type="text"
              id="UserEmail"
              placeholder="Email"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent  focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span
              className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
            >
              رقم الهاتف
            </span>
          </label>
          <label
            htmlFor="UserEmail"
            className="relative block overflow-hidden border-b border-gray-500 bg-transparent pt-3"
          >
            <input
              type="email"
              id="UserEmail"
              placeholder="Email"
              className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent  focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
            />

            <span
              className="absolute start-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs"
            >
              الإيميل
            </span>
          </label>
              {/* Branch Location */}
              <div className="flex items-center border-b-[1px] border-b-gray-500 rounded text-[#00AEEF]">
                <FaLocationDot />
                <select
                  id="branch-location"
                  className="font-semibold text-gray-900 text-sm rounded-lg block w-full p-2 bg-transparent"
                  defaultValue=""
                >
                  <option disabled value="">
                    حدد موقع الفرع
                  </option>
                  <option value="مصر">مصر</option>
                  <option value="السعودية">السعودية</option>
                  <option value="الإمارات">الإمارات</option>
                </select>
              </div>

      
        

              {/* Services */}
              <div className="flex items-center border-b-[1px] border-b-gray-500 rounded text-[#00AEEF]">
                <FaBorderAll />
                <select
                  id="services"
                  className="font-semibold text-gray-900 text-sm rounded-lg block w-full p-2 bg-transparent"
                  defaultValue=""
                >
                  <option disabled value="">
                    اختر الخدمات
                  </option>
                  <option value="تأسيسي الشركات">تأسيس الشركات</option>
                  <option value="حجوزات السفر">حجوزات السفر</option>
                  <option value="الخدمات الحكوميه">الخدمات الحكوميه</option>
                  <option value="خدمات التأشيرات">خدمات التأشيرات</option>
                </select>
              </div>

              <button className="relative inline-block font-medium py-2 px-6 rounded overflow-hidden border border-[#00AEEF] bg-[#00AEEF] text-white shadow-lg transition-all hover:shadow-[#1d1d1d58]">
                <span className="relative z-10">طلب خدمة</span>
              </button>
            </form>
          </div>
       
        </div>
        <div className="mt-5">
            <h2 className="text-[#00AEEF]"> 
            للتواصل مع فروعنا، يُرجى الاتصال على الأرقام التالية
               </h2>
            <div className="grid grid-cols-1 mt-5 mb-4 lg:grid-cols-2">
              <div className="flex gap-4 items-center mb-4">
                <span>مصر</span>
              
                  <a  className="flex gap-3 items-center" href="tel: +20 10 40912375">
                  <FaPhone className="text-[#00AEEF]" />
                  +20 10 40912375
                  
                  </a>
              
              </div>
              <div className="flex gap-4 items-center mb-4">
                <span>الإمارات</span>
              
                  <a  className="flex gap-3 items-center" href="tel: +971 50 318 8613">
                  <FaPhone  className="text-[#00AEEF]"/>
                  +971 50 318 8613
               
                  </a>
              
              </div>
              <div className="flex gap-4 items-center mb-4">
                <span>السعودية</span>
              
                  <a  className="flex gap-3 items-center" href="tel:+966115201546">
                  <FaPhone  className="text-[#00AEEF]"/>
                  +966115201546
                  
                  </a>
              
              </div>
           
          </div>
        
          

          </div>
      </div>
    </section>
  );
};

export default Contact;
