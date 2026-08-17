import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Sparkles, CheckCircle2, FileCheck } from 'lucide-react';
import { certifications } from '../data/portfolioData';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-indigo-500/30 text-xs font-semibold text-indigo-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Certifications & Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Certifications & <span className="text-gradient">Credentials</span>
          </h2>
          <p className="mt-4 text-slate-400 dark:text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Verified Oracle certifications in Java SE 11 Development and Oracle Database SQL.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glow-card glass-card p-6 rounded-2xl border border-slate-800 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
                      {cert.score}
                    </span>
                    <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${cert.color}`}>
                      {cert.badge}
                    </span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white dark:text-white light:text-slate-900 leading-snug font-heading">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-2 text-xs font-medium text-slate-400 mt-2">
                  <FileCheck className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Issuing Organization: {cert.issuer}</span>
                </div>
              </div>

              <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">Verified Credential</span>

                {cert.url ? (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-xs text-slate-400 font-mono italic">
                    Certificate link to be added
                  </span>
                )}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
