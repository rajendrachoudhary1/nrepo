// If App.css is in the root /src folder
import '../../App.css';

import React from 'react';
import Card from './Card';
 
 
function Services(){
     return(
        <> 
         <section className="services">
          <div className='aboutus'>
              <h2>Services</h2>
              <div className='underline'></div>
          </div>
           
          <div className='main-service'>
            <Card />
            <Card />
            <Card />
            <Card />
             
          </div> 
        </section>
  
        </>
     )   
}
export default Services
