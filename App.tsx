
import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  ChevronRight, 
  ExternalLink, 
  Download, 
  Terminal, 
  Cpu, 
  Database, 
  Network 
} from 'lucide-react';
import { EXPERIENCES, PROJECTS, SKILL_CATEGORIES } from './constants';
import { AIChat } from './components/AIChat';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('section').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-heading text-xl font-bold tracking-tighter text-white">
            <span className="text-teal-400">DS</span>.SHAH
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {['About', 'Experience', 'Projects', 'Skills'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className={`${activeSection === item.toLowerCase() ? 'text-teal-400' : 'text-slate-400'} hover:text-white transition-colors`}
              >
                {item}
              </a>
            ))}
          </div>
          <a 
            href="#contact" 
            className="px-5 py-2 bg-white text-black text-xs font-bold rounded-full hover:bg-teal-400 transition-colors"
          >
            SAY HELLO
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center px-6 relative overflow-hidden pt-16">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="inline-block px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400 text-xs font-semibold mb-6 animate-pulse">
            AVAILABLE FOR OPPORTUNITIES
          </div>
          <h1 className="font-heading text-6xl md:text-8xl font-bold text-white mb-6 leading-none tracking-tight">
            I build <span className="text-slate-600 italic">intelligent</span> systems.
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
            I'm <span className="text-white font-medium">Dhruvi Shah</span>, a Data Scientist & ML Engineer based in New York. 
            I specialize in Agentic AI, MLOps, and creating high-impact predictive models at scale.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://github.com/dshah-labs" target="_blank" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg transition-all">
              <Github size={20} />
              GitHub
            </a>
            <a href="https://linkedin.com/in/dhruvi-s" target="_blank" className="flex items-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-6 py-3 rounded-lg transition-all">
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
        {/* Background Accent */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-[#0f0f12]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-teal-400 mb-4 tracking-widest uppercase">The Story</h2>
            <h3 className="font-heading text-4xl font-bold text-white mb-6">From Bombay to NYC: A journey in data.</h3>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                My journey began in Bombay, where I earned both my Bachelors and Masters in Information Technology (2017 & 2019). 
                Early in my career at LTIMindtree, I discovered the power of data science and never looked back.
              </p>
              <p>
                After gaining deep experience in the Indian tech landscape at Nielsen Media—where I led high-impact ROI projects—I moved to New York to pursue my MS in Data Science at Columbia University.
              </p>
              <p>
                Currently, I'm at Worldpay, pushing the boundaries of what's possible with LLMs, Agentic AI, and scalable ML pipelines. I'm passionate about building robust systems that bridge the gap between complex research and production reality.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-6">
               <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">5+</span>
                  <span className="text-xs text-slate-500 uppercase tracking-tighter">Years Exp</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">10+</span>
                  <span className="text-xs text-slate-500 uppercase tracking-tighter">ML Models</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">MS</span>
                  <span className="text-xs text-slate-500 uppercase tracking-tighter">Columbia</span>
               </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-slate-800 rounded-2xl overflow-hidden border border-white/5 group">
              <img 
                src="https://picsum.photos/id/1/800/800" 
                alt="Profile Workspace" 
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-teal-500/20 mix-blend-overlay"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-teal-600 p-6 rounded-2xl shadow-xl hidden lg:block">
              <Database className="text-white mb-2" size={32} />
              <div className="text-white font-bold leading-tight">Mastering<br/>Big Data</div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-bold text-teal-400 mb-12 tracking-widest uppercase text-center">Career Path</h2>
          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="group relative grid md:grid-cols-[1fr_2fr] gap-8 p-8 rounded-3xl border border-white/5 hover:bg-white/[0.02] transition-all">
                <div>
                  <div className="text-sm text-slate-500 mb-2">{exp.period}</div>
                  <h4 className="text-xl font-bold text-white">{exp.company}</h4>
                  <div className="flex items-center gap-2 text-teal-400/80 text-sm mb-4">
                    <MapPin size={14} /> {exp.location}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map(s => (
                      <span key={s} className="px-2 py-1 bg-slate-800/50 text-[10px] text-slate-400 rounded-md border border-white/5">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">{exp.role}</h3>
                  <ul className="space-y-3">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-slate-400 leading-relaxed text-sm">
                        <ChevronRight className="shrink-0 text-teal-500 mt-1" size={16} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-[#0f0f12]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-sm font-bold text-teal-400 mb-4 tracking-widest uppercase">Portfolio</h2>
              <h3 className="font-heading text-4xl font-bold text-white leading-tight">Recent work & research</h3>
            </div>
            <a href="https://github.com/dshah-labs" className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors">
              SEE ALL PROJECTS <ExternalLink size={18} />
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="bg-[#1a1a1e] p-8 rounded-3xl border border-white/5 flex flex-col hover:-translate-y-2 transition-transform shadow-lg">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] font-bold text-teal-400 uppercase tracking-widest">{project.organization || 'Independent'}</span>
                    <h4 className="text-2xl font-bold text-white mt-1">{project.title}</h4>
                  </div>
                  <Terminal className="text-slate-700" size={24} />
                </div>
                <div className="space-y-4 mb-8 flex-1">
                  {project.bullets.map((b, i) => (
                    <p key={i} className="text-sm text-slate-400 leading-relaxed">{b}</p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-teal-500/5 border border-teal-500/10 rounded-full text-[10px] text-teal-500 font-bold uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-sm font-bold text-teal-400 mb-12 tracking-widest uppercase text-center">Technical Stack</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILL_CATEGORIES.map((category, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-teal-500/30 transition-all">
                <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6 text-teal-500">
                  {category.name === "Programming" && <Terminal size={24} />}
                  {category.name === "ML & AI" && <Cpu size={24} />}
                  {category.name === "MLOps & Systems" && <Network size={24} />}
                  {category.name === "Big Data & DBs" && <Database size={24} />}
                </div>
                <h4 className="text-lg font-bold text-white mb-4">{category.name}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span key={skill} className="px-2 py-1 bg-slate-900 text-xs text-slate-400 border border-slate-800 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-[#0a0a0c] border-t border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">Let's build the <span className="text-teal-400 italic">future</span> together.</h2>
          <p className="text-slate-400 text-xl mb-12">Whether it's a new opportunity, a collaboration, or just a chat about the latest in Agentic AI.</p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a href="mailto:dms2338@columbia.edu" className="group flex items-center gap-4 text-2xl font-bold text-white hover:text-teal-400 transition-colors">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-teal-500 transition-all">
                <Mail />
              </div>
              dms2338@columbia.edu
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>© {new Date().getFullYear()} Dhruvi Shah. Built with React, Tailwind & AI.</div>
          <div className="flex gap-6">
            <a href="https://github.com/dshah-labs" className="hover:text-white transition-colors">Github</a>
            <a href="https://linkedin.com/in/dhruvi-s" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

      {/* AI Chat Widget */}
      <AIChat />
    </div>
  );
};

export default App;
