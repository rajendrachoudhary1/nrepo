 
import '../../App.css';

import React from 'react';
 
 
function Footer(){
     return(
        <> 
        <footer className='footer'>
            <div className='footermain'>
               <div className='footerlogo'>
                  <p>LOGO</p>
               </div>
               <div className='footerdetails'>
                   <h4>Pages</h4>
                   <p className='underline'></p>
                   <ul>
                     <li><a href='#home'>Home</a></li>
                     <li> <a href='#Aboutus'>About us</a></li>
                     <li><a href='#Resources'>Resources</a></li>
                   </ul>
                   
                   <h4>Address</h4>
                   <p className='underline'></p>

                   <div className='footer-address'> 
                     <p>Lorem Ipsum has been the industry's standard
                     142555</p>
                     <p>Lorem Ipsum has been the industry's standard
                     142555</p>
                     <p>Lorem Ipsum has been the industry's standard
                     142555</p>
                   </div>
               </div>
            </div>
        </footer>  
        </>
     )   
}
export default Footer
