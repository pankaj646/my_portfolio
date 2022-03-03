import React from 'react'
import './main.css'
import { BsFacebook } from 'react-icons/bs'
import{FaInstagramSquare} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import mine from '../../assets/me.png'
import CTA from './CTA'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';


const Main = () => {
    return (
        <div className='main'>
            <div className='main__container'>
                <div className="main__content">
                    <div className="text">
                    <Fade left>
                        <p>Hey There !</p>
                        </Fade>
                        
                        <h1>I am Pankaj Das</h1>
                        
                        <Fade right>
                        <p>Frontend Developer..</p>
                        </Fade>
                        <Fade bottom>
                        <div className="icons">
                            <a href="https://facebook.com/profile.php?id=100011339481934" className='icon' target='-blank'><BsFacebook /></a>
                            <a href="https://www.instagram.com/am_pankaj_das/" className='icon' target='-blank'><FaInstagramSquare /></a>
                            <a href="https://linkedin.com/in/pankaj-das-9079741b4" className='icon' target='-blank'><FaLinkedin /></a>
                            <a href="https://github.com/pankaj646" className='icon' target='-blank'><BsGithub /></a>
                        </div>
                        </Fade>
                        <CTA/>

                    </div>


                </div>


                <div className="main__img">
                    <img src={mine} alt="" />
                </div>


            </div>



        </div>
    )
}

export default Main