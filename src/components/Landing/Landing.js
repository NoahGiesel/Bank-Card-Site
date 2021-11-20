import React from 'react'
import TypeAnimation from 'react-type-animation';


import "./Landing.css"
import card from "../../img/card-landing.png"
 

const Landing = () => {
    return (
        <div className="landing">
            <div className="text-seciton">
                <div className="landing-container">
                    
                    {/* maybe h2 = https://codepen.io/robin-dela/pen/KKPYoBq?editors=1000 */}
                    <h2>You buy</h2>
                    <TypeAnimation
                            cursor={true}
                            sequence={[
                                'train tickets,',
                                2000,
                                'a new car,',
                                2000,
                                'water bottles,',
                                2000,
                            ]}
                            wrapper="h3"
                            repeat={Infinity}
                    />
                    <h2>we plant trees.</h2>
                    <div className="text">
                        <p>Make the world a better place.</p> 
                    </div>
                </div>
            </div>
            <div className="image-seciton">
                <img  src={card} alt="Logo"/>
            </div>
        </div>
    )
}

export default Landing
