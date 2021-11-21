import React , {useState , useEffect} from 'react'

import "./Header.css"
import logo from "../../img/logo.svg"


const Header = () => {

    const [scroll, setScroll] = useState(false)

    const listenScrollEvent = e => {
        if (window.scrollY > 30) {
            setScroll(true)
        }else { 
            
            setScroll(false)
        }
      }

        useEffect(() => {
            window.addEventListener('scroll', listenScrollEvent )
        }, [])

    return (
        <div className={scroll ? "header on-scroll" : "header"}>
            <div className={scroll ? "container-scrolled container  bordered": "container  bordered"}>
                <div className="logo">
                    <img  src={logo} alt="Logo"/> 
                    <h2><a href="##">CardHold</a></h2>
                </div>
                <div className="center">
                    <ul>
                        <li><a href="##">Features</a></li>
                        <li><a href="##">Savings</a></li>
                        <li><a href="##">Credit</a></li>
                        <li><a href="##">Payments</a></li>
                    </ul>
                </div>
                <div className="right ">
                    <a href="##" className="bordered">ORDER CARD</a>
                </div>
            </div>
        </div>
    )
}

export default Header