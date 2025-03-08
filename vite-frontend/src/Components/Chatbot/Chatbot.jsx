// import React, { useState } from "react";
// import "./Chatbot.css";
// // import { X, MessageCircle } from "@phosphor-icons/react"; // ✅ Import Icons

// function Chatbot() {

//   return (
//     <div className="chatbot-container">
//       {isOpen && (
//         <div className="chatbot-window">
//           <div className="chatbot-header">
//             <span>Chatbot</span>
//             {/* <X size={20} onClick={toggleChatbot} style={{ cursor: "pointer" }} /> */}
//             <button onClick={toggleChatbot}>Close</button>
//           </div>
//           <div className="chatbot-messages">
//             {messages.map((msg, index) => (
//               <div key={index} className={`message ${msg.sender}`}>
//                 {msg.text}
//               </div>
//             ))}
//           </div>
//           <div className="chatbot-input">
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="Type a message..."
//               onKeyDown={(e) => e.key === "Enter" && handleSendMessage()} // ✅ Enter key support
//             />
//             <button onClick={handleSendMessage}>Send</button>
//           </div>
//         </div>
//       )}
//       <button className="chatbot-toggle" onClick={toggleChatbot}>
//         {/* <MessageCircle size={24} /> */}
//         Message
//       </button>
//     </div>
//   );
// }

// export default Chatbot;
