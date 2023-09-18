import React from "react";
import "../styles/ChatLog.css";
import MobileBar from "./MobileBar";
import MessegeInput from "./MessegeInput";

function ChatLog() {
  return (
    <>
      <div>
        <div className="chatlog">
          <p className="chatlog__text">🤠Hello, chat chat!🤠</p>
          <p className="chatlog__text">yeah yeah, talk 🤪</p>
          <p className="chatlog__text">wow thats great! 😀</p>
          <p className="chatlog__text">wow thats great! 😀</p>
          <p className="chatlog__text">wow thats great! 😀</p>
          <p className="chatlog__text">wow thats great! 😀</p>
          <p className="chatlog__text">wow thats great! 😀</p>
          <p className="chatlog__text">wow thats great! 😀</p>
          <p className="chatlog__text">wow thats great! 😀</p>
          <p className="chatlog__text">wow thats great! 😀</p>
          <p className="chatlog__text">wow thats great! 😀</p>
          <p className="chatlog__text">wow thats great! 😀</p>
          <p className="chatlog__text">wow thats great! 😀</p>
          <p className="chatlog__text">wow thats great! 😀</p>
          <p className="chatlog__text">oh yeahhhhhhhh! 😀 😀</p>
          <p className="chatlog__text">oh yeahhhhhhhh! 😀</p>
        </div>
      </div>
      <MessegeInput />
      <MobileBar />
    </>
  );
}

export default ChatLog;
