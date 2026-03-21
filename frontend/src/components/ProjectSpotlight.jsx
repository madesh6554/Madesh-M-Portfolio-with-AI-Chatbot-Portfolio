import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github, MessageSquareCode } from 'lucide-react';
import { completedProjects } from '../data/projectsData';

const ProjectSpotlight = () => {
  const featuredProjects = completedProjects.filter(p => p.featured);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredProjects.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  const handleAskAI = (projectTitle) => {
    const event = new CustomEvent('openProjectChat', { 
      detail: { projectTitle } 
    });
    window.dispatchEvent(event);
  };

  if (featuredProjects.length === 0) return null;

  const currentProject = featuredProjects[currentIndex];

  return (
    <div className="relative w-full h-[500px] sm:h-[600px] rounded-3xl overflow-hidden shadow-2xl mb-16 group">
      {/* Background Image with Parallax effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentProject.id}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={currentProject.image}
            alt={currentProject.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent dark:from-dark-900/90 dark:via-dark-900/50 dark:to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center px-8 sm:px-16 lg:px-24">
        <motion.div
          key={`content-${currentProject.id}`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-400 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Featured Spotlight
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight drop-shadow-lg">
            {currentProject.title}
          </h2>
          
          <p className="text-lg text-gray-200 mb-8 line-clamp-3 leading-relaxed drop-shadow-md backdrop-blur-[2px]">
            {currentProject.description}
          </p>

          <div className="flex flex-wrap gap-4">
            {currentProject.demo && (
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={currentProject.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary-600/30 transition-all"
              >
                Live Demo <ExternalLink size={18} />
              </motion.a>
            )}
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleAskAI(currentProject.title)}
              className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-xl font-bold flex items-center gap-2 backdrop-blur-md transition-all uppercase text-sm tracking-wider"
            >
              Ask AI About This <MessageSquareCode size={18} className="text-primary-400" />
            </motion.button>

            {currentProject.github && (
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={currentProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900/50 hover:bg-gray-900 text-white rounded-full border border-white/10 backdrop-blur-md transition-all"
                title="View Source"
              >
                <Github size={20} />
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 right-10 flex items-center gap-4">
        {/* Progress Dots */}
        <div className="flex gap-2 mr-4">
           {featuredProjects.map((_, idx) => (
             <button
               key={idx}
               onClick={() => { setCurrentIndex(idx); setIsAutoPlaying(false); }}
               className={`h-1.5 rounded-full transition-all duration-300 ${
                 idx === currentIndex ? 'w-8 bg-primary-500' : 'w-2 bg-white/30 hover:bg-white/50'
               }`}
             />
           ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-black/20 hover:bg-black/40 text-white border border-white/10 backdrop-blur-md transition-all"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-black/20 hover:bg-black/40 text-white border border-white/10 backdrop-blur-md transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Glassy Stats Bar */}
      <div className="absolute top-10 right-10 hidden lg:flex gap-8 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl">
        {currentProject.technologies?.slice(0, 3).map((tech, i) => (
            <div key={i} className="flex flex-col items-center">
                <span className="text-[10px] text-gray-400 uppercase tracking-tighter">Stack</span>
                <span className="text-sm font-bold text-white">{tech}</span>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSpotlight;
