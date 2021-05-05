import React from 'react';
import DarkMode from '../DarkMode/DarkMode';
import '../../Scss/styles.css';

export default function Nav() {
    return (
        <div className= "nav flex">        
           <span className="tituloPrincipal">Where in the World?</span>
           <DarkMode />
           
        </div>


    )
};