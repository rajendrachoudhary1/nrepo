 
import '../../App.css';
import {Link } from 'react-router-dom';
import React from 'react';
 
 
function Header(){
     return(
        <> 
         <header className='header1'>
         
         <nav className="navbar">
          <div className="home"> 
          <li><Link to="/">Home</Link></li>
          </div>
             
          <ul className="nav-links">
            
            <li><Link to="/Aboutpage">About</Link></li>
            <li><Link to="/Servicepage">Services</Link></li>
            <li><button className='joinus'>Join us</button></li>
          </ul>
        </nav>
        <section id="home" className="home-section">
           <div className='home-first'>
           <h1>text box</h1>
           <h2>text box</h2>
           <button className='btn'>Join us</button>
           <p className='home-section-p'>The proposed idea involves machine learning (ML) 
            techniques for OCR to accurately convert handwritten 
            equations into digital format. Once the handwritten input is 
           converted into digital format, the system will perform various 
           mathematical operations such as finding roots, integration, 
           and differentiation.
          </p>
           </div>
           <div>
                <div className='home-second'>
                </div>
                <div>
                <p className='underline1'></p>
                </div>
           </div>      
        </section>
        <div class="center-container">
               <div class="half-circle-upar"></div>
         </div>

      </header> 
       

                
        </>
     )   
}
export default Header