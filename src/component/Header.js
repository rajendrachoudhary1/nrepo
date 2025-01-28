import '../App.css';
import React from 'react';
 
 
function Header(){
     return(
        <> 
         <header>
        <nav className="navbar">
          <div className="home"> 
          <li><a href="#home">Home</a></li>
          </div>
             
          <ul className="nav-links">
            
            <li><a href="#about">About</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#Join us" className='joinus'>Join us</a></li>
          </ul>
        </nav>
      </header> 
      <section id="home" className="home-section">
           <div className='home-first'>
           <h1>text box</h1>
           <h2>text box</h2>
           <button className='btn'>Join us</button>
           <p>The proposed idea involves machine learning (ML) 
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

                
        </>
     )   
}
export default Header