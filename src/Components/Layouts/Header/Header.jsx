import React from 'react'
import './Header.css'
import { Logo } from '../../UI/Logo/Logo'
import { NavBar } from '../../UI/NavBar/NavBar'
import { ItemNavbar } from '../../UI/ItemNavbar/ItemNavbar'

export const Header = () => {
  return (
    <header className='header-page'>

      <Logo src='src\Img\Kids_See_Ghosts_Cover.png' Style= "Img" />
      <NavBar>
        <ItemNavbar className='Items'> Perfil </ItemNavbar>
      </NavBar>
    </header>
  )
}
