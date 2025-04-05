import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function Signup() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/signup", form);
      if (res.data.success) navigate("/login");
      else alert(res.data.message);
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "400px",
        margin: "3rem auto",
        padding: "2rem",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        borderRadius: "10px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: "all 0.4s ease-in-out",
        backgroundColor: "#fff",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Sign Up</h2>
      <input
        name="username"
        placeholder="Username"
        onChange={handleChange}
        required
        style={{
          display: "block",
          margin: "1rem 0",
          padding: "0.75rem",
          width: "100%",
          border: "1px solid #ccc",
          borderRadius: "6px",
        }}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
        style={{
          display: "block",
          margin: "1rem 0",
          padding: "0.75rem",
          width: "100%",
          border: "1px solid #ccc",
          borderRadius: "6px",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "0.75rem 1.5rem",
          width: "100%",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontWeight: 600,
          transition: "background 0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        Sign Up
      </button>
    </form>
  );
}

export default Signup;
