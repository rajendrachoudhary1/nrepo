import './App.css';
import React from 'react';
import Card from './Card';
import Homepage1 from './Homepage1';
import Homepage2 from './Homepage2';
import Homepage3 from './Homepage3';


function Homepage(){
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

      <main>
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


        <section id="about" className="about-section">
          <div className='aboutus'>
          <h2>About Us</h2>
          <p className='underline'></p>
          </div>
          <div className='aboutpart'>
          <h3>The proposed idea involves machine learning (ML) 
          techniques for OCR </h3>
          </div>
          
          <div>
          <p>The proposed idea involves machine learning (ML) 
            techniques for OCR to accurately convert handwritten 
            equations into digital format. Once the handwritten input is 
            converted into digital format, the system will perform various 
            mathematical operations such as finding roots, integration, 
            and differentiation. This integrated approach aims to provide 
             accurate solution for handwritten mathematical content. The 
             user just needs to write the equation in the input box, after 
            that the input will converted into digital format making it 
           ready for mathematical operations like finding solutions, 
            differentiating it, integrating it.</p>
          <p className='p2'>The proposed idea involves machine learning (ML) 
            techniques for OCR to accurately convert handwritten 
            equations into digital format. Once the handwritten input is 
            converted into digital format, the system will perform various 
            mathematical operations such as finding roots, integration, 
            and differentiation. This integrated approach aims to provide 
             accurate solution for handwritten mathematical content. The 
             user just needs to write the equation in the input box, after 
            that the input will converted into digital format making it 
           ready for mathematical operations like finding solutions, 
            differentiating it, integrating it.</p>

           
            <p className='p3'>About Us</p>
          </div>

          
        </section>

        <section id="services" className="services">
          <div className='aboutus'>
          <h2>services</h2>
          <p className='underline'></p>
          </div>
           
          <div className='main-service'>
            <Card />
            <Card />
            <Card />
            <Card />
          </div> 
        </section>

        <Homepage1/>
        <Homepage2/>
        <Homepage3/>


        <section id="text-part" className="text-part">
           <div className='text-parts'>
            <h1>Text-box</h1>
            <h3>Text-box</h3>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
             
             <div className='btn-class'>
              <button className='btn1'>Join us</button>
              <button>Join us</button>
             </div>
           </div>
        </section>
      </main>

      <footer className='footer'>
        <p>&copy; 2025 MyWebsite. All rights reserved.</p>
      </footer>
 
        </>
    )
}
export default Homepage;