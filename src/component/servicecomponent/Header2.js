 
import '../../App.css';
import { Link } from 'react-router-dom';
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
            
           <li><Link to="/Aboutpage">About</Link></li>
             <li><Link to="/Servicepage">Services</Link>  </li> 
            <li><a href="#Join us" className='joinus'>Join us</a></li>
          </ul>
        </nav>

        <section id="home" className="home-section1">
           <div className='home-first'>
           <h1>text box</h1>
           <h3>text box</h3>
           
           </div>
                
        </section>
      </header> 
     

                
        </>
     )   
}
export default Header2