
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
  Network,
  Star,
  Code2,
  ArrowUp
} from 'lucide-react';
import { EXPERIENCES, PROJECTS, SKILL_CATEGORIES } from './constants';
import { AIChat } from './components/AIChat';
import { GithubRepo } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [isReposLoading, setIsReposLoading] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('section').forEach(section => observer.observe(section));
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);

    // Fetch GitHub Repos
    fetch('https://api.github.com/users/dshah-labs/repos?sort=updated&per_page=6')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRepos(data.filter(repo => !repo.fork));
        }
        setIsReposLoading(false);
      })
      .catch(() => setIsReposLoading(false));

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] selection:bg-teal-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-[#0a0a0c]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-heading text-2xl font-bold tracking-tighter text-white">
            <span className="text-teal-400">DS</span><span className="opacity-40">.</span>SHAH
          </div>
          <div className="hidden md:flex gap-10 text-[13px] font-semibold tracking-widest uppercase">
            {['About', 'Experience', 'Projects', 'Skills'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className={`${activeSection === item.toLowerCase() ? 'text-teal-400' : 'text-slate-500'} hover:text-white transition-all duration-300 relative group`}
              >
                {item}
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-teal-400 transition-transform duration-300 origin-left ${activeSection === item.toLowerCase() ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </a>
            ))}
          </div>
          <a 
            href="#contact" 
            className="px-6 py-2.5 bg-white text-black text-xs font-black rounded-full hover:bg-teal-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-white/5 active:scale-95"
          >
            GET IN TOUCH
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center px-6 relative overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-500/5 border border-teal-500/20 rounded-full text-teal-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-ping"></span>
            Specializing in Agentic AI & MLOps
          </div>
          <h1 className="font-heading text-6xl md:text-9xl font-bold text-white mb-8 leading-[0.9] tracking-tighter">
            Architecting <br/>
            <span className="text-slate-700 italic font-light">future</span> intelligence.
          </h1>
          <p className="max-w-2xl text-lg md:text-2xl text-slate-400 mb-12 leading-relaxed font-light">
            I'm <span className="text-white font-medium">Dhruvi Shah</span>, an AI Engineer based in NYC. 
            Transforming complex data into <span className="text-teal-400">production-grade</span> AI systems.
          </p>
          <div className="flex flex-wrap gap-5">
            <a href="https://github.com/dshah-labs" target="_blank" className="flex items-center gap-3 bg-slate-900/50 backdrop-blur-sm border border-white/5 hover:border-teal-500/50 hover:bg-slate-800 text-white px-8 py-4 rounded-xl transition-all duration-300 group">
              <Github size={22} className="group-hover:text-teal-400" />
              <span className="font-semibold uppercase tracking-widest text-xs">Explore Labs</span>
            </a>
            <a href="https://linkedin.com/in/dhruvi-s" target="_blank" className="flex items-center gap-3 bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-xl transition-all duration-300 shadow-xl shadow-teal-600/10 hover:shadow-teal-500/20 active:scale-95">
              <Linkedin size={22} />
              <span className="font-semibold uppercase tracking-widest text-xs">Connect</span>
            </a>
          </div>
        </div>
        
        {/* Abstract Background Decoration */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-teal-500/5 blur-[160px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0a0a0c] to-transparent"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-[#0c0c0e]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-xs font-black text-teal-400 mb-6 tracking-[0.3em] uppercase opacity-70">Background</h2>
            <h3 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">Mastering Data from <span className="text-teal-400">Bombay</span> to <span className="text-teal-400">NYC</span>.</h3>
            <div className="space-y-6 text-slate-400 leading-relaxed text-lg font-light">
              <p>
                My technical foundation was built in Mumbai, earning my <span className="text-white font-normal">Bachelors (2017)</span> and <span className="text-white font-normal">Masters (2019)</span> in Information Technology. 
                I cut my teeth at <span className="text-white font-normal">LTIMindtree</span>, where I transitioned into Data Science through hands-on project excellence.
              </p>
              <p>
                After scaling ROI-focused modeling at <span className="text-white font-normal">Nielsen Media</span>, I moved to Manhattan to complete my <span className="text-white font-normal">MS in Data Science at Columbia University (2024)</span>.
              </p>
              <p>
                Currently, at <span className="text-white font-normal">Global Payments x Worldpay</span>, I focus on the intersection of Agentic AI and enterprise scalability—building the next generation of financial intelligence.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-8">
               <div className="flex flex-col">
                  <span className="text-4xl font-bold text-white font-heading">5+</span>
                  <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-1">Years Work</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-4xl font-bold text-white font-heading">2M+</span>
                  <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-1">Merchants</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-4xl font-bold text-white font-heading">Ivy</span>
                  <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest mt-1">Columbia</span>
               </div>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] bg-slate-900 rounded-[2.5rem] overflow-hidden border border-white/5 relative group">
              <img 
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800" 
                alt="Tech Workspace" 
                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="p-4 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10">
                  <p className="text-xs text-teal-400 font-bold uppercase tracking-widest mb-1">Focus Area</p>
                  <p className="text-white font-heading font-medium">Large Language Model Systems & Agentic Workflows</p>
                </div>
              </div>
            </div>
            {/* Floating Card */}
            <div className="absolute -top-10 -right-10 hidden xl:flex bg-teal-600 p-8 rounded-3xl shadow-2xl shadow-teal-600/20 animate-bounce-slow flex-col items-center gap-4 border border-teal-400/30">
              <Cpu className="text-white" size={40} />
              <div className="text-white font-black text-center leading-none tracking-tighter uppercase text-sm">AI<br/>Driven</div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-xs font-black text-teal-400 mb-4 tracking-[0.4em] uppercase opacity-70">The Roadmap</h2>
            <h3 className="font-heading text-4xl md:text-6xl font-bold text-white">Professional Trajectory</h3>
          </div>
          <div className="space-y-16">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="group relative">
                <div className="grid lg:grid-cols-[1fr_2.5fr] gap-12 p-10 rounded-[2rem] border border-white/5 hover:bg-white/[0.015] hover:border-teal-500/20 transition-all duration-500">
                  <div className="flex flex-col">
                    <div className="text-teal-400 font-black text-[11px] uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-8 h-[1px] bg-teal-400/30"></span> {exp.period}
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-teal-400 transition-colors">{exp.company}</h4>
                    <div className="flex items-center gap-2 text-slate-500 text-sm font-medium mb-6">
                      <MapPin size={14} /> {exp.location}
                    </div>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {exp.skills.map(s => (
                        <span key={s} className="px-3 py-1 bg-slate-900 text-[10px] text-slate-400 rounded-lg border border-white/5 uppercase font-bold tracking-tighter">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6 flex items-center gap-4">
                      {exp.role}
                    </h3>
                    <ul className="grid md:grid-cols-1 gap-4">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-4 text-slate-400 leading-relaxed text-[15px] group/item">
                          <div className="shrink-0 w-6 h-6 rounded-full bg-teal-500/10 flex items-center justify-center mt-1 transition-colors group-hover/item:bg-teal-500 group-hover/item:text-white text-teal-500">
                            <ChevronRight size={14} />
                          </div>
                          <span className="group-hover/item:text-slate-200 transition-colors">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="py-32 px-6 bg-[#0c0c0e]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <h2 className="text-xs font-black text-teal-400 mb-4 tracking-[0.4em] uppercase opacity-70">Portfolio</h2>
              <h3 className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight">Flagship Initiatives</h3>
            </div>
            <a href="https://github.com/dshah-labs" target="_blank" className="px-8 py-4 bg-white/5 border border-white/10 hover:border-teal-400/50 rounded-2xl text-white font-bold flex items-center gap-3 transition-all duration-300 hover:-translate-y-1">
              VIEW GITHUB LABS <Github size={18} />
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="bg-[#151518] p-10 rounded-[2.5rem] border border-white/5 flex flex-col hover:bg-[#1a1a1f] transition-all duration-500 group relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity">
                  <Terminal size={120} />
                </div>
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div>
                    <span className="text-[10px] font-black text-teal-500 uppercase tracking-[0.3em] mb-2 block">{project.organization || 'Independent Research'}</span>
                    <h4 className="text-3xl font-bold text-white mt-2 group-hover:text-teal-400 transition-colors leading-tight">{project.title}</h4>
                  </div>
                </div>
                <div className="space-y-5 mb-10 flex-1 relative z-10">
                  {project.bullets.map((b, i) => (
                    <p key={i} className="text-[15px] text-slate-400 leading-relaxed font-light">{b}</p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-teal-500/5 border border-teal-500/10 rounded-full text-[10px] text-teal-400 font-black uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Repository Grid */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[1px] flex-1 bg-white/5"></div>
            <h3 className="font-heading text-2xl font-bold text-white flex items-center gap-3">
              <Code2 className="text-teal-400" /> Additional Projects
            </h3>
            <div className="h-[1px] flex-1 bg-white/5"></div>
          </div>

          {isReposLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-pulse">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="h-48 bg-white/5 rounded-2xl border border-white/5"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map(repo => (
                <a 
                  key={repo.id} 
                  href={repo.html_url} 
                  target="_blank" 
                  className="bg-[#151518]/50 p-6 rounded-2xl border border-white/5 hover:border-teal-500/30 hover:bg-[#1a1a1f] transition-all duration-300 group flex flex-col"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-bold text-white group-hover:text-teal-400 truncate pr-4">{repo.name}</h4>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <Star size={12} className="text-yellow-500" />
                      {repo.stargazers_count}
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 line-clamp-2 mb-6 flex-1 italic">
                    {repo.description || "No description provided."}
                  </p>
                  <div className="flex items-center justify-between text-[10px] uppercase font-black tracking-widest text-slate-400">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                      {repo.language || 'Python'}
                    </span>
                    <span className="opacity-40">Updated {new Date(repo.updated_at).toLocaleDateString()}</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 px-6 bg-[#0c0c0e]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-xs font-black text-teal-400 mb-4 tracking-[0.4em] uppercase opacity-70">Capabilities</h2>
            <h3 className="font-heading text-4xl md:text-6xl font-bold text-white">Technical Arsenal</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILL_CATEGORIES.map((category, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-white/[0.015] border border-white/5 hover:border-teal-500/30 hover:bg-white/[0.025] transition-all duration-500 group">
                <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center mb-8 text-teal-500 group-hover:bg-teal-500 group-hover:text-white transition-all duration-500">
                  {category.name === "Programming" && <Terminal size={32} />}
                  {category.name === "ML & AI" && <Cpu size={32} />}
                  {category.name === "MLOps & Systems" && <Network size={32} />}
                  {category.name === "Big Data & DBs" && <Database size={32} />}
                </div>
                <h4 className="text-xl font-bold text-white mb-6 font-heading uppercase tracking-tighter">{category.name}</h4>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-slate-900/50 text-xs text-slate-400 border border-slate-800 rounded-lg group-hover:text-slate-200 transition-colors">
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
      <section id="contact" className="py-40 px-6 bg-[#0a0a0c] relative overflow-hidden">
        <div className="absolute inset-0 bg-teal-500/5 blur-[120px] pointer-events-none"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-bold text-white mb-10 tracking-tighter leading-none">
            Ready for <br/>
            <span className="text-teal-400 italic">impact</span>?
          </h2>
          <p className="text-slate-400 text-xl md:text-2xl mb-16 font-light max-w-2xl mx-auto">
            Currently open to discussing <span className="text-white">leadership roles</span> and high-stakes <span className="text-white">AI architecture</span> challenges.
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <a href="mailto:dms2338@columbia.edu" className="group flex flex-col items-center gap-6 p-8 rounded-[2rem] bg-white/5 hover:bg-white/10 border border-white/5 transition-all duration-500 w-full md:w-80">
              <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center text-white shadow-xl shadow-teal-500/20 group-hover:scale-110 transition-transform">
                <Mail size={32} />
              </div>
              <div>
                <span className="text-xs text-slate-500 font-black uppercase tracking-widest block mb-1">Email Me</span>
                <span className="text-lg font-bold text-white">dms2338@columbia.edu</span>
              </div>
            </a>
            <div className="h-[1px] w-20 bg-white/5 hidden md:block"></div>
            <a href="https://linkedin.com/in/dhruvi-s" target="_blank" className="group flex flex-col items-center gap-6 p-8 rounded-[2rem] bg-white/5 hover:bg-white/10 border border-white/5 transition-all duration-500 w-full md:w-80">
              <div className="w-20 h-20 bg-[#0077b5] rounded-full flex items-center justify-center text-white shadow-xl shadow-[#0077b5]/20 group-hover:scale-110 transition-transform">
                <Linkedin size={32} />
              </div>
              <div>
                <span className="text-xs text-slate-500 font-black uppercase tracking-widest block mb-1">Connect</span>
                <span className="text-lg font-bold text-white">LinkedIn Profile</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-white/5 text-center bg-[#0a0a0c]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-slate-500 text-sm font-light">
            © {new Date().getFullYear()} Dhruvi Shah. Architected with passion in NYC.
          </div>
          <div className="flex gap-8 text-[11px] font-black uppercase tracking-widest">
            <a href="https://github.com/dshah-labs" className="text-slate-500 hover:text-white transition-colors">Github</a>
            <a href="https://linkedin.com/in/dhruvi-s" className="text-slate-500 hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Resume</a>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 left-8 z-50 p-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full text-white transition-all duration-500 shadow-2xl ${showScrollTop ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-50'}`}
      >
        <ArrowUp size={24} />
      </button>

      {/* AI Chat Widget */}
      <AIChat />

      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-5%); }
          50% { transform: translateY(5%); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
