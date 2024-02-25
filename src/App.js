import React from 'react';
import './App.css';
import { Suspense } from 'react';
import Loader from './component/Loader';
import Home from './component/home/Home';
 import About from './component/about/About';
 import Skill from './component/skill/Skill';
 import Navb from './component/navbar/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './component/contact/Contact';
import Projects from './component/projects/Project';
// const About =React.lazy(()=>import('./component/About'))
// const HomeComponent = () => (
//   <div>
//       <Suspense fallback = { <div> <Loader/> </div>} >
//         <About/></Suspense>
//   </div>
// );
function App() {
 
  return (
    <>
    
   <BrowserRouter>
   
   <Navb/>
   
   <Routes>
   
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/skill' element={<Skill/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/project' element={<Projects/>}/>
   </Routes>
   </BrowserRouter>

    
    </>
  );
}

export default App;
