import '../../App.css';
import React from 'react'; 
import Teamcard from './Teamcard';
 

function Team(){
    return(
        <>
         <section className='team'>
            <div>
                <h3>Team</h3>
                <p className='underline2'></p>
            </div>
            <div>
                <h2>About our team/ company</h2>
            </div>
            <div>
                 <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                 </p>
            </div>
            
         </section>
         <section className='teamcard-section'>
            <Teamcard/>
            <Teamcard/>
            <Teamcard/>
         </section>
 
        </>
    )
}
export default Team;