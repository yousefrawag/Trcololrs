import KayanBread from "@/components/common/kayanBread/KayanBread"
import Link from "next/link"
import SwipersBlogs from "@/components/ui/Allvisa/SwipersBlogs"
const Blogs = () => {
  return (
    <section className="py-[80px]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
            <KayanBread title="المتطلبات بضغطة زر"/>
            <Link className="underline text-[#00AEEF]" href="/visa">عرض الكل</Link>
        </div>
        <div>
            <SwipersBlogs/>
        </div>
      </div>
    </section>
  )
}

export default Blogs
