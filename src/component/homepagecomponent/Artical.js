 
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
                      <p className='article-p'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
                    <p className='article-p'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
                    <p className='article-p'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>

                </div>
                 
            </div>
             <a className='p3 more'>MORE</a>
        </section>
        </>
    )
}
export default Artical;