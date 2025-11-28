import React from 'react';
import { motion } from 'framer-motion';
import { Download, MousePointer2, Linkedin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            translate: ['0% 0%', '10% 10%', '-5% 5%', '0% 0%'],
            scale: [1, 1.2, 0.9, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-400/20 dark:bg-primary-600/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen filter" 
        />
        <motion.div 
          animate={{ 
            translate: ['0% 0%', '-10% -10%', '5% -5%', '0% 0%'],
            scale: [1, 1.1, 0.95, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen filter" 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-semibold mb-6 border border-primary-200 dark:border-primary-800"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Available for opportunities
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 60 }}
            className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]"
          >
            Hello, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400">
              Tran Van Bo
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed"
          >
            A passionate <strong>Mobile Developer</strong> specializing in <strong>React Native</strong>. 
            I craft silky-smooth, high-performance apps that solve real-world problems.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          >
            <a 
              href={CONTACT_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-full font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
            >
              <Linkedin size={20} /> View LinkedIn
            </a>
            <a 
              href="/Tran_Van_Bo_CV.pdf"
              download="Tran_Van_Bo_CV.pdf"
              className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-full font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-300 flex items-center gap-2 group"
            >
              <Download size={18} className="group-hover:animate-bounce" /> Resume
            </a>
          </motion.div>
        </div>

        {/* Visual / Avatar */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 50 }}
          className="relative hidden md:flex justify-center"
        >
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-purple-500 rounded-[2rem] rotate-6 opacity-20 blur-2xl animate-pulse"></div>
            <div className="absolute inset-0 border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-full animate-[spin_20s_linear_infinite]"></div>
            
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl"
            >
               <img 
                 src={CONTACT_INFO.avatar} 
                 alt="Tran Van Bo" 
                 className="w-full h-full object-cover"
               />
            </motion.div>

            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 z-20 flex items-center gap-3"
            >
              <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full text-green-600 dark:text-green-400">
                <MousePointer2 size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-bold uppercase">Mobile App</p>
                <p className="text-lg font-bold text-slate-900 dark:text-white">Expert</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;