import React from 'react'
import './About.css'
function About() {
  return (
    <div className='container-fluid  '  id='aboutcontent'>
        <div id='aboutdiv'>
       <img id='aboutimg' alt='men' src='/tech1.png' width={'100%'}></img>
       <div className='jumbotron' id='textcontent'>
        <p className='display-6 text-white'>Hi!</p>
        <h3 className='display-4  text-white'><span>I am</span> Jaswanth</h3>
        <p className='lead  text-white'>Creating pixel-perfect websites that blend form and function flawlessly<br></br> and Delivering seamless user experiences through innovative front-end development.</p>
        </div>
        </div>
       
     </div>

  )
}

export default About