import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Mail, ArrowRight, Sparkles, UserCheck, ShieldCheck } from 'lucide-react';
import { links } from '../data/portfolioData';

const RecruiterCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glow-card glass-card rounded-3xl p-8 sm:p-12 border border-slate-800 bg-gradient-to-r from-slate-900/90 via-[#0C1222] to-slate-950 shadow-2xl relative overflow-hidden">
          
          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono font-bold text-cyan-400">
              <UserCheck className="w-4 h-4" />
              <span>Placement & Internship Candidate</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight">
              Looking for a motivated <span className="text-gradient">Software Developer?</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              I'm actively looking for software engineering internships, campus placement opportunities, and full-stack development roles where I can apply my Java, Python, and web engineering skills to real-world products.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href={links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-3.5 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-xl shadow-blue-600/25 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </a>

              <a
                href="#projects"
                className="flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-slate-200 glass-card hover:border-cyan-500/50 hover:text-white transition-all duration-300 rounded-xl"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-slate-200 glass-card hover:border-indigo-500/50 hover:text-white transition-all duration-300 rounded-xl"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Contact Me</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default RecruiterCTA;
