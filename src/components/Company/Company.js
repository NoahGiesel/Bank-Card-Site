import React from 'react'


import "./Company.css"

import standard from "../../img/standard.png"
import sudnay_times from "../../img/sudnay_times.png"
import insider from "../../img/insider.png"
import techCrunch from "../../img/techCrunch.png"

const Company = () => {
    return (
        <div className="company">
            <img src={sudnay_times} alt="the sunday times" />
            <img src={insider} alt="business insider" />
            <img src={techCrunch} alt="TechCrunch" />
            <img src={standard} alt="evening standard" />
        </div>
    )
}

export default Company 