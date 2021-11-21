import React from 'react'

import "./Store.css"
import apple from "../../img/apple.svg"
import google from "../../img/google.svg"


const Store = () => {
    return (
        <div className="store bordered">
            <div>
                <h2>Let's make a difference together</h2>
                <p>Download our app to join our waiting list for updates.</p>
            </div>
            <div className="group">
                <a className="bordered" href="##">
                    <img src={apple} alt="apple" />
                </a>
                <a className="bordered" href="##">
                    <img src={google} alt="google" />
                </a>
            </div>
         </div>
    )
}

export default Store
