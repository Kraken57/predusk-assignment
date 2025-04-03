import { useState } from "react";
import { getChatResponse } from "../utils/groqApi";
import ChatIcon from "./ChatIcon";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);

    const response = await getChatResponse(input);
    setMessages([...newMessages, { sender: "bot", text: response }]);
    setInput("");
  };

  return (
    <>
      <ChatIcon onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <div className="chatbot">
          <div className="chat-header">Chatbot</div>
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={msg.sender}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask me anything..." />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
