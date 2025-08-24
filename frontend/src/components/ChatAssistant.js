import React, { useState } from "react";
import { IoChatbubbleEllipsesOutline, IoClose } from "react-icons/io5"; // Chat & Close Icons
import "../styles/ChatAssistant.css";
const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { sender: "bot", text: data.response }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "I'm having trouble responding right now." },
      ]);
    }
  };

  return (
    <>
      {/* Floating Chat Icon */}
      <div className="chat-icon" onClick={toggleChat}>
        <IoChatbubbleEllipsesOutline size={30} />
      </div>

      {/* Chat Box */}
      <div className={`chat-container ${isOpen ? "open" : ""}`}>
        <div className="chat-header">
          <span>Chat Assistant</span>
          <IoClose size={20} className="close-btn" onClick={toggleChat} />
        </div>
        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </>
  );
};

export default ChatAssistant;
