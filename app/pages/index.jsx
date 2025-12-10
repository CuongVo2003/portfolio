import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export default function HomePage({ scrollToSection, scrollY }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-cyan-400 rounded-full"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: Math.random() * 5 + 's'
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="mb-8 transform transition-all duration-1000" 
             style={{ 
               opacity: 1,
               transform: `translateY(${Math.min(scrollY * 0.5, 100)}px)`
             }}>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
            Võ Chí Cường
          </h1>
          <p className="text-2xl md:text-3xl text-slate-300 mb-6">
            Frontend Developer
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Building scalable web applications with Next.js, React, and Node.js
          </p>
        </div>
        
        <div className="flex gap-6 justify-center mb-12">
          <a href="https://linkedin.com/in/vochicuong" target="_blank" rel="noopener noreferrer"
             className="p-4 bg-slate-800/50 rounded-full hover:bg-cyan-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
             className="p-4 bg-slate-800/50 rounded-full hover:bg-purple-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50">
            <Github size={24} />
          </a>
          <a href="mailto:cuongvcmfj2003@gmail.com"
             className="p-4 bg-slate-800/50 rounded-full hover:bg-blue-500 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50">
            <Mail size={24} />
          </a>
        </div>

        <button 
          onClick={() => scrollToSection('about')}
          className="animate-bounce">
          <ChevronDown size={32} className="text-cyan-400" />
        </button>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}