import React from 'react'


import "./HiddenFees.css"
import phone from "../../img/phone.png"

const HiddenFees = () => {
    return (
        <div className="hiddenFees"> 
            <div>

                <h2>No hidden fees.<br/>Just trees.</h2>
                <p>No monthly recurring subscription fees or hidden costs. More fee information <span> here</span>.</p>
                <p>We charge merchants (stores) a small fee every time you use the card. We take these fees and use them to plant trees on your behalf.</p>
                <a href="#" className="bordered">How it works</a>
            </div>
            <img alt="phone" src={phone} />
        </div>
    )
}

export default HiddenFees  