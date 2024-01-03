import { AVATAR_URL } from "../utils/constants";
import { LOGO_URL } from "../utils/constants";
import { useEffect, useState ,useContext} from "react";
import { Link  } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {

  const [btnName,setbtnName] =useState("Login");

  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);
  console.log(loggedInUser);
  
    return (
      <div className="flex justify-between m-4 p-2 items-center bg-pink-100 shadow-xl">
        <div className="logo-container">
         <Link to="/">    
         <img
            className="w-48"
            src={LOGO_URL}
            alt="logo"
          />
         </Link> 
        </div>
        <div className="nav-items   items-center ">
          <ul className="flex justify-evenly items-center p-4 gap-4 text-2xl font-bold" >
            <li >{ onlineStatus ? "🟢":"🔴"}</li>
             <li  >
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
              className="w-24"
            />
            <button className="login" onClick={()=>{btnName === "Login" ? setbtnName("Logout"):setbtnName("Login");}}>{btnName}</button>
            <li className="font-bold">{loggedInUser}</li>
          </ul>
        </div>
      </div>
    );
  };


  export default Header; 