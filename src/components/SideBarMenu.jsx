import React from "react";
import { getAuth, signOut } from "firebase/auth"; // Import signOut
import "../styles/SideBar.css";
import "../styles/MobileBar.css";
import Logo from "../images/Logo2.png";
import Chat from "../images/chat.svg";
import Phone from "../images/Phone.svg";
import Friends from "../images/Friends.svg";
import Settings from "../images/Settings.svg";
import Logout from "../images/Logout.svg";

function SideBarMenu({ onLogout }) {
  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Logged out - worked");
        onLogout();
      })
      .catch((error) => {
        console.error("Logout error", error);
      });
  };

  return (
    <div className="sidebar__wrapper">
      <div className="sidebar__container">
        <div className="sidebar__img">
          <img src={Logo} alt="Logo" width={60} />
        </div>
        <ul>
          <li>
            <img src={Chat} alt="chat" width={35} />
          </li>
          <li>
            <img src={Phone} alt="Phone" width={35} />
          </li>
          <li>
            <img src={Friends} alt="Friends" width={35} />
          </li>
          <li>
            <img src={Settings} alt="Settings" width={35} />
          </li>
        </ul>
        <div className="sidebar__img" onClick={handleLogout}>
          <li>
            <img src={Logout} alt="Logout" width={35} />
          </li>
        </div>
      </div>
    </div>
  );
}

export default SideBarMenu;
