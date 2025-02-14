import React from 'react'
import VisaCnotact from './VisaCnotact';
import FlayingContarct from './FlayingContarct';
import Hotelscontact from './Hotelscontact';
import Contact from './Contact';
const RenderContact = ({contactype}) => {
const renderContacts = () =>{
    switch (contactype) {
        case "حجوزات التأشيرات": 
          return <VisaCnotact />;
        case "حجوزات الطيران":
          return <FlayingContarct />;
        case "حجوزات الفنادق": 
          return <Hotelscontact />;
       
        default:
          return <Contact />;
      }
}    
  return (
    renderContacts()
  )
}

export default RenderContact