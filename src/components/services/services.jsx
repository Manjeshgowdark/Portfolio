import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>What I delight and firms I worked</h5>
      <h2>Interests</h2>

      <div className="container services__container">
        <article className='service'>
          <div>
            <h3 className='service__head'>Programming</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Coding in java for more than 1+ year</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Solved 260+ Data Structures and Algorithms problem on <a href="https://leetcode.com/ManjeshGowda/" target='_blank'><span>Leetcode</span></a></p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Solved 200+ DSA Problems from <a href="https://auth.geeksforgeeks.org/user/manjeshg3tqj/practice/" target='_blank'><span>GeeksForGeeks</span></a> </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Proficient with DBMS, Operating System and Computer Network Topics</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Well versed with the knowledge of various Data Structures</p>
            </li>
          </ul>
        </article>
        {/* END OF 1st */}


        <article className='service'>
          <div>
            <h3 className='service__head'>FrontEnd Development </h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Have  Worked in HTML, CSS, JavaScript Projects</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Good Knowledge of React Framework.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Created Blog Application using React as frontend.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Created Projects Based on Material UI</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>20+ repositories on <a href="https://github.com/Manjeshgowdark" target='_blank'>Github</a> which are related to projects and mini projects.</p>
            </li>
        
          </ul>
        </article>



        <article className='service'>
          <div>
            <h3 className='service__head'>Backend Development </h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Created Backend APIs using Nodejs and Express Framework</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Good Knowledge of DBMS, SQL , MongoDB.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Created Task Management API and Store API using Node and Express </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Employee API using Node Express and JWT authentication</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services