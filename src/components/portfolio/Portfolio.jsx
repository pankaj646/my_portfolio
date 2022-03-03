import React from 'react'
import img1 from '../../assets/portfolio1.png'
import img2 from '../../assets/portfolio2.png'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.jpg'
import './portfolio.css'
import Fade from 'react-reveal/Fade';


const data = [
  {
    id: 1,
    image: img1,
    title: "Animated Heart",
    github: 'https://github.com',
    demo: "https://animatedheart.netlify.app"
  },
  {
    id: 2,
    image: img2,
    title: "Todo List",
    github: 'https://github.com',
    demo: "https://my-todo-apponline.netlify.app/"
  },
  {
    id: 3,
    image: img3,
    title: "Expense Tracker ",
    github: 'https://github.com',
    demo: "#"
  },
  {
    id: 4,
    image: img4,
    title: "Ongoing....",
    github: 'https://github.com',
    demo: "#"
  },
  {
    id: 5,
    image: img5,
    title: "Ongoing....",
    github: 'https://github.com',
    demo: "#"
  }

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <Fade top cascade>
      <h5>
        My Recent Works
      </h5>
      <h2>Portfolio</h2>
      </Fade>
      <Fade bottom cascade>
      <div className="container portfolio__container">
        {data.map(({id,image,title,github,demo})=>{
          return(
            <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank' >Live Demo</a>
          </div>
        </article>
          )

        })}
      </div>
      </Fade>

    </section>
  )
}

export default Portfolio