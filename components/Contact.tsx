import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact = () => {
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('sending');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="grid md:grid-cols-2 gap-12 items-start">
      {/* Contact Info */}
      <div className="space-y-8">
        <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          I'm currently available for freelance work or full-time positions. 
          If you have a project that needs some creative touch, or just want to say hi, my inbox is open!
        </p>
        
        <div className="space-y-6">
          <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 group p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-primary-500 transition-colors shadow-sm">
            <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Email</p>
              <p className="text-slate-900 dark:text-white font-medium">{CONTACT_INFO.email}</p>
            </div>
          </a>
          
          <div className="flex items-center gap-4 group p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
             <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-400">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Phone</p>
              <p className="text-slate-900 dark:text-white font-medium">{CONTACT_INFO.phone}</p>
            </div>
          </div>

           <div className="flex items-center gap-4 group p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
             <div className="w-12 h-12 bg-green-50 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Location</p>
              <p className="text-slate-900 dark:text-white font-medium">{CONTACT_INFO.location}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <motion.form 
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-lg"
      >
        <div className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
            <input 
              type="text" 
              id="name"
              required
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all dark:text-white"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
            <input 
              type="email" 
              id="email"
              required
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all dark:text-white"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
            <textarea 
              id="message"
              rows={4}
              required
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none dark:text-white"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>
          
          <button 
            type="submit"
            disabled={formState !== 'idle'}
            className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 ${
              formState === 'success' 
                ? 'bg-green-500' 
                : 'bg-slate-900 dark:bg-primary-600 hover:bg-primary-700'
            }`}
          >
            {formState === 'idle' && (
              <>
                Send Message <Send size={18} />
              </>
            )}
            {formState === 'sending' && (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            )}
            {formState === 'success' && (
              <>
                Message Sent! <Check size={18} />
              </>
            )}
          </button>
        </div>
      </motion.form>
    </div>
  );
};

export default Contact;
