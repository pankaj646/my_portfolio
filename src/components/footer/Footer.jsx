import React from 'react'
import './footer.css'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Footer = () => {
  return (
    <footer>
      <Zoom>
        <a href="" className='footer__logo'>Pankaj</a>
      </Zoom>
      <ul className='parmalinks'>
        <Fade bottom cascade>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experiance">Experiance</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </Fade>
        {/*<li><a href="#">Home</a></li>
        <li><a href="#">Home</a></li> */}
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com/profile.php?id=100011339481934" target='_blank'><FaFacebookSquare /></a>
        <a href="https://www.instagram.com/am_pankaj_das/" target='_blank'><FaInstagramSquare /></a>
        <a href="https://linkedin.com/in/pankaj-das-9079741b4" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/pankaj646" target='_blank'><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy;Copyright 2021-2022. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer