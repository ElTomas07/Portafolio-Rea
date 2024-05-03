import React from 'react'
import './NavBar.css'
import { ItemNavbar } from '../ItemNavbar/ItemNavbar'

export const NavBar = () => {
  return (
    <nav>
        <ul>
            <ItemNavbar content= "Perfil" style="Items" href= ""/>
            <ItemNavbar content= "Proyectos" style="Items" href= ""/>
            <ItemNavbar content= "Referencias" style="Items" href= ""/>
            <ItemNavbar content= "Experiencias" style="Items" href= ""/>
        </ul>
    </nav>
  )
}
