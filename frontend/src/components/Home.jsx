import React, { useEffect, useState } from "react";

function Home() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const containerStyle = {
    textAlign: "center",
    padding: "4rem 2rem",
    maxWidth: "800px",
    margin: "0 auto",
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(30px)",
    transition: "all 0.6s ease",
    fontFamily: "Segoe UI, sans-serif",
  };

  const headingStyle = {
    fontSize: "3rem",
    marginBottom: "1rem",
    color: "#2c3e50",
    fontWeight: "bold",
  };

  const paragraphStyle = {
    fontSize: "1.4rem",
    color: "#555",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to HelloAI</h1>
      <p style={paragraphStyle}>
        Your smart, secure & local ML-powered chatbot assistant.
      </p>
    </div>
  );
}

export default Home;
