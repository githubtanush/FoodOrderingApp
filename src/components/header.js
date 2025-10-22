import { CDN_URL,LOGO_URL } from "../utils/config";
import { useState } from "react";

const Header = () => {
    const [btnNameReact,setBtnNameReact] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" 
                src= {LOGO_URL}/>
                <h3>FoodieMint</h3>
            </div>
            <div className="nav-Items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" 
                    onClick={() => {
                        btnNameReact === "Login" ?
                        setBtnNameReact("Logout") : 
                        setBtnNameReact("Login");
                    }}
                    >{btnNameReact}</button>
                </ul>
            </div>
        </div>

    );
};
export default Header;