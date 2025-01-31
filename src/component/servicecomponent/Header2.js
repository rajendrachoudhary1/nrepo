 
import '../../App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';
 
 
function Header2(){
     return(
        <> 
         <header className='header2'>
         
         <nav className="navbar">
          <div className="home"> 
          <li><Link to="/">Home</Link></li>
          </div>
             
          <ul className="nav-links">
            
            <li><a href="#about">About</a></li>
            <li><Link to="/Servicepage">Resources</Link></li>
            <li><a href="#Join us" className='joinus'>Join us</a></li>
          </ul>
        </nav>

        <section id="home" className="home-section">
           <div className='home-first'>
           <h1>text box</h1>
           <h2>text box</h2>
           
           </div>
                
        </section>
      </header> 
      {/* <section id="home" className="home-section">
           <div className='home-first'>
           <h1>text box</h1>
           <h2>text box</h2>
           
           </div>
                
        </section> */}

                
        </>
     )   
}
export default Header2