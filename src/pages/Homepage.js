import '../App.css';
import React from 'react';
import Aboutus from '../component/homepagecomponent/Aboutus';
import ResponsibleTech from '../component/homepagecomponent/ResponsibleTech';
import Ourpartner from '../component/homepagecomponent/Ourpartner';
import Artical from '../component/homepagecomponent/Artical';
import Abovefooter from '../component/homepagecomponent/Abovefooter';
import Services from '../component/homepagecomponent/Services';
import Footer from '../component/homepagecomponent/Footer';
import Header from '../component/homepagecomponent/Header';
 

function Homepage(){
    window.scrollTo({ top: 0, behavior: "smooth" });

    return(
        <>
        <Header/>
        <Aboutus/>
        <Services/>
        <ResponsibleTech/>
        <Ourpartner/>
        <Artical/>
        <Abovefooter/>
       
 
        </>
    )
}
export default Homepage;