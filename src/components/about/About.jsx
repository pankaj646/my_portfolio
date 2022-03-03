import React from 'react'
import './about.css'
import me from '../../assets/aboutimg.jpg'
import { BsAwardFill } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { AiTwotoneFolderOpen } from 'react-icons/ai'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <section id='about'>
      <Fade top cascade>
      <h5>Get To Know</h5>
        <h2>About Me</h2>
        
      </Fade>


      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="about image" />
          </div>
        </div>


        <div className="about__content">
          <div className="about__cards">
            <Fade left>
              <article className="about__card">
                <BsAwardFill className='about__icon' />
                <h5>Education</h5>
                <small>B Tech at HIT</small>
              </article>
            </Fade>
            <Fade bottom>
              <article className="about__card">
                <FiUsers className='about__icon' />
                <h5>Experiance</h5>
                <small>Fresher </small>
              </article>
            </Fade>
            <Fade right>

              <article className="about__card">
                <AiTwotoneFolderOpen className='about__icon' />
                <h5>Projects</h5>
                <small>10+ Projects</small>
              </article>
            </Fade>
          </div>
          <Fade right>
          <p>I'm Pankaj Das and I'm from Siliguri,West Bengal. I'm persuing my graduation from Haldia Institute of Technology in Electrical Engineering.
            I like to working with electrical components. I also love programming and i want to explore and gain more knowledge about Software Engineering.
          </p>
          </Fade>
          <a href="#contact" className='btn'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About