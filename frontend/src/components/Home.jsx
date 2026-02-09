import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail, ChevronDown, X, FileText, Briefcase, Brain, BarChart3, TrendingUp, CheckCircle, Cpu, Atom, Sparkles } from 'lucide-react';
import profileImage from '../assests/ChatGPT Image Jan 6, 2026, 04_11_57 PM.png';
import AnimatedParticlesBackground from './AnimatedParticlesBackground';

const Home = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // 🔹 Typewriter animation setup
  const roles = useMemo(() => [
    'AI & ML Engineer',
    'Data Scientist',
    'Data Analyst',
    'Computer Vision Engineer',
    'Deep Learning Specialist',
    'NLP Practitioner',
    'Business Intelligence Analyst',
    'Data Visualization Expert',
    'MLOps Engineer',
    'AI Researcher',
    'Machine Learning Engineer',
    'Generative AI Developer',
    'Prompt Engineer',
    'Data Engineer',
    'Big Data Analyst',
    'Predictive Modeling Expert',
    'Statistician',
    'AI Product Developer',
    'Analytics Consultant',
    'Data Storyteller',
    'Research Data Scientist',
  ], []);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex % roles.length];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const next = current.slice(0, displayedText.length + 1);
        setDisplayedText(next);
        if (next === current) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        const next = current.slice(0, displayedText.length - 1);
        setDisplayedText(next);
        if (next.length === 0) {
          setIsDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, roles]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/madesh6554', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/madesh-m-15037b273', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:madesh6554@gmail.com', label: 'Email' },
  ];

  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [selectedResume, setSelectedResume] = useState(null);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const resumes = [
    {
      id: 'data-analyst',
      title: 'Data Analyst',
      description: 'Focused on data analysis, visualization, and business intelligence',
      icon: BarChart3,
      file: '/resumes/Madesh M_Data Analyst.pdf',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'ai-ml-engineer',
      title: 'AI & ML Engineer',
      description: 'Specialized in machine learning, deep learning, and AI solutions',
      icon: Brain,
      file: '/resumes/Madesh M_AI_ML_Engineer_Resume.pdf',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'data-scientist',
      title: 'Data Scientist',
      description: 'Expert in statistical analysis, predictive modeling, and data science',
      icon: TrendingUp,
      file: '/resumes/Madesh M_Data Scientist.pdf',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'business-analyst',
      title: 'Business Analyst',
      description: 'Focused on business insights, requirements analysis, and strategy',
      icon: Briefcase,
      file: '/resumes/Madesh M_Business Analyst.pdf.pdf',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'general',
      title: 'General Resume',
      description: 'Comprehensive resume covering all skills and experiences',
      icon: FileText,
      file: '/resumes/Madesh Mani_Resume.pdf',
      color: 'from-gray-500 to-gray-600'
    }
  ];

  // 🔹 Positions for small floating HUD icons around the ring
  const hudIconPositions = [
    { top: '6%', left: '74%', icon: Cpu },
    { top: '78%', left: '20%', icon: Atom },
    { top: '84%', left: '70%', icon: Sparkles },
  ];

  // 🔹 Interactive ring rotation based on cursor movement
  const ringRotation = useMotionValue(0);
  const smoothRingRotation = useSpring(ringRotation, {
    stiffness: 120,
    damping: 22,
    mass: 0.7,
  });
  const [lastMousePos, setLastMousePos] = useState(null);

  const handleHeroMouseMove = (event) => {
    const { clientX, clientY } = event;

    if (lastMousePos) {
      const deltaX = clientX - lastMousePos.x;
      const deltaY = clientY - lastMousePos.y;

      // Base horizontal sensitivity
      let sensitivity = 0.22;

      // Move cursor up → slightly faster rotation, down → slightly slower
      if (deltaY < -2) {
        sensitivity = 0.34;
      } else if (deltaY > 2) {
        sensitivity = 0.14;
      }

      const currentRotation = ringRotation.get();
      ringRotation.set(currentRotation + deltaX * sensitivity);
    }

    setLastMousePos({ x: clientX, y: clientY });
  };

  const handleHeroMouseLeave = () => {
    setLastMousePos(null);
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden"
      onMouseMove={handleHeroMouseMove}
      onMouseLeave={handleHeroMouseLeave}
    >
      <AnimatedParticlesBackground
        particleCount={200}
        backgroundColor="#021027"
        particleColor="hsl(180, 100%, 80%)"
      />
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center w-full px-2 sm:px-4">
        {/* 🔹 Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hi, I'm{' '}
              <span className="text-primary-600 dark:text-primary-400">
                Madesh M
              </span>
            </motion.h1>

            {/* 🔹 Typewriter Animated Text */}
            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-primary-600 dark:text-primary-400 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {displayedText}
              <span className="blinking-cursor">|</span>
            </motion.p>

            <motion.p
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
              variants={itemVariants}
            >
              Analytical and results-driven data professional with hands-on
              experience in data analysis, artificial intelligence, and machine
              learning. Proficient in Python, SQL, and Excel, with a track
              record of building predictive models and AI-driven solutions.
              Recently served as an AI & Data Science Trainer under the Tamil Nadu Government's 
              TNSDC Vetri Nichayam initiative, training and mentoring students in AI/ML technologies.
              Passionate about transforming data into actionable insights and empowering the next generation of data professionals.
            </motion.p>
          </motion.div>

          {/* 🔹 Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <motion.button
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center justify-center group"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              onClick={() => setIsResumeModalOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary inline-flex items-center justify-center group"
            >
              <Download className="mr-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              Download Resume
            </motion.button>
          </motion.div>

          {/* 🔹 Social Links */}
          <motion.div variants={itemVariants} className="flex space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-primary-600 hover:text-white transition-colors duration-200"
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* 🔹 Right Content - Professional Profile Image with Rotating Glow Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
            {/* Light Blue Glowing Ring - Outer Glow (blurred background) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(96, 165, 250, 0.5), rgba(96, 165, 250, 0.2), transparent)',
                filter: 'blur(30px)',
                opacity: 0.9,
              }}
            />
            
            {/* Static Profile Image - Circular, No Rotation */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-dark-900" style={{ padding: '8px' }}>
                <img
                  src={profileImage}
                  alt="Madesh M - AI & ML Engineer"
                  className="w-full h-full rounded-full object-cover"
                  style={{ display: 'block' }}
                />
              </div>
            </div>
            
            {/* Rotating Double Ring - Solid Outer + Water Wave (Interactive with cursor) */}
            <motion.div
              style={{ rotate: smoothRingRotation }}
              className="absolute inset-0 rounded-full pointer-events-none z-20 rotating-glow-ring"
            />
            
            {/* Water Wave Animation - Follows same interactive rotation */}
            <motion.div
              style={{ rotate: smoothRingRotation }}
              className="absolute inset-0 rounded-full pointer-events-none z-30 water-wave-ring"
            />

            {/* Dotted inner orbit line */}
            <motion.div
              style={{ rotate: smoothRingRotation }}
              className="absolute inset-6 rounded-full pointer-events-none hud-orbit-ring"
            />

            {/* Small floating sci‑fi HUD icons that orbit with the ring */}
            {hudIconPositions.map(({ top, left, icon: IconComponent }, index) => (
              <motion.div
                key={index}
                style={{ rotate: smoothRingRotation, top, left }}
                className="absolute -translate-x-1/2 -translate-y-1/2 hud-orbit-icon z-40"
              >
                <IconComponent size={14} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 🔹 Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection('about')}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center items-center hover:border-primary-500 transition-colors duration-200"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full"
          />
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-center mt-2"
        >
          <p className="text-xs text-gray-500 dark:text-gray-400">Scroll to explore</p>
          <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400 mx-auto mt-1" />
        </motion.div>
      </motion.div>

      {/* Resume Download Modal */}
      <AnimatePresence>
        {isResumeModalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsResumeModalOpen(false)}
              className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm z-50"
            />
            
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-dark-700 p-6 flex items-center justify-between rounded-t-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-primary-500 rounded-xl flex items-center justify-center">
                      <Download className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        Download Resume
                      </h2>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Choose a resume tailored to your needs
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsResumeModalOpen(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  </button>
                </div>

                {/* Resume Options */}
                <div className="p-6 space-y-3">
                  {resumes.map((resume) => {
                    const Icon = resume.icon;
                    return (
                      <motion.button
                        key={resume.id}
                        onClick={() => setSelectedResume(resume)}
                        whileHover={{ scale: 1.02, x: 5 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all ${
                          selectedResume?.id === resume.id
                            ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                            : 'border-gray-200 dark:border-dark-700 hover:border-primary-300 dark:hover:border-primary-700 bg-gray-50 dark:bg-dark-900'
                        }`}
                      >
                        <div className={`p-3 rounded-lg bg-gradient-to-r ${resume.color} flex-shrink-0`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 text-left">
                          <div className={`font-semibold text-lg ${
                            selectedResume?.id === resume.id
                              ? 'text-primary-700 dark:text-primary-300'
                              : 'text-gray-900 dark:text-white'
                          }`}>
                            {resume.title}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {resume.description}
                          </div>
                        </div>
                        {selectedResume?.id === resume.id && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center"
                          >
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 bg-white rounded-full"
                            />
                          </motion.div>
                        )}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Download Button */}
                {selectedResume && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-6 border-t border-gray-200 dark:border-dark-700"
                  >
                    {!downloadSuccess ? (
                      <>
                        <a
                          href={selectedResume.file}
                          download
                          onClick={() => {
                            setDownloadSuccess(true);
                            setTimeout(() => {
                              setDownloadSuccess(false);
                              setIsResumeModalOpen(false);
                              setSelectedResume(null);
                            }, 2000);
                          }}
                          className={`w-full flex items-center justify-center gap-3 p-4 bg-gradient-to-r ${selectedResume.color} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all cursor-pointer`}
                        >
                          <Download className="w-5 h-5" />
                          Download {selectedResume.title} Resume
                        </a>
                        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-3">
                          💡 Select the resume that best matches the position you're applying for
                        </p>
                      </>
                    ) : (
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl border-2 border-green-200 dark:border-green-700"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200, damping: 15 }}
                          className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4"
                        >
                          <CheckCircle className="w-10 h-10 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-bold text-green-700 dark:text-green-300 mb-2">
                          Download Started!
                        </h3>
                        <p className="text-sm text-green-600 dark:text-green-400 text-center">
                          Your {selectedResume.title} resume is downloading...
                        </p>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 2, ease: "easeInOut" }}
                          className="mt-4 h-1 bg-green-300 dark:bg-green-700 rounded-full"
                        />
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;
