import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, CheckCircle2, Clock, Lightbulb, X, Code, Globe, FileText, Download, MessageSquareCode, LayoutGrid, List, ChevronDown, ChevronUp } from 'lucide-react';
import { completedProjects, ongoingProjects, upcomingProjects } from '../data/projectsData';
import ProjectSpotlight from './ProjectSpotlight';

// ProjectCard Component
const ProjectCard = ({ project, type, onCardClick }) => {
  const isUpcoming = type === 'upcoming';
  const isOngoing = type === 'ongoing';
  const isCompleted = type === 'completed';

  const handleAskAI = (e) => {
    e.stopPropagation();
    const event = new CustomEvent('openProjectChat', { 
      detail: { projectTitle: project.title } 
    });
    window.dispatchEvent(event);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onClick={() => onCardClick && onCardClick(project)}
      className="card group cursor-pointer relative"
    >
      {/* Ask AI Float Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleAskAI}
        className="absolute top-4 left-4 z-20 p-2 bg-primary-600/90 backdrop-blur-md text-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
        title="Ask AI about this project"
      >
        <MessageSquareCode size={18} />
      </motion.button>
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

                    {/* Workflow / Visual Gallery */}
                    {project.media && project.media.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.24 }}
                        className="bg-gradient-to-br from-indigo-50 via-slate-50 to-white dark:from-indigo-900/30 dark:via-slate-900/40 dark:to-dark-800 rounded-2xl p-6 border border-indigo-200 dark:border-indigo-700"
                      >
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-2 bg-indigo-600 rounded-lg">
                            <Code size={22} className="text-white" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Workflow gallery
                          </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {project.media.map((item, idx) => (
                            <div
                              key={idx}
                              className="relative rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-dark-900 shadow-sm"
                            >
                              {item.type === 'video' ? (
                                <video
                                  src={item.src}
                                  controls
                                  className="w-full h-64 object-cover bg-black"
                                >
                                  Your browser does not support the video tag.
                                </video>
                              ) : (
                                <img
                                  src={item.src}
                                  alt={item.alt || project.title}
                                  className="w-full h-64 object-cover"
                                />
                              )}
                              {item.caption && (
                                <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-dark-800/90">
                                  <p className="text-sm text-gray-700 dark:text-gray-300">
                                    {item.caption}
                                  </p>
                                </div>
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
                                const match = embedUrl.match(/\/viz\/([^/]+)\/([^/]+)/);
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
  const [showAllCompleted, setShowAllCompleted] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const completedSectionRef = useRef(null);

  const INITIAL_SHOW = 3;

  // Priority order: these 3 projects always appear first
  const PINNED_IDS = [1, 4, 2]; // AI ModelHub, Image Caption, Satellite Digital Twin
  const sortedCompleted = [
    ...PINNED_IDS.map(id => completedProjects.find(p => p.id === id)).filter(Boolean),
    ...completedProjects.filter(p => !PINNED_IDS.includes(p.id)),
  ];

  // Projects data imported from projectsData.js

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

          {/* Project Spotlight Hero */}
          <motion.div variants={itemVariants} className="pt-8">
            <ProjectSpotlight />
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
                      {/* Section Header with View Toggle */}
                      <div ref={completedSectionRef} className="flex flex-wrap items-center gap-3">
                        <CheckCircle2 className="text-primary-600 dark:text-primary-400" size={28} />
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          Completed Projects
                        </h2>
                        <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm rounded-full">
                          {completedProjects.length}
                        </span>
                        {/* View Mode Toggle */}
                        <div className="ml-auto flex items-center gap-1 p-1 bg-gray-100 dark:bg-dark-700 rounded-xl">
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setViewMode('grid')}
                            className={`p-2 rounded-lg transition-all ${
                              viewMode === 'grid'
                                ? 'bg-white dark:bg-dark-600 shadow text-primary-600 dark:text-primary-400'
                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                            }`}
                            title="Grid view"
                          >
                            <LayoutGrid size={18} />
                          </motion.button>
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded-lg transition-all ${
                              viewMode === 'list'
                                ? 'bg-white dark:bg-dark-600 shadow text-primary-600 dark:text-primary-400'
                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'
                            }`}
                            title="List view"
                          >
                            <List size={18} />
                          </motion.button>
                        </div>
                      </div>

                      {/* Project Cards */}
                      <AnimatePresence>
                        {viewMode === 'grid' ? (
                          <div>
                            <motion.div
                              key="grid"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                              {(showAllCompleted ? sortedCompleted : sortedCompleted.slice(0, INITIAL_SHOW)).map((project) => (
                                <ProjectCard key={project.id} project={project} type="completed" onCardClick={handleProjectClick} />
                              ))}
                            </motion.div>

                            {/* 📦 Peeking hidden project cards — clipped + darkened */}
                            {!showAllCompleted && sortedCompleted.length > INITIAL_SHOW && (
                              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                                {sortedCompleted.slice(INITIAL_SHOW, INITIAL_SHOW + 3).map((project, i) => (
                                  <div
                                    key={project.id}
                                    className="relative overflow-hidden rounded-2xl cursor-pointer"
                                    style={{
                                      maxHeight: '140px',
                                      opacity: 1 - i * 0.2,
                                      transform: `scale(${1 - i * 0.012})`,
                                      transformOrigin: 'top center',
                                    }}
                                    onClick={() => {
                                      setShowAllCompleted(true);
                                    }}
                                  >
                                    {/* The actual card rendered but clipped */}
                                    <div className="pointer-events-none">
                                      <ProjectCard project={project} type="completed" onCardClick={null} />
                                    </div>
                                    {/* Dark overlay — lighter at top so image is visible, heavy at bottom */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/95 rounded-2xl" />
                                    {/* Hidden label */}
                                    <div className="absolute inset-0 flex items-end justify-center pb-3">
                                      <span className="flex items-center gap-1 text-white/70 text-xs font-semibold tracking-widest uppercase">
                                        <ChevronDown size={13} className="animate-bounce" /> Click to reveal
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <motion.div
                            key="list"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="space-y-3"
                          >
                            {(showAllCompleted ? sortedCompleted : sortedCompleted.slice(0, INITIAL_SHOW)).map((project) => (
                              <motion.div
                                key={project.id}
                                whileHover={{ x: 4 }}
                                onClick={() => handleProjectClick(project)}
                                className="flex items-center gap-4 p-4 bg-white dark:bg-dark-800 rounded-2xl border border-gray-200 dark:border-dark-700 shadow-sm hover:shadow-md hover:border-primary-300 dark:hover:border-primary-700 transition-all cursor-pointer group"
                              >
                                {project.image && (
                                  <img src={project.image} alt={project.title} className="w-16 h-16 rounded-xl object-cover flex-shrink-0" />
                                )}
                                <div className="flex-1 min-w-0">
                                  <h3 className="font-bold text-gray-900 dark:text-white truncate group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">{project.title}</h3>
                                  <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-1 mt-0.5">{project.description}</p>
                                  <div className="flex flex-wrap gap-1 mt-2">
                                    {project.tags?.slice(0, 3).map((tag, i) => (
                                      <span key={i} className="px-2 py-0.5 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full">{tag}</span>
                                    ))}
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 flex-shrink-0">
                                  {project.github && (
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
                                      className="p-2 text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors">
                                      <Github size={16} />
                                    </a>
                                  )}
                                  {project.demo && (
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}
                                      className="p-2 text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                                      <ExternalLink size={16} />
                                    </a>
                                  )}
                                  <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">Done</span>
                                </div>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Show More / Show Less Button */}
                      {sortedCompleted.length > INITIAL_SHOW && (
                        <motion.div className="flex justify-center pt-4">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                              if (showAllCompleted) {
                                setShowAllCompleted(false);
                                setTimeout(() => {
                                  completedSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                }, 50);
                              } else {
                                setShowAllCompleted(true);
                              }
                            }}
                            className="flex items-center gap-2 px-8 py-3 bg-white dark:bg-dark-800 border-2 border-primary-300 dark:border-primary-700 text-primary-600 dark:text-primary-400 font-semibold rounded-full shadow-sm hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:border-primary-500 transition-all"
                          >
                            {showAllCompleted ? (
                              <><ChevronUp size={18} /> Show Less</>
                            ) : (
                              <><ChevronDown size={18} /> Show {completedProjects.length - INITIAL_SHOW} More Projects</>
                            )}
                          </motion.button>
                        </motion.div>
                      )}
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
