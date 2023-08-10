import React from 'react'
import './header.css'
import CTA from './CTA';
import ME from '../../assets/me.png'
import HeadersSocial from './HeadersSocial';

const header = () => {
  return (
    <header>
     <div className='container header__container'>
      <h5>Hello I'm</h5>
      <h1>Manjesh</h1>
      <h5 className='text-light'>FullStack Developer</h5>
      <CTA/>
      <HeadersSocial/>
      <div className='me'>
        <img src={ME} alt="profile" />
      </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>
     </div>
    </header>
  )
}

export default header