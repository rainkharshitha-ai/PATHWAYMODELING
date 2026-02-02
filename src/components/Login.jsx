import React, { useState } from "react";
import "./Login.css";

import { FaUser, FaLock } from "react-icons/fa";

import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ Email + Password Login (EXISTING USERS ONLY)
  const loginEmail = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Email login successful");
    } catch (error) {
      alert(error.message);
    }
  };

  // ✅ Google Login
  const loginGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      alert("Google login successful");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Login</h2>

        <div className="input-box">
          <FaUser className="icon" />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-box">
          <FaLock className="icon" />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="login-btn" onClick={loginEmail}>
          LOGIN
        </button>

        <p className="or-text">OR</p>

        <div className="social-icons">
          <button className="google-btn" onClick={loginGoogle}>
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
