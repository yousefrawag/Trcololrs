
import About from '@/components/ui/about/About'
import Blogs from '@/components/ui/blogs/Blogs'
import Contact from '@/components/ui/contactSection/Contact'
import Header from '@/components/ui/header/Header'
import ServicesHome from '@/components/ui/servicesHome/ServicesHome'
import WhyKayan from '@/components/ui/whyKayan/WhyKayan'
import Hotelscontact from '@/components/ui/contactSection/Hotelscontact'
const HomePage = ({homeHero}) => {

  return (
    <div>
      {/* header */}
      <Header homeHero ={homeHero}/>
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
