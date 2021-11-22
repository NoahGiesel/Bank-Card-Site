import React from 'react'
import CountUp from 'react-countup';

import "./TextAnimation.css"


const TextAnimation = () => {
    return (
        <div className="textAnimation">
            <h2>Join the green money<br/> <span>Card Holders</span>  for a<br/> <span>tree</span>-volution  </h2>
            <p>So far, the Ecosia community has helped to plant over</p>
            <div className="count">
             
                <h2 ><CountUp start={0} end={120000000} delay={3} duration="5" /> trees</h2>
                <p>where they’re needed most.</p>
            </div>

        </div>
    )
}
 
 
export default TextAnimation
