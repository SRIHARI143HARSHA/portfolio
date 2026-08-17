import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle2, Code2, Sparkles, GraduationCap, Database } from 'lucide-react';
import { internships, learningJourney } from '../data/portfolioData';

const iconMap = {
  GraduationCap, Database, Code2
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Resume Experience & Career Timeline</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight font-heading">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="mt-4 text-slate-400 dark:text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Directly from my uploaded resume: Full Stack Developer Internship and Academic Engineering Progression.
          </p>
        </div>

        {/* Featured Internship Experience Card (From Resume) */}
        <div className="max-w-4xl mx-auto mb-16">
          {internships.map((intern) => (
            <motion.div
              key={intern.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glow-card glass-card p-8 sm:p-10 rounded-3xl border border-cyan-500/40 shadow-xl shadow-cyan-500/10 space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono font-bold border border-cyan-500/30 mb-2">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Work Experience</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                    {intern.role}
                  </h3>
                  <div className="text-lg font-bold text-cyan-300 mt-1">
                    {intern.company}
                  </div>
                </div>

                <div className="flex flex-col sm:items-end text-xs text-slate-400 font-mono gap-1.5">
                  <div className="flex items-center gap-1.5 text-cyan-400 font-bold bg-slate-900/90 px-3 py-1.5 rounded-xl border border-slate-800">
                    <MapPin className="w-4 h-4 text-rose-400" />
                    <span>{intern.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300 bg-slate-900/90 px-3 py-1 rounded-xl border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                    <span>{intern.period}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities matching resume */}
              <div className="space-y-4">
                <h4 className="text-xs uppercase tracking-wider font-mono font-bold text-slate-400">
                  Key Experience & Contributions (Resume Verified):
                </h4>
                <div className="space-y-3">
                  {intern.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-3 text-sm sm:text-base text-slate-200">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Applied */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                <div className="text-xs font-mono text-slate-400 font-bold">
                  Technologies Used:
                </div>
                <div className="flex flex-wrap gap-2">
                  {intern.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-lg bg-slate-900 text-cyan-300 text-xs font-mono font-semibold border border-slate-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Learning & Academic Timeline */}
        <div className="relative max-w-4xl mx-auto pt-8 border-t border-slate-800/80">
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-white font-heading">
              Academic & Education Timeline
            </h3>
          </div>

          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-500 to-cyan-400 -translate-x-1/2 opacity-30" />

            <div className="space-y-10">
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
                    
                    {/* Node Icon */}
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
                          <span className="text-xs text-cyan-400 font-medium font-mono">
                            {item.status}
                          </span>
                        </div>

                        <h4 className="text-lg font-bold text-white font-heading">
                          {item.title}
                        </h4>

                        <div className="text-xs font-semibold text-slate-400 mt-1 mb-3">
                          {item.institution}
                        </div>

                        <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
                          {item.focus.map((point, pIdx) => (
                            <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-300">
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

      </div>
    </section>
  );
};

export default Experience;
