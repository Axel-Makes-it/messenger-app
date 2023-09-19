import React, { useState } from "react";
import "../styles/MessageInput.css";
import Send from "../images/send.svg";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

function MessageInput({ db, addMessage }) {
  const [message, setMessage] = useState("");

  const handleInput = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (message.trim() !== "") {
      const messagesCollection = collection(db, "messages");
      try {
        await addDoc(messagesCollection, {
          text: message,
          timestamp: serverTimestamp(),
        });
        addMessage(message);
        setMessage("");
      } catch (error) {
        console.error("Error adding message: ", error);
      }
    }
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
