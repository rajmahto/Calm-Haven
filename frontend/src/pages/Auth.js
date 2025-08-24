import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";




const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const toggleForm = () => setIsRegister(!isRegister);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegister) {
        await axios.post("http://localhost:5000/api/auth/register", {
          name,
          email,
          password,
        });
        alert("Registration successful! Please log in.");
        setIsRegister(false);
      } else {
        const { data } = await axios.post(
          "http://localhost:5000/api/auth/login",
          {
            email,
            password,
          }
        );
        localStorage.setItem("token", data.token);
        alert("Login successful!");
        navigate("/"); // Redirect to home
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isRegister ? "Register" : "Login"}</h2>
        <form onSubmit={handleSubmit}>
          {isRegister && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{isRegister ? "Register" : "Login"}</button>
        </form>
        <p onClick={toggleForm} className="switch-form">
          {isRegister
            ? "Already have an account? Login"
            : "Don't have an account? Register"}
        </p>
      </div>
    </div>
  );
};

export default Auth;
