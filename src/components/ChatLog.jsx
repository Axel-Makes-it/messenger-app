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
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { v4 as uuidv4 } from "uuid";

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
const auth = getAuth();

function ChatLog() {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);

  const addMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

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
  }, []);

  const sendMessage = async (text) => {
    if (text.trim() !== "") {
      const messagesCollection = collection(db, "messages");
      const randomUniqueId = uuidv4();
      try {
        const user = auth.currentUser;
        if (user) {
          await addDoc(messagesCollection, {
            text,
            userId: user.uid,
            timestamp: serverTimestamp(),
            id: randomUniqueId,
            photoURL: user.photoURL,
          });
        }
      } catch (error) {
        console.error("Error sending message: ", error);
      }
    }
  };

  return (
    <div className="chatlog">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`message ${
            user && user.uid === message.userId ? "own-message" : ""
          }`}
        >
          {user && user.uid !== message.userId && (
            <div className="user-info">
              <img
                src={message.photoURL}
                alt={message.displayName}
                className="user-photo"
              />
              <p className="user-name">{message.displayName}</p>
            </div>
          )}
          <p className="chatlog__text">{message.text}</p>
        </div>
      ))}

      <MessageInput db={db} addMessage={addMessage} sendMessage={sendMessage} />
      <MobileBar />
    </div>
  );
}

export default ChatLog;
