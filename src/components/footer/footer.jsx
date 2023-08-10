import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {SiLeetcode} from 'react-icons/si';
import {SiGeeksforgeeks} from 'react-icons/si';

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>MANJESH</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
     
        <a href="https://leetcode.com/ManjeshGowda/" target='_blank'><SiLeetcode/></a>
         <a href="https://auth.geeksforgeeks.org/user/manjeshg3tqj/practice/" target='_blank'><SiGeeksforgeeks/></a>
         <a href="https://www.linkedin.com/in/manjesh-gowda-r-k-70a052278/" target='_blank'><BsLinkedin/></a>
         <a href="https://github.com/Manjeshgowdark" target='_blank'><BsGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Manjesh Gowda All rights reserved.</small>
      </div>
    </footer>
  )
}

export default footer