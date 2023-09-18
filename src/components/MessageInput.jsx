import React, { useState } from "react";
import "../styles/MessageInput.css";
import Send from "../images/send.svg";

function MessageInput({ addMessage }) {
  const [message, setMessage] = useState("");

  const handleInput = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMessage(message);
    setMessage("");
    console.log(message);
  };

  return (
    <>
      <form className="messegeInput__form" onSubmit={handleSubmit}>
        <input
          onChange={handleInput}
          value={message}
          className="messegeInput__input"
          type="text"
          placeholder="Type your messege..."
        />
        <button onSubmit={handleInput} className="messegeInput__btn">
          <img src={Send} alt="send" width={25} />
        </button>
      </form>
    </>
  );
}

export default MessageInput;
