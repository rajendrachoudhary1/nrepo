 
import '../../App.css';

import React from 'react';
import image1 from '../../Img/check-circle.png'
 
function ResponsibleTech(){
     return(
        <>
          <section className='thirdpart'>
            
           <div className='third-section'>
             <p>Our process</p>
           </div>
           <div className='third-section2'>
               
              <h3> <span>01</span>
                Responsible Tech Use
              </h3>
              <p>The proposed idea involves machine learning (ML) 
            techniques for OCR to accurately convert handwritten 
            equations into digital format.</p>
                 
                <div className='check-circle'>
                    <p><img src={image1}></img></p>
                    <p>The proposed idea involves machine learning (ML) 
                     techniques for OCR to accurately convert handwritten 
                     equations into digital format.</p>
                </div>
                <div className='check-circle'>
                    <p><img src={image1}></img></p>
                    <p>The proposed idea involves machine learning (ML) 
                     techniques for OCR to accurately convert handwritten 
                     equations into digital format.</p>
                </div>
                <div className='check-circle'>
                    <p><img src={image1}></img></p>
                    <p>The proposed idea involves machine learning (ML) 
                     techniques for OCR to accurately convert handwritten 
                     equations into digital format.</p>
                </div>
                 
              <h3><span>02</span>
                Responsible Tech Use
              </h3>
              <h3><span>03</span>
                Responsible Tech Use
              </h3>
              
              
           </div>
          </section>
        </>
     )   
}
export default ResponsibleTech