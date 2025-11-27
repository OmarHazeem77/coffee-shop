import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";

function Register({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() === "" || password.trim() === "") {
      alert("⚠️ Please enter both username and password!");
      return;
    }

    setIsLoggedIn(true);
    navigate("/home");
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h1 className="register-title">Welcome Back ☕</h1>
        <p className="register-subtitle">
          Sign in to continue your coffee journey
        </p>
        <form className="register-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            className="register-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="register-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="register-btn">
            Login
          </button>
        </form>
        <p className="register-footer">
          Don't have an account? <Link >Create one</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;




