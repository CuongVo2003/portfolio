import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectCard({ title, description, tech, github, demo, isVisible }) {
  return (
    <div 
      className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-slate-300 mb-4 text-sm leading-relaxed">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((item, i) => (
          <span 
            key={i}
            className="px-3 py-1 bg-slate-700/50 rounded-full text-xs text-slate-300"
          >
            {item}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        {github && (
          <a 
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <Github size={16} />
            Code
          </a>
        )}
        {demo && (
          <a 
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ExternalLink size={16} />
            Demo
          </a>
        )}
      </div>
    </div>
  );
}