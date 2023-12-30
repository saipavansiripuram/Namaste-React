import { AVATAR_URL } from "../utils/constants";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  // let btnName = "Login";
  // Local variable there is no way to track whether the variable is changed or not , react will not know anything

  // but when we have state variable ,whenever update the state or whenever state is changed react will rerender the whole component

  // As soon as we clicked the button , react chaged the logout button as well as it refreshes the component

  const [btnName,setbtnName] =useState("Login");

  // Whenever we click the logout button setbtnName is called , it calling the Header component once again, so when it calls the Header component again it updating the btnName as Logout


    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
            alt="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
             <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
            <img
              src={AVATAR_URL}
              alt=""
              className="avtar"
            />
            <button className="login" onClick={()=>{btnName === "Login" ? setbtnName("Logout"):setbtnName("Login");}}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };


  export default Header; 