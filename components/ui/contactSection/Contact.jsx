import KayanBread from "@/components/common/kayanBread/KayanBread";
import contact from "@/public/images/contact.svg";
import Image from "next/image";
import { FaBorderAll, FaPhoneSquare, FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

const Contact = () => {
  return (
    <section className="p-[30px] px-4 lg:px-[50px] mb-[80px] rounded-lg w-[100%] lg:w-[75%] mx-auto bg-[#D6ECF7]">
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
            <div>
              <Image
                src={contact}
                alt="feat"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                className="rounded"
              />
            </div>
          </div>
          <div className="w-[100%] md:w-[50%]">
            <div>
              <form className="mx-auto flex flex-col gap-6">
                <div className="flex items-center border-b-[1px] border-b-gray-500 rounded text-[#00AEEF]">
                  <FaUser />
                  <select
                    id="default"
                    className="focus:outline-none font-semibold text-gray-900 text-sm rounded-lg block w-[100%] p-2 bg-transparent"
                  >
                    <option defaultValue value="اختر الخدمات" selected disabled>
                      حدد اسم الفرع
                    </option>
                    <option value="البدرشين">البدرشين</option>
                    <option value="البدرشين">البدرشين</option>
                    <option value="البدرشين">البدرشين</option>
                    <option value="البدرشين">البدرشين</option>
                  </select>
                </div>
                <div className="flex items-center border-b-[1px] border-b-gray-500 rounded text-[#00AEEF]">
                  <FaLocationDot />
                  <select
                    id="default"
                    className=" focus:outline-none font-semibold text-gray-900 text-sm rounded-lg block w-[100%] p-2 bg-transparent"
                  >
                    <option defaultValue value="اختر الخدمات" selected disabled>
                      حدد موقع الفرع
                    </option>
                    <option value="البدرشين">البدرشين</option>
                    <option value="البدرشين">البدرشين</option>
                    <option value="البدرشين">البدرشين</option>
                    <option value="البدرشين">البدرشين</option>
                  </select>
                </div>
                <div className="flex items-center border-b-[1px] border-b-gray-500 rounded text-[#00AEEF]">
                  <FaPhoneSquare />
                  <select
                    id="default"
                    className=" focus:outline-none font-semibold text-gray-900 text-sm rounded-lg block w-[100%] p-2 bg-transparent"
                  >
                    <option defaultValue value="اختر الخدمات" selected disabled>
                      رقم جوال الفرع
                    </option>
                    <option value="البدرشين">البدرشين</option>
                    <option value="البدرشين">البدرشين</option>
                    <option value="البدرشين">البدرشين</option>
                    <option value="البدرشين">البدرشين</option>
                  </select>
                </div>
                <div className="flex items-center border-b-[1px] border-b-gray-500 rounded text-[#00AEEF]">
                  <IoMdMail />
                  <select
                    id="default"
                    className=" focus:outline-none font-semibold text-gray-900 text-sm rounded-lg block w-[100%] p-2 bg-transparent"
                  >
                    <option defaultValue value="اختر الخدمات" selected disabled>
                      البريد الالكتروني
                    </option>
                    <option value="البدرشين">البدرشين</option>
                    <option value="البدرشين">البدرشين</option>
                    <option value="البدرشين">البدرشين</option>
                    <option value="البدرشين">البدرشين</option>
                  </select>
                </div>
                <div className="flex items-center border-b-[1px] border-b-gray-500 rounded text-[#00AEEF]">
                  <FaBorderAll />
                  <select
                    id="default"
                    className=" focus:outline-none font-semibold text-gray-900 text-sm rounded-lg block w-[100%] p-2 bg-transparent"
                  >
                    <option defaultValue value="اختر الخدمات" selected disabled>
                      اختر الخدمات
                    </option>
                    <option value="البدرشين">البدرشين</option>
                    <option value="البدرشين">البدرشين</option>
                    <option value="البدرشين">البدرشين</option>
                    <option value="البدرشين">البدرشين</option>
                  </select>
                </div>
                <button className="before:ease inline-block relative font-medium py-2 px-6 rounded overflow-hidden border border-[#00AEEF] bg-[#00AEEF] text-white shadow-lg transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-4 before:translate-x-12 before:rotate-6 before:bg-[#141414] before:opacity-10 before:duration-700 hover:shadow-[#1d1d1d58] hover:before:-translate-x-80">
      <span relative="relative z-10">طلب خدمة</span>
    </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
