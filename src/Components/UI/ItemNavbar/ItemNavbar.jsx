import React from 'react'
import './ItemNavbar.css'

export const ItemNavbar = ({content, style, href}) => <li><a href={href} className={style}>{content}</a></li>

