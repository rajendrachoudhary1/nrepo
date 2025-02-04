 
import '../../App.css';
import { Link } from 'react-router-dom';
import React from 'react';
import img from '../../Img/about.jpg'
 
 
function Headerabout(){
     return(
        <> 
         <header className='headerabout'>
         
         <nav className="navbar navabout" >
          <div className="home home-about"> 
          <li><Link to="/">Home</Link></li>
          </div>
             
          <ul className="nav-links nav-linksabuot">
            
           <li><Link to="/Aboutpage">About</Link></li>
             <li><Link to="/Servicepage">Services</Link>  </li> 
             <li><button className='joinus joinabout'>Join us</button></li>
          </ul>
        </nav>

        <section id="home" className="home-section-about">
           <div className='home-first-about'>
            <p>Lorem Ipsum is simply dummy text of the <span>printing and typesetting</span> industry</p>
           
           </div>
           <div className='home-second-about'>
             <img src={img}></img>
           </div>
                
        </section>
      </header> 
     

                
        </>
     )   
}
export default Headerabout