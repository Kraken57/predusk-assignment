import { useState } from "react";
import axios from "axios";

const Chatbot = () => {
    const [showChat, setShowChat] = useState(false);
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { sender: "user", text: input };
        setMessages([...messages, userMessage]);

        try {
            const response = await axios.post("/chat", { message: input });
            const botMessage = { sender: "bot", text: response.data.reply };
            setMessages([...messages, botMessage]);
        } catch (error) {
            console.error("Error fetching response from chatbot:", error);
            setMessages([...messages, { sender: "bot", text: "Error contacting the chatbot." }]);
        }

        setInput("");
    };

    return (
        <div className="fixed bottom-6 left-6">
            {/* Toggle Button */}
            {!showChat ? (
                <button
                    className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300"
                    onClick={() => setShowChat(true)}
                >
                    Chat with AI
                </button>
            ) : (
                <div className="w-96 h-[500px] bg-gray-900 text-white p-5 rounded-2xl shadow-2xl flex flex-col">
                    {/* Chat Header */}
                    <div className="flex justify-between items-center border-b border-gray-700 pb-2 mb-3">
                        <h2 className="text-xl font-semibold">Chatbot</h2>
                        <button
                            className="text-red-400 text-xl font-bold hover:text-red-500 transition-all"
                            onClick={() => setShowChat(false)}
                        >
                            ✖
                        </button>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 overflow-y-auto space-y-3 p-2 scrollbar-thin scrollbar-thumb-gray-700">
                        {messages.map((msg, index) => (
                            <div key={index} className={`p-2 max-w-[85%] ${
                                msg.sender === "user" ? "ml-auto text-right" : "mr-auto text-left"
                            }`}>
                                <span className={`px-4 py-2 rounded-lg inline-block shadow-md ${
                                    msg.sender === "user" ? "bg-blue-600" : "bg-gray-700"
                                }`}>
                                    {msg.text}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Chat Input */}
                    <div className="flex mt-3 border-t border-gray-700 pt-3">
                        <input
                            type="text"
                            className="flex-1 p-3 text-black rounded-l-lg outline-none"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                            placeholder="Ask something..."
                        />
                        <button
                            className="bg-green-500 px-6 py-3 rounded-r-lg text-white font-semibold hover:bg-green-600 transition-all"
                            onClick={sendMessage}
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
