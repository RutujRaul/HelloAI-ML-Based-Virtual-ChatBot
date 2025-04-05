import React, { useState, useEffect } from "react";
import API from "../api";

function Chat() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const fetchChats = async () => {
    try {
      const res = await API.get("/chats");
      setChats(res.data);
    } catch (err) {
      alert("Failed to fetch chats");
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = { message, response: null };
    setChats([...chats, userMessage]);
    setMessage("");
    setIsTyping(true);

    try {
      const res = await API.post("/chat", { message });
      const newChat = { message, response: res.data.response };
      setChats((prevChats) => {
        const updated = [...prevChats];
        updated[updated.length - 1] = newChat;
        return updated;
      });
    } catch (err) {
      alert("Failed to send message");
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <h2>Chat with HelloAI</h2>

      <div style={{ border: "1px solid #ccc", padding: "1rem", height: "300px", overflowY: "scroll" }}>
        {chats.map((chat, i) => (
          <div key={i}>
            <strong>You:</strong> {chat.message}
            <br />
            <strong>HelloAI:</strong>{" "}
            {chat.response !== null ? chat.response : <em style={{ color: "#999" }}>Thinking...</em>}
            <hr />
          </div>
        ))}

        {isTyping && (
          <div style={{ fontStyle: "italic", marginTop: "0.5rem", color: "#999", display: "flex", gap: "5px" }}>
            <span style={dotStyle}></span>
            <span style={{ ...dotStyle, animationDelay: "0.2s" }}></span>
            <span style={{ ...dotStyle, animationDelay: "0.4s" }}></span>
          </div>
        )}
      </div>

      <div style={{ display: "flex", gap: "10px", marginTop: "1rem" }}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          style={{ flex: 1, padding: "8px" }}
        />
        <button onClick={sendMessage} style={{ padding: "8px 16px" }}>
          Send
        </button>
      </div>
    </div>
  );
}

// Typing dots animation style
const dotStyle = {
  width: "8px",
  height: "8px",
  background: "#999",
  borderRadius: "50%",
  animation: "blink 1.4s infinite both",
  animationName: "blink",
  animationTimingFunction: "ease-in-out",
};

// Add keyframe animation directly to page
const style = document.createElement("style");
style.textContent = `
@keyframes blink {
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
}`;
document.head.appendChild(style);

export default Chat;
