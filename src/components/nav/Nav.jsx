import React from 'react'
import './nav.css'
import {AiTwotoneHome} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {BsFillBookmarkStarFill} from 'react-icons/bs'
import {RiServiceFill} from 'react-icons/ri'
import {MdContactPage} from 'react-icons/md'
import { useState } from 'react'


const Nav = () => {
  const[activeNav,setActiveNav]=useState('#');
  return (
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==='#' ?'active': ''}><AiTwotoneHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==='#about' ?'active': ''}><FaUserAlt/></a>
      <a href="#experiance" onClick={()=>setActiveNav('#experiance')} className={activeNav==='#experiance' ?'active': ''}><BsFillBookmarkStarFill/></a>
      <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav==='#portfolio' ?'active': ''}><RiServiceFill/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==='#contact' ?'active': ''}><MdContactPage/></a>
    </nav>
  )
}

export default Nav