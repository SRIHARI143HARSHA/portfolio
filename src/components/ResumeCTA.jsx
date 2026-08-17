import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Mail, Sparkles, FileCheck, ArrowRight } from 'lucide-react';
import { links } from '../data/portfolioData';

const ResumeCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative glow-card glass-card rounded-3xl p-8 sm:p-12 md:p-16 border border-slate-800 bg-gradient-to-br from-slate-900/90 via-[#0C1222] to-slate-950 shadow-2xl overflow-hidden">
          
          {/* Background Ambient Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono font-bold text-cyan-400">
              <Sparkles className="w-4 h-4" />
              <span>Placement & Internship Ready</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight font-heading leading-tight">
              Let's Build Something <span className="text-gradient">Great Together.</span>
            </h2>

            <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              I'm actively looking for software engineering internships and placement opportunities where I can apply my technical skills, contribute to real-world projects, and continue growing as a developer.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href={links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 text-base font-bold text-white rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-xl shadow-blue-600/30 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <FileText className="w-5 h-5" />
                <span>View Resume</span>
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-8 py-4 text-base font-semibold text-slate-200 dark:text-slate-200 light:text-slate-800 glass-card hover:border-cyan-500/50 hover:text-white transition-all duration-300 rounded-xl"
              >
                <Mail className="w-5 h-5 text-indigo-400" />
                <span>Contact Me</span>
              </a>
            </div>

            <div className="pt-4 text-xs font-mono text-slate-500 flex items-center justify-center gap-2">
              <FileCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified Resume PDF Attached</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ResumeCTA;
