import React from 'react';
import { motion } from 'framer-motion';
import { Github, Code, Linkedin, ExternalLink, Sparkles, Terminal } from 'lucide-react';
import { codingProfiles, links } from '../data/portfolioData';

const iconMap = {
  Github, Code, Linkedin
};

const CodingProfiles = () => {
  return (
    <section className="py-20 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Competitive Programming & Platforms</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Code. Build. <span className="text-gradient">Solve.</span>
          </h2>
          <p className="mt-4 text-slate-400 dark:text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Active profiles across coding platforms, code repositories, and professional networks.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {codingProfiles.map((profile, idx) => {
            const IconComp = iconMap[profile.icon] || Code;
            const profileLink = profile.link === "YOUR_GITHUB_URL" 
              ? links.github 
              : profile.link === "YOUR_LINKEDIN_URL" 
              ? links.linkedin 
              : profile.link;

            return (
              <motion.div
                key={profile.platform}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glow-card glass-card p-8 rounded-3xl border border-slate-800 flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div>
                  {/* Card Top */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-all shadow-lg">
                      <IconComp className="w-7 h-7" />
                    </div>

                    {profile.badge && (
                      <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs font-mono font-bold">
                        {profile.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900 font-heading">
                    {profile.platform}
                  </h3>

                  {profile.username && (
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-slate-900 text-cyan-400 font-mono text-xs font-semibold my-2 border border-slate-800">
                      <Terminal className="w-3 h-3" />
                      <span>{profile.username}</span>
                    </div>
                  )}

                  <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-sm mt-3 leading-relaxed">
                    {profile.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80">
                  <a
                    href={profileLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-md shadow-blue-600/20 hover:shadow-cyan-500/30 transition-all duration-300"
                  >
                    <span>{profile.buttonText}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CodingProfiles;
