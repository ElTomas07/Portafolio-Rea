import React from 'react'
import './Header.css'
import { Logo } from '../../UI/Logo/Logo'
import { NavBar } from '../../UI/NavBar/NavBar'
import { ItemNavbar } from '../../UI/ItemNavbar/ItemNavbar'
import { Footer } from '../Footer/Footer'

export const Header = () => {
  return (
    <header className='header-page'>

      <Logo src='src\Img\Kids_See_Ghosts_Cover.png' Style= "Img" />
      <h1 className='name'> Tomas Estrada Ruiz</h1>
      <hr  className='line'/>
      <NavBar>
        <ItemNavbar></ItemNavbar>
      </NavBar>
      <Logo src='src\Img\LogoSena1.webp' Style="LogoSena"/>
      <Footer/>
    </header>
  )
}
