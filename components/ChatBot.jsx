"use client";

import React, { useState, useEffect } from "react";

export default function ChatBot() {
  const [showToast, setShowToast] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[1000] flex flex-col items-end gap-4 pointer-events-none">
      
      {/* Toast Notification */}
      <div 
        className={`pointer-events-auto relative bg-white dark:bg-slate-800 shadow-2xl border border-gray-100 dark:border-gray-700 rounded-xl p-4 max-w-xs transition-all duration-700 transform origin-bottom-right ${
          showToast && !isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-90 opacity-0 translate-y-4"
        }`}
      >
        <p className="text-[15px] text-slate-700 dark:text-slate-200 font-medium pr-4 leading-relaxed">
          Hi There! How Can I help you today?
        </p>
        <button 
          onClick={() => setShowToast(false)} 
          className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
          aria-label="Close message"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white dark:bg-slate-800 border-b border-r border-gray-100 dark:border-gray-700 rotate-45"></div>
      </div>

      {/* Mock Chat Panel */}
      {isOpen && (
        <div className="pointer-events-auto w-80 h-96 bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-10 duration-300">
           <div className="bg-[#ea580c] p-4 text-white">
              <h3 className="font-semibold text-lg">CelebsoX Support</h3>
              <p className="text-xs text-orange-200">We typically reply in a few minutes.</p>
           </div>
           <div className="flex-1 p-4 bg-slate-50 dark:bg-slate-900 overflow-y-auto">
              <div className="bg-white dark:bg-slate-800 border border-gray-100 dark:border-gray-700 rounded-lg p-3 text-sm text-slate-700 dark:text-slate-300 w-3/4 shadow-sm">
                Hi! What can we assist you with?
              </div>
           </div>
           <div className="p-3 bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800">
             <input type="text" placeholder="Type a message..." className="w-full bg-slate-100 dark:bg-slate-800 text-sm rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ea580c]" />
           </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button 
        onClick={() => { setIsOpen(!isOpen); setShowToast(false); }}
        className="pointer-events-auto w-14 h-14 md:w-16 md:h-16 bg-[#ea580c] hover:bg-[#c2410c] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 z-50"
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
