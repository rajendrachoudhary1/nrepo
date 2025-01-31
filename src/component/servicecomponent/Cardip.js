
import '../../App.css';
import React from 'react';
import img1 from '../../Img/serviceimg.jpg'

 
 
 
function Cardip(){
     return(
        <> 
        
         <section className="card-ir">
         
            <div className='card-irfirstdiv'>
                <h1>Intelligent Responses</h1>
                <img src={ img1}></img>
            </div>
            <div className='card-irseconddiv'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <ul>
                    <li> It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</li>
                    <li>  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</li>
                    <li>More recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
                </ul>
            </div>
        </section>
        <p className='underline2'></p>
  
        </>
     )   
}
export default Cardip
