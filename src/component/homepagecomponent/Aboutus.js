
import '../../App.css';

import React from 'react';
 
 
function Aboutus(){
     return(
        <> 
          <div class="center-container">
               <div class="half-circle-lower"></div>
           </div>


         <section   className="about-section">
          
          <div className='aboutus'>
          <h2>About us</h2>
          <p className='underline'></p>
          </div>
          <div className='aboutpart'>
          <h1>Lorem Ipsum is <br></br> simply dummy text</h1>
          </div>
          
          <div className='aboutpart-para'>
          <p className='aboutpart-p'>The proposed idea involves machine learning (ML) 
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

            <a className='p3'>About us</a>
          </div>

          
        </section>   
        </>
     )   
}
export default Aboutus