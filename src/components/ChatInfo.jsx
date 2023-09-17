import React from "react";
import "../styles/ChatInfo.css";
import Profile from "../images/profile.png";
import Details from "../images/details.svg";

function ChatInfo() {
  return (
    <div className="chatinfo__wrapper">
      <div className="chatinfo__detail">
        <div className="chatinfo__details__container">
          <h2>Details</h2>
          <div className="chatInfo__detail__info">
            <img
              className="chatInfo__img"
              src={Profile}
              alt="profile"
              width={60}
              height={60}
            />
            <img
              className="chatInfo__details__img"
              src={Details}
              alt="details"
              width={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatInfo;
