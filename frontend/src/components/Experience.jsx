import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Users, GraduationCap, Rocket, Code, BarChart3 } from 'lucide-react';

const Experience = () => {
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

  const experiences = [
    {
      id: 'tnsdc-trainer',
      type: 'professional',
      title: 'AI & Data Science Trainer',
      company: 'TNSDC Vetri Nichayam Initiative',
      organization: 'Edukators & Cultus Education | Government of Tamil Nadu Sponsored Program',
      duration: 'Dec 2025 – Feb 2026',
      location: 'Tamil Nadu, India',
      description: 'Worked as an AI & Data Science Trainer under the Tamil Nadu Government\'s TNSDC Vetri Nichayam initiative, where I trained and mentored students in Artificial Intelligence, Machine Learning, and Data Science.',
      responsibilities: [
        'Delivered structured technical sessions on AI, ML, and Data Science fundamentals',
        'Conducted hands-on workshops and practical training sessions',
        'Guided students to build real-world AI/ML projects from conception to deployment',
        'Mentored students in hybrid mode (offline classroom sessions and online mentoring)',
        'Prepared students for technical assessments and placement opportunities',
        'Empowered students with practical industry-relevant skills'
      ],
      technologies: ['AI/ML', 'Data Science', 'Python', 'Machine Learning', 'Training & Mentoring'],
      icon: GraduationCap,
      gradient: 'from-blue-600 via-indigo-600 to-purple-600',
      badge: 'Government Program'
    },
    {
      id: 'cognitive-internship',
      type: 'internship',
      title: 'Data Visualization Intern',
      company: 'Cognitive i IT Solutions (P) Ltd',
      organization: 'Full-time Internship',
      duration: 'Mar 2024 – Jul 2024',
      location: 'Remote',
      description: 'Built interactive Tableau dashboards for movie industry analytics during a full-time internship, delivering client-ready data visualization solutions.',
      responsibilities: [
        'Developed interactive Tableau dashboards for movie industry analytics',
        'Created data visualization solutions for client delivery',
        'Performed data analysis and prepared insights for stakeholders',
        'Collaborated with team members on dashboard design and implementation'
      ],
      technologies: ['Tableau', 'Data Visualization', 'Dashboards', 'Client Delivery', 'Analytics'],
      icon: BarChart3,
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      badge: 'Full-time'
    },
    {
      id: 'oasis-internship',
      type: 'internship',
      title: 'AI & Data Science Intern',
      company: 'Oasis Infobyte',
      organization: 'Data Science Internship Program',
      duration: 'Jan 2024',
      location: 'Remote',
      description: 'Completed data science internship tasks covering regression analysis, NLP applications, and dashboarding deliverables.',
      responsibilities: [
        'Implemented regression models for predictive analytics',
        'Developed NLP applications for text processing and analysis',
        'Created data visualization dashboards',
        'Completed end-to-end data science project deliverables'
      ],
      technologies: ['Python', 'Machine Learning', 'NLP', 'EDA', 'Regression', 'Data Science'],
      icon: Code,
      gradient: 'from-purple-500 via-pink-500 to-rose-500',
      badge: 'Internship'
    },
    {
      id: 'spacekids-internship',
      type: 'internship',
      title: 'Satellite Systems Intern',
      company: 'Space Kids India',
      organization: 'STEM Internship Program',
      duration: 'Aug 2024',
      location: 'Remote',
      description: 'Contributed to satellite telemetry simulations and outreach programmes as part of a STEM internship focused on space technology.',
      responsibilities: [
        'Worked on satellite telemetry simulations and data analysis',
        'Contributed to digital twin prototypes for satellite health monitoring',
        'Participated in STEM outreach and mentorship programs',
        'Developed technical documentation and project reports'
      ],
      technologies: ['Digital Twin', 'Telemetry', 'STEM', 'Satellite Systems', 'Simulations'],
      icon: Rocket,
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      badge: 'STEM Program'
    },
    {
      id: 'oneapi-sprint',
      type: 'training',
      title: 'Intel® oneAPI Skill Sprint Participant',
      company: 'Boston Training Academy',
      organization: 'High-Performance Computing Program',
      duration: 'Oct 2024',
      location: 'Hybrid',
      description: 'Hands-on accelerator programme focusing on GPU offloading and high-performance analytics with Intel oneAPI tools.',
      responsibilities: [
        'Learned GPU offloading techniques for high-performance computing',
        'Implemented optimized analytics solutions using oneAPI',
        'Explored heterogeneous computing architectures',
        'Completed hands-on projects on performance optimization'
      ],
      technologies: ['oneAPI', 'Heterogeneous Compute', 'GPU Optimization', 'HPC', 'C++'],
      icon: Code,
      gradient: 'from-indigo-500 via-blue-500 to-cyan-500',
      badge: 'Accelerator Program'
    },
    {
      id: 'ai-fellowship',
      type: 'training',
      title: 'Applied AI Fellowship',
      company: 'Boston Training Academy',
      organization: 'Capstone Fellowship Program',
      duration: 'Dec 2024',
      location: 'Hybrid',
      description: 'Capstone fellowship covering model deployment, optimisation pipelines, and enterprise AI delivery strategies.',
      responsibilities: [
        'Designed and implemented model deployment pipelines',
        'Developed optimization strategies for AI models',
        'Created enterprise AI delivery solutions',
        'Completed capstone project on end-to-end AI deployment'
      ],
      technologies: ['ModelOps', 'Deployment', 'MLOps', 'Enterprise AI', 'Capstone'],
      icon: Rocket,
      gradient: 'from-violet-500 via-purple-500 to-fuchsia-500',
      badge: 'Fellowship'
    }
  ];

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
              Professional <span className="text-primary-600 dark:text-primary-400">Experience</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-2">
              A journey through my professional roles, internships, and training programs in AI, Data Science, and Technology
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative pt-8">
            {/* Timeline Line - Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-primary-500 to-primary-600 dark:from-primary-600 dark:via-primary-500 dark:to-primary-400 transform -translate-x-1/2 z-0"></div>
            {/* Timeline Line - Mobile */}
            <div className="md:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 via-primary-500 to-primary-600 dark:from-primary-600 dark:via-primary-500 dark:to-primary-400 z-0"></div>

            {/* Experience Cards */}
            <div className="space-y-12 md:space-y-16 relative z-10">
              {experiences.map((exp, idx) => {
                const Icon = exp.icon;
                const isEven = idx % 2 === 0;
                
                return (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className={`relative flex items-start md:items-center ${
                      idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-20 flex-shrink-0">
                      <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${exp.gradient} p-0.5 shadow-lg`}>
                        <div className="w-full h-full rounded-full bg-white dark:bg-dark-900 flex items-center justify-center">
                          <Icon className="w-5 h-5 md:w-7 md:h-7 text-primary-600 dark:text-primary-400" />
                        </div>
                      </div>
                    </div>

                    {/* Experience Card */}
                    <div className={`w-full md:w-5/12 ml-16 sm:ml-20 md:ml-0 pl-2 sm:pl-0 ${
                      isEven ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                    }`}>
                      <motion.div
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="group relative rounded-3xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-xl shadow-xl overflow-hidden"
                      >
                        {/* Decorative gradient orbs */}
                        <div className={`pointer-events-none absolute -top-6 -right-6 h-20 w-20 rounded-full bg-gradient-to-br ${exp.gradient} opacity-40 blur-xl transition-opacity duration-500 group-hover:opacity-60`} />
                        <div className={`pointer-events-none absolute -bottom-6 -left-6 h-16 w-16 rounded-full bg-gradient-to-br ${exp.gradient} opacity-30 blur-xl transition-opacity duration-500 group-hover:opacity-50`} />

                        <div className="relative p-7 md:p-9">
                          {/* Badge */}
                          <div className="flex items-center gap-3 mb-4">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${exp.gradient} text-white shadow-md`}>
                              {exp.badge}
                            </span>
                            <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                              {exp.type}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">
                            <span className={`bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}>
                              {exp.title}
                            </span>
                          </h3>

                          {/* Company & Organization */}
                          <div className="space-y-1 mb-4">
                            <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                              {exp.company}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {exp.organization}
                            </p>
                          </div>

                          {/* Duration & Location */}
                          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                            {exp.description}
                          </p>

                          {/* Responsibilities */}
                          {exp.responsibilities && exp.responsibilities.length > 0 && (
                            <div className="mb-4">
                              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                Key Responsibilities:
                              </h4>
                              <ul className="space-y-2">
                                {exp.responsibilities.map((responsibility, rIdx) => (
                                  <li key={rIdx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.gradient} flex-shrink-0`}></span>
                                    <span>{responsibility}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Technologies */}
                          {exp.technologies && exp.technologies.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                              {exp.technologies.map((tech, tIdx) => (
                                <span
                                  key={tIdx}
                                  className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.gradient} bg-opacity-10 dark:bg-opacity-20 text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50`}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          )}

                          {/* Hover beam */}
                          <div className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-3xl`} />
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Summary Section */}
          <motion.div
            variants={itemVariants}
            className="mt-20 text-center"
          >
            <div className="inline-block rounded-3xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-xl shadow-xl p-8 md:p-12 max-w-4xl">
              <Briefcase className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Building Experience Across Industries
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                From training the next generation of AI professionals under government initiatives to delivering 
                client-ready data visualization solutions, my experience spans education, industry internships, 
                and specialized training programs. Each role has strengthened my expertise in AI, Machine Learning, 
                and Data Science while contributing to meaningful projects and student success.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;

