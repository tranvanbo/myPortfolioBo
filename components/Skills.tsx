import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {SKILLS.map((category, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm"
        >
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-primary-500 rounded-full"></span>
            {category.title}
          </h3>
          
          <div className="space-y-4">
            {category.skills.map((skill, sIdx) => (
              <div key={sIdx} className="group">
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-medium text-slate-700 dark:text-slate-300">{skill}</span>
                </div>
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }} // Simplified since no percentage in data, default to full
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + (sIdx * 0.1) }}
                    className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full group-hover:from-purple-400 group-hover:to-purple-600 transition-colors duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
