import { Briefcase } from "lucide-react";

function ExperiencePage({ isVisible }) {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 data-animate id="exp-title"
            className={`text-5xl font-bold mb-16 text-center transition-all duration-1000 ${
              isVisible['exp-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
          Work <span className="text-cyan-400">Experience</span>
        </h2>
        
        <div data-animate id="exp-content"
             className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 ${
               isVisible['exp-content'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
             }`}>
          <div className="flex items-start gap-4 mb-6">
            <Briefcase className="text-cyan-400 mt-1" size={28} />
            <div>
              <h3 className="text-2xl font-bold mb-2">Fullstack Developer</h3>
              <p className="text-cyan-400 font-semibold mb-1">TGR FUSION Co., Ltd.</p>
              <p className="text-slate-400 text-sm mb-4">2024 - 2025 | Full-time, On-site</p>
            </div>
          </div>
          
          <div className="space-y-4 mb-6">
            <h4 className="text-lg font-semibold text-cyan-400">Main Responsibilities:</h4>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                <span className="text-cyan-400 mt-1">▹</span>
                <span>Developed and optimized core product features including Livestream module, Post File, Upload Feed, and User Interaction system</span>
              </li>
              <li className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                <span className="text-cyan-400 mt-1">▹</span>
                <span>Collaborated with backend NestJS APIs using RESTful endpoints and WebSocket for real-time data updates</span>
              </li>
              <li className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                <span className="text-cyan-400 mt-1">▹</span>
                <span>Integrated AWS S3 for secure media upload and optimized image processing with Sharp</span>
              </li>
              <li className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                <span className="text-cyan-400 mt-1">▹</span>
                <span>Built consistent UI/UX using Ant Design and custom reusable components</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-cyan-400">Achievements:</h4>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                <span className="text-yellow-400 mt-1">★</span>
                <span>Recognized for strong debugging skills and proactive team collaboration</span>
              </li>
              <li className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                <span className="text-yellow-400 mt-1">★</span>
                <span>Increased user engagement by optimizing feed rendering (over 30% faster)</span>
              </li>
              <li className="flex items-start gap-3 hover:translate-x-2 transition-transform duration-300">
                <span className="text-yellow-400 mt-1">★</span>
                <span>Delivered multiple large end-to-end features with minimal supervision</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperiencePage;
