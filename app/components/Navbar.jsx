"use client";
import React from 'react';
export default function Navbar({ activeSection, scrollToSection }) {
  return (
    <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-lg z-50 border-b border-slate-800/50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          VCC
        </div>
        <div className="flex gap-8">
          {['Home', 'About', 'Skills', 'Experience', 'Contact'].map(item => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`text-sm font-medium transition-all duration-300 hover:text-cyan-400 ${
                activeSection === item.toLowerCase() 
                  ? 'text-cyan-400' 
                  : 'text-slate-300'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}