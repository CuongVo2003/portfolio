import React from 'react';

export default function ContactPage({ isVisible }) {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 data-animate id="contact-title"
            className={`text-5xl font-bold mb-8 transition-all duration-1000 ${
              isVisible['contact-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
          Get In <span className="text-cyan-400">Touch</span>
        </h2>
        <p data-animate id="contact-text"
           className={`text-xl text-slate-300 mb-12 transition-all duration-1000 delay-200 ${
             isVisible['contact-text'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
           }`}>
          I'm always open to discussing new projects, innovative ideas, or collaboration opportunities.
        </p>
        
        <div data-animate id="contact-button"
             className={`transition-all duration-1000 delay-400 ${
               isVisible['contact-button'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
             }`}>
          <a href="mailto:cuongvcmfj2003@gmail.com"
             className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-lg font-semibold hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/50">
            Contact Us Now
          </a>
        </div>
      </div>
    </section>
  );
}