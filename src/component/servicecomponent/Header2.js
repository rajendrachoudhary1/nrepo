 
import '../../App.css';
import React from 'react';
import Navbar from '../homepagecomponent/Navbar';
 
 
function Header2(){
     return(
        <> 
         <header className='header2'>
         
         <Navbar/>

        <section id="home" className="home-section1">
           <div className='home-first textbox'>
           <h1>Text box</h1>
           <h3>Text box</h3>
           
           </div>
                
        </section>
      </header> 
     

                
        </>
     )   
}
export default Header2