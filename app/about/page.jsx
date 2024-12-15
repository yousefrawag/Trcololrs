"use client"
import React from 'react'
import AboutSection from '@/components/ui/aboutUi/AboutSection'
import KayanMessage from '@/components/ui/aboutUi/KayanMessage'
import OurValues from '@/components/ui/aboutUi/OurValues'
import Contact from '@/components/ui/contactSection/Contact'
import { AuthFetchAboutSection } from '@/services/FetchAllContent'
import Loadding from '@/components/common/kayanBread/Loadding'
const About = () => {
  const {loading, AboutSectiondetails } = AuthFetchAboutSection()
  if(loading){
    return <Loadding />
  }
  return (
    <div className='mt-0'>
        <AboutSection  AboutSectiondetails={AboutSectiondetails}/>
        <KayanMessage />
        <OurValues />
        <Contact />
    </div>
  )
}

export default About