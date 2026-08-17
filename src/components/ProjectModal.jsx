import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, CheckCircle2, Cpu, Tag, Layers } from 'lucide-react';
import { links } from '../data/portfolioData';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl glass-card rounded-3xl border border-slate-700/80 bg-[#0E1322] shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
        >
          
          {/* Top Banner Header */}
          <div className={`p-6 bg-gradient-to-r ${project.imageGradient} flex items-center justify-between text-white border-b border-slate-700`}>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/40 text-xs font-mono font-semibold backdrop-blur-sm border border-white/20 mb-2">
                <Tag className="w-3.5 h-3.5" />
                <span>{project.category}</span>
              </div>
              <h3 className="text-2xl font-extrabold font-heading text-white">
                {project.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-black/40 hover:bg-black/70 text-white transition-colors border border-white/20"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto font-sans text-slate-300">
            
            {/* Overview */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-cyan-400 mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                <span>Project Description</span>
              </h4>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {project.fullDesc}
              </p>
            </div>

            {/* Environmental Parameters if IoT Project */}
            {project.parameters && (
              <div>
                <h4 className="text-xs uppercase tracking-wider font-bold text-indigo-400 mb-2">
                  Parameters Monitored & Analyzed:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.parameters.map((param) => (
                    <span key={param} className="px-3 py-1 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 text-xs font-bold font-mono">
                      {param}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-cyan-400 mb-3">
                Key Features & Capabilities:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 bg-slate-900/60 p-3 rounded-xl border border-slate-800 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-400" />
                <span>Technologies Used</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-lg bg-slate-800 text-cyan-300 text-xs font-mono font-semibold border border-slate-700">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Modal Footer Actions */}
          <div className="p-6 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between">
            <a
              href={project.github !== "YOUR_GITHUB_URL" ? project.github : links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>View Code on GitHub</span>
            </a>

            <button
              onClick={onClose}
              className="px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white rounded-xl glass-card transition-all"
            >
              Close Window
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
