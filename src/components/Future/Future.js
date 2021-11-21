import React, {useState} from 'react'

import "./Future.css"

import fire from "../../img/fire.jpg"
import elephant from "../../img/elephant.png"
import disaster from "../../img/disaster.png"
import nature from "../../img/nature.jpeg"
import monkey from "../../img/monkey.jpeg"
import plants from "../../img/plants.jpeg"



const Future = () => {

    const [isActive, setActive] = useState(true);

    const toggleClass = () => {
      setActive(!isActive);
    };

    return (
        <div className="future">
            <h2>What Our Future...</h2>
            <div className="button">
                <a onClick={isActive ?  null : toggleClass} href="##" className={isActive ? "red bordered" : "light-red bordered"}>LOOKS LIKE</a>
                <a onClick={!isActive ?  null : toggleClass} href="##" className={!isActive ? "green bordered" : "light-green bordered"}>COULD BE</a>
            </div>
            { isActive ? 
                <div className="looks-like-container-red bordered">
                <div className="looks-like">
                    <h2>We are sleepwalking into an irreversible crisis.</h2>
                    <p>The world continues to suffer, 15 billion trees are cut down each year. Every year. The global number of trees has already fallen approximately 46%, since the start of human civilisation.  Humans have wiped out 2/3 of animal wildlife since 1970.</p>
                    <div className="grid">
                        <div className="left">
                            <img className="bordered" src={fire} alt="fire"/>
                            <h2>Our planet is burning</h2>
                            <p>Ever higher levels of carbon in the atmosphere are increasing the likelihood of wildfires and drought.</p>
                        </div>
                        <div className="center">
                            <img className="bordered" src={elephant} alt="elephant"/>
                            <h2>Our wildlife is disappearing</h2>
                            <p>We are facing mass extinction. Wildlife populations have been reduced by 68% since 1970.</p>
                        </div>
                        <div className="right">
                            <img className="bordered" src={disaster} alt="disaster"/>
                            <h2>Our people are suffering</h2>
                            <p>Terrible climate conditions have forced millions to migrate. By 2050, 150-200 million people are forecasted to have to leave their home and communities.</p>
                        </div>
                    </div>
                </div>
                </div>
            :
                <div className="looks-like-container bordered">
                    <div className="looks-like">
                        <h2>A new era of responsible enterprises</h2>
                        <p>We are an impact first business, and 80% of profits go toward reforestation projects.</p>
                        <div className="grid">
                            <div className="left">
                                <img className="bordered" src={nature} alt="nature"/>
                                <h2>Protect the planet’s lungs</h2>
                                <p>We plan to reforest the planet by planting native trees where forests have historically grown.</p>
                            </div>
                            <div className="center">
                                <img className="bordered" src={monkey} alt="monkey"/>
                                <h2>Restore animal habitats</h2>
                                <p>By planting trees we will create and conserve habitats for endangered animal species.</p>
                            </div>
                            <div className="right">
                                <img className="bordered" src={plants} alt="plants"/>
                                <h2>Help communities thrive</h2>
                                <p>We will grow fresh produce in agroforestry systems providing food and income for those who need it most.</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
             
        </div>
    )
}

export default Future
