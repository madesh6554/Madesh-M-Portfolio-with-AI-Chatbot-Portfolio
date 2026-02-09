import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Code, Briefcase, Mail, GraduationCap } from 'lucide-react';

const SECTIONS = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'skills', icon: Code, label: 'Skills' },
  { id: 'experience', icon: GraduationCap, label: 'Experience' },
  { id: 'projects', icon: Briefcase, label: 'Projects' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

const ScrollNavigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      // Update active section
      const scrollPosition = scrollTop + 200;

      for (const section of SECTIONS) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      className="fixed right-4 top-1/2 z-40 hidden lg:flex flex-col items-center -translate-y-1/2 max-h-[min(90vh,420px)] py-4"
    >
      <div className="flex flex-col items-center gap-2 overflow-y-auto overflow-x-visible scrollbar-thin min-h-0 flex-1">
        {/* Progress bar */}
        <div className="w-1 h-20 flex-shrink-0 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
          <motion.div
            className="w-full bg-primary-600 dark:bg-primary-400 rounded-full"
            style={{ height: `${scrollProgress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Navigation dots */}
        <div className="flex flex-col gap-2 flex-shrink-0">
          {SECTIONS.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;

            return (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`relative group p-2 rounded-full transition-all duration-200 flex-shrink-0 ${
                  isActive
                    ? 'bg-primary-600 dark:bg-primary-400 text-white'
                    : 'bg-gray-200 dark:bg-dark-700 text-gray-600 dark:text-gray-400 hover:bg-primary-500 dark:hover:bg-primary-500 hover:text-white'
                }`}
                title={section.label}
              >
                <Icon size={18} />
                
                {/* Tooltip */}
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-2 py-1 rounded text-xs whitespace-nowrap pointer-events-none z-50"
                >
                  {section.label}
                </motion.div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ScrollNavigation;
