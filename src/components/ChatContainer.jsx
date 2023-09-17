import React from "react";
import "../styles/ChatContainer.css";
import Edit from "../images/edit.svg";
import Search from "../images/search.svg";
import Profile from "../images/profile.jpg";

function ChatContainer() {
  return (
    <div className="chatcontainer__wapper">
      <div className="chatcontainer__container">
        <div className="chatcontainer__chat__section">
          <h2>Chats</h2>
          <img
            className="chatcontainer__edit__img"
            src={Edit}
            alt="edit"
            width={35}
            height={35}
          />
        </div>
        <div className="chatcontainer__chats__container">
          <div className="chatcontainer__input__container">
            <form className="chatcontainer__form__container">
              <img src={Search} alt="search" width={28} />
              <input
                className="chatcontainer__chats__input"
                type="text"
                placeholder="Search for chats"
              />
            </form>
          </div>
          <div className="chatcontainer__chat__rooms">
            <div className="chatcontainer__rooms__display">
              <img
                className="chatcontainer__img"
                src={Profile}
                alt="profile"
                width={60}
              />
              <div className="chatcontainer__info">
                <p>
                  <strong>Axel Santiago</strong>
                </p>
                <p className="chatcontainer__info__text">
                  Hi, can you make and app? I...
                </p>
              </div>
            </div>
            <div className="chatcontainer__rooms__display">
              <img
                className="chatcontainer__img"
                src={Profile}
                alt="profile"
                width={60}
              />
              <div className="chatcontainer__info">
                <p>
                  <strong>Axel Santiago</strong>
                </p>
                <p className="chatcontainer__info__text">
                  Hi, can you make and app? I...
                </p>
              </div>
            </div>
            <div className="chatcontainer__rooms__display">
              <img
                className="chatcontainer__img"
                src={Profile}
                alt="profile"
                width={60}
              />
              <div className="chatcontainer__info">
                <p>
                  <strong>Axel Santiago</strong>
                </p>
                <p className="chatcontainer__info__text">
                  Hi, can you make and app? I...
                </p>
              </div>
            </div>
            <div className="chatcontainer__rooms__display">
              <img
                className="chatcontainer__img"
                src={Profile}
                alt="profile"
                width={60}
              />
              <div className="chatcontainer__info">
                <p>
                  <strong>Axel Santiago</strong>
                </p>
                <p className="chatcontainer__info__text">
                  Hi, can you make and app? I...
                </p>
              </div>
            </div>
            <div className="chatcontainer__rooms__display">
              <img
                className="chatcontainer__img"
                src={Profile}
                alt="profile"
                width={60}
              />
              <div className="chatcontainer__info">
                <p>
                  <strong>Axel Santiago</strong>
                </p>
                <p className="chatcontainer__info__text">
                  Hi, can you make and app? I...
                </p>
              </div>
            </div>
            <div className="chatcontainer__rooms__display">
              <img
                className="chatcontainer__img"
                src={Profile}
                alt="profile"
                width={60}
              />
              <div className="chatcontainer__info">
                <p>
                  <strong>Axel Santiago</strong>
                </p>
                <p className="chatcontainer__info__text">
                  Hi, can you make and app? I...
                </p>
              </div>
            </div>
            <div className="chatcontainer__rooms__display">
              <img
                className="chatcontainer__img"
                src={Profile}
                alt="profile"
                width={60}
              />
              <div className="chatcontainer__info">
                <p>
                  <strong>Axel Santiago</strong>
                </p>
                <p className="chatcontainer__info__text">
                  Hi, can you make and app? I...
                </p>
              </div>
            </div>
            <div className="chatcontainer__rooms__display">
              <img
                className="chatcontainer__img"
                src={Profile}
                alt="profile"
                width={60}
              />
              <div className="chatcontainer__info">
                <p>
                  <strong>Axel Santiago</strong>
                </p>
                <p className="chatcontainer__info__text">
                  Hi, can you make and app? I...
                </p>
              </div>
            </div>
            <div className="chatcontainer__rooms__display">
              <img
                className="chatcontainer__img"
                src={Profile}
                alt="profile"
                width={60}
              />
              <div className="chatcontainer__info">
                <p>
                  <strong>Axel Santiago</strong>
                </p>
                <p className="chatcontainer__info__text">
                  Hi, can you make and app? I...
                </p>
              </div>
            </div>
            <div className="chatcontainer__rooms__display">
              <img
                className="chatcontainer__img"
                src={Profile}
                alt="profile"
                width={60}
              />
              <div className="chatcontainer__info">
                <p>
                  <strong>Axel Santiago</strong>
                </p>
                <p className="chatcontainer__info__text">
                  Hi, can you make and app? I...
                </p>
              </div>
            </div>
            <div className="chatcontainer__rooms__display">
              <img
                className="chatcontainer__img"
                src={Profile}
                alt="profile"
                width={60}
              />
              <div className="chatcontainer__info">
                <p>
                  <strong>Axel Santiago</strong>
                </p>
                <p className="chatcontainer__info__text">
                  Hi, can you make and app? I...
                </p>
              </div>
            </div>
            <div className="chatcontainer__rooms__display">
              <img
                className="chatcontainer__img"
                src={Profile}
                alt="profile"
                width={60}
              />
              <div className="chatcontainer__info">
                <p>
                  <strong>Axel Santiago</strong>
                </p>
                <p className="chatcontainer__info__text">
                  Hi, can you make and app? I...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatContainer;
