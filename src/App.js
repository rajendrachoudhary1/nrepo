import React from 'react';
import './App.css'; // Include your CSS file here for styling

function App() {
  return (
    <div className="App">
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
           <h3>text box</h3>
           <button className='btn'>Join us</button>
           <p>The proposed idea involves machine learning (ML) 
techniques for OCR to accurately convert handwritten 
equations into digital format. Once the handwritten input is 
converted into digital format, the system will perform various 
mathematical operations such as finding roots, integration, 
and differentiation.
</p>

           </div>
           <div className='home-second'>
            <img src='km.webp'></img>
           </div>
              
        </section>


        <section id="about" className="about-section">
          <div className='aboutus'>
          <h2>About Us</h2>
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
          </div>

          
        </section>

        <section id="services" className="services">
          <div className='aboutus'>
          <h2>services</h2>
          </div>
           
          
          <div className='services1'>
          <p>The proposed idea involves machine learning (ML) 
            techniques for OCR to accurately convert handwritten 
            equations into digital format. Once the handwritten input is 
            converted into digital format, the system will perform various 
            mathematical operations such as finding roots, integration, 
            and differentiation. </p>
          </div>
          <div className='services1'>
          <p>The proposed idea involves machine learning (ML) 
            techniques for OCR to accurately convert handwritten 
            equations into digital format. Once the handwritten input is 
            converted into digital format, the system will perform various 
            mathematical operations such as finding roots, integration, 
            and differentiation.  </p>
          </div>
          <div className='services1'>
          <p>The proposed idea involves machine learning (ML) 
            t matical content. The 
             user just needs to write the equation in the input box, after 
            that the input will converted into digital format making it 
           ready for mathematical operations like finding solutions, 
            differentiating it, integrating it.</p>
          </div>

          
        </section>

        <section id="services" className="services-section">
          <h2>Our Services</h2>
          <p>Discover the range of services we offer.</p>
        </section>

        <section id="contact" className="contact-section">
          <h2>Contact Us</h2>
          <p>We would love to hear from you. Get in touch!</p>
        </section>
      </main>

      <footer>
        <p>&copy; 2025 MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

 
