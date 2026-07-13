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

    const newMsg = { text: inputValue, isBot: false };
    setMessages(prev => [...prev, newMsg]);
    setInputValue("");

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
        className={`pointer-events-auto relative bg-white dark:bg-[#1C2541] shadow-2xl border border-[#E2E8F0] dark:border-[#2D3A54] rounded-sm p-4 w-[calc(100vw-2rem)] max-w-xs transition-all duration-700 transform origin-bottom-right ${
          showToast && !isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-90 opacity-0 translate-y-4"
        }`}
      >
        <p className="text-[14px] md:text-[15px] text-[#0B132B] dark:text-white/90 font-medium pr-4 leading-relaxed">
          Hi There! How Can I help you today?
        </p>
        <button 
          onClick={() => setShowToast(false)} 
          className="absolute top-2 right-2 text-[#0B132B]/40 dark:text-white/40 hover:text-[#3A86FF] dark:hover:text-[#00F5D4] transition-colors p-2"
          aria-label="Close message"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white dark:bg-[#1C2541] border-b border-r border-[#E2E8F0] dark:border-[#2D3A54] rotate-45"></div>
      </div>

      {/* Mock Chat Panel */}
      {isOpen && (
        <div className="pointer-events-auto w-[calc(100vw-2rem)] sm:w-80 h-[65vh] sm:h-96 max-h-[600px] bg-white dark:bg-[#0B132B] rounded-sm shadow-2xl border border-[#E2E8F0] dark:border-[#2D3A54] flex flex-col overflow-hidden transform origin-bottom-right">
           <div className="bg-[#3A86FF] dark:bg-[#1C2541] p-4 text-white shrink-0 border-b border-[#3A86FF] dark:border-[#00F5D4]/30">
              <h3 className="font-semibold text-lg font-[family-name:var(--font-heading)]">Antellay Support</h3>
              <p className="text-xs text-white/70">We typically reply in a few minutes.</p>
           </div>
           <div className="flex-1 p-4 bg-[#F4F7FA] dark:bg-[#0B132B] overflow-y-auto flex flex-col gap-3">
              {messages.map((msg, idx) => (
                <div key={idx} className={`max-w-[85%] rounded-sm p-3 text-sm shadow-sm ${msg.isBot ? 'bg-white dark:bg-[#1C2541] border border-[#E2E8F0] dark:border-[#2D3A54] text-[#0B132B] dark:text-white/80 self-start' : 'bg-[#3A86FF] dark:bg-[#00F5D4] text-white dark:text-[#0B132B] self-end'}`}>
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
           </div>
           <div className="p-3 bg-white dark:bg-[#0B132B] border-t border-[#E2E8F0] dark:border-[#2D3A54] shrink-0">
             <form onSubmit={handleSendMessage} className="flex gap-2">
               <input 
                 type="text" 
                 value={inputValue}
                 onChange={(e) => setInputValue(e.target.value)}
                 placeholder="Type a message..." 
                 className="flex-1 w-full bg-[#F4F7FA] dark:bg-[#1C2541] text-sm rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3A86FF] dark:focus:ring-[#00F5D4] text-[#0B132B] dark:text-white border border-[#E2E8F0] dark:border-[#2D3A54]" 
               />
               <button type="submit" className="bg-[#3A86FF] dark:bg-[#00F5D4] hover:opacity-90 text-white dark:text-[#0B132B] rounded-sm w-9 h-9 flex items-center justify-center transition-colors shrink-0">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
               </button>
             </form>
           </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button 
        onClick={() => { setIsOpen(!isOpen); setShowToast(false); }}
        className="pointer-events-auto w-12 h-12 md:w-16 md:h-16 bg-[#3A86FF] dark:bg-[#00F5D4] hover:opacity-90 text-white dark:text-[#0B132B] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 z-50 shrink-0"
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
