import About from '@/components/ui/about/About'
import Header from '@/components/ui/header/Header'
import Services from '@/components/ui/services/Services'
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
      <Services/>
    </div>
  )
}

export default HomePage
