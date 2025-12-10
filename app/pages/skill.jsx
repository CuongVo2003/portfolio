import { Code, Database, Settings } from "lucide-react";

function SkillsPage({ isVisible }) {
  const skills = {
    'Frontend': {
      icon: <Code className="text-cyan-400" />,
      items: ['Next.js', 'React', 'Tailwind CSS', 'JavaScript', 'TypeScript']
    },
    'Backend': {
      icon: <Database className="text-cyan-400" />,
      items: ['Node.js', 'NestJS', 'Express.js', 'RESTful API', 'WebSocket']
    },
    'Database': {
      icon: <Database className="text-cyan-400" />,
      items: ['MongoDB', 'Mongoose', 'Redis']
    },
    'Tools & Others': {
      icon: <Settings className="text-cyan-400" />,
      items: ['Git', 'Docker', 'Postman', 'AWS S3', 'Stripe', 'Socket.IO']
    }
  };

  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 data-animate id="skills-title"
            className={`text-5xl font-bold mb-16 text-center transition-all duration-1000 ${
              isVisible['skills-title'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
          Technical <span className="text-cyan-400">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, { icon, items }], idx) => (
            <div key={category} data-animate id={`skill-${idx}`}
                 className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 ${
                   isVisible[`skill-${idx}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                 }`}
                 style={{ transitionDelay: `${idx * 100}ms` }}>
              <div className="flex items-center gap-3 mb-4">
                {icon}
                <h3 className="text-xl font-semibold">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((item, i) => (
                  <span key={i}
                        className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300 hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-300 cursor-default">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsPage;