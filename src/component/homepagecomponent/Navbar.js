 
import '../../App.css';
import {Link } from 'react-router-dom';
import React from 'react';

 
 
function Navbar(){
     return(
        <> 
         
         
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
        
 
       

                
        </>
     )   
}
export default Navbar