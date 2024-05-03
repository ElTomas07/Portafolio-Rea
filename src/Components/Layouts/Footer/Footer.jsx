import React from 'react'
import { ItemNavbar } from '../../UI/ItemNavbar/ItemNavbar'
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import './Footer.css'

export const Footer = () => {
  return (
    <ul className='social-media'>
        <ItemNavbar content={<FaFacebook size={40}/>}  style='image' href=''/>
        <ItemNavbar content={<FaInstagram size={40}/>} style='image' href=''/>
        <ItemNavbar content={<FaWhatsapp size={40}/>} style='image' href=''/>
        </ul>
  )
}
