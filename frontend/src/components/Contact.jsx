import React, { useEffect, useState } from "react";

export default function Contact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const containerStyle = {
    padding: "2rem",
    maxWidth: "600px",
    margin: "2rem auto",
    backgroundColor: "#fefefe",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    transition: "all 0.5s ease",
    fontFamily: "Segoe UI, sans-serif",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "2rem",
    marginBottom: "1rem",
    color: "#333",
  };

  const textStyle = {
    fontSize: "1.1rem",
    color: "#555",
  };

  const emailStyle = {
    color: "#007BFF",
    textDecoration: "none",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Contact Us</h2>
      <p style={textStyle}>
        For any queries or feedback, feel free to reach us at: <br />
        <a href="mailto:rutujraul19@gmail.com" style={emailStyle}>
          rutujraul19@gmail.com
        </a>
      </p>
    </div>
  );
}
