import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import API from "../api";

function Navbar() {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleLogout = async () => {
    try {
      await API.post("/logout");
      localStorage.setItem("isLoggedIn", "false");
      setIsLoggedIn(false);
      navigate("/login");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#333",
    fontWeight: 500,
    transition: "color 0.3s",
  };

  const linkHoverStyle = {
    ...linkStyle,
    color: "#007bff",
  };

  const navContainerStyle = {
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(-20px)",
    transition: "all 0.4s ease-in-out",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#ffffff",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.06)",
    fontFamily: "Segoe UI, sans-serif",
  };

  return (
    <nav style={navContainerStyle}>
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <Link to="/" style={{ ...linkStyle, fontSize: "1.3rem", fontWeight: "bold" }}>
          HelloAI
        </Link>
        <Link to="/" style={linkStyle} onMouseOver={e => e.target.style.color = "#007bff"} onMouseOut={e => e.target.style.color = "#333"}>Home</Link>
        <Link to="/about" style={linkStyle} onMouseOver={e => e.target.style.color = "#007bff"} onMouseOut={e => e.target.style.color = "#333"}>About</Link>
        <Link to="/contact" style={linkStyle} onMouseOver={e => e.target.style.color = "#007bff"} onMouseOut={e => e.target.style.color = "#333"}>Contact</Link>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {!isLoggedIn && (
          <>
            <Link to="/login" style={linkStyle} onMouseOver={e => e.target.style.color = "#007bff"} onMouseOut={e => e.target.style.color = "#333"}>Login</Link>
            <Link to="/signup" style={linkStyle} onMouseOver={e => e.target.style.color = "#007bff"} onMouseOut={e => e.target.style.color = "#333"}>Signup</Link>
          </>
        )}
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            style={{
              padding: "6px 14px",
              backgroundColor: "#ff4d4f",
              color: "#fff",
              border: "none",
              borderRadius: "6px",
              fontWeight: 500,
              cursor: "pointer",
              transition: "background 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#d9363e")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#ff4d4f")}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
