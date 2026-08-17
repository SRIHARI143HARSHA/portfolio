import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, Github, ExternalLink, Info, Camera, Wind, Workflow, Code, 
  GraduationCap, Layout, ShoppingBag, Layers, Flame, ArrowRight
} from 'lucide-react';
import { projectsData, links } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const iconMap = {
  Camera, Code, GraduationCap, Wind, Layout, ShoppingBag, Layers, Flame, Workflow
};

const filterCategories = [
  "All",
  "Frontend",
  "AI / ML",
  "Computer Vision",
  "IoT",
  "NLP",
  "Education",
  "Compiler Design",
  "Web Development"
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === "All"
    ? projectsData
    : projectsData.filter(proj => proj.categories.includes(activeFilter) || proj.category.includes(activeFilter));

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-indigo-500/30 text-xs font-semibold text-indigo-400 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Project Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white light:text-slate-900 tracking-tight">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-slate-400 dark:text-slate-400 light:text-slate-600 text-base sm:text-lg">
            Academic, AI/ML, IoT, Frontend, and DevOps project engineering portfolio.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {filterCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-cyan-500/20'
                  : 'glass-card text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const IconComponent = iconMap[project.iconName] || Code;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="glow-card glass-card rounded-2xl border border-slate-800/90 overflow-hidden flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300"
                >
                  <div>
                    {/* Card Header Visual Banner */}
                    <div className={`h-48 bg-gradient-to-br ${project.imageGradient} p-6 relative flex flex-col justify-between overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                      
                      {/* Category Badge */}
                      <div className="relative z-10 flex items-center justify-between">
                        <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-xs font-mono font-semibold text-cyan-300 border border-slate-700">
                          {project.category}
                        </span>

                        <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                          <IconComponent className="w-5 h-5" />
                        </div>
                      </div>

                      {/* Title on Banner */}
                      <div className="relative z-10">
                        <h3 className="text-xl font-bold font-heading text-white line-clamp-2 group-hover:text-cyan-200 transition-colors">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6 space-y-4">
                      <p className="text-slate-300 dark:text-slate-300 light:text-slate-600 text-sm leading-relaxed line-clamp-3">
                        {project.shortDesc}
                      </p>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span key={tech} className="px-2.5 py-0.5 rounded-md bg-slate-900 text-cyan-400 text-xs font-mono border border-slate-800">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-0.5 rounded-md bg-slate-900 text-slate-400 text-xs font-mono border border-slate-800">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="p-6 pt-0 border-t border-slate-800/60 flex items-center justify-between mt-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Info className="w-4 h-4" />
                      <span>View Details</span>
                    </button>

                    <div className="flex items-center gap-2">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-xl glass-card text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl glass-card text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all"
                        title="View GitHub Code"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Modal Dialog */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};

export default Projects;
