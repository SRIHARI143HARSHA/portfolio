import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Database, Code2, Cloud, Sparkles, CheckCircle2 } from 'lucide-react';
import { learningJourney } from '../data/portfolioData';

const iconMap = {
  GraduationCap, Database, Code2, Cloud
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic & Skill Progression</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            My Learning <span className="text-gradient">Journey</span>
          </h2>
          <p className="mt-4 text-slate-400 dark:text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Structured timeline of engineering coursework, full-stack development, and emerging tech learning.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-500 to-cyan-400 -translate-x-1/2 opacity-30" />

          <div className="space-y-12">
            {learningJourney.map((item, idx) => {
              const IconComp = iconMap[item.icon] || GraduationCap;
              const isEven = idx % 2 === 0;

              return (
                <motion.div 
                  key={item.period + item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Center Node Icon */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 z-10 shadow-lg shadow-cyan-500/30">
                    <IconComp className="w-5 h-5" />
                  </div>

                  {/* Timeline Card */}
                  <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                    <div className={`glow-card glass-card p-6 rounded-2xl border ${
                      item.highlight ? 'border-cyan-500/40 shadow-lg shadow-cyan-500/5' : 'border-slate-800'
                    }`}>
                      
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono font-bold border border-blue-500/30">
                          {item.period}
                        </span>
                        <span className="text-xs text-cyan-400 font-medium">
                          {item.status}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 font-heading">
                        {item.title}
                      </h3>

                      <div className="text-sm font-semibold text-slate-400 mt-1 mb-4">
                        {item.institution}
                      </div>

                      {/* Focus Bullet Points */}
                      <div className="space-y-2 pt-2 border-t border-slate-800/80">
                        {item.focus.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;
