import './App.css';
import React from 'react';
import Card from './component/Card';
import Header from './component/Header';
import Aboutus from './component/Aboutus';
import ResponsibleTech from './component/ResponsibleTech';
import Ourprocess from './component/Ourprocess';
import Artical from './component/Artical';
import Abovefooter from './component/Abovefooter';
import Services from './component/Services';
import Footer from './component/Footer';

function Homepage(){
    return(
        <>
        
        <Header/>
        <Aboutus/>
        <Services/>
        <ResponsibleTech/>
        <Ourprocess/>
        <Artical/>
        <Abovefooter/>
        <Footer/>
 
        </>
    )
}
export default Homepage;