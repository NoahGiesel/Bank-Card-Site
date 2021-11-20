import React from 'react'


import "./Objectives.css"
import globe from "../../img/globe.svg"
import care from "../../img/care.svg"
import three from "../../img/three.svg"
import grass from "../../img/grass.png"
import grass_higher from "../../img/grass_higher.svg"
import grass_lower from "../../img/grass_lower.svg"

const Objectives = () => {
    return (
        <div className="objectives bordered">
            <div className="objectives-container">
                <div className="grid left">
                    <img src={globe} alt="globe"/>
                    <p className="bold"><b>Treecard helps you to make impactful and sustained climate action. Everyday.</b></p>
                    <p>There is a cap on how much people can individually afford to donate. We get that. That's why we're offering a product that reforests the planet with every regular payment you make.</p>
                </div>
                <div className="grid center">
                    <img src={care} alt="globe"/>
                    <p className="bold"><b>Powered by Ecosia, the non-for-profit search engine that has planted 100 million trees.</b></p>
                    <p>Together we are working to build an ecosystem of responsible alternatives to everyday services like banking and internet search. Ecosia manages all of Treecard’s reforestation projects.</p>
                </div>
                <div className="grid right">
                    <img src={three} alt="globe"/>
                    <p className="bold"><b>Treecard helps to minimize the damage of spending.</b></p>
                    <p>All consumption comes with an environmental cost. We encourage you to use Treecard for your everyday spending (groceries etc). Unnecessary consumption is bad. Period. Please don't increase your spending just to plant more trees.</p>
                </div>

            </div>
                <img className="grass-left" src={grass_higher} alt="globe"/>
                <img className="grass-right" src={grass_lower} alt="globe"/>
        </div>
    )
}

export default Objectives
