import About from '@/components/ui/about/About'
import Blogs from '@/components/ui/blogs/Blogs'
import Contact from '@/components/ui/contactSection/Contact'
import Header from '@/components/ui/header/Header'
import ServicesHome from '@/components/ui/servicesHome/ServicesHome'
import WhyKayan from '@/components/ui/whyKayan/WhyKayan'


const HomePage = () => {
  return (
    <div>
      {/* header */}
      <Header/>
      {/* about */}
      <About/>
      {/* why kayan */}
      <WhyKayan/>
      {/* services */}
      <ServicesHome/>
      {/* blogs section */}
      <Blogs/>
      {/* contact section */}
      <Contact/>
    </div>
  )
}

export default HomePage
