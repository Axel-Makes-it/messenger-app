import React from "react";
import "../styles/Login.css";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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

function Login({ onLogInAsGuest }) {
  const handleLoginAsGuest = (e) => {
    onLogInAsGuest();
    e.preventDefault();
  };

  const handleLoginWithGoogle = (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Google Sign-In Successful", result.user);
      })
      .catch((error) => {
        console.error("Google Sign-In Error", error);
      });
  };

  return (
    <div className="login__wrapper">
      <div className="login__box">
        <h2 className="login__title"> Login</h2>
        <form>
          <div className="Login__form">
            {" "}
            <label htmlFor="username"> Username:</label>
            <input type="text" id="username" placeholder="Type your username" />
          </div>
          <div className="Login__form">
            {" "}
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="Type your password"
              id="password"
            />
          </div>
          <button className="Login__btn">Login</button>
          <button
            className="Login__btn__google"
            onClick={handleLoginWithGoogle}
          >
            Login with Google
          </button>
          <button className="Login__btn__guest" onClick={handleLoginAsGuest}>
            Login as Guest
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
