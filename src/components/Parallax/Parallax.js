import React, {useEffect} from 'react'

import "./Parallax.css"

import quattro from "../../img/sun.png";
import tre from "../../img/grass.png";
import due from "../../img/forest.png"; 

const Parallax = () => {
    useEffect(() => {
    let quattro = document.getElementById("quattro");
    let tre = document.getElementById("tre");
    let due = document.getElementById("due");

    window.addEventListener("scroll", function () {
        var value = window.scrollY;
  
        quattro.style.bottom = value * -0.15 + "px";
        tre.style.bottom = value * -0.9 + "px";
        due.style.bottom = value * -0.2 + "px"; 
      });
    });

    return (
        <div className="parallax">
            <img src={quattro} id="quattro" alt="quattro" />
            <img src={tre} id="tre" alt="tre" />
            <img src={due} id="due" alt="due" />
        </div>
    )
} 


export default Parallax
