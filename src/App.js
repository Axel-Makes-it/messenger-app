import React, { useState, useEffect } from "react";
import "./App.css";
import Chat from "./components/Chat";
import ChatContainer from "./components/ChatContainer";
import SideBarMenu from "./components/SideBarMenu";
import Login from "./components/Login";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
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
    const auth = getAuth(app);

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLoginAsGuest = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("Logged out - worked");
        setIsLoggedIn(false);
      })
      .catch((error) => {
        console.error("Logout error", error);
      });
  };

  if (isLoggedIn === null) {
    return <div className="app__loading">Loading...</div>;
  }

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <SideBarMenu onLogout={handleLogout} />
          <ChatContainer />
          <Chat />
        </>
      ) : (
        <Login onLogInAsGuest={handleLoginAsGuest} />
      )}
    </div>
  );
}

export default App;
