import React, { useState } from "react";
import "../styles/ChatLog.css";
import MobileBar from "./MobileBar";
import MessageInput from "./MessageInput";

function ChatLog() {
  const [messages, setMessages] = useState([]);

  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <>
      <div className="chatlog">
        {messages.map((message, index) => (
          <p key={index} className="chatlog__text">
            {message}
          </p>
        ))}
      </div>
      <MessageInput addMessage={addMessage} />
      <MobileBar />
    </>
  );
}

export default ChatLog;
