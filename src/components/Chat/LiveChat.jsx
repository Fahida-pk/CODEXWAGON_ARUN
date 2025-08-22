import { useState } from "react";
import "./LiveChat.css";

export default function LiveChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! Welcome to CodexWagon. How can I help you today?", sender: "bot" }
  ]);
  const [newMessage, setNewMessage] = useState("");

  // Send message to backend
  const sendMessage = async () => {
    if (!newMessage.trim()) return;

    const userMsg = { text: newMessage, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);

    try {
      const res = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: newMessage }),
      });

      if (!res.ok) throw new Error("Backend error");

      const data = await res.json();
      const botMsg = { text: data.reply, sender: "bot" };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      console.error("Error:", err);
      setMessages((prev) => [...prev, { text: "⚠️ Could not connect to server.", sender: "bot" }]);
    }

    setNewMessage("");
  };

  return (
    <div className="chat-container">
      {/* Avatar Button */}
      <button className="chat-toggle" onClick={() => setOpen(!open)}>
        <img 
          src="/images/chat-avatar1.png" 
          alt="Chat" 
          className="chat-avatar"
        />
      </button>

      {open && (
        <div className="chat-box">
          <div className="messages">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
