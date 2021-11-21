import React from 'react'

import "./Future.css"

const Future = () => {
    return (
        <div className="future">
            <h2>What Our Future...</h2>
            <div className="button">
                <a href="##" className="red bordered">LOOKS LIKE</a>
                <a href="##" className="green bordered">COULD BE</a>
            </div>
            <div className="looks-like-container bordered">
                <div className="looks-like">
                    <h2>We are sleepwalking into an irreversible crisis.</h2>
                    <p>The world continues to suffer, 15 billion trees are cut down each year. Every year. The global number of trees has already fallen approximately 46%, since the start of human civilisation.  Humans have wiped out 2/3 of animal wildlife since 1970.</p>
                    <div className="grid">
                        <div className="left"><p>Hello there</p></div>
                        <div className="center"><p>Hello there</p></div>
                        <div className="right"><p>Hello there</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Future
