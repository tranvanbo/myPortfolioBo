import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionWrapper from './components/SectionWrapper';
import { SUMMARY } from './constants';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-purple-500 origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main className="space-y-0">
        <Hero />
        
        <SectionWrapper id="about" title="About Me">
          <div className="max-w-4xl mx-auto text-center md:text-left">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-lg md:text-2xl font-light leading-relaxed text-slate-700 dark:text-slate-300"
            >
              <p>{SUMMARY}</p>
            </motion.div>
          </div>
        </SectionWrapper>

        <SectionWrapper id="projects" title="Featured Projects" className="bg-slate-100 dark:bg-slate-900/50">
          <Projects />
        </SectionWrapper>

        <SectionWrapper id="skills" title="Technical Arsenal">
          <Skills />
        </SectionWrapper>

        <SectionWrapper id="contact" title="Get In Touch" className="bg-slate-100 dark:bg-slate-900/50">
          <Contact />
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  );
}

export default App;
