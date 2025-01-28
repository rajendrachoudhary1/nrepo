import './App.css';
import React from 'react';
import Card from './component/Card';
import Header from './component/Header';
import Aboutus from './component/Aboutus';
import Homepage1 from './component/Homepage1';
import Homepage2 from './component/Homepage2';
import Homepage3 from './component/Homepage3';
import Abovefooter from './component/Abovefooter';
import Services from './component/Services';
import Footer from './component/Footer';

function Homepage(){
    return(
        <>
        
        <Header/>
        <Aboutus/>
        <Services/>
        <Homepage1/>
        <Homepage2/>
        <Homepage3/>
        <Abovefooter/>
        <Footer/>
 
        </>
    )
}
export default Homepage;