import React from 'react';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-black border-t border-slate-200 dark:border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            Bo<span className="text-primary-500">Tran</span>
          </span>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            © {currentYear} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-400 hover:text-red-500 transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
