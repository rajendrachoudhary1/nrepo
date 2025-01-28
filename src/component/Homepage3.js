import '../App.css';
import React from 'react';
import img1 from '../Img/grp.jpg'

function Homepage3(){
    return(
        <>
        <section  className='fourthsection'>
            <h3>Articals and News</h3>
            <p className='underline-artical'></p>
            <div className='mainartical'>
                <div className='artical'>
                    <img className='newimg' src={img1}></img>
                    <div className='news'>
                    <p>Articals</p>
                    <p className='underline'></p>
                    <p>loren the system will perform various 
                      mathematical operations such as finding roots, integration, 
                      and differentiation.</p>
                    </div>

                </div>
                <div className='artical'>
                    <img className='newimg' src={img1}></img>
                    <div className='news'>
                    <p>Articals</p>
                    <p className='underline'></p>
                    <p>loren the system will perform various 
                      mathematical operations such as finding roots, integration, 
                      and differentiation.</p>
                    </div>

                </div>
                <div className='artical'>
                    <img className='newimg' src={img1}></img>
                    <div className='news'>
                    <p>Articals</p>
                    <p className='underline'></p>
                    <p>loren the system will perform various 
                      mathematical operations such as finding roots, integration, 
                      and differentiation.</p>
                    </div>

                </div>
                 
            </div>
             
        </section>
        </>
    )
}
export default Homepage3;