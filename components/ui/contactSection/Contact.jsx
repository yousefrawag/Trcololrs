import KayanBread from "@/components/common/kayanBread/KayanBread"
import contact from "@/public/images/contact.svg"
import Image from "next/image"
import { FaBorderAll, FaPhoneSquare, FaUser } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";


const Contact = () => {
  return (
    <section className="p-[30px] px-[50px] mb-[80px]  rounded-lg w-[75%] mx-auto bg-[#D6ECF7]">
      <div className="container mx-auto">
      <div className="flex items-center justify-between">
            <KayanBread title="تواصل معنا"/>
        <div className="text-center w-[50%]">
            <h4 className="text-[#00AEEF] font-medium text-[20px]">اطلب خدمتك</h4>
            <h1 className="text-[32px] font-medium text-[#2C2C2E]">نحن هنا من اجل خدمتك</h1>
        </div>
        </div>
        <div className="pt-[50px] flex justify-between items-center">
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
            <div className="w-[50%]">
                <div>
                    
<form className="mx-auto flex flex-col gap-6">
    <div className="flex items-center border-b-[1px] border-b-gray-500 rounded text-[#00AEEF]">
    <FaUser />
    <select id="default" className=" font-semibold text-gray-900 text-sm rounded-lg block w-[100%] p-2 bg-transparent">
    <option  disabled>حدد اسم الفرع</option>
    <option value="البدرشين">البدرشين</option>
    <option value="البدرشين">البدرشين</option>
    <option value="البدرشين">البدرشين</option>
    <option value="البدرشين">البدرشين</option>
  </select>
    </div>
    <div className="flex items-center border-b-[1px] border-b-gray-500 rounded text-[#00AEEF]">
    <FaLocationDot />
    <select id="default" className=" font-semibold text-gray-900 text-sm rounded-lg block w-[100%] p-2 bg-transparent">
    <option  disabled>حدد موقع الفرع</option>
    <option value="البدرشين">البدرشين</option>
    <option value="البدرشين">البدرشين</option>
    <option value="البدرشين">البدرشين</option>
    <option value="البدرشين">البدرشين</option>
  </select>
    </div>
    <div className="flex items-center border-b-[1px] border-b-gray-500 rounded text-[#00AEEF]">
    <FaPhoneSquare />
    <select id="default" className=" font-semibold text-gray-900 text-sm rounded-lg block w-[100%] p-2 bg-transparent">
    <option  disabled>رقم جوال الفرع</option>
    <option value="البدرشين">البدرشين</option>
    <option value="البدرشين">البدرشين</option>
    <option value="البدرشين">البدرشين</option>
    <option value="البدرشين">البدرشين</option>
  </select>
    </div>
    <div className="flex items-center border-b-[1px] border-b-gray-500 rounded text-[#00AEEF]">
    <IoMdMail />
    <select id="default" className=" font-semibold text-gray-900 text-sm rounded-lg block w-[100%] p-2 bg-transparent">
    <option  disabled>البريد الالكتروني</option>
    <option value="البدرشين">البدرشين</option>
    <option value="البدرشين">البدرشين</option>
    <option value="البدرشين">البدرشين</option>
    <option value="البدرشين">البدرشين</option>
  </select>
    </div>
    <div className="flex items-center border-b-[1px] border-b-gray-500 rounded text-[#00AEEF]">
    <FaBorderAll />
    <select id="default" className=" font-semibold text-gray-900 text-sm rounded-lg block w-[100%] p-2 bg-transparent">
    <option  disabled>اختر الخدمات</option>
    <option value="البدرشين">البدرشين</option>
    <option value="البدرشين">البدرشين</option>
    <option value="البدرشين">البدرشين</option>
    <option value="البدرشين">البدرشين</option>
  </select>
    </div>
    <button className="bg-[#00AEEF] text-white py-2
    rounded-lg text-[14px]">طلب خدمة</button>
</form>

                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
