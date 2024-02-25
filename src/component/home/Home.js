import React from 'react'
import Nav from '../navbar/Nav'
import './Home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div  id='back'className=' container-fluid'>
        <br></br><br></br><br></br>
        <div className=' m-auto  container 'id='backback' >
          
         <div className='row ' id='pill'>
         <div className='col-12 col-lg-4'id='side' >
              
              <img id='image' src='/image6.png' width={'53%'} height={'100%'} />
                 </div>
            <div className='col-12 col-lg-8 jumbotron ' id='main' >
                <h5 className='lead'> Hi I am</h5>
                <h1 className='dispaly-1'>Jaswanth Kumar</h1>
                <h4 className='lead'>Front-End Developer</h4>
                <p>Creating pixel-perfect websites that blend form and function flawlessly and Delivering seamless user experiences through innovative front-end development.</p>
                <Link to='/contact'>Contact Me</Link>
            </div>
            
         </div> 
         </div>
    </div>
  )
}

export default Home