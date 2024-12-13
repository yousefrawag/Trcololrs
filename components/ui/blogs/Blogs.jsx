import KayanBread from "@/components/common/kayanBread/KayanBread"
import Link from "next/link"
import SwipersBlogs from "@/components/ui/blogs/swipersBlogs"
const Blogs = () => {
  return (
    <section className="py-[80px]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
            <KayanBread title="المدونة"/>
            <Link className="underline text-[#00AEEF]" href="/blogs">عرض الكل</Link>
        </div>
        <div>
            <SwipersBlogs/>
        </div>
      </div>
    </section>
  )
}

export default Blogs
