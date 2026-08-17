import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, Coffee, FileCode, Database, Atom, Layout, Palette, Layers,
  Server, HardDrive, Globe, Cpu, CheckCircle2, FileSpreadsheet, FolderGit2,
  Cloud, Box, Network, Workflow, GitBranch, Brain, TreePine, LineChart,
  Eye, Target, Camera, Terminal, Github, Sparkles, Filter, Smartphone, Flame
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconMap = {
  Coffee, Code2, FileCode, Database, Atom, Layout, Palette, Layers,
  Server, HardDrive, Globe, Cpu, CheckCircle2, FileSpreadsheet, FolderGit2,
  Cloud, Box, Network, Workflow, GitBranch, Brain, TreePine, LineChart,
  Eye, Target, Camera, Terminal, Github, Smartphone, Flame, Sparkles
};

const badgeColorMap = {
  "Experienced": "bg-blue-500/10 text-blue-400 border-blue-500/30",
  "Intermediate": "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  "Working Knowledge": "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
  "Learning": "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categoriesToDisplay = activeTab === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-semibold text-cyan-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Resume Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="mt-4 text-slate-400 dark:text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Structured inventory of programming languages, frontend/mobile frameworks, databases, and DevOps tools.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-cyan-500/20'
                : 'glass-card text-slate-400 hover:text-white hover:border-slate-700'
            }`}
          >
            All Categories
          </button>
          
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-cyan-500/20'
                  : 'glass-card text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Category Grids */}
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            {categoriesToDisplay.map((category) => (
              <motion.div 
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                {activeTab === 'all' && (
                  <h3 className="text-lg font-bold text-slate-200 dark:text-slate-200 light:text-slate-800 flex items-center gap-2 border-b border-slate-800/80 pb-2">
                    <Filter className="w-4 h-4 text-cyan-400" />
                    <span>{category.title}</span>
                  </h3>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.skills.map((skill) => {
                    const IconComp = iconMap[skill.icon] || Code2;
                    const badgeClass = badgeColorMap[skill.level] || "bg-slate-800 text-slate-300 border-slate-700";

                    return (
                      <div 
                        key={skill.name}
                        className="glow-card glass-card p-5 rounded-2xl border border-slate-800/90 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group"
                      >
                        <div>
                          <div className="flex items-start justify-between mb-3">
                            <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 group-hover:scale-110 transition-all">
                              <IconComp className="w-5 h-5" />
                            </div>

                            <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${badgeClass}`}>
                              {skill.level}
                            </span>
                          </div>

                          <h4 className="text-base font-bold text-white dark:text-white light:text-slate-900">
                            {skill.name}
                          </h4>
                          <p className="text-xs text-slate-400 dark:text-slate-400 light:text-slate-600 mt-1.5 leading-relaxed">
                            {skill.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Skills;
