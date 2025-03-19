import React, { useState } from "react";
import "./Chatbot.css";
import { X, Chats } from "@phosphor-icons/react"; // ✅ Import Icons
import { Tooltip } from "@mui/material";

function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        { sender: "Bot", text: "Hello, how can I help you?" },
    ]);


    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    }

    const handleSendMessages = () => {
        if (input.trim() === '') return;

        setMessages((prevMessage) => [
            ...prevMessage,
            { sender: "User", text: input }
        ]);
        setInput("");

        setTimeout(() => {
            setMessages((prevMessage) => [
                ...prevMessage,
                { sender: 'Bot', text: "Abhi I'm Busy Badma Ana Please!" }])
        }, 1000);
    };


    return (
        <>
            <div className="chatbot-container">
                {isOpen && (
                    <div className="chatbot-window">
                        <div className="chatbot-header">
                            <span>Chatbot</span>
                            <X size={20} onClick={toggleChatbot} style={{ cursor: "pointer" }} />
                            {/* <button >Close</button> */}
                        </div>
                        <div className="chatbot-messages">
                            {messages.map((messages, index) => (
                                <div key={index} className={`message ${messages.sender}`}>
                                    <strong>{messages.sender}: </strong>
                                    {messages.text}
                                </div>
                            ))}
                        </div>
                        <div className="chatbot-input">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type a message..."
                                // ✅ Enter key support
                                onKeyDown={(e) => e.key === 'Enter' && handleSendMessages()}
                            />
                            <button onClick={handleSendMessages}>Send</button>
                        </div>
                    </div>
                )}
                <Tooltip title="Chat with us!" placement="top" arrow>
                    <button className="chatbot-toggle" onClick={toggleChatbot}>
                        <Chats size={24} />
                    </button>
                </Tooltip>

            </div>
        </>
    );
}

export default Chatbot;
