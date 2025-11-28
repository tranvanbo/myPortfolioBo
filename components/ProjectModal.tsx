import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Tag, Layers, CheckCircle } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60]"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-6 pointer-events-none"
          >
            <div className="bg-white dark:bg-slate-900 w-full max-w-3xl max-h-[85vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col pointer-events-auto border border-slate-200 dark:border-slate-700">
              
              {/* Header */}
              <div className="relative h-48 bg-gradient-to-r from-primary-600 to-purple-600 flex items-center justify-center shrink-0">
                <button 
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors z-10"
                >
                  <X size={20} />
                </button>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight text-center px-4">
                  {project.name}
                </h2>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/30 uppercase tracking-wider">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className="overflow-y-auto p-6 md:p-8 space-y-8 custom-scrollbar">
                
                {/* Description */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Overview</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                   <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Layers size={16} /> Tech Stack
                   </h3>
                   <div className="flex flex-wrap gap-2">
                     {project.techStack.map((tech, i) => (
                       <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-md border border-slate-200 dark:border-slate-700">
                         {tech}
                       </span>
                     ))}
                   </div>
                </div>

                {/* Responsibilities */}
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 border border-slate-100 dark:border-slate-700">
                   <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Key Contributions</h3>
                   <ul className="space-y-3">
                     {project.responsibilities.map((res, i) => (
                       <li key={i} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                         <CheckCircle size={18} className="text-primary-500 mt-1 shrink-0" />
                         <span>{res}</span>
                       </li>
                     ))}
                   </ul>
                </div>

              </div>

              {/* Footer / Actions */}
              <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex justify-end shrink-0">
                {project.link ? (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-bold transition-colors shadow-lg shadow-primary-500/30"
                  >
                    View Project <ExternalLink size={18} />
                  </a>
                ) : (
                  <button disabled className="px-6 py-3 bg-slate-200 dark:bg-slate-800 text-slate-400 dark:text-slate-500 rounded-lg font-bold cursor-not-allowed">
                    Internal / Private Project
                  </button>
                )}
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
