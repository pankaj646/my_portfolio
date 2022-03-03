import React from 'react'
import './experiance.css'
import { BsCheckCircleFill } from 'react-icons/bs'
import Fade from 'react-reveal/Fade';
const Experiance = () => {
  return (
    <section id='experiance'>
      <Fade top cascade>
      <h5>What Skills I Have</h5>
      <h2>My Experiance</h2>
      </Fade>

      <div className="container experiance__container">
        <Fade left>
        <div className="experiance__frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon'/>
             
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>javaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Boostrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill  className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        </Fade>


        <Fade right>
        <div className="experiance__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill  className='experience__details-icon'/>
              <div>
                <h4>Express JS</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill className='experience__details-icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsCheckCircleFill  className='experience__details-icon'/>
              <div>
                <h4>C#</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
          

        </div>
        </Fade>

      </div>
    </section>
  )
}

export default Experiance