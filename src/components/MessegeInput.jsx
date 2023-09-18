import React from "react";
import "../styles/MessegeInput.css";
import Send from "../images/send.svg";

function MessegeInput() {
  return (
    <>
      <form className="messegeInput__form">
        <input
          className="messegeInput__input"
          type="text"
          placeholder="Type your messege..."
        />
        <button className="messegeInput__btn">
          <img src={Send} alt="send" width={25} />
        </button>
      </form>
    </>
  );
}

export default MessegeInput;
