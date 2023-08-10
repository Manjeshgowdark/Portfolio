import React from 'react'
import {SiLeetcode} from 'react-icons/si'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'


const HeadersSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/manjesh-gowda-r-k-70a052278/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Manjeshgowdark" target="_blank"><FaGithub/></a>
        <a href="https://leetcode.com/ManjeshGowda/" target="blank"> <SiLeetcode/></a>
    </div>
  )
}

export default HeadersSocial