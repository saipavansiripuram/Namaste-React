import React from "react";
import ReactDOM from "react-dom";
import './header.css';

const Header = ()=>{
    return(
        <header>
            <nav>
                <img src="https://image.similarpng.com/very-thumbnail/2021/05/Colorful-circle-logo-design-illustration-on-transparent-background-PNG.png" alt="" className="logo" />
                <input type="text" id="search" placeholder="Search.."/>
                <img src="https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png" alt="" className="avtar" />
            </nav>
        </header>
    );
}


const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<Header/>); 
