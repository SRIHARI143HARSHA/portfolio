import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle2, Sparkles } from 'lucide-react';
import { educationList } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-indigo-500/30 text-xs font-semibold text-indigo-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Education & <span className="text-gradient">Academics</span>
          </h2>
          <p className="mt-4 text-slate-400 dark:text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Engineering degree and higher secondary academic achievements.
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationList.map((edu, idx) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glow-card glass-card p-8 rounded-3xl border flex flex-col justify-between ${
                edu.highlight ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/5' : 'border-slate-800'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shadow-md">
                    <GraduationCap className="w-6 h-6" />
                  </div>

                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
                    {edu.score}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white font-heading">
                  {edu.institution}
                </h3>

                <div className="text-sm font-semibold text-cyan-400 mt-1 mb-2">
                  {edu.degree}
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{edu.period}</span>
                </div>

                {/* Coursework */}
                <div className="pt-4 border-t border-slate-800/80">
                  <h4 className="text-xs uppercase tracking-wider font-mono font-bold text-slate-400 mb-3 flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Relevant Coursework & Skills</span>
                  </h4>
                  <div className="space-y-2">
                    {edu.coursework.map((course, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span>{course}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
