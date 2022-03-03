import React from 'react'
import './contact.css'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import Fade from 'react-reveal/Fade';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bu8ykix', 'template_tdmnt3a', form.current, 'aA6iJrebjV7sJkO1u')
    e.target.reset()
    alert("SuccessFully Sent Message!")
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <Fade top cascade>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      </Fade>

      <div className="container contact__container">
        <div className="contact__options">
          <Fade left cascade>
          <article className="contact__option">
            <MdEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>hit18ee.pankajdas@gmail.com</h5>
            <a href="mailto:hit18ee.pankajdas@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsMessenger className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Pankaj Das</h5>
            <a href="https://m.me/profile.php?id=100011339481934" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>+91 9735985633</h5>
            <a href="https://api.whatsapp.com/send?phone=+919735985633" target='_blank'>Send a message</a>
          </article>
          </Fade>
        </div>
        
        <form ref={form} onSubmit={sendEmail}>
        <Fade right cascade>
          <input type="text" name="name" placeholder='Enter Your Name' required />
          <input type="email" name='email' placeholder='Enter Your Mail' required />
          <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
          </Fade>
          <button type='submit' className='btn btn-primary'>Message</button>
          
        </form>
        
      </div>
    </section>
  )
}

export default Contact