import React from 'react'
import { NavBar } from '../../UI/NavBar/NavBar'
import { ItemNavbar } from '../../UI/ItemNavbar/ItemNavbar'
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <NavBar>
        <ItemNavbar> <FaWhatsapp /> </ItemNavbar>
        <ItemNavbar> <FaFacebook /></ItemNavbar>
        <ItemNavbar> <FaInstagram /></ItemNavbar>
    </NavBar>
  )
}
