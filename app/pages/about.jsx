import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";

function AboutPage({ isVisible }) {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 data-animate id="about-title" 
            className={`text-5xl font-bold mb-16 text-center transition-all duration-1000 ${
              isVisible['about-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
          About <span className="text-cyan-400">Me</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-animate id="about-content"
               className={`transition-all duration-1000 delay-200 ${
                 isVisible['about-content'] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
               }`}>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Frontend Developer with 1 year of professional experience building scalable web applications with Next.js, React, Node.js, and MongoDB.
              </p>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Successful in designing RESTful APIs, handling asynchronous tasks, and integrating second-party services such as AWS S3, Stripe, and Socket.IO.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Possesses strong problem-solving skills, clean coding habits, and practical experience in a production environment.
              </p>
            </div>
          </div>
          
          <div data-animate id="about-info"
               className={`space-y-6 transition-all duration-1000 delay-400 ${
                 isVisible['about-info'] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
               }`}>
            <div className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-all duration-300 group">
              <Mail className="text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="text-slate-300">cuongvcmfj2003@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-all duration-300 group">
              <Phone className="text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="text-slate-300">0819150925</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-all duration-300 group">
              <MapPin className="text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="text-slate-300">Tân Bình, Lê Văn Huân, HCM</span>
            </div>
            <div className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-xl hover:bg-slate-800/50 transition-all duration-300 group">
              <GraduationCap className="text-cyan-400 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-slate-300 font-semibold">FPT Polytechnic</p>
                <p className="text-slate-400 text-sm">Software Applications (2021-2023)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;