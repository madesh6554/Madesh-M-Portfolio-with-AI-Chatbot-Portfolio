import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutGrid, X, ExternalLink, Github, Globe, Info } from 'lucide-react';
import { completedProjects, ongoingProjects, upcomingProjects } from '../data/projectsData';

const ProjectLauncher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // Combine all projects for the grid
  const allProjects = [...completedProjects, ...ongoingProjects];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleProjectClick = (project) => {
    if (project.demo && project.demo !== '') {
      window.open(project.demo, '_blank');
    } else if (project.github && project.github !== '') {
      window.open(project.github, '_blank');
    } else {
      // Scroll to projects section
      const element = document.getElementById('projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      {/* Trigger Button (Waffle Icon) */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-dark-700 text-gray-700 dark:text-gray-300 transition-colors duration-200 focus:outline-none"
        aria-label="Project Launcher"
      >
        <LayoutGrid size={22} />
      </motion.button>

      {/* Popover Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10, x: -100 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: -120 }}
            exit={{ opacity: 0, scale: 0.9, y: 10, x: -100 }}
            className="absolute top-12 right-0 w-[320px] sm:w-[360px] bg-white dark:bg-dark-800 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 z-[100] overflow-hidden"
          >
            {/* Header */}
            <div className="px-6 pt-6 pb-2 flex justify-between items-center">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                My Projects
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-full text-gray-500"
              >
                <X size={18} />
              </button>
            </div>

            {/* Project Grid */}
            <div className="p-4 grid grid-cols-3 gap-2 max-h-[480px] overflow-y-auto custom-scrollbar">
              {allProjects.map((project) => (
                <motion.button
                  key={project.id}
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(0,0,0,0.05)' }}
                  onClick={() => handleProjectClick(project)}
                  className="flex flex-col items-center p-3 rounded-2xl transition-all duration-200 group"
                >
                  <div className="w-14 h-14 rounded-2xl mb-2 overflow-hidden shadow-md border-2 border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-dark-900 flex items-center justify-center relative">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <Globe className="text-primary-500" size={24} />
                    )}
                    {/* Tiny Status Indicator */}
                    {project.demo && (
                        <div className="absolute bottom-1 right-1 w-3 h-3 bg-green-500 border-2 border-white dark:border-dark-800 rounded-full shadow-sm"></div>
                    )}
                  </div>
                  <span className="text-[11px] font-medium text-gray-700 dark:text-gray-300 text-center line-clamp-2 leading-tight">
                    {project.title.split(':')[0]} {/* Shorten long titles */}
                  </span>
                </motion.button>
              ))}

              {/* Add Upcoming Placeholder */}
              {upcomingProjects.length > 0 && (
                <div className="col-span-3 mt-4 px-2">
                    <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-2 pl-2">Upcoming Ideas</p>
                    <div className="grid grid-cols-3 gap-2">
                        {upcomingProjects.slice(0, 3).map((idea) => (
                            <button
                                key={idea.id}
                                onClick={() => handleProjectClick(idea)}
                                className="flex flex-col items-center p-3 rounded-2xl opacity-60 hover:opacity-100 transition-opacity"
                            >
                                <div className="w-14 h-14 rounded-2xl mb-2 border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center">
                                    <Info size={20} className="text-gray-400" />
                                </div>
                                <span className="text-[10px] text-gray-500 text-center line-clamp-1">
                                    {idea.title}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
              )}
            </div>

            {/* Footer / All Projects Link */}
            <div className="p-4 border-t border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-dark-900/50 flex justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById('projects');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                  setIsOpen(false);
                }}
                className="text-xs font-semibold text-primary-600 dark:text-primary-400 hover:underline flex items-center gap-1"
              >
                Browse all projects
                <ExternalLink size={12} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectLauncher;
