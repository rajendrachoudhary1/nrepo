 
import '../../App.css';
import {Link } from 'react-router-dom';
import React from 'react';
import Navbar from './Navbar';

 
 
function Header(){
     return(
        <> 
         <header className='header1'>
         
          <Navbar/>
         
        
        <section  className="home-section-main">
          
         <div  className="home-section">

           <div className='home-first'>
             <h1>Text box</h1>
             <h2>text box</h2>
             <a href="https://www.google.com"><button className='joinus'>Join Us</button></a>
         
           </div>
           <div className='home-second-black'>
                <div className='home-second'>
                </div>
                <div>
                <div className='underline'></div>
                </div>
           </div>
         </div>
                
        </section>

        <p className='home-section-p'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>


        <div class="center-container">
               <div class="half-circle-upar"></div>
         </div> 
      </header> 
       

                
        </>
     )   
}
export default Header