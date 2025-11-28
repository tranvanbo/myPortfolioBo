import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { WORK_EXPERIENCE } from '../constants';
import { Project } from '../types';
import { ArrowRight, Briefcase, Calendar } from 'lucide-react';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="space-y-20">
      {WORK_EXPERIENCE.map((experience, expIndex) => (
        <div key={expIndex} className="relative">
          {/* Company Info Header */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-l-4 border-primary-500 pl-4"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Briefcase className="text-primary-500" size={24} />
                {experience.company}
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 font-medium mt-1">
                {experience.role}
              </p>
            </div>
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/50 px-4 py-2 rounded-full text-sm font-mono border border-slate-200 dark:border-slate-700">
              <Calendar size={16} />
              {experience.period}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experience.projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-primary-500/10 dark:hover:shadow-primary-900/20 transition-all duration-300 h-full flex flex-col"
              >
                {/* Decorative Gradient Header */}
                <div className="h-2 bg-gradient-to-r from-primary-400 to-purple-400" />
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`px-2 py-1 text-xs font-bold rounded uppercase tracking-wide border ${
                      project.type === 'Mini App' 
                        ? 'bg-orange-50 text-orange-600 border-orange-200 dark:bg-orange-900/20 dark:border-orange-800' 
                        : 'bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800'
                    }`}>
                      {project.type}
                    </span>
                    <div className="bg-slate-100 dark:bg-slate-800 p-2 rounded-full text-slate-400 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                      <ArrowRight size={16} className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-3 mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <span key={i} className="text-xs font-medium text-slate-500 dark:text-slate-500 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-xs font-medium text-slate-400 px-2 py-1">+{project.techStack.length - 3}</span>
                    )}
                  </div>
                </div>
                
                {/* Hover Overlay Effect */}
                <div className="absolute inset-0 bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};

export default Projects;