import React from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  title?: string;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, title, className = "" }) => {
  return (
    <section id={id} className={`py-20 md:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20 overflow-hidden ${className}`}>
      {title && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark tracking-tight relative inline-block">
            {title}
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: "60%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-3 left-0 h-1.5 bg-primary rounded-full"
            ></motion.span>
          </h2>
        </motion.div>
      )}
      {children}
    </section>
  );
};

export default SectionWrapper;