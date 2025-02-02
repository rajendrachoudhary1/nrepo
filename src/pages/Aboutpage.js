import '../App.css';
import React from 'react'; 
import Abovefooter from '../component/homepagecomponent/Abovefooter'; 
 
import Headerabout from '../component/aboutpagecomponent/Headerabout';
import Aboutgrp from '../component/aboutpagecomponent/Aboutgrp';
import Aboutcard from '../component/aboutpagecomponent/Aboutcard';
import Teamcard from '../component/aboutpagecomponent/Teamcard';
import Team from '../component/aboutpagecomponent/Team';

function Aboutpage(){
    return(
        <>
        <Headerabout/>
        <Aboutgrp/>
        <Aboutcard/>
        <Aboutcard/>
        <Aboutcard/>
        <Team/>
      
       
 
        </>
    )
}
export default Aboutpage;