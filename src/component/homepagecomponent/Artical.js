 
import '../../App.css';

import React from 'react';
import img1 from '../../Img/agrp.jpg'

function Artical(){
    return(
        <>
        <section  className='fourthsection'>
           <div className='aboutus our'>
            <h2>Articles and news</h2>
            <p className='underline'></p>
            </div>

            <div className='mainartical'>
                <div className='artical'>
                    <img className='newimg' src={img1}></img>
                    <div className='news'>
                      <div class="articles-div">
                        <p>Articles</p> 
                        <p>2 min</p> 
                      </div>

                      <div className='underline'></div>
                      <h2>Intelligent Responses</h2>
                      <p className='article-p'>loren the system will perform various 
                      mathematical operations such as finding roots, integration, 
                      and differentiation.</p>
                    </div>

                </div>
                <div className='artical'>
                    <img className='newimg' src={img1}></img>
                    <div className='news'>
                    <div class="articles-div">
                        <p>Articles</p> 
                        <p>2 min</p> 
                    </div>

                    <p className='underline'></p>
                    <h2>Intelligent Responses</h2>
                    <p className='article-p'>loren the system will perform various 
                      mathematical operations such as finding roots, integration, 
                      and differentiation.</p>
                    </div>

                </div>
                <div className='artical'>
                    <img className='newimg' src={img1}></img>
                    <div className='news'>
                    <div class="articles-div">
                        <p>Articles</p> 
                        <p>2 min</p> 
                    </div>

                    <p className='underline'></p>
                    <h2>Intelligent Responses</h2>
                    <p className='article-p'>loren the system will perform various 
                      mathematical operations such as finding roots, integration, 
                      and differentiation.</p>
                    </div>

                </div>
                 
            </div>
             
        </section>
        </>
    )
}
export default Artical;