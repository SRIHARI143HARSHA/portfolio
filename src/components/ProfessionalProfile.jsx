import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Sparkles, Code2, Server, Terminal, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const ProfessionalProfile = () => {
  return (
    <section className="py-16 relative bg-slate-950/60 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glow-card glass-card p-8 sm:p-10 rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900/90 via-[#0C1222] to-slate-950">
          
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider font-mono font-bold text-cyan-400">Recruiter Summary</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                Professional Profile
              </h2>
            </div>
          </div>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-4xl">
            {personalInfo.summary}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 mt-6 border-t border-slate-800/80">
            <div className="flex items-center gap-3">
              <Code2 className="w-5 h-5 text-indigo-400" />
              <div>
                <div className="text-xs text-slate-400 font-mono">Primary Focus</div>
                <div className="text-sm font-bold text-white">Full Stack & Java</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Server className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="text-xs text-slate-400 font-mono">DevOps & Cloud</div>
                <div className="text-sm font-bold text-white">Docker, Jenkins, Firebase</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <div>
                <div className="text-xs text-slate-400 font-mono">Oracle Certified</div>
                <div className="text-sm font-bold text-white">Java SE 11 & SQL Specialist</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProfessionalProfile;
