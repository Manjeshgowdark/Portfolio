import React from 'react'
import Header from './components/header/header';
import Nav from './components/nav/nav';
import About from './components/about/About'
import Experiences from './components/experience/Experience';
import Services from './components/services/services';
import Portfolio from './components/portfolio/portfolio';
// import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/footer';

const App = () => {
  return (
    <>
        <Header/>
        <Nav/>
        <About/>
        <Experiences/>
        <Services/>
         <Portfolio/>
        {/* <Testimonials/> */}
        <Contact/>
        <Footer/> 
    </>
  )
}

export default App