import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import { AuthContext } from "../AuthContext";

function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/login", form);
      if (res.data.success) {
        localStorage.setItem("isLoggedIn", "true");
        setIsLoggedIn(true);
        navigate("/chat");
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      alert("Login failed");
    }
  };

  const containerStyle = {
    maxWidth: "400px",
    margin: "4rem auto",
    padding: "2rem",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(30px)",
    transition: "all 0.5s ease",
    fontFamily: "Segoe UI, sans-serif",
  };

  const inputStyle = {
    display: "block",
    margin: "1rem 0",
    padding: "0.75rem",
    width: "100%",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  };

  const buttonStyle = {
    padding: "0.75rem 1.5rem",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#2c3e50",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "1rem",
    width: "100%",
    transition: "background 0.3s ease",
  };

  return (
    <form onSubmit={handleSubmit} style={containerStyle}>
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Login</h2>
      <input
        name="username"
        placeholder="Username"
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>
        Login
      </button>
    </form>
  );
}

export default Login;
