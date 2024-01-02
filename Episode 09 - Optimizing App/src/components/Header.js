import { AVATAR_URL } from "../utils/constants";
import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link  } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {

  const [btnName,setbtnName] =useState("Login");

// if no dependecy array => useEffect is called on every render
// If empty dependecy array => useEffect is called on initial render
// If dependecy array => useEffect is called every time when btnName is updated
// 
// console.log("Outside");

  // useEffect(()=>{
  //   console.log("Use Effect");
  // },[btnName])

  const onlineStatus = useOnlineStatus();
  
    return (
      <div className="header">
        <div className="logo-container">
         <Link to="/">    
         <img
            className="logo"
            src={LOGO_URL}
            alt="logo"
          />
         </Link> 
        </div>
        <div className="nav-items">
          <ul>
            <li className="green-square">{ onlineStatus ? "🟢":"🔴"}</li>
             <li>
              <Link to="/">
              Home
              </Link>
              </li>
            <li >
              <Link to="/about">
              About us
              </Link>
              </li>
            <li>
              <Link to="/contact">
              Contact us
              </Link>
              </li>
              <li>
              <Link to="/grocery">
              Grocery
              </Link>
              </li>
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