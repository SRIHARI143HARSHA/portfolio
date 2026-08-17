import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, FileText, Mail, Github, Linkedin, Code, 
  Terminal, Sparkles, CheckCircle2, Cpu, ShieldCheck
} from 'lucide-react';
import { personalInfo, links } from '../data/portfolioData';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing Effect Loop for Animated Roles
  useEffect(() => {
    const currentRole = personalInfo.heroRoles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % personalInfo.heroRoles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Glow Orbs Backdrop */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-semibold text-cyan-400 max-w-fit shadow-md shadow-cyan-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Available for Internships & Placement Opportunities</span>
            </div>

            {/* Greeting */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-tight">
              Hi, I'm <span className="text-gradient">Sri Hari</span> 👋
            </h1>

            {/* Large Subtitle */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 leading-snug">
              Computer Engineering Student & <span className="text-cyan-400 dark:text-cyan-400 light:text-blue-600">Aspiring Software Developer</span>
            </h2>

            {/* Typing Role Box */}
            <div className="h-10 flex items-center gap-2 text-lg sm:text-xl font-mono text-cyan-300 dark:text-cyan-300 light:text-blue-700 font-semibold bg-slate-900/60 dark:bg-slate-900/60 light:bg-slate-100 border border-slate-800 dark:border-slate-800 light:border-slate-200 px-4 py-2 rounded-xl max-w-md">
              <Terminal className="w-5 h-5 text-indigo-400 shrink-0" />
              <span>{displayText}</span>
              <span className="w-2 h-5 bg-cyan-400 animate-pulse ml-0.5" />
            </div>

            {/* Description */}
            <p className="text-slate-400 dark:text-slate-400 light:text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              "I build scalable software solutions, modern web applications, and intelligent systems while continuously developing my skills in Java, Full Stack Development, AI/ML, Cloud, and DevOps."
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-white rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-blue-600/30 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={links.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white glass-card hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all duration-300 rounded-xl"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Resume</span>
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-white glass-card hover:border-indigo-500/50 transition-all duration-300 rounded-xl"
              >
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/60 dark:border-slate-800/60 light:border-slate-200">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-500 light:text-slate-400">
                Connect With Me:
              </span>
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
            </div>

          </motion.div>

          {/* Right Hero Visual Card (5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Glowing Accent Ring */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 rounded-3xl blur-2xl opacity-20 -z-10 animate-pulse-slow" />

            {/* Developer Code Terminal Card */}
            <div className="glow-card rounded-2xl glass-card overflow-hidden shadow-2xl border border-slate-800">
              
              {/* Terminal Header */}
              <div className="bg-slate-900/90 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>SoftwareDeveloper.java</span>
                </div>
                <div className="w-4" />
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs sm:text-sm space-y-2.5 bg-[#0B0F19]/90 text-slate-300 leading-relaxed overflow-x-auto">
                <div>
                  <span className="text-purple-400">public class</span> <span className="text-yellow-300">SoftwareDeveloper</span> &#123;
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">private String</span> <span className="text-slate-200">name</span> = <span className="text-emerald-400">"Sri Hari"</span>;
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">private String</span> <span className="text-slate-200">degree</span> = <span className="text-emerald-400">"B.E. Computer Engineering"</span>;
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">private double</span> <span className="text-slate-200">cgpa</span> = <span className="text-cyan-400 font-bold">8.71</span>;
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">private String[]</span> <span className="text-slate-200">interests</span> = &#123;
                </div>
                <div className="pl-8 text-cyan-300">
                  "Java", "Full Stack Development", "AI/ML", "Cloud", "DevOps"
                </div>
                <div className="pl-4">&#125;;</div>
                <div className="pl-4 pt-1">
                  <span className="text-purple-400">public void</span> <span className="text-blue-400">buildSolutions</span>() &#123;
                </div>
                <div className="pl-8 text-emerald-400">
                  System.out.println("Building. Learning. Solving.");
                </div>
                <div className="pl-4">&#125;</div>
                <div>&#125;</div>
              </div>

              {/* Terminal Footer Status Bar */}
              <div className="bg-slate-900/90 px-4 py-2.5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Build: Passed</span>
                </div>
                <div className="flex items-center gap-1.5 text-cyan-400">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Graduation: 2027</span>
                </div>
              </div>
            </div>

            {/* Floating Info Cards */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass-card p-3.5 rounded-2xl border border-cyan-500/30 flex items-center gap-3 shadow-xl backdrop-blur-md bg-slate-900/90"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-md shadow-cyan-500/30">
                8.71
              </div>
              <div>
                <div className="text-xs text-slate-400 font-medium">Academic Excellence</div>
                <div className="text-sm font-bold text-white">CGPA 8.71</div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-6 -right-6 glass-card p-3 rounded-xl border border-indigo-500/30 flex items-center gap-2.5 shadow-xl backdrop-blur-md bg-slate-900/90"
            >
              <ShieldCheck className="w-5 h-5 text-indigo-400" />
              <div className="text-xs font-semibold text-slate-200">Java Full Stack & DevOps</div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
