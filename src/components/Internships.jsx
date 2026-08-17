import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, CheckCircle2, Code, Sparkles } from 'lucide-react';
import { internships } from '../data/portfolioData';

const Internships = () => {
  return (
    <section id="internships" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Hands-on Industry Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Internship <span className="text-gradient">Experience</span>
          </h2>
          <p className="mt-4 text-slate-400 dark:text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Practical software engineering experience and full stack development workflows.
          </p>
        </div>

        {/* Internship Cards */}
        <div className="max-w-3xl mx-auto space-y-8">
          {internships.map((intern, idx) => (
            <motion.div
              key={intern.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glow-card glass-card p-8 rounded-3xl border border-slate-800 space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-mono font-bold border border-blue-500/30 mb-2">
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>{intern.role}</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-white font-heading">
                    {intern.company}
                  </h3>
                </div>

                <div className="flex flex-col sm:items-end text-xs text-slate-400 font-mono gap-1">
                  <div className="flex items-center gap-1.5 text-cyan-400 font-bold">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{intern.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{intern.period}</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase tracking-wider font-mono font-bold text-slate-400">
                  Key Responsibilities & Contributions:
                </h4>
                <div className="space-y-2.5">
                  {intern.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-3 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div className="pt-4 border-t border-slate-800/80">
                <h4 className="text-xs uppercase tracking-wider font-mono font-bold text-slate-400 mb-2 flex items-center gap-2">
                  <Code className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Technologies & Tools Applied</span>
                </h4>
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

      </div>
    </section>
  );
};

export default Internships;
