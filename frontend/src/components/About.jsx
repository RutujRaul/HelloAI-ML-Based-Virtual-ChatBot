import React, { useEffect, useState } from "react";

export default function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation on mount
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const containerStyle = {
    padding: "2rem",
    maxWidth: "700px",
    margin: "2rem auto",
    backgroundColor: "#fdfdfd",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0px)" : "translateY(20px)",
    transition: "all 0.6s ease",
    fontFamily: "Segoe UI, sans-serif",
    lineHeight: 1.6,
  };

  const headingStyle = {
    fontSize: "2rem",
    marginBottom: "1rem",
    color: "#333",
  };

  const paragraphStyle = {
    fontSize: "1.1rem",
    color: "#555",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>About HelloAI</h2>
      <p style={paragraphStyle}>
        HelloAI is your local intelligent chatbot powered by Mistral's language model.
        Built with Flask, MongoDB, and React, it works offline with full user authentication
        and smart memory for past conversations. It's secure, fast, and built just for you.
      </p>
    </div>
  );
}
