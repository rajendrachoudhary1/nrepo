import '../../App.css';
import React from 'react'; 
import img from '../../Img/agrp.jpg' 

function Aboutgrp(){
    return(
        <>
        <div className='about-pic'>
        <img src={img} alt="Description" />
        </div>

        <div className='about-main'>
            <div className='third-section'>
                <p>Our mission</p>
            </div>
            <div className='about-main-second'>
                <p className='about-p-first'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  
                </p>
                <p className='about-p'>
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>

            </div>
        </div>

        <div className='about-main-third'>
            <p className='about-main-third-p'>
            Offering you expert guidance and strategic insights
            </p>
        </div>
       
 
        </>
    )
}
export default Aboutgrp;