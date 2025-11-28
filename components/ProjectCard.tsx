import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { ExternalLink, Tag, CheckCircle } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        type: "spring", 
        stiffness: 50, 
        damping: 20, 
        delay: index * 0.15 
      }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="group bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-full -mr-8 -mt-8 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-bold text-slate-800 group-hover:text-primary transition-colors">{project.name}</h3>
              <span className={`px-3 py-1 text-xs rounded-full font-bold uppercase tracking-wide ${
                project.type === 'Mini App' 
                  ? 'bg-orange-100 text-orange-700 border border-orange-200' 
                  : 'bg-blue-100 text-blue-700 border border-blue-200'
              }`}>
                {project.type}
              </span>
            </div>
            {project.link && (
              <a href={project.link} className="text-sm font-medium text-slate-500 hover:text-primary transition-colors inline-flex items-center gap-1.5 group/link">
                {project.linkText || "View Project"} 
                <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            )}
          </div>
        </div>

        <p className="text-slate-600 mb-8 leading-relaxed text-lg">
          {project.description}
        </p>

        <div className="grid md:grid-cols-1 gap-6 mb-8">
          <div>
             <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-primary rounded-full"></span>
                Key Responsibilities
             </h4>
            <ul className="space-y-3">
              {project.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start text-slate-600 group/item">
                  <CheckCircle size={16} className="mr-3 mt-1 text-primary/60 shrink-0 group-hover/item:text-primary transition-colors" />
                  <span className="text-sm md:text-base">{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-2">
          {project.techStack.map((tech, idx) => (
            <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 text-slate-600 text-sm font-medium rounded-lg border border-slate-200 group-hover:border-blue-200 group-hover:bg-blue-50/50 transition-colors">
              <Tag size={12} className="text-slate-400 group-hover:text-blue-500" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;