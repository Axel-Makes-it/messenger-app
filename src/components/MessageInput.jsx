import React, { useState } from "react";
import "../styles/MessageInput.css";
import Send from "../images/send.svg";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import { getAuth } from "firebase/auth"; // Import getAuth function from Firebase

function MessageInput({ db, addMessage }) {
  const [message, setMessage] = useState("");
  const auth = getAuth();

  const handleInput = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (message.trim() !== "") {
      const messagesCollection = collection(db, "messages");
      const randomUniqueId = uuidv4();
      try {
        const user = auth.currentUser;
        if (user) {
          await addDoc(messagesCollection, {
            text: message,
            timestamp: serverTimestamp(),
            id: randomUniqueId,
            photoURL: user.photoURL,
          });
          addMessage(message);
          setMessage("");
        }
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
          placeholder="Type your message..."
        />
        <button type="submit" className="messegeInput__btn">
          <img src={Send} alt="send" width={25} />
        </button>
      </form>
    </>
  );
}

export default MessageInput;
