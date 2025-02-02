import '../../App.css';
import React from 'react'; 
import img from '../../Img/grp.jpg' 

function Aboutcard(){
    return(
        <>
         <section className='about-card'>
               <div className='about-card-pic '>
                   <img src={img} alt="Description" />
               </div>

               <div className='about-card-text'>
                   <h3>Lorem Ipsum</h3>
                   <p className='underline'></p>
                    <p className='about-card-text-p'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
               </div>
         </section>
 
        </>
    )
}
export default Aboutcard;