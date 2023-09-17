import React from "react";
import "../styles/Chat.css";
import Profile from "../images/profile.jpg";
import Phone1 from "../images/phone1.svg";
import Record from "../images/record.svg";
import ChatInfo from "./ChatInfo";
import ChatLog from "./ChatLog";

function Chat() {
  return (
    <>
      {" "}
      <div className="chat__wrapper">
        <div className="chat__room__container">
          <div className="chat__room__profile">
            <img
              className="chat__profile__img"
              src={Profile}
              alt="profile"
              width={60}
              height={60}
            />
            <h2 className="chat__room">SpeedTeam Room</h2>
          </div>
          <div className="chat__room__action">
            <ul className="chat__roon__action__ul">
              <li>
                <img src={Record} alt="record" width={35} />
              </li>
              <li>
                <img src={Phone1} alt="phone" width={35} />
              </li>
            </ul>
          </div>
        </div>
        <ChatLog />
      </div>
      <ChatInfo />
    </>
  );
}

export default Chat;
