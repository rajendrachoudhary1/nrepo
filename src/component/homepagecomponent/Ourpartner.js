 
import '../../App.css';

import React from 'react'
import img2 from "../../Img/brand1.jpg"
import img3 from "../../Img/brand2.jpg"
import img4 from "../../Img/brand3.jpg"

function ourpartner(){
    return(
        <>
        <section >
            <div className='aboutus our'>
            <h2>Our Partner</h2>
            <div className='underline'></div>
            </div>
             


            <div className='underline'></div>
            <div className='partner'>
                <div className='part'>

                <img src={img2}></img>
               <h4>BRAND NAME</h4>
                </div>
               <div className='underline'></div>
            </div>
            <div className='partner'>
                <div className='part'>

                <img src={img3}></img>
               <h4>BRAND NAME</h4>
                </div>
               <div className='underline'></div>
            </div>
            <div className='partner'>
                <div className='part'>

                <img src={img4}></img>
                <h4>BRAND NAME</h4>
                </div>
               <div className='underline'></div>
            </div>
             
             
        </section>
        </>
    )
}
export default ourpartner;