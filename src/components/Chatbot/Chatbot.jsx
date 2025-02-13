import React, { useState, useEffect } from 'react';
import { FaCommentDots } from 'react-icons/fa'; // Import a chat icon
import dentistImage from '../../img/smile2.png'; // Add an appropriate image path

export const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState(JSON.parse(localStorage.getItem('chatMessages')) || []);
  const [userMessage, setUserMessage] = useState('');

  useEffect(() => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  }, [messages]);

  const toggleChatbox = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleSendMessage = () => {
    if (userMessage.trim()) {
      const newMessages = [
        ...messages,
        { sender: 'user', text: userMessage },
        { sender: 'ai', text: `You asked "${userMessage}", how can I assist further?` }, // Simulated AI response
      ];
      setMessages(newMessages);
      setUserMessage('');
    }
  };

  return (
    <div>
      <div
        className="fixed bottom-6 right-6 p-3 bg-yellow-500 text-white rounded-full cursor-pointer shadow-lg"
        onClick={toggleChatbox}
      >
        <FaCommentDots size={30} />
      </div>
      {isChatOpen && (
        <div className="fixed bottom-16 right-6 w-80 h-96 bg-white border border-gray-300 rounded-lg shadow-lg flex flex-col">
          <div className="flex rounded-t justify-between items-center mb-2 text-white bg-blue-500 p-3">
            <h3 className="font-bold">Chat with DentAssist</h3>
            <button onClick={toggleChatbox} className="text-white">X</button>
          </div>
          
          <div className="h-full overflow-y-auto flex-grow p-4">
            {messages.length === 0 ? (
              <div className="flex justify-center items-center h-full text-white">
                {/* <img src={dentistImage} alt="Dentist" className="w-32 h-32 rounded-full mb-4" /> */}
                <p className="text-lg">Hello! Ask me anything about dental care.</p>
              </div>
            ) : (
              <div className="chat-history mb-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-3 ${message.sender === 'user' ? 'text-left ' : 'text-right'}`}
                  >
                    {/* Display the message bubble */}
                    <p
                      className={`p-2 rounded-lg inline-block max-w-[80%] break-words overflow-wrap break-word ${
                        message.sender === 'user'
                          ? 'bg-yellow-300 text-black'
                          : 'bg-blue-500 text-white'
                      }`}
                    >
                      {message.text}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center mt-4 border-t p-2 text-white">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Type a message..."
              className="w-full p-2 border border-gray-300 rounded text-black"
            />
            <button
              onClick={handleSendMessage}
              className="ml-2 px-4 py-2 bg-yellow-500 text-white rounded"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
