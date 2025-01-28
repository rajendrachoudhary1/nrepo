import '../App.css';
import React from 'react';
import Card from './Card';
 
 
function Services(){
     return(
        <> 
         <section id="services" className="services">
          <div className='aboutus'>
          <h2>services</h2>
          <p className='underline'></p>
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
