import React ,{useState,useEffect} from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experiance from './components/experiance/Experiance'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Head from './components/head/Main'
import Loading from './components/loading/Loading'

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },2000)
  },[])

  return (
    <>

    {
      loading==true?
      <Loading/>:
      <>
      <Nav/>
     {/* <Header/> */}
     <Head/>
     <About/>
     <Experiance/>
     {/* <Services/> */}
     <Portfolio/>
     {/* <Testimonials/> */}
     <Contact/>
     <Footer/>

      </>
 }

     
    </>
  )
}

export default App