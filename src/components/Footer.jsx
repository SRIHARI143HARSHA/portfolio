import React from 'react';
import { Github, Linkedin, Code, Mail, Rocket } from 'lucide-react';
import { personalInfo, links } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-800/80 bg-[#070A11] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-500 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-[#090D16] rounded-[7px] flex items-center justify-center font-bold text-sm text-white">
                  SH
                </div>
              </div>
              <span className="font-heading font-bold text-lg text-white">
                Sri Hari<span className="text-cyan-400">.</span>
              </span>
            </a>
            <p className="text-xs text-slate-400 flex items-center gap-1.5 font-mono">
              <span>Building. Learning. Solving.</span>
              <Rocket className="w-3.5 h-3.5 text-cyan-400" />
            </p>
          </div>

          {/* Quick Social Links */}
          <div className="flex items-center gap-3">
            <a 
              href={links.github} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href={links.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href={links.leetcode} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LeetCode Profile (Srihari11)"
              className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-all flex items-center gap-1.5"
            >
              <Code className="w-4 h-4" />
              <span className="text-xs font-mono font-bold">Srihari11</span>
            </a>
            <a 
              href={`mailto:${links.email}`} 
              aria-label="Send Email"
              className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-slate-500 font-mono text-center md:text-right">
            © 2026 Sri Hari. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
