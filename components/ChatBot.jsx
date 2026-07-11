"use client";

import React, { useState, useEffect } from "react";

export default function ChatBot() {
  const [showToast, setShowToast] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! What can we assist you with?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = React.useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const newMsg = { text: inputValue, isBot: false };
    setMessages(prev => [...prev, newMsg]);
    setInputValue("");

    // Simulate bot reply
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "Thanks for reaching out! A representative will be with you shortly to assist with your query.", isBot: true }]);
    }, 1000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[1000] flex flex-col items-end gap-3 md:gap-4 pointer-events-none">
      
      {/* Toast Notification */}
      <div 
        className={`pointer-events-auto relative bg-white dark:bg-slate-800 shadow-2xl border border-gray-100 dark:border-gray-700 rounded-xl p-4 w-[calc(100vw-2rem)] max-w-xs transition-all duration-700 transform origin-bottom-right ${
          showToast && !isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-90 opacity-0 translate-y-4"
        }`}
      >
        <p className="text-[14px] md:text-[15px] text-slate-700 dark:text-slate-200 font-medium pr-4 leading-relaxed">
          Hi There! How Can I help you today?
        </p>
        <button 
          onClick={() => setShowToast(false)} 
          className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors p-2"
          aria-label="Close message"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white dark:bg-slate-800 border-b border-r border-gray-100 dark:border-gray-700 rotate-45"></div>
      </div>

      {/* Mock Chat Panel */}
      {isOpen && (
        <div className="pointer-events-auto w-[calc(100vw-2rem)] sm:w-80 h-[65vh] sm:h-96 max-h-[600px] bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300 transform origin-bottom-right">
           <div className="bg-[#ea580c] p-4 text-white shrink-0">
              <h3 className="font-semibold text-lg">CelebsoX Support</h3>
              <p className="text-xs text-orange-200">We typically reply in a few minutes.</p>
           </div>
           <div className="flex-1 p-4 bg-slate-50 dark:bg-slate-900 overflow-y-auto flex flex-col gap-3">
              {messages.map((msg, idx) => (
                <div key={idx} className={`max-w-[85%] rounded-lg p-3 text-sm shadow-sm ${msg.isBot ? 'bg-white dark:bg-slate-800 border border-gray-100 dark:border-gray-700 text-slate-700 dark:text-slate-300 self-start' : 'bg-[#ea580c] text-white self-end'}`}>
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
           </div>
           <div className="p-3 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800 shrink-0">
             <form onSubmit={handleSendMessage} className="flex gap-2">
               <input 
                 type="text" 
                 value={inputValue}
                 onChange={(e) => setInputValue(e.target.value)}
                 placeholder="Type a message..." 
                 className="flex-1 w-full bg-slate-100 dark:bg-slate-800 text-sm rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ea580c] text-slate-900 dark:text-white" 
               />
               <button type="submit" className="bg-[#ea580c] hover:bg-[#c2410c] text-white rounded-full w-9 h-9 flex items-center justify-center transition-colors shrink-0">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
               </button>
             </form>
           </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button 
        onClick={() => { setIsOpen(!isOpen); setShowToast(false); }}
        className="pointer-events-auto w-12 h-12 md:w-16 md:h-16 bg-[#ea580c] hover:bg-[#c2410c] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 z-50 shrink-0"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
        )}
      </button>

    </div>
  );
}
