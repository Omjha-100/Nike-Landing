import React from "react"
import "../App.css"
function Navbar(){
    return(
        <nav className="nav-back">
            <div className="nav-bar">
                <div>
                    <img className="nike-img" src="../../public/images/brand_logo.png" alt="Nike-logo" />
                </div>
                <ul className="nav-ul">
                    <li ><a href="#" className="nav-ul-element">Home</a></li>
                    <li ><a href="#" className="nav-ul-element">Sale</a></li>
                    <li ><a href="#" className="nav-ul-element">About</a></li>
                    <li><a href="#" className="nav-ul-element">Contact</a></li>
                </ul>
                <button className="btn-red">Login</button>
            </div>
            
        </nav>
    )
}
export default Navbar;