import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, CheckCircle2, Clock, Lightbulb, X, Calendar, Code, Globe, FileText, Download, BarChart3, ChevronLeft, ChevronRight } from 'lucide-react';
import aiModelHubImage from '../assests/ai-artificial-intelligence-machine-learning-technology-concept_143463-8643.avif';
import satelliteImage from '../assests/artificial-satellite-orbiting-earth-concept-future-technology-satellites-human-galactic-conquest-space-debris-nasa-generative-ai_853928-910.jpg';
import recommendationSystemImage from '../assests/AI-in-Recommendation-Engine-(In).png';
import imageCaptionImage from '../assests/OIP.webp';
import entertainmentIndustryImage from '../assests/ai-in-entertainment.webp-scaled.webp';
import rainfallAnalysisImage from '../assests/rainy-day-with-umbrellas-forest-background_924629-223192.avif';
// Car Price Prediction charts
import carChart1 from '../assests/Images/car price prediction/output.png';
import carChart2 from '../assests/Images/car price prediction/output1.png';
import carChart3 from '../assests/Images/car price prediction/output2.png';
import carChart4 from '../assests/Images/car price prediction/output3.png';
// Unemployment Analysis charts
import unempChart1 from '../assests/Images/unemployeement analysis/output.png';
import unempChart2 from '../assests/Images/unemployeement analysis/output1.png';
import unempChart3 from '../assests/Images/unemployeement analysis/newplot.png';
import unempChart4 from '../assests/Images/unemployeement analysis/newplot1.png';
// Conversational AI Tutor image
import aiTutorImage from '../assests/chatgpt-chat-with-ai-artificial-intelligence-woman-chatting-with-smart-ai-artificial-intell_926199-2106756.avif';
// Personalized AI Chat image
import aiChatImage from '../assests/_757f1abd-9878-4bf9-a3a4-dbea038785a0.jpg';

// ProjectCard Component
const ProjectCard = ({ project, type, onCardClick }) => {
  const isUpcoming = type === 'upcoming';
  const isOngoing = type === 'ongoing';
  const isCompleted = type === 'completed';

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onClick={() => onCardClick && onCardClick(project)}
      className="card group cursor-pointer relative"
    >
      {/* Status Badge */}
      {isOngoing && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 bg-yellow-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
            <Clock size={12} />
            {project.progress || 'In Progress'}
          </span>
        </div>
      )}
      {isUpcoming && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 bg-purple-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
            <Lightbulb size={12} />
            {project.status || 'Idea'}
          </span>
        </div>
      )}
      {isCompleted && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full flex items-center gap-1">
            <CheckCircle2 size={12} />
            Completed
          </span>
        </div>
      )}

      {/* Project Image (if available) */}
      {project.image && (
        <div className="relative overflow-hidden rounded-lg mb-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          {!isUpcoming && (
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                  >
                    <Github size={16} />
                  </motion.a>
                )}
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                  >
                    <ExternalLink size={16} />
                  </motion.a>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Project Content */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className={`px-2 py-1 text-xs rounded-full ${
                  isUpcoming
                    ? 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200'
                    : isOngoing
                    ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200'
                    : 'bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200'
                }`}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Links (for completed and ongoing projects) */}
        {!isUpcoming && (project.github || project.demo) && (
          <div className="flex space-x-4 pt-2 border-t border-gray-200 dark:border-gray-700">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
              >
                <Github size={14} className="mr-1" />
                Code
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
              >
                <Eye size={14} className="mr-1" />
                Demo
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

// Project Detail Modal Component
// Simple Image Carousel for visualization images
const ImageCarousel = ({ items }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (!items || items.length < 2) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % items.length), 4000);
    return () => clearInterval(t);
  }, [items]);
  if (!items || items.length === 0) return null;
  const goPrev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const goNext = () => setIndex((i) => (i + 1) % items.length);
  const active = items[index];
  return (
    <div className="relative rounded-2xl overflow-hidden bg-white dark:bg-dark-800 border border-purple-100 dark:border-purple-800 shadow-sm">
      <div className="relative h-64 md:h-80">
        <motion.img
          key={index}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          src={active.image}
          alt={active.title || 'Visualization'}
          className="w-full h-full object-contain bg-gray-50 dark:bg-dark-900"
        />
        {/* Controls */}
        {items.length > 1 && (
          <>
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-dark-700/90 shadow hover:scale-105 transition"
              onClick={goPrev}
              aria-label="Previous"
            >
              <ChevronLeft size={18} className="text-gray-800 dark:text-gray-200" />
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-dark-700/90 shadow hover:scale-105 transition"
              onClick={goNext}
              aria-label="Next"
            >
              <ChevronRight size={18} className="text-gray-800 dark:text-gray-200" />
            </button>
          </>
        )}
        {/* Dots */}
        {items.length > 1 && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2.5 rounded-full transition-all ${i === index ? 'w-6 bg-purple-600' : 'w-2.5 bg-purple-300 dark:bg-purple-700'}`}
              />
            ))}
          </div>
        )}
      </div>
      {(active.title || active.description) && (
        <div className="p-4 border-t border-purple-100 dark:border-purple-800">
          {active.title && <h4 className="text-base font-semibold text-gray-900 dark:text-white">{active.title}</h4>}
          {active.description && <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{active.description}</p>}
        </div>
      )}
    </div>
  );
};

const ProjectDetailModal = ({ project, isOpen, onClose, type }) => {
  if (!project || !isOpen) return null;

  const isUpcoming = type === 'upcoming';
  const isOngoing = type === 'ongoing';
  const isCompleted = type === 'completed';
  const hasProjectLinks = !isUpcoming && Boolean(
    project.github ||
    project.demo ||
    project.pdf ||
    (project.resources && project.resources.length > 0)
  );
  
  // Lightweight inline bar chart for numeric summaries
  const MiniBarChart = ({ series }) => {
    if (!series || series.length === 0) return null;
    const maxVal = Math.max(...series.map(s => s.value));
    return (
      <div className="space-y-3">
        {series.map((s, idx) => {
          const widthPct = maxVal > 0 ? Math.round((s.value / maxVal) * 100) : 0;
          return (
            <div key={idx}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{s.label}</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">{s.display ?? s.value}</span>
              </div>
              <div className="w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                  style={{ width: `${widthPct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
      <>
          {/* Backdrop with blur effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-dark-800 rounded-3xl shadow-2xl max-w-5xl w-full max-h-[95vh] overflow-hidden flex flex-col border border-gray-200 dark:border-gray-700"
            >
              {/* Close Button - Enhanced */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 z-20 p-2.5 bg-white/90 dark:bg-dark-700/90 backdrop-blur-sm rounded-full hover:bg-white dark:hover:bg-dark-600 transition-all shadow-lg hover:scale-110"
                aria-label="Close modal"
              >
                <X size={22} className="text-gray-700 dark:text-gray-300" />
              </button>

              {/* Scrollable Content - Everything scrolls together */}
              <div className="overflow-y-auto flex-1 scroll-smooth">
                {/* Project Image Header */}
                {project.image && (
                  <div className="relative w-full bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 overflow-hidden">
                    {/* Decorative background pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                      }}></div>
                    </div>
                    
                    {/* Image Container with frame effect */}
                    <div className="relative w-full py-8 md:py-12 px-4 md:px-8 pt-16 md:pt-20">
                      <div className="max-w-4xl mx-auto">
                        <div className="relative bg-white dark:bg-dark-800 rounded-2xl shadow-2xl p-4 md:p-6 border-2 border-gray-200 dark:border-gray-700">
                          <div className="relative rounded-xl overflow-hidden bg-gray-50 dark:bg-dark-900">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-auto object-contain block mx-auto"
                              style={{ maxHeight: '60vh' }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Title Section - Below Image */}
                    <div className="relative px-6 md:px-8 pb-6 md:pb-8 pt-4 bg-gradient-to-b from-transparent to-white dark:to-dark-800">
                      <div className="max-w-4xl mx-auto">
                        <div className="flex items-center gap-3 mb-4">
                          {project.status && (
                            <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold shadow-md ${
                              isCompleted
                                ? 'bg-green-500 text-white'
                                : isOngoing
                                ? 'bg-yellow-500 text-white'
                                : 'bg-purple-500 text-white'
                            }`}>
                              {isCompleted && <CheckCircle2 size={14} />}
                              {isOngoing && <Clock size={14} />}
                              {isUpcoming && <Lightbulb size={14} />}
                              {isCompleted ? 'Completed' : isOngoing ? project.progress || 'In Progress' : project.status || 'Idea'}
                            </span>
                          )}
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                          {project.title}
                        </h2>
                        {project.tags && project.tags.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {project.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-indigo-900 dark:to-blue-900 text-indigo-800 dark:text-indigo-200 text-sm font-semibold shadow-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Content Section */}
                <div className="p-6 md:p-8 lg:p-10">
                  {/* Title (if no image) */}
                  {!project.image && (
                    <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex items-center gap-3 mb-4">
                        {project.status && (
                          <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold ${
                            isCompleted
                              ? 'bg-green-500 text-white'
                              : isOngoing
                              ? 'bg-yellow-500 text-white'
                              : 'bg-purple-500 text-white'
                          }`}>
                            {isCompleted ? 'Completed' : isOngoing ? project.progress || 'In Progress' : project.status || 'Idea'}
                          </span>
                        )}
                      </div>
                      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h2>
                      {project.tags && project.tags.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-100 to-blue-100 dark:from-indigo-900 dark:to-blue-900 text-indigo-800 dark:text-indigo-200 text-sm font-semibold shadow-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Project Details - Enhanced Cards */}
                  <div className="space-y-8">
                    {/* Overview Section */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="bg-gradient-to-br from-gray-50 to-white dark:from-dark-900 dark:to-dark-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                          <Eye size={24} className="text-primary-600 dark:text-primary-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          Overview
                        </h3>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                        {project.description}
                      </p>
                    </motion.div>

                    {/* Extended Description */}
                    {project.extendedDescription && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white dark:bg-dark-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
                      >
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                          {project.extendedDescription}
                        </p>
                      </motion.div>
                    )}

                    {/* Key Metrics */}
                    {project.metrics && project.metrics.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.22 }}
                        className="bg-gradient-to-r from-teal-50 via-cyan-50 to-blue-50 dark:from-teal-900/20 dark:via-cyan-900/20 dark:to-blue-900/20 rounded-2xl p-6 border border-teal-200 dark:border-teal-800"
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-2 bg-teal-500 rounded-lg shadow-md">
                            <CheckCircle2 size={22} className="text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Key Metrics
                          </h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                          {project.metrics.map((metric, index) => (
                            <div
                              key={index}
                              className="bg-white/80 dark:bg-dark-800/80 rounded-xl p-4 border border-teal-100 dark:border-teal-800 shadow-sm"
                            >
                              <p className="text-sm uppercase tracking-wide text-teal-600 dark:text-teal-300 font-semibold">
                                {metric.label}
                              </p>
                              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                                {metric.value}
                              </p>
                              {metric.description && (
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                  {metric.description}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Tableau Dashboard Embed */}
                    {project.demo && project.demo.includes('tableau.com') && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                        className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-dark-800 rounded-2xl p-6 border border-blue-200 dark:border-blue-800"
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-2 bg-blue-600 rounded-lg">
                            <Globe size={24} className="text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Interactive Dashboard
                          </h3>
                        </div>
                        <div className="relative w-full rounded-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-900" style={{ minHeight: '800px' }}>
                          <iframe
                            src={(() => {
                              // Extract the base URL from the demo link
                              let embedUrl = project.demo;
                              
                              // Remove query parameters if they exist
                              if (embedUrl.includes('?')) {
                                embedUrl = embedUrl.split('?')[0];
                              }
                              
                              // For Tableau Public app/profile format, try converting to views format
                              if (embedUrl.includes('/app/profile/')) {
                                // Extract workbook and sheet name from /app/profile/username/viz/WorkbookName/SheetName
                                const match = embedUrl.match(/\/viz\/([^\/]+)\/([^\/]+)/);
                                if (match) {
                                  const workbookName = match[1];
                                  const sheetName = match[2];
                                  // Try using the views format which sometimes works better
                                  return `https://public.tableau.com/views/${workbookName}/${sheetName}?:embed=y&:showVizHome=no&:device=desktop&:toolbar=yes`;
                                }
                                // Fallback to app/profile format with embed params
                                return embedUrl + '?:embed=y&:showVizHome=no&:device=desktop&:toolbar=yes&:animate_transition=yes&:display_static_image=no&:display_spinner=no&:display_overlay=yes&:display_count=yes&:language=en-US';
                              } else {
                                // For standard Tableau Public views format
                                const separator = embedUrl.includes('?') ? '&' : '?';
                                return embedUrl + separator + ':embed=y&:showVizHome=no&:device=desktop';
                              }
                            })()}
                            width="100%"
                            height="800"
                            frameBorder="0"
                            allowFullScreen
                            className="w-full"
                            style={{ minHeight: '800px', border: 'none' }}
                            title={`${project.title} Dashboard`}
                            allow="fullscreen"
                            referrerPolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </div>
                        <div className="mt-4 text-center">
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors text-sm font-medium"
                          >
                            <ExternalLink size={16} />
                            Open in Tableau Public (Full Screen)
                          </a>
                        </div>
                      </motion.div>
                    )}

                    {/* Visualization Highlights removed per request */}

                    {/* Key Features - Enhanced */}
                    {project.features && project.features.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-dark-800 rounded-2xl p-6 border border-primary-200 dark:border-primary-800"
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-2 bg-primary-600 rounded-lg">
                            <CheckCircle2 size={24} className="text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Key Features
                          </h3>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4">
                          {project.features.map((feature, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + index * 0.05 }}
                              className="flex items-start gap-3 p-4 bg-white dark:bg-dark-700 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow"
                            >
                              <div className="mt-1 p-1.5 bg-primary-100 dark:bg-primary-900 rounded-full">
                                <CheckCircle2 size={16} className="text-primary-600 dark:text-primary-400" />
                              </div>
                              <span className="text-gray-700 dark:text-gray-300 flex-1">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Code Snippet */}
                    {project.codeSnippet && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45 }}
                        className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 border border-slate-700 shadow-xl"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-slate-700 rounded-lg">
                              <Code size={22} className="text-white" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold text-white">
                                Code Highlight
                              </h3>
                              <p className="text-sm text-slate-300">
                                Core logic excerpt from the implementation
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="relative bg-slate-900/90 rounded-xl border border-slate-700 overflow-hidden">
                          <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-700 bg-slate-900/80">
                            <span className="w-3 h-3 rounded-full bg-red-500"></span>
                            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                            <span className="w-3 h-3 rounded-full bg-green-500"></span>
                            <span className="ml-4 text-xs uppercase tracking-widest text-slate-400">
                              {project.codeLanguage || 'Python'}
                            </span>
                          </div>
                          <pre className="p-5 text-sm leading-relaxed text-slate-100 overflow-auto max-h-80">
                            <code>{project.codeSnippet}</code>
                          </pre>
                        </div>
                      </motion.div>
                    )}

                    {/* Technologies - Enhanced */}
                    {project.technologies && project.technologies.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="bg-white dark:bg-dark-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                            <Code size={24} className="text-blue-600 dark:text-blue-400" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Technologies Used
                          </h3>
                        </div>
                        <div className="flex flex-wrap gap-3">
                          {project.technologies.map((tech, index) => (
                            <motion.span
                              key={index}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.6 + index * 0.03 }}
                              className={`px-4 py-2 rounded-lg text-sm font-semibold shadow-sm hover:shadow-md transition-all hover:scale-105 ${
                                isUpcoming
                                  ? 'bg-gradient-to-r from-purple-100 to-purple-50 dark:from-purple-900 dark:to-purple-800 text-purple-800 dark:text-purple-200 border border-purple-200 dark:border-purple-700'
                                  : isOngoing
                                  ? 'bg-gradient-to-r from-yellow-100 to-yellow-50 dark:from-yellow-900 dark:to-yellow-800 text-yellow-800 dark:text-yellow-200 border border-yellow-200 dark:border-yellow-700'
                                  : 'bg-gradient-to-r from-primary-100 to-primary-50 dark:from-primary-900 dark:to-primary-800 text-primary-800 dark:text-primary-200 border border-primary-200 dark:border-primary-700'
                              }`}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Project Links - Enhanced */}
                    {hasProjectLinks && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-700"
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-2 bg-white/20 rounded-lg">
                            <Globe size={24} className="text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-white">
                            Project Links
                          </h3>
                        </div>
                        <div className="flex flex-wrap gap-4">
                          {project.github && (
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center gap-3 px-6 py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl hover:bg-gray-100 dark:hover:bg-gray-600 transition-all shadow-lg font-semibold"
                            >
                              <Github size={20} />
                              View Code
                            </motion.a>
                          )}
                          {project.demo && (
                            <motion.a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all shadow-lg font-semibold"
                            >
                              <ExternalLink size={20} />
                              Live Demo
                            </motion.a>
                          )}
                          {project.pdf && (
                            <motion.a
                              href={project.pdf}
                              target="_blank"
                              rel="noopener noreferrer"
                              download
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-700 hover:to-red-800 transition-all shadow-lg font-semibold"
                            >
                              <FileText size={20} />
                              View PDF
                            </motion.a>
                          )}
                          {project.resources && project.resources.map((resource, index) => (
                            <motion.a
                              key={index}
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl hover:from-emerald-600 hover:to-emerald-700 transition-all shadow-lg font-semibold"
                            >
                              <Download size={20} />
                              {resource.label}
                            </motion.a>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Additional Info - Enhanced with Rich Formatting */}
                    {project.additionalInfo && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-6 md:p-8 border-2 border-blue-200 dark:border-blue-800 shadow-lg"
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-3 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl shadow-md">
                            <FileText size={24} className="text-white" />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                            Additional Information
                          </h3>
                        </div>
                        <div className="space-y-4">
                          {project.additionalInfo.split('\n\n').map((section, sectionIndex) => {
                            // Check if section has a title (contains colon or bullet points)
                            const hasTitle = section.includes(':') || section.includes('•');
                            
                            if (hasTitle) {
                              const lines = section.split('\n');
                              const title = lines[0];
                              const content = lines.slice(1).join('\n');
                              
                              return (
                                <motion.div
                                  key={sectionIndex}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.9 + sectionIndex * 0.1 }}
                                  className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-blue-100 dark:border-blue-900/50 shadow-md hover:shadow-lg transition-all"
                                >
                                  <h4 className="text-lg md:text-xl font-bold text-blue-700 dark:text-blue-300 mb-3 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    {title.replace(':', '')}
                                  </h4>
                                  <div className="text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
                                    {content.split('\n').map((line, lineIndex) => {
                                      if (line.trim().startsWith('•')) {
                                        return (
                                          <div key={lineIndex} className="flex items-start gap-3 pl-2">
                                            <div className="mt-2 w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0"></div>
                                            <span className="flex-1">{line.replace('•', '').trim()}</span>
                                          </div>
                                        );
                                      }
                                      return line.trim() ? (
                                        <p key={lineIndex} className="text-gray-600 dark:text-gray-400">
                                          {line}
                                        </p>
                                      ) : null;
                                    })}
                                  </div>
                                </motion.div>
                              );
                            }
                            
                            return (
                              <motion.div
                                key={sectionIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.9 + sectionIndex * 0.1 }}
                                className="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-xl p-5 md:p-6 border border-blue-100 dark:border-blue-900/50 shadow-md"
                              >
                                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                  {section}
                                </p>
                              </motion.div>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Completed Projects
  const completedProjects = [
    {
      id: 1,
      title: 'AI ModelHub',
      description: 'An intern-led prototype of a unified AI model-as-a-service platform that bridges the gap between cutting-edge AI technologies and real-world applications.',
      extendedDescription: 'AI ModelHub is an intuitive and powerful platform designed to bridge the gap between cutting-edge artificial intelligence technologies and their real-world applications. The platform empowers a diverse user base—including researchers, developers, students, and businesses—to explore, test, and integrate state-of-the-art AI models without the need for complex infrastructure or advanced technical expertise.\n\nThe primary focus of AI ModelHub is to simplify AI adoption by providing an accessible, scalable, and innovation-driven environment that supports a wide range of AI use cases.',
      image: aiModelHubImage,
      technologies: ['Python', 'Flask', 'Angular', 'Ionic', 'TensorFlow.js', 'MediaPipe', 'Three.js', 'Node.js', 'Express.js', 'Firebase', 'Google Gemini AI', 'OpenCV', 'yt-dlp', 'REST API'],
      github: 'https://github.com/madesh6554/AI-ModelHub',
      demo: 'https://ai-modelhub.onrender.com/',
      pdf: '/pdfs/AI-ModelHub-Project.pdf', // Path to PDF file in public folder
      featured: true,
      features: [
        'Model Exploration: Discover a curated list of cutting-edge AI models across various domains',
        'One-click Testing: Instantly test models with sample or user-provided data',
        'API Integration: Easily integrate models into applications using pre-configured APIs',
        'Community & Collaboration: Interact with other users, share projects, and get support',
        'Multiple Model Categories: Support for Audio AI, NLP, Multimodal AI, Computer Vision, and Generative AI',
        'Gemini Analyzer: Media content analysis for images, videos, and YouTube content using Google Gemini 1.5 Flash',
        'Sign Translate: Real-time sign language translation system with 3D avatar visualization',
        'Scalable Architecture: Built to handle growing user demands and evolving model complexity',
        'User-Friendly Interface: No complex setup required, models are ready to explore instantly'
      ],
      additionalInfo: 'Project Goals:\n• Democratize AI: Provide open and easy access to powerful AI models for everyone\n• Simplify AI Workflows: Streamline the discovery, experimentation, and deployment of AI models\n• Lower Technical Barriers: Minimize infrastructure and skillset requirements to use AI effectively\n• Empower Users: Enable developers, researchers, and businesses to build intelligent solutions using ready-to-use models\n\nFuture Scope:\n• Broader Model Coverage: Incorporating more specialized and niche models\n• Model Customization: Tools for fine-tuning models for specific use cases\n• Collaboration Tools: Features for team-based model development and sharing\n• Research Integration: Frequent updates with the latest AI innovations\n• Community Expansion: Learning resources, forums, and innovation challenges'
    },
    {
      id: 2,
      title: 'AI-Powered Digital Twin for Satellite Health Monitoring',
      description: 'A prototype digital twin system that simulates real-time satellite conditions and predicts potential issues using AI models trained on satellite telemetry data.',
      extendedDescription: 'This project involves developing a prototype of an AI-powered digital twin for satellite health monitoring. The digital twin simulates real-time satellite conditions and predicts potential issues using AI models trained on simulated satellite telemetry data. The system includes real-time monitoring, predictive analytics for anomaly detection, an interactive Streamlit dashboard, automated email alert system, and comprehensive visualization of satellite metrics.\n\nThe system monitors 40+ satellite telemetry parameters including power systems (battery voltage, solar panel efficiency), thermal systems (internal temperature, radiator efficiency), navigation and control (gyroscope, orientation), communications (signal strength, data rate), and payload systems. The AI model uses Isolation Forest algorithm for anomaly detection and can identify power anomalies, thermal anomalies, AOCS faults, and payload failures in real-time.',
      image: satelliteImage,
      technologies: ['Python', 'Streamlit', 'MySQL', 'Isolation Forest', 'Pandas', 'NumPy', 'Scikit-learn', 'Plotly', 'SMTP', 'Joblib', 'Machine Learning', 'Digital Twin', 'Anomaly Detection', 'Real-time Monitoring'],
      github: 'https://github.com/madesh6554/Satellite-Health-Monitoring-DT',
      demo: 'https://satellite-health-monitoring-dt-bom4jaf2gnukue8yizjeak.streamlit.app/',
      pdf: '/pdfs/AI-Powered Digital Twin Prototype for Satellite Health Monitoring.pdf',
      featured: true,
      features: [
        'Real-time Satellite Health Monitoring: Continuous monitoring of 40+ telemetry parameters',
        'Predictive Analytics: AI-powered anomaly detection using Isolation Forest algorithm',
        'Interactive Dashboard: Streamlit-based interactive dashboard with real-time updates',
        'Automated Alert System: Email notifications for critical anomalies and failures',
        'Comprehensive Visualization: Real-time charts and metrics visualization using Plotly',
        'MySQL Database Integration: Real-time data storage and retrieval from MySQL database',
        'Multi-Parameter Monitoring: Power systems, thermal systems, navigation, communications, and payload',
        'Anomaly Detection: Identifies power anomalies, thermal anomalies, AOCS faults, and payload failures',
        'Digital Twin Simulation: Simulates satellite conditions and predicts potential issues',
        'Data Generation: Synthetic data generation for training and testing'
      ],
      additionalInfo: 'Project Phases:\n• Phase 1: Data Collection & Digital Twin Setup - Identified 40+ satellite parameters, generated telemetry datasets, set up MySQL database\n• Phase 2: AI Model Development - Trained Isolation Forest model for anomaly detection using historical telemetry data\n• Phase 3: Real-Time Dashboard & Alerts - Created Streamlit dashboard, implemented email alert system, connected to MySQL\n• Phase 4: Deployment & Documentation - Deployed prototype, wrote documentation, conducted testing\n\nKey Parameters Monitored:\n• Power Systems: Battery voltage/current, solar panel efficiency, power consumption\n• Thermal Systems: Internal temperature, battery temp, radiator efficiency\n• Navigation: Position, velocity, gyroscope, orientation\n• Communications: Signal strength, data rate, packet loss, latency\n• Payload: Payload power, sensor data rate, camera temperature, data quality\n\nTechnologies Used:\n• Machine Learning: Isolation Forest for anomaly detection\n• Database: MySQL for data storage and retrieval\n• Web Framework: Streamlit for interactive dashboard\n• Visualization: Plotly for real-time charts and graphs\n• Email: SMTP for automated alert notifications'
    },
    {
      id: 3,
      title: 'Smart Electronics Recommendation System',
      description: 'An intelligent AI-driven recommendation system that provides personalized product suggestions for electronics using Natural Language Processing (NLP) techniques, specifically TF-IDF vectorization and cosine similarity.',
      extendedDescription: 'The Smart Electronics Recommendation System is an intelligent, AI-driven solution designed to enhance the online shopping experience by providing personalized product recommendations. This system leverages Natural Language Processing (NLP) techniques, specifically TF-IDF vectorization and cosine similarity, to analyze product titles, categories, brands, and features.\n\nThe recommendation engine identifies the most relevant products based on user queries, taking into account factors like price range, brand, category, and user ratings. Additionally, the system provides accessory recommendations, ensuring that users receive complementary product suggestions tailored to their needs. The system integrates fuzzy string matching (via the FuzzyWuzzy library) to refine product searches and improve the accuracy of recommendations. This project demonstrates the power of machine learning and NLP in e-commerce, offering a scalable and adaptable solution for businesses looking to optimize customer engagement and improve product discovery.',
      image: recommendationSystemImage,
      technologies: ['Python', 'Streamlit', 'TF-IDF', 'Cosine Similarity', 'FuzzyWuzzy', 'Pandas', 'NumPy', 'Scikit-learn', 'NLP', 'Machine Learning', 'Content-Based Filtering', 'Rule-Based Filtering', 'Hybrid Model', 'Web Scraping'],
      github: 'https://github.com/madesh6554/Smart-Electronics-Recommendation-System',
      demo: 'https://smart-electronics-recommendation-system-cg6eyh2obhqeyju7vca6gn.streamlit.app/',
      pdf: '/pdfs/smart electronics RS.pdf',
      featured: true,
      features: [
        'Content-Based Filtering: Uses TF-IDF vectorization and cosine similarity to recommend products based on textual features',
        'Rule-Based Filtering: Implements predefined business rules for price range, rating, brand, and category filters',
        'Hybrid Model: Combines content-based and rule-based filtering for enhanced recommendation accuracy',
        'Fuzzy String Matching: Handles misspellings and variations in product names using FuzzyWuzzy library',
        'Accessory Recommendations: Provides complementary product suggestions based on category and brand',
        'Interactive Dashboard: Streamlit-based user-friendly interface with real-time product recommendations',
        'Multi-Filter Support: Price range, rating, brand, and category filters for personalized results',
        'Product Feature Extraction: Analyzes product titles, categories, brands, and features for similarity matching',
        'Data Preprocessing: Handles missing values, cleans data, and standardizes textual information',
        'Web Scraping Integration: Collects product data from e-commerce platforms for recommendation system'
      ],
      additionalInfo: 'Project Overview:\n• Academic Project: Master of Science in Data Science project submitted to Periyar University, Salem\n• Course Code: 23UPCSC4P02\n• Registration Number: U23PG507DTS018\n\nRecommendation Techniques:\n• Content-Based Filtering: Uses product attributes (title, category, brand, features) with TF-IDF and cosine similarity\n• Rule-Based Filtering: Applies business rules for price, rating, brand, and category constraints\n• Hybrid Approach: Combines both methods for improved accuracy and personalization\n\nKey Features:\n• Handles misspellings and product name variations\n• Provides similar products and accessory recommendations\n• Flexible filtering options (price, rating, category, brand)\n• Focuses on Apple and Samsung electronics products\n• Real-time recommendation generation\n\nTechnologies & Libraries:\n• NLP: TF-IDF vectorization for text feature extraction\n• Similarity: Cosine similarity for product matching\n• Fuzzy Matching: FuzzyWuzzy for handling search variations\n• Data Processing: Pandas, NumPy for data manipulation\n• ML Framework: Scikit-learn for machine learning algorithms\n• Web Framework: Streamlit for interactive dashboard\n• Web Scraping: BeautifulSoup, Requests for data collection'
    },
    {
      id: 4,
      title: 'Image Caption Generator with Deep Learning',
      description: 'An end-to-end deep learning solution for automatic image caption generation that integrates computer vision and natural language processing using VGG16 for feature extraction and an encoder-decoder architecture with LSTM for caption generation.',
      extendedDescription: 'This project implements an end-to-end solution for automatic image caption generation using deep learning techniques, integrating computer vision and natural language processing. The system leverages VGG16-based image feature extraction, text preprocessing, and an encoder-decoder architecture for caption generation.\n\nImage features are extracted using VGG16, and preprocessed captions are paired with these features. An encoder extracts image features, while a decoder generates captions by merging these features with input text sequences. The model is trained using a data generator to prevent session crashes, with categorical cross-entropy loss and the Adam optimizer. Evaluation employs BLEU scores on a test dataset.\n\nAdditionally, a web application is created using Streamlit to provide a user-friendly interface for generating captions. This project demonstrates the integration of deep learning techniques for automated caption generation, with applications in image indexing, retrieval, and accessibility enhancement.',
      image: imageCaptionImage,
      technologies: ['Python', 'TensorFlow', 'Keras', 'VGG16', 'LSTM', 'NLP', 'Computer Vision', 'Streamlit', 'OpenCV', 'NLTK', 'PIL', 'NumPy', 'Pandas', 'Deep Learning', 'Encoder-Decoder Architecture'],
      github: 'https://github.com/madesh6554/Image-Caption-Generater',
      demo: 'https://image-caption-generater-3gxwy5jxjyhd38ihur2emv.streamlit.app/',
      pdf: '/pdfs/Mini project .pdf',
      featured: true,
      features: [
        'VGG16 Feature Extraction: Uses pre-trained VGG16 CNN to extract high-level features from images',
        'Encoder-Decoder Architecture: Combines image features with LSTM-based decoder for caption generation',
        'Flickr 8k Dataset: Trained on 8,000 images with 5 captions each for robust model training',
        'Text Preprocessing: Tokenization, cleaning, and sequence padding for caption processing',
        'Data Generator: Efficient batch processing to handle large datasets without session crashes',
        'BLEU Score Evaluation: Uses BLEU-1, BLEU-2, and METEOR scores for model performance assessment',
        'Streamlit Web Application: User-friendly interface for uploading images and generating captions',
        'Real-time Caption Generation: Generates descriptive captions for new images instantly',
        'Image Preprocessing: Resizes and preprocesses images to match VGG16 input requirements',
        'Sequence Generation: Generates coherent captions using LSTM networks with start and end sequence tags'
      ],
      additionalInfo: 'Project Overview:\n• Academic Project: Professional Competency Skill - Mini Project for Master of Science in Data Science\n• Course Code: 23UPCSC4P01\n• Registration Number: U23PG507DTS018\n• University: Periyar University, Salem\n\nModel Architecture:\n• Encoder: VGG16 CNN extracts 4096-dimensional feature vectors from images\n• Decoder: LSTM network with embedding layer generates captions from image features\n• Training: 150 epochs with batch size of 64, using categorical cross-entropy loss and Adam optimizer\n\nDataset:\n• Flickr 8k Dataset: 8,000 images with 5 captions each\n• Training/Test Split: 90% training, 10% testing\n• Vocabulary Size: Based on unique words in captions\n• Max Caption Length: Determined from dataset analysis\n\nEvaluation Metrics:\n• BLEU-1 Score: 0.423060\n• BLEU-2 Score: 0.036435\n• METEOR Score: 0.0058479532163742695\n\nTechnologies & Libraries:\n• Deep Learning: TensorFlow/Keras for model implementation\n• Computer Vision: VGG16 for feature extraction, OpenCV for image processing\n• NLP: Tokenizer for text processing, NLTK for evaluation\n• Web Framework: Streamlit for interactive web application\n• Data Processing: NumPy, Pandas for data manipulation\n• Image Processing: PIL for image handling\n\nApplications:\n• Image indexing and retrieval systems\n• Accessibility enhancement for visually impaired users\n• Automated content generation for social media\n• Image search and organization systems'
    },
    {
      id: 5,
      title: 'Entertainment Industry Analysis Report',
      description: 'A comprehensive data visualization project analyzing movie ratings (by audience and critics), budgets, and the number of movies released under various genres from 2007 to 2011. The analysis uncovers trends in budget allocation, movie releases, and rating correlations to support strategic decision-making for movie review companies.',
      extendedDescription: 'This project provides an in-depth analysis of the entertainment industry, focusing on movie ratings, budgets, and releases across different genres from 2007 to 2011. The analysis was developed using Tableau software during an internship at Cognitive i IT Solutions (P) Ltd.\n\nThe project examines budget allocation trends across different genres, revealing that Action movies consistently had high budgets, peaking in 2010 at $2,736 million. Comedy and Drama genres showed moderate and stable budget allocations, while Horror had the lowest budget across all years.\n\nA key finding is the positive correlation between audience and critic ratings, suggesting that movies well-received by critics tend to be liked by audiences as well, though exceptions exist where divergence between the two occurs.\n\nThe analysis also reveals that Comedy genre consistently saw the most releases, peaking in 2009 with 41 films, while Drama remained a popular genre with high numbers of releases each year. Other genres such as Horror and Thriller saw fewer releases.\n\nAdditionally, the comparison shows that audience ratings tended to be higher than critic ratings in most years, with 2010 seeing a significant difference where audience ratings were much higher (61.43%) compared to critic ratings (45.56%).\n\nThe project includes a comprehensive dashboard that combines all visualizations, providing stakeholders with a holistic view of the movie industry trends during this period.',
      image: entertainmentIndustryImage,
      technologies: ['Tableau', 'Tableau Prep', 'Excel', 'Data Visualization', 'Dashboard Design', 'Data Analysis', 'LOD Expressions', 'Calculated Fields', 'Parameters', 'Storyboards'],
      github: 'https://github.com/madesh6554/Cognitive-i-IT-Solution-Internship-Project-',
      demo: 'https://public.tableau.com/views/EntertainmentIndustryAnalysisProject/ProjectDashboard?:language=en-US&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
      pdf: '/pdfs/Report_merged.pdf',
      featured: true,
      features: [
        'Budget Analysis: Analyzed budget allocation across Action, Comedy, Drama, Horror, and Thriller genres from 2007-2011',
        'Rating Correlation: Identified positive correlation between audience and critic ratings using scatter plot visualization',
        'Genre Release Trends: Tracked number of movies released per genre over time, revealing Comedy as most produced genre',
        'Rating Comparison: Compared audience vs critic ratings over time, showing audience ratings generally higher',
        'Top Movies Analysis: Analyzed budget of top 3 movies by both audience and critic ratings, segregated by genre',
        'Interactive Dashboard: Created comprehensive dashboard combining all visualizations for holistic industry view',
        'Data Cleaning: Prepared and cleaned movie industry dataset using Excel and Tableau Prep',
        'Advanced Visualizations: Utilized bar charts, line graphs, scatter plots, and heatmaps for trend analysis',
        'Strategic Insights: Provided actionable insights for movie review company strategic decision-making',
        'Time Series Analysis: Examined trends and patterns across 5-year period (2007-2011)'
      ],
      additionalInfo: 'Project Overview:\n• Project Type: Data Visualization & Analysis Project\n• Company: Cognitive i IT Solutions (P) Ltd, Salem, Tamil Nadu\n• Duration: Completed during internship (14-03-2024 to 20-07-2024)\n• Course Code: 23UPCSC4I01\n• Registration Number: U23PG507DTS018\n• University: Periyar University, Salem\n\nKey Insights:\n• Budget Trends:\n  - Action movies had consistently high budgets, peaking at $2,736 million in 2010\n  - Comedy and Drama genres showed moderate and stable budget allocations\n  - Drama peaked in budget allocation in 2009\n  - Horror had the lowest budget across all years, indicating clear difference in financial backing\n\n• Rating Analysis:\n  - Positive correlation between audience and critic ratings (upward trend in scatter plot)\n  - Movies well-received by critics tend to be liked by audiences, with some exceptions\n  - Audience ratings generally higher than critic ratings in most years\n  - 2010 saw significant difference: audience ratings 61.43% vs critic ratings 45.56%\n\n• Release Trends:\n  - Comedy genre consistently had the most releases, peaking at 41 films in 2009\n  - Drama remained popular with high numbers of releases each year\n  - Horror and Thriller saw fewer releases, with Thriller hitting lowest in 2011\n\n• Top Movies:\n  - Action and Adventure movies (Star Trek, Mission Impossible) had highest budgets\n  - Comedy and Drama featured slightly lower-budget top-performing movies\n  - Thriller movies (The Girl With The Dragon Tattoo) had notable budget allocations\n\nTechnologies & Tools:\n• Tableau: Primary tool for dashboard creation and visualization\n• Tableau Prep: Data cleaning and transformation\n• Excel: Initial data preparation and analysis\n• Calculated Fields: For custom metrics and calculations\n• Parameters: For interactive filtering and analysis\n• LOD Expressions: For complex aggregations across different levels\n\nDashboard Features:\n• Interactive filters for genre, year, and rating type\n• Multiple visualization types: bar charts, line graphs, scatter plots\n• Holistic view combining budget, ratings, and release trends\n• User-friendly interface for stakeholders\n\nApplications:\n• Strategic decision-making for movie review companies\n• Understanding industry trends and budget allocation patterns\n• Identifying correlation between critical reception and audience preferences\n• Supporting content strategy and investment decisions'
    },
    {
      id: 6,
      title: 'India Rainfall Analysis',
      description: 'A comprehensive analysis of rainfall patterns across Indian states from 1901 to 2017, examining long-term trends, seasonal variations, state-wise distribution, climate change impacts, and extreme weather events. This analysis supports water resource management, agricultural planning, and disaster preparedness.',
      extendedDescription: 'India, a country heavily reliant on agriculture, experiences diverse rainfall patterns across its vast geographical expanse. Understanding these patterns is crucial for effective water resource management, agricultural planning, and disaster preparedness.\n\nThis comprehensive analysis delves into the intricate details of India\'s rainfall, examining long-term trends spanning over a century (1901-2017), seasonal variations, state-wise distribution, climate change impacts, and the detection of extreme weather events.\n\nThe dataset includes monthly rainfall data for all Indian States and Union Territories, with columns for each month (January to December) and annual totals. The analysis reveals a general upward trend in average annual rainfall, suggesting potential climate change impacts, though regional variations exist with some areas experiencing more significant increases than others.\n\nSeasonal analysis shows that the monsoon season consistently receives the highest average rainfall, followed by winter and summer. Seasonal variability is significant, with some years experiencing extreme rainfall events or droughts.\n\nState-wise distribution reveals that Arunachal Pradesh receives the highest average annual rainfall, while Rajasthan receives the lowest. Regional disparities in rainfall are evident, with coastal areas generally receiving higher precipitation than inland regions.\n\nThe analysis identifies years with extreme rainfall events, such as heavy rainfall or droughts, which is crucial for risk assessment and disaster preparedness. Understanding the frequency and intensity of these events helps inform climate change adaptation strategies.\n\nThis project was developed using Tableau during an internship at Cognitive i IT Solutions, providing valuable insights for policymakers and communities in developing strategies to mitigate risks and promote sustainable development.',
      image: rainfallAnalysisImage,
      technologies: ['Tableau', 'Tableau Prep', 'Excel', 'Data Visualization', 'Dashboard Design', 'Data Analysis', 'LOD Expressions', 'Calculated Fields', 'Time Series Analysis', 'Geographic Analysis'],
      github: 'https://github.com/madesh6554/Cognitive-i-IT-Solution-Internship-Project-',
      demo: 'https://public.tableau.com/app/profile/madesh.m7198/viz/IndiaRainAnalysis/Dashboard1',
      pdf: '/pdfs/Report_merged.pdf',
      featured: true,
      features: [
        'Long-Term Trend Analysis: Examined rainfall patterns from 1901 to 2017 across all Indian states',
        'Seasonal Variation Analysis: Identified monsoon, winter, and summer rainfall patterns and variability',
        'State-Wise Distribution: Analyzed average annual rainfall across all states and union territories',
        'Climate Change Impact: Detected upward trends in average annual rainfall suggesting climate change influences',
        'Extreme Weather Detection: Identified years with extreme rainfall events, heavy rainfall, and droughts',
        'Geographic Analysis: Revealed regional disparities with coastal areas receiving higher precipitation',
        'Time Series Visualization: Created visualizations showing trends over 117 years of data',
        'Interactive Dashboard: Developed comprehensive dashboard for exploring rainfall patterns',
        'Data Processing: Handled large dataset with monthly and annual rainfall data for all states',
        'Agricultural Insights: Provided valuable information for water resource management and farming planning'
      ],
      additionalInfo: 'Project Overview:\n• Project Type: Data Visualization & Climate Analysis Project\n• Company: Cognitive i IT Solutions (P) Ltd, Salem, Tamil Nadu\n• Duration: Completed during internship (14-03-2024 to 20-07-2024)\n• Course Code: 23UPCSC4I01\n• Registration Number: U23PG507DTS018\n• University: Periyar University, Salem\n• Dataset: Indian States Monthly Rainfall from 1901 to 2017\n\nDataset Structure:\n• States/UTs: List of all States and Union Territories of India\n• YEAR: Year from 1901 to 2017 for each State/UT\n• JAN-DEC: Columns containing monthly rainfall data for each month (January to December)\n• ANNUAL: Contains total rainfall for each state for each year\n\nKey Insights:\n• Long-Term Trends:\n  - General upward trend in average annual rainfall, suggesting potential climate change impacts\n  - Regional variations exist, with some areas experiencing more significant increases\n  - Over 117 years of data analyzed for comprehensive trend identification\n\n• Seasonal Rainfall Variation:\n  - Monsoon season consistently receives highest average rainfall\n  - Followed by winter and summer seasons\n  - Significant seasonal variability with extreme events in some years\n\n• State Distribution:\n  - Arunachal Pradesh receives highest average annual rainfall\n  - Rajasthan receives lowest average annual rainfall\n  - Regional disparities evident with coastal areas receiving higher precipitation than inland regions\n\n• Climate Change Impact:\n  - Observed increase in average annual rainfall aligns with climate change projections\n  - Further research needed to definitively attribute changes to climate change\n  - Quantification of future impacts requires continued monitoring\n\n• Extreme Weather Events:\n  - Identified years with extreme rainfall events (heavy rainfall or droughts)\n  - Understanding frequency and intensity crucial for risk assessment\n  - Supports disaster preparedness and mitigation strategies\n\nTechnologies & Tools:\n• Tableau: Primary tool for dashboard creation and visualization\n• Tableau Prep: Data cleaning and transformation of large historical dataset\n• Excel: Initial data preparation and analysis\n• Time Series Analysis: For identifying long-term trends and patterns\n• Geographic Analysis: For state-wise and regional comparisons\n• Calculated Fields: For seasonal aggregations and trend calculations\n\nApplications:\n• Water Resource Management: Informing water allocation and conservation strategies\n• Agricultural Planning: Supporting crop selection and farming schedules based on rainfall patterns\n• Disaster Preparedness: Identifying vulnerable areas and extreme weather risks\n• Climate Adaptation: Developing strategies to mitigate climate change impacts\n• Policy Making: Providing evidence-based insights for government and community planning\n\nDashboard Features:\n• Interactive visualizations for exploring 117 years of rainfall data\n• State-wise and regional comparisons\n• Seasonal trend analysis\n• Extreme event identification\n• Long-term pattern visualization'
    },
    {
      id: 7,
      title: 'Email Spam Detection with Machine Learning',
      description: 'Implemented an email spam classifier using TF-IDF vectorization and logistic regression to distinguish spam from ham messages in the SMS Spam Collection dataset.',
      extendedDescription: 'This project automates spam email detection by training a supervised machine learning model on the SMS Spam Collection dataset (5,572 messages). The workflow includes data cleaning, handling missing columns, converting categorical labels to numerical values, TF-IDF text vectorization, and model training/evaluation using logistic regression. The resulting classifier delivers 96% accuracy and a weighted F1-score of 0.96, demonstrating a significant improvement over manual rule-based filtering with reduced maintenance overhead.',
      image: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?auto=format&fit=crop&w=900&q=80',
      tags: ['Machine Learning', 'NLP', 'Classification'],
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'TF-IDF', 'Logistic Regression', 'Seaborn', 'Matplotlib'],
      github: '',
      demo: '',
      pdf: '/pdfs/Jupyter%20files/Email_spam_detection_with_machine_learning_Task_4%20.ipynb',
      featured: false,
      metrics: [
        { label: 'Accuracy', value: '96%' },
        { label: 'Precision (Spam)', value: '0.99' },
        { label: 'Dataset Size', value: '5,572 messages' }
      ],
      visualizations: [
        {
          title: 'TF-IDF Feature Density',
          description: 'Heatmap of the TF-IDF matrix illustrating sparse high-weight tokens that distinguish spam from ham messages.',
          data: [
            { label: 'Sparsity (%, relative)', value: 96, display: '96% sparse' },
            { label: 'Avg Token Weight (rel.)', value: 35 },
            { label: 'Top Token Weight (rel.)', value: 100 }
          ]
        },
        {
          title: 'Confusion Matrix & Metrics',
          description: 'Classification report and confusion matrix summarizing precision, recall, and F1-scores for both classes.',
          data: [
            { label: 'Accuracy', value: 96, display: '96%' },
            { label: 'Precision (Spam)', value: 99, display: '0.99' },
            { label: 'Recall (Ham)', value: 100, display: '1.00' },
            { label: 'Recall (Spam)', value: 74, display: '0.74' }
          ]
        }
      ],
      resources: [
        {
          label: 'Notebook (Jupyter)',
          url: '/pdfs/Jupyter%20files/Email_spam_detection_with_machine_learning_Task_4%20.ipynb'
        },
        {
          label: 'Dataset (Kaggle)',
          url: 'https://www.kaggle.com/datasets/uciml/sms-spam-collection-dataset'
        }
      ],
      codeLanguage: 'Python',
      codeSnippet:
        "from sklearn.feature_extraction.text import TfidfVectorizer\\nfrom sklearn.linear_model import LogisticRegression\\nfrom sklearn.model_selection import train_test_split\\n\\n# vectorize the SMS corpus\\nvectorizer = TfidfVectorizer(stop_words='english', lowercase=True)\\nX = vectorizer.fit_transform(df['sms'])\\ny = df['spam/ham'].map({'spam': 0, 'ham': 1}).astype(int)\\n\\n# train / test split\\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=3)\\n\\n# train logistic regression classifier\\nmodel = LogisticRegression(max_iter=1000)\\nmodel.fit(X_train, y_train)\\n\\nprint('Accuracy:', model.score(X_test, y_test))",
      features: [
        'Data Cleaning: Removed columns with >99% missing values and standardized column names',
        'Label Encoding: Converted spam/ham categories into binary numeric targets for modeling',
        'Train/Test Split: Allocated 80% of data for training and 20% for evaluation (4,457 train / 1,115 test)',
        'Text Vectorization: Applied TfidfVectorizer with English stop-word removal and lowercase normalization',
        'Model Training: Trained logistic regression classifier on sparse TF-IDF matrices',
        'Model Evaluation: Achieved 96% accuracy with precision 0.96 and recall 1.00 for ham class',
        'Confusion Matrix: Demonstrated strong separation between spam (155 samples) and ham (960 samples)',
        'Business Impact: Showcased how ML-driven filtering can outperform manual rule-based systems'
      ],
      additionalInfo: 'Project Overview:\n• Internship: Oasis Infobyte – Data Science Internship (Task 4)\n• Objective: Replace manual spam filtering with supervised ML model\n• Dataset: SMS Spam Collection (label column v1, message column v2)\n\nData Preparation:\n• Dropped columns Unnamed: 2/3/4 with >99% null values\n• Renamed columns to spam/ham and sms for clarity\n• Encoded spam as 0 and ham as 1 to create binary target vector\n• Train/Test Split: 80/20 with random_state=3\n\nModel Pipeline:\n• Text Features: TfidfVectorizer(min_df=1, stop_words=\'english\', lowercase=True)\n• Algorithm: LogisticRegression (scikit-learn)\n• Metrics: Accuracy, precision, recall, F1-score, confusion matrix\n\nPerformance:\n• Training Accuracy: 99%\n• Test Accuracy: 96%\n• Precision/Recall (spam class): 0.99 / 0.74\n• Weighted F1-score: 0.96\n\nApplications:\n• Automated email/SMS spam filtering\n• Customer support ticket triaging\n• Reducing maintenance cost versus rule-based filters'
    },
    {
      id: 8,
      title: 'Car Price Prediction with Machine Learning',
      description: 'Developed regression models to predict used car selling prices and compared linear regression with random forest for improved valuation accuracy.',
      extendedDescription: 'This project predicts the selling price of used cars using historical listings (301 records, 9 columns). The process covers duplicate detection/removal, exploratory analysis, categorical encoding, and the training of regression models. Linear regression achieved an R² of 0.89 on the test set, while a Random Forest Regressor improved performance to an R² of 0.94 with lower mean squared error, illustrating the benefits of ensemble learning for pricing tasks.',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
      tags: ['Machine Learning', 'Regression', 'EDA'],
      technologies: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib', 'Scikit-Learn', 'Linear Regression', 'Random Forest', 'Feature Engineering'],
      github: '',
      demo: '',
      pdf: '/pdfs/Jupyter%20files/CAR%20PRICE%20PREDICTION%20WITH%20MACHINE%20LEARNING%20task_3-checkpoint.ipynb',
      featured: false,
      metrics: [
        { label: 'Random Forest R²', value: '0.94' },
        { label: 'Linear Regression R²', value: '0.89' },
        { label: 'Records', value: '299 cleaned rows' }
      ],
      visualizations: [
        {
          title: 'Selling Price Distribution',
          description: 'Histogram of selling prices before modeling, highlighting right-skewed values and price clusters.',
          data: [
            { label: 'Min Price', value: 0, display: '≈ 0' },
            { label: 'Average Price', value: 46, display: '≈ 4.6' },
            { label: 'Max Price', value: 350, display: '35.0' }
          ]
        },
        {
          title: 'Actual vs Predicted (Linear Regression)',
          description: 'Scatter plot comparing actual selling prices versus model predictions.',
          image: carChart2
        },
        {
          title: 'Random Forest Feature Importance',
          description: 'Horizontal bar chart ranking features such as Present_Price, Year, and Driven_kms by relative importance.',
          image: carChart3,
          data: [
            { label: 'Present_Price', value: 100 },
            { label: 'Year', value: 75 },
            { label: 'Driven_kms', value: 45 },
            { label: 'Transmission', value: 28 },
            { label: 'Fuel_Type', value: 25 },
            { label: 'Owner', value: 10 }
          ]
        },
        {
          title: 'Correlation Heatmap',
          description: 'Correlation matrix among Year, Present_Price, Selling_Price, Driven_kms, and Owner.',
          image: carChart1
        }
      ],
      resources: [
        {
          label: 'Notebook (Jupyter)',
          url: '/pdfs/Jupyter%20files/CAR%20PRICE%20PREDICTION%20WITH%20MACHINE%20LEARNING%20task_3-checkpoint.ipynb'
        },
        {
          label: 'Dataset (Kaggle)',
          url: 'https://www.kaggle.com/datasets/nehalbirla/vehicle-dataset-from-cardekho'
        }
      ],
      codeLanguage: 'Python',
      codeSnippet:
        "from sklearn.model_selection import train_test_split\\nfrom sklearn.linear_model import LinearRegression\\nfrom sklearn.ensemble import RandomForestRegressor\\n\\nfeatures = car_1[['Year','Present_Price','Driven_kms','Fuel_Type','Selling_type','Transmission','Owner']]\\nlabels = car_1['Selling_Price']\\n\\nX_train, X_test, y_train, y_test = train_test_split(features, labels, test_size=0.2, random_state=13)\\n\\nlin_reg = LinearRegression().fit(X_train, y_train)\\nrf_reg = RandomForestRegressor(random_state=17).fit(X_train, y_train)\\n\\nprint('Linear Regression R2:', lin_reg.score(X_test, y_test))\\nprint('Random Forest R2:', rf_reg.score(X_test, y_test))",
      features: [
        'Data Cleaning: Identified and removed duplicate rows to create a clean dataset of 299 records',
        'Exploratory Analysis: Visualized selling price distribution and correlation matrix for insight discovery',
        'Categorical Encoding: Converted Fuel_Type, Selling_type, and Transmission into numeric codes',
        'Feature Selection: Dropped Car_Name to focus on quantitative predictors influencing selling price',
        'Model Training: Built Linear Regression baseline using 80/20 train-test split',
        'Performance Evaluation: Reported MSE=2.41 and R²=0.89 for linear regression model',
        'Random Forest Enhancement: Achieved MSE=1.42 and R²=0.94 with RandomForestRegressor',
        'Feature Importance: Highlighted Present_Price, Year, and Driven_kms as top predictive features'
      ],
      additionalInfo: 'Project Overview:\n• Internship: Oasis Infobyte – Data Science Internship (Task 3)\n• Objective: Predict used car selling prices using historical sales data\n• Dataset: Car data (301 rows × 9 columns) sourced from Kaggle archive\n\nData Preparation:\n• Removed duplicate entries (2 rows) to ensure data integrity\n• Confirmed absence of null values across numerical and categorical features\n• Encoded categorical variables for Fuel_Type, Selling_type, and Transmission\n\nModel Pipeline:\n• Features: Year, Present_Price, Driven_kms, Fuel_Type, Selling_type, Transmission, Owner\n• Train/Test Split: 80/20 with random_state=13\n• Baseline Model: LinearRegression (scikit-learn)\n• Advanced Model: RandomForestRegressor (random_state=17)\n\nPerformance:\n• Linear Regression – MSE: 2.41, R²: 0.89\n• Random Forest – MSE: 1.42, R²: 0.94\n• Training R² (Linear Regression): 0.87\n\nApplications:\n• Used car valuation platforms\n• Pricing strategy for dealerships and marketplaces\n• Decision support for buyers/sellers through data-driven insights'
    },
    {
      id: 9,
      title: 'Unemployment Analysis with Python',
      description: 'Explored India’s unemployment trends up to November 2020 through data cleaning, exploratory data analysis, and geographic visualization to highlight regional labour patterns.',
      extendedDescription: 'This project analyzes unemployment data across Indian regions from January to November 2020. The workflow includes inspecting dataset metadata, handling missing values, computing correlations, and visualizing unemployment rates, labour participation, and geographic patterns using Seaborn and Plotly. The analysis reveals state-wise disparities, latitude/longitude clusters, and frequency-based unemployment variations, supporting policy and workforce planning discussions.',
      image: 'https://images.unsplash.com/photo-1506784881475-0e408bbca849?auto=format&fit=crop&w=900&q=80',
      tags: ['EDA', 'Data Visualization', 'Socioeconomic'],
      technologies: ['Python', 'Pandas', 'NumPy', 'Seaborn', 'Matplotlib', 'Plotly Express', 'EDA'],
      github: '',
      demo: '',
      pdf: '/pdfs/Jupyter%20files/Unemplyment%20analysis%20with%20python%20task_2-checkpoint.ipynb',
      featured: false,
      metrics: [
        { label: 'Records Analysed', value: '267' },
        { label: 'Regions Covered', value: '21 states' },
        { label: 'Time Span', value: 'Jan - Nov 2020' }
      ],
      visualizations: [
        {
          title: 'Region-wise Unemployment',
          description: 'Bar chart comparing estimated unemployment rate (%) across Indian states and union territories.',
          data: [
            { label: 'Highest Region (Rate)', value: 100, display: 'Highest' },
            { label: 'Median Region (Rate)', value: 55, display: 'Median' },
            { label: 'Lowest Region (Rate)', value: 15, display: 'Lowest' }
          ]
        },
        {
          title: 'Latitude vs Longitude Heatmap',
          description: 'Geospatial scatter/heatmap showing labour participation and unemployment clusters by coordinates.',
          data: [
            { label: 'Clusters Observed', value: 3 },
            { label: 'Avg Participation (%)', value: 60 },
            { label: 'Avg Unemployment (%)', value: 12 }
          ]
        },
        { title: 'Unemployment Rate by Region', description: 'Region-wise unemployment distribution.', image: unempChart1 },
        { title: 'Labour Participation vs Unemployment', description: 'Comparative view of labour participation and unemployment.', image: unempChart2 },
        { title: 'Geospatial Pattern - Plot A', description: 'Heat/scatter visualization of unemployment by coordinates.', image: unempChart3 },
        { title: 'Geospatial Pattern - Plot B', description: 'Alternate geospatial pattern view.', image: unempChart4 }
      ],
      resources: [
        {
          label: 'Notebook (Jupyter)',
          url: '/pdfs/Jupyter%20files/Unemplyment%20analysis%20with%20python%20task_2-checkpoint.ipynb'
        },
        {
          label: 'Dataset (Kaggle)',
          url: 'https://www.kaggle.com/datasets/gokulrajkmv/unemployment-in-india'
        }
      ],
      codeLanguage: 'Python',
      codeSnippet:
        "import pandas as pd\\nimport seaborn as sns\\nimport matplotlib.pyplot as plt\\n\\ndf = pd.read_csv('Unemployment_Rate_upto_11_2020.csv')\\nprint(df.info())\\n\\n# correlation matrix to inspect relationships\\ncorrelation = df.corr(numeric_only=True)\\nsns.heatmap(correlation, cmap='coolwarm', annot=True)\\nplt.title('Unemployment Correlation Heatmap')\\nplt.show()",
      features: [
        'Dataset Exploration: Loaded 267-record unemployment dataset with 9 features (region, rate, participation, geo-coordinates)',
        'Data Quality Assessment: Verified absence of null values and reviewed descriptive statistics for key indicators',
        'Correlation Study: Calculated pairwise correlations to understand relationships among unemployment, employment, and participation metrics',
        'Heatmap Visualization: Generated Seaborn heatmap to highlight correlated socio-economic variables',
        'Regional Analysis: Plotted bar and histogram charts to compare unemployment rates by region and frequency',
        'Geospatial Insights: Visualized latitude and longitude distributions to observe regional labour clusters',
        'Interactive Graphics: Leveraged Plotly Express for exploratory, interactive charts',
        'Policy Insight: Identified high-unemployment regions useful for targeted government interventions'
      ],
      additionalInfo: 'Project Overview:\n• Internship: Oasis Infobyte – Data Science Internship (Task 2)\n• Objective: Analyze unemployment trends in India during 2020 using Python-based EDA\n• Dataset: Unemployment_Rate_upto_11_2020 (sourced from Kaggle archive)\n\nData Preparation:\n• Imported dataset into Pandas, inspected schema, and confirmed data completeness\n• Renamed columns during exploration for clarity where needed\n• Generated descriptive statistics to summarize employment and participation metrics\n\nAnalysis Steps:\n• Correlation Analysis: Evaluated numerical relationships to detect patterns among labour indicators\n• Visualization Suite: Utilized Seaborn histograms, bar charts, and heatmaps for regional comparisons\n• Geographic Breakdown: Examined latitude/longitude with regional hue to reveal spatial unemployment distribution\n\nInsights:\n• Highlighted regions with higher estimated unemployment rates and lower participation rates\n• Exposed geographic clusters that may signal regional economic challenges\n• Delivered visual evidence to guide workforce planning and policy decisions\n\nResources:\n• Notebook Location: /public/pdfs/Jupyter files/Unemplyment analysis with python task_2-checkpoint.ipynb'
    }
  ];

  // Ongoing Projects
  const ongoingProjects = [
    {
      id: 1,
      title: 'Conversational AI Tutor (RAG + STT/TTS Mascot)',
      description: 'Building a RAG-powered conversational tutor with speech recognition, text-to-speech, animated mascot UI, and live API integration.',
      extendedDescription:
        'This ongoing project delivers an end-to-end conversational AI tutor. The backend exposes a RAG API (single-turn and multi-turn) using LangChain/LangGraph with a vector database for retrieval. The frontend provides a mascot interface that listens via speech-to-text, speaks answers via text-to-speech, and animates emotions based on the API response. The full flow demonstrates user speech → STT → API → RAG → response → TTS + emotion animation.',
      image: aiTutorImage,
      tags: ['RAG', 'LLM', 'Voice AI', 'Frontend', 'Backend'],
      technologies: [
        'Python',
        'FastAPI',
        'LangChain / LangGraph',
        'Vector DB (Chroma/FAISS)',
        'OpenAI/Whisper STT',
        'Google/ELEVEN TTS',
        'React',
        'Web Audio API',
        'Lottie/Canvas Animations'
      ],
      github: 'https://github.com/madesh6554/conversational-AI-tutor-RAG-',
      demo: '',
      progress: 'In Progress',
      features: [
        'RAG Pipeline: document ingestion, chunking, embeddings, retrieval, and LLM synthesis',
        'REST Endpoints: POST /query for single-turn, POST /chat for multi-turn sessions',
        'Emotion-aware Responses: API returns { text, emotion } to drive animations',
        'Speech-to-Text: microphone input transcribed via STT and sent to API',
        'Text-to-Speech: answers spoken via TTS with mouth animation',
        'Mascot UI: basic mouth movement and expression state (happy/thinking/explaining)',
        'Live API Wiring: no hardcoded responses; real-time calls to backend'
      ],
      resources: [],
      codeLanguage: 'TypeScript / Python',
      visualizations: [
        {
          title: 'System Flow',
          description: 'User speaks → STT → Backend RAG → Response {text, emotion} → TTS + Mascot animation',
          data: [
            { label: 'STT', value: 20 },
            { label: 'RAG', value: 60 },
            { label: 'TTS', value: 20 }
          ]
        }
      ]
    }
  ];

  // Upcoming Project Ideas
  const upcomingProjects = [
    {
      id: 101,
      title: 'Personalized AI Chat',
      description:
        'A privacy-first, on-device friendly AI chat that adapts to your goals, tone, and preferences across contexts.',
      extendedDescription:
        'Personalized AI Chat will combine user-controlled profiles, memory, and retrieval to tailor responses to each person. It supports task-specific modes (study, coding, wellness), adjustable tone and depth, and a transparent memory system with opt-in persistence. The system will leverage a local vector store for fast retrieval and optional cloud sync, providing a seamless experience across devices while preserving user privacy.',
      image: aiChatImage,
      tags: ['LLM', 'RAG', 'Personalization', 'Privacy'],
      technologies: [
        'Next.js / React',
        'TypeScript',
        'FastAPI / Node.js',
        'LangChain',
        'FAISS / Chroma',
        'Auth (JWT/OAuth)',
        'OpenAI / Local LLM (Ollama)'
      ],
      github: '',
      demo: '',
      status: 'Planning',
      features: [
        'User Profiles: tone, depth, and domain preferences',
        'Memory with Controls: view/edit/clear personal memory',
        'Task Modes: study, coding, wellness, and custom modes',
        'Context Injection: retrieve relevant notes/documents for better answers',
        'Cross-Device Sync: optional encrypted cloud sync',
        'Safety Guardrails: prompt filters and transparency notices'
      ],
      resources: [
        { label: 'Product Spec (draft)', url: '#' },
        { label: 'UX Wireframes (draft)', url: '#' }
      ]
    },
    {
      id: 102,
      title: 'Career Suggestion with AI',
      description:
        'An AI career guide that analyzes skills, interests, and market trends to recommend roles, learning paths, and portfolios.',
      extendedDescription:
        'Career Suggestion with AI will provide a data-driven roadmap tailored to the user’s background and aspirations. It fuses psychometric-style inputs, resume parsing, and job-market data to propose realistic roles, required skills, curated courses, and milestone projects. The system will include a readiness score, salary range estimates, and a step-by-step plan, with periodic re-evaluation as the user progresses.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80',
      tags: ['Recommendation', 'NLP', 'Roadmapping', 'Jobs'],
      technologies: [
        'React',
        'Python (FastAPI)',
        'LangChain',
        'Vector DB',
        'Job APIs / Web Scraping',
        'Pandas',
        'Visualization (Charts)'
      ],
      github: '',
      demo: '',
      status: 'Research',
      features: [
        'Profile Intake: skills, interests, constraints, preferred industries',
        'Resume Parsing: extract strengths and gaps',
        'Role Matching: align to roles with demand and fit score',
        'Learning Paths: curated courses, docs, and hands-on projects',
        'Market Signals: salary bands and trend indicators',
        'Progress Tracking: re-evaluate and adapt recommendations over time'
      ],
      resources: [
        { label: 'Data Sources (draft)', url: '#' },
        { label: 'Architecture (draft)', url: '#' }
      ]
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects', icon: null },
    { id: 'completed', name: 'Completed', icon: CheckCircle2 },
    { id: 'ongoing', name: 'Ongoing', icon: Clock },
    { id: 'upcoming', name: 'Upcoming Ideas', icon: Lightbulb },
  ];

  const getFilteredProjects = () => {
    switch (activeFilter) {
      case 'completed':
        return { projects: completedProjects, type: 'completed' };
      case 'ongoing':
        return { projects: ongoingProjects, type: 'ongoing' };
      case 'upcoming':
        return { projects: upcomingProjects, type: 'upcoming' };
      default:
        return { 
          projects: [...completedProjects, ...ongoingProjects, ...upcomingProjects], 
          type: 'all' 
        };
    }
  };

  const { projects: filteredProjects, type: projectType } = getFilteredProjects();

  const handleProjectClick = (project) => {
    // Determine project type
    let detectedType = 'completed';
    if (completedProjects.find(p => p.id === project.id)) {
      detectedType = 'completed';
    } else if (ongoingProjects.find(p => p.id === project.id)) {
      detectedType = 'ongoing';
    } else if (upcomingProjects.find(p => p.id === project.id)) {
      detectedType = 'upcoming';
    }
    
    setSelectedProject({ ...project, _type: detectedType });
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  // Handle Escape key to close modal
  React.useEffect(() => {
    if (!isModalOpen) return;
    
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
        setSelectedProject(null);
        document.body.style.overflow = 'unset';
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              My <span className="text-primary-600 dark:text-primary-400">Projects</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-2">
              A showcase of my completed work, ongoing projects, and upcoming ideas
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => {
              const IconComponent = filter.icon;
              return (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${
                  activeFilter === filter.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-600'
                }`}
              >
                  {IconComponent && <IconComponent size={18} />}
                {filter.name}
              </motion.button>
              );
            })}
          </motion.div>

          {/* Projects Display */}
          {filteredProjects.length === 0 ? (
            <motion.div variants={itemVariants} className="text-center py-16">
              <div className="card max-w-2xl mx-auto">
                <div className="text-6xl mb-4">
                  {activeFilter === 'completed' && <CheckCircle2 className="mx-auto text-primary-600 dark:text-primary-400" size={64} />}
                  {activeFilter === 'ongoing' && <Clock className="mx-auto text-primary-600 dark:text-primary-400" size={64} />}
                  {activeFilter === 'upcoming' && <Lightbulb className="mx-auto text-primary-600 dark:text-primary-400" size={64} />}
                  {activeFilter === 'all' && <Lightbulb className="mx-auto text-primary-600 dark:text-primary-400" size={64} />}
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {activeFilter === 'all' 
                    ? 'No Projects Yet' 
                    : `No ${filters.find(f => f.id === activeFilter)?.name} Projects`}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  {activeFilter === 'all' 
                    ? 'Projects will appear here once you add them to the respective sections.'
                    : `Add your ${filters.find(f => f.id === activeFilter)?.name.toLowerCase()} projects to see them here.`}
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div variants={itemVariants} className="space-y-12">
              {/* Section Header */}
          {activeFilter === 'all' && (
                <>
                  {/* Completed Projects Section */}
                  {completedProjects.length > 0 && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="text-primary-600 dark:text-primary-400" size={28} />
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          Completed Projects
              </h2>
                        <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm rounded-full">
                          {completedProjects.length}
                        </span>
                        </div>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {completedProjects.map((project) => (
                          <ProjectCard key={project.id} project={project} type="completed" onCardClick={handleProjectClick} />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Ongoing Projects Section */}
                  {ongoingProjects.length > 0 && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <Clock className="text-primary-600 dark:text-primary-400" size={28} />
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          Ongoing Projects
                        </h2>
                        <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm rounded-full">
                          {ongoingProjects.length}
                        </span>
                      </div>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ongoingProjects.map((project) => (
                          <ProjectCard key={project.id} project={project} type="ongoing" onCardClick={handleProjectClick} />
                      ))}
                    </div>
                    </div>
                  )}

                  {/* Upcoming Projects Section */}
                  {upcomingProjects.length > 0 && (
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <Lightbulb className="text-primary-600 dark:text-primary-400" size={28} />
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          Upcoming Project Ideas
                        </h2>
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full">
                          {upcomingProjects.length}
                        </span>
                      </div>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {upcomingProjects.map((project) => (
                          <ProjectCard key={project.id} project={project} type="upcoming" onCardClick={handleProjectClick} />
                ))}
              </div>
                    </div>
                  )}
                </>
          )}

              {/* Filtered View (when a specific filter is selected) */}
            {activeFilter !== 'all' && (
                <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
                {filters.find(f => f.id === activeFilter)?.name}
              </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                      <ProjectCard key={project.id} project={project} type={projectType} onCardClick={handleProjectClick} />
                    ))}
                      </div>
                    </div>
              )}
                </motion.div>
          )}

          {/* Project Detail Modal */}
          <ProjectDetailModal
            project={selectedProject}
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            type={selectedProject?._type || 'completed'}
          />
          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="card max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Interested in collaborating?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <motion.button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center"
              >
                Get In Touch
                <ExternalLink className="ml-2 h-4 w-4" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
