import KayanBread from "@/components/common/kayanBread/KayanBread";
import contact from "@/public/images/contact-us.png";
import Image from "next/image";
import { FaBorderAll, FaPhoneSquare, FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import authFetch from "@/services/axiosAuthfetch";
const FlayingContarct = () => {
 const router = useRouter();
  const handelSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
  
    const data = Object.fromEntries(formData);
    data.Requesttype = "حجز طيران"
    if(!data.name){
      return toast.error("يجب إضافه الاسم")
    }
    if(!data.phone){
      return toast.error("يجب إضافه الجوال")
    }
    if(!data.email){
      return toast.error("يجب إضافه البريد الالكترونى")
    }
    try {
      const resp = await authFetch.post("/cutomerRequest" , data)
      console.log(resp);
      
      if(resp?.status === 201) {
        e.target.reset()
        toast.success("تم إستلام طلبك بنجاح وجارى العمل علية")
        return router.push("/")
      }
       
    
    } catch (error) {
      toast.error("هناك خطاء ما يجب التاكد من جميع البيانات المدخله")
    }
  }  
  return (
    <section className="p-[30px] px-5 lg:px-[50px] mb-[80px] rounded-lg w-[100%] lg:w-[75%] mx-auto bg-[#D6ECF7]">
      <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center gap-6 md:flex-row md:justify-between md:items-center w-full">


  {/* Heading Section */}
  <div className="w-full text-center">
    <h4 className="text-[#00AEEF] font-medium text-[18px] lg:text-[20px]">
     احجز طائرتك الأن
    </h4>
    <h1 className="text-[24px] lg:text-[32px] font-medium text-[#2C2C2E]">
      نحن هنا من اجل خدمتك
    </h1>
  </div>
</div>

        <div className="pt-[50px] flex flex-col w-full gap-8 md:flex-row md:items-start justify-between">
  {/* Image Section */}
  <div className="w-full md:w-1/2 flex justify-center">
    <Image
      src={contact}
      alt="Contact"
      layout="intrinsic"
      className="rounded"
      priority
    />
  </div>

  {/* Form Section */}
  <div className="w-full md:w-1/2">
    <form onSubmit={handelSubmit} className="flex flex-col gap-6 w-full">
      {/* Name Field */}
      <label
        htmlFor="UserName"
        className="relative block overflow-hidden border-b border-gray-500 bg-transparent pt-3"
      >
        <input
          type="text"
          id="UserName"
          name="name"
          placeholder="Name"
          className="peer h-10 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />
        <span className="absolute right-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
          الإسم
        </span>
      </label>

      {/* Phone Field */}
      <label
        htmlFor="UserPhone"
        className="relative block overflow-hidden border-b border-gray-500 bg-transparent pt-3"
      >
        <input
          type="text"
          id="UserPhone"
          placeholder="Phone"
          name="phone"
          className="peer h-10 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />
        <span className="absolute right-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
          رقم الهاتف
        </span>
      </label>

      {/* Email Field */}
      <label
        htmlFor="UserEmail"
        className="relative block overflow-hidden border-b border-gray-500 bg-transparent pt-3"
      >
        <input
          type="email"
          id="UserEmail"
          placeholder="Email"
          name="email"
          className="peer h-10 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />
        <span className="absolute right-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
          الإيميل
        </span>
      </label>

      <div className="flex items-center border-b-[1px] border-b-gray-500 rounded text-[#00AEEF]">
        <FaBorderAll />
        <select
          id="services"
          className="font-semibold text-gray-900 text-sm rounded-lg block w-full p-2 bg-transparent"
          defaultValue=""
          name="ticketType"
        >
          <option disabled value="">
            اختر نوع التذكره
          </option>
          <option value="ذهاب وعوده"> ذهاب وعودة</option>
          <option value="عوده فقط">عوده فقط</option>
       
        </select>
      </div>  
      <div className="flex items-center border-b-[1px] border-b-gray-500 rounded text-[#00AEEF]">
        <FaBorderAll />
        <select
          id="services"
          className="font-semibold text-gray-900 text-sm rounded-lg block w-full p-2 bg-transparent"
          defaultValue=""
          name="flyingType"
        >
          <option disabled value="">
            اختر نوع الطيران
          </option>
          <option value="إقتصادى"> إقتصادى</option>
          <option value="أعمال"> أعمال</option>
          <option value="درجه أولى"> درجه أولى</option>
       
        </select>
      </div>  
   
      <label
        htmlFor="UserName"
        className="relative block overflow-hidden border-b border-gray-500 bg-transparent pt-3"
      >
        <input
          type="date"
          id="nmberofusers"
         name="arriveDate"
          className="peer h-10 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />
        <span className="absolute right-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
         تاريخ الوصول
        </span>
      </label> 
      <label
        htmlFor="UserName"
        className="relative block overflow-hidden border-b border-gray-500 bg-transparent pt-3"
      >
        <input
          type="date"
          id="nmberofusers"
          name="outDate"
          className="peer h-10 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
        />
        <span className="absolute right-0 top-2 -translate-y-1/2 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-xs">
          تاريخ المغادرة
        </span>
      </label> 
      <button className="relative inline-block font-medium py-2 px-6 rounded overflow-hidden border border-[#00AEEF] bg-[#00AEEF] text-white shadow-lg transition-all hover:shadow-[#1d1d1d58]">
        <span className="relative z-10">طلب خدمة</span>
      </button>
    </form>
  </div>
</div>

       
      </div>
    </section>
  );
};

export default FlayingContarct;
