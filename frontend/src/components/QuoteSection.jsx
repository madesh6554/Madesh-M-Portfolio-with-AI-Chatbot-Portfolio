import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const QuoteSection = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-white dark:bg-dark-900 transition-colors duration-300">
      {/* 🔹 Background Glowing Elements (Manifest Style) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary-500/10 dark:bg-primary-400/5 blur-[120px] rounded-full" />
        <motion.div 
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 dark:bg-blue-400/5 blur-[100px] rounded-full"
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center space-y-8"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-2"
          >
            <Sparkles size={28} className="animate-pulse" />
          </motion.div>

          {/* Quote */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif italic text-gray-900 dark:text-white leading-tight tracking-tight">
            "All Things work together for <span className="text-primary-600 dark:text-primary-400 not-italic font-sans font-bold relative">
              good
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute -bottom-2 left-0 h-1.5 bg-primary-500/30 rounded-full"
              />
            </span>"
          </h2>

          {/* Attribution */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="flex flex-col items-center gap-3 pt-2"
          >
            <div className="h-px w-10 bg-gray-300 dark:bg-gray-600 rounded-full" />
            <p className="text-sm font-medium text-gray-400 dark:text-gray-500 tracking-widest uppercase">
              — Romans 8:28
            </p>
          </motion.div>

        </motion.div>
      </div>

      {/* Decorative Side Lines */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-dark-700 to-transparent hidden lg:block" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-32 h-px bg-gradient-to-l from-transparent via-gray-200 dark:via-dark-700 to-transparent hidden lg:block" />
    </section>
  );
};

export default QuoteSection;
