import React from 'react'


import "./Footer.css"
import leaf from "../../img/leaf.svg"
import logo from "../../img/logo.svg"
import twitter from "../../img/twitter.svg"
import linkedin from "../../img/linkedin.svg"
import instagram from "../../img/instagram.svg"
import facebook from "../../img/facebook.svg"


const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <h2>Money doesn’t grow on trees <br/> but it can plant them <img src={leaf} alt="leaf" /></h2>
                <div className="grid">
                    <div className="footer-left">
                        <ul>
                            <li>
                            <div className="logo">
                                <img  src={logo} alt="Logo"/> 
                                <h2><a href="#">CardHold</a></h2>
                            </div>
                            </li>
                            <li className="get-card"><a className="bordered" href="#">Get the Card</a></li>
                            <li>
                                <div className="socials">
                                <img  src={facebook} alt="facebook"/> 
                                <img  src={instagram} alt="instagram"/> 
                                <img  src={linkedin} alt="linkedin"/> 
                                <img  src={twitter} alt="twitter"/> 

                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-text">
                        <ul>
                            <li>Home</li>
                            <li>How it Works</li>
                            <li>Our Mission</li>
                            <li>Your Impact</li>
                        </ul>
                    </div>
                    <div className="footer-text">
                        <ul>
                            <li>FAQs</li>
                            <li>Get the App</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="footer-text">
                        <ul>
                            <li><h2>Noah Giesel</h2><p>made in 2021</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer 