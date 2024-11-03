import React from "react";
import logo from "../assets/img/logo.svg"


function Navbar() {
    return (
        <nav>
            <div className="navbar-container">
                <img src={logo} alt="logo"/>
                <h3>Frontended.itacademy</h3>
            </div>
            
        </nav>
    );
}
export default Navbar;