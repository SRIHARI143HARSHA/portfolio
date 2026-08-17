import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, Calendar, Sparkles, BookOpen, Code2 } from 'lucide-react';
import { personalInfo, statsCards } from '../data/portfolioData';

const iconMap = {
  "CGPA": Award,
  "Graduation": Calendar,
  "Degree": GraduationCap,
  "Location": MapPin
};

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-indigo-500/30 text-xs font-semibold text-indigo-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Background & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="mt-4 text-slate-400 dark:text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Engineering student driven by code quality, continuous learning, and intelligent software creation.
          </p>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Stack (7 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4">
              <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                <span>Computer Science (AI) Engineering Student</span>
              </h3>
              
              <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-base">
                {personalInfo.aboutText1}
              </p>

              <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-base">
                {personalInfo.aboutText2}
              </p>

              <div className="pt-4 border-t border-slate-800/80">
                <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3 flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-indigo-400" />
                  <span>Resume Technical Stack</span>
                </h4>
                
                <div className="flex flex-wrap gap-2">
                  {[
                    "Java", "Python", "JavaScript", "C", "React.js", 
                    "React Native", "SQL", "Docker", "Jenkins", "Git & GitHub"
                  ].map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 text-xs font-semibold rounded-lg bg-slate-800/80 text-cyan-300 border border-slate-700/60 hover:border-cyan-500/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 4 Stat Cards Grid (5 Cols) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {statsCards.map((card, idx) => {
              const IconComponent = iconMap[card.label] || Award;
              return (
                <div 
                  key={card.label}
                  className="glow-card glass-card p-6 rounded-2xl border border-slate-800 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} p-[1px] shadow-md`}>
                      <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center text-white">
                        <IconComponent className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    <span className="text-xs font-bold font-mono px-2 py-0.5 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700">
                      {card.label}
                    </span>
                  </div>

                  <div>
                    <div className="text-3xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight font-heading">
                      {card.value}
                    </div>
                    <div className="text-xs font-medium text-slate-400 mt-1">
                      {card.sub}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
