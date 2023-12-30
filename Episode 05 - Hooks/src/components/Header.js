import { AVATAR_URL } from "../utils/constants";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
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
          </ul>
        </div>
      </div>
    );
  };


  export default Header;