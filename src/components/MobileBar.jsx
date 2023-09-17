import React from "react";
import "../styles/SideBar.css";
import "../styles/MobileBar.css";
import Logo from "../images/Logo2.png";
import Chat from "../images/chat.svg";
import Phone from "../images/Phone.svg";
import Friends from "../images/Friends.svg";
import Settings from "../images/Settings.svg";
import Logout from "../images/Logout.svg";

function MobileBar() {
  return (
    <div className="mobileBar__wrapper">
      <div className="mobileBar__container">
        <div className="mobileBar__img">
          <img src={Logo} alt="Logo" width={55} />
        </div>
        <ul className="mobileBar__ul">
          <li>
            <img src={Chat} alt="chat" width={30} />
          </li>
          <li>
            <img src={Phone} alt="Phone" width={30} />
          </li>
          <li>
            <img src={Friends} alt="Friends" width={30} />
          </li>
          <li>
            <img src={Settings} alt="Settings" width={30} />
          </li>
        </ul>
        <div className="mobileBar__img">
          <li>
            <img src={Logout} alt="Logout" width={30} />
          </li>
        </div>
      </div>
    </div>
  );
}

export default MobileBar;
