import React, { useState, useEffect } from "react";
import "../styles/ChatLog.css";
import MobileBar from "./MobileBar";
import MessageInput from "./MessageInput";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAEErL3_7t01i68dBE0c5AvGYmimbJdut4",
  authDomain: "messenger-app-258fd.firebaseapp.com",
  projectId: "messenger-app-258fd",
  storageBucket: "messenger-app-258fd.appspot.com",
  messagingSenderId: "173486855625",
  appId: "1:173486855625:web:785774f5d4106b09238418",
  measurementId: "G-7ZX57XFH2K",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function ChatLog() {
  const [messages, setMessages] = useState([]);

  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  useEffect(() => {
    const messagesCollection = collection(db, "messages");
    const q = query(messagesCollection, orderBy("timestamp"), limit(25));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messageData = [];
      querySnapshot.forEach((doc) => {
        messageData.push({ id: doc.id, ...doc.data() });
      });

      setMessages(messageData);
    });

    return () => unsubscribe();
  }, [db]);

  return (
    <div className="chatlog">
      {messages.map((messages) => (
        <p key={messages.id} className="chatlog__text">
          {messages.text}
        </p>
      ))}

      <MessageInput db={db} addMessage={addMessage} />
      <MobileBar />
    </div>
  );
}

export default ChatLog;
