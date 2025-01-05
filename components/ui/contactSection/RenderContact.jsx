import React from 'react'
import VisaCnotact from './VisaCnotact';
import FlayingContarct from './FlayingContarct';
import Hotelscontact from './Hotelscontact';
const RenderContact = ({contactype}) => {
const renderContacts = () =>{
    switch (contactype) {
        case "Visa": 
          return <VisaCnotact />;
        case "Flaying":
          return <FlayingContarct />;
        case "Hotels": 
          return <Hotelscontact />;
       
        default:
          return <VisaCnotact />;
      }
}    
  return (
    renderContacts()
  )
}

export default RenderContact