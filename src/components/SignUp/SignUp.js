import React from 'react'

import "./SignUp.css"
import card from "../../img/debit_card.png"


const SignUp = () => {
    return (
        <div className="signup bordered">
            <div className="img-container">
                <img src={card} alt="card" />
            </div>
            <div className='right'>
                <h2>Sign up now to start planting trees with every purchase.</h2>
                <a className="bordered" href="##"   >Oder your card</a>
            </div>
        </div>
    )
}

export default SignUp


