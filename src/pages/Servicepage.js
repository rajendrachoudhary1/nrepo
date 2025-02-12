import '../App.css';
import React from 'react';
import Cardip from '../component/servicecomponent/Cardip';
import  Text from '../component/servicecomponent/Text';
import Header2 from '../component/servicecomponent/Header2';

function Servicepage(){
    window.scrollTo({ top: 0, behavior: "smooth" });

    return(
        <>
         <Header2/>
         <Text/>
         <Cardip/>
         <Cardip/>
         <Cardip/>
         <Cardip/>
        
 
        </>
    )
}
export default Servicepage;