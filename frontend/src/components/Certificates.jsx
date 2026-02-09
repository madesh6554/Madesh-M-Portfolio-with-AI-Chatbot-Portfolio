import React, { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  Download,
  Eye,
  Briefcase,
  BookOpen,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Layers
} from 'lucide-react';

const getCertificateUrl = (path) => encodeURI(`/certificates/${path}`);

const CATEGORY_META = {
  experience: {
    label: 'Internships',
    icon: Briefcase,
    accent: 'from-sky-500 via-indigo-500 to-purple-500'
  },
  courses: {
    label: 'Courses & Specialisations',
    icon: BookOpen,
    accent: 'from-fuchsia-500 via-purple-500 to-pink-500'
  },
  achievements: {
    label: 'Achievements & Badges',
    icon: Award,
    accent: 'from-emerald-500 via-teal-500 to-cyan-500'
  }
};

const certificateItems = [
  {
    id: 'viz-internship',
    category: 'experience',
    title: 'Data Visualization Internship',
    issuer: 'Cognitive i IT Solutions (P) Ltd',
    date: 'Mar 2024 – Jul 2024',
    summary: 'Built interactive Tableau dashboards for movie industry analytics during a full-time internship.',
    type: 'image',
    asset: 'Internship.jpg',
    tags: ['Tableau', 'Dashboards', 'Client Delivery']
  },
  {
    id: 'oasis-intern',
    category: 'experience',
    title: 'AI & Data Science Internship',
    issuer: 'Oasis Infobyte',
    date: 'Jan 2024',
    summary: 'Completed data science internship tasks covering regression, NLP, and dashboarding deliverables.',
    type: 'pdf',
    asset: 'Madesh M Certificate.pdf',
    tags: ['Python', 'Machine Learning', 'EDA']
  },
  {
    id: 'spacekids-intern',
    category: 'experience',
    title: 'Satellite Systems Internship',
    issuer: 'Space Kids India',
    date: 'Aug 2024',
    summary: 'Contributed to satellite telemetry simulations and outreach programmes as part of a STEM internship.',
    type: 'pdf',
    asset: 'Internship Certificate - Mr. Madesh. M.pdf',
    tags: ['Digital Twin', 'Telemetry', 'STEM']
  },
  {
    id: 'oneapi-sprint',
    category: 'experience',
    title: 'Intel® oneAPI Skill Sprint',
    issuer: 'Boston Training Academy',
    date: 'Oct 2024',
    summary: 'Hands-on accelerator programme focusing on GPU offloading and high-performance analytics with oneAPI.',
    type: 'pdf',
    asset: 'BTA-OneAPI-Certificate-MADESH M.pdf',
    tags: ['oneAPI', 'Heterogeneous Compute', 'Optimization']
  },
  {
    id: 'ai-fellowship',
    category: 'experience',
    title: 'Applied AI Fellowship',
    issuer: 'Boston Training Academy',
    date: 'Dec 2024',
    summary: 'Capstone fellowship covering model deployment, optimisation pipelines, and enterprise AI delivery.',
    type: 'pdf',
    asset: 'BTA-Periyar University-Certificate-Madesh M.pdf',
    tags: ['ModelOps', 'Deployment', 'Capstone']
  },
  {
    id: 'data-analytics-python',
    category: 'courses',
    title: 'Data Analytics with Python',
    issuer: 'NPTEL SWAYAM',
    date: '2024',
    summary: '12-week programme on exploratory analytics, statistics, and machine learning workflows using Python.',
    type: 'pdf',
    asset: 'Data Analytics with Python.pdf',
    tags: ['Analytics', 'Python', 'ML']
  },
  {
    id: 'preprocessing-ml',
    category: 'courses',
    title: 'Preprocessing for Machine Learning',
    issuer: 'DataCamp',
    date: '2024',
    summary: 'Structured feature engineering, scaling, and pipeline design for robust machine learning projects.',
    type: 'pdf',
    asset: 'Preprocessing for Machine Learning in.pdf',
    tags: ['Feature Engineering', 'Pipelines']
  },
  {
    id: 'importing-data-python',
    category: 'courses',
    title: 'Intermediate Importing Data in Python',
    issuer: 'DataCamp',
    date: '2024',
    summary: 'Advanced ingestion patterns from APIs, databases, and web sources with best-practice ETL.',
    type: 'pdf',
    asset: 'imtermediate importing data in python.pdf',
    tags: ['APIs', 'ETL', 'Python']
  },
  {
    id: 'intermediate-sql',
    category: 'courses',
    title: 'Intermediate SQL',
    issuer: 'DataCamp',
    date: '2024',
    summary: 'Window functions, complex joins, and query optimisation for analytics-ready SQL.',
    type: 'pdf',
    asset: 'Intermediate SQL certificate.pdf',
    tags: ['SQL', 'Analytics', 'Optimization']
  },
  {
    id: 'intermediate-python',
    category: 'courses',
    title: 'Intermediate Python',
    issuer: 'DataCamp',
    date: '2023',
    summary: 'Deepened Python fundamentals with comprehensions, visualisation, and pandas-based analytics.',
    type: 'pdf',
    asset: 'Intermediate Python certificate.pdf',
    tags: ['Python', 'Pandas', 'Visualisation']
  },
  {
    id: 'programming-everybody',
    category: 'courses',
    title: 'Programming for Everybody',
    issuer: 'Coursera',
    date: '2023',
    summary: 'Introductory Python programming covering control flow, functions, and data structures.',
    type: 'pdf',
    asset: 'Programming for everybody (python).pdf',
    tags: ['Python Basics', 'Functions']
  },
  {
    id: 'deep-learning-project',
    category: 'courses',
    title: 'Deep Learning Guided Project',
    issuer: 'Coursera',
    date: '2024',
    summary: 'Guided project implementing CNN pipelines for image-based tasks in TensorFlow.',
    type: 'pdf',
    asset: 'Coursera  project certificate.pdf',
    tags: ['TensorFlow', 'CNN']
  },
  {
    id: 'nlp-specialisation',
    category: 'courses',
    title: 'Natural Language Processing Specialisation',
    issuer: 'Coursera',
    date: '2024',
    summary: 'Sequence models, transformers, and attention for practical NLP solutions.',
    type: 'pdf',
    asset: 'Coursera UDY849JI9RSF.pdf',
    tags: ['NLP', 'Transformers']
  },
  {
    id: 'sql-data-science',
    category: 'courses',
    title: 'SQL for Data Science',
    issuer: 'Coursera',
    date: '2023',
    summary: 'Analytics-focused SQL including exploratory queries, case studies, and reporting.',
    type: 'pdf',
    asset: 'SQL for data science.pdf',
    tags: ['SQL', 'Analytics']
  },
  {
    id: 'sql-server-intro',
    category: 'courses',
    title: 'Introduction to SQL Server',
    issuer: 'Great Learning',
    date: '2023',
    summary: 'Hands-on exploration of SQL Server tooling, stored procedures, and relational modelling.',
    type: 'pdf',
    asset: 'Introduction to SQL Server certificate.pdf',
    tags: ['SQL Server', 'DB Design']
  },
  {
    id: 'excel-intro',
    category: 'courses',
    title: 'Introduction to Microsoft Excel',
    issuer: 'Great Learning',
    date: '2023',
    summary: 'Business analytics with Excel covering formulas, charts, and dashboarding fundamentals.',
    type: 'pdf',
    asset: 'Introduction to Microsoft Excel.pdf',
    tags: ['Excel', 'Dashboards']
  },
  {
    id: 'chatgpt-intro',
    category: 'courses',
    title: 'Introduction to ChatGPT',
    issuer: 'Analytics Vidhya',
    date: '2024',
    summary: 'Prompt engineering essentials, tooling, and ethical considerations for generative AI use.',
    type: 'pdf',
    asset: 'Introduction to ChatGPT certificate.pdf',
    tags: ['Generative AI', 'Prompting']
  },
  {
    id: 'intro-python-analyticsvidhya',
    category: 'courses',
    title: 'Introduction to Python',
    issuer: 'Analytics Vidhya',
    date: '2024',
    summary: 'Refreshed Python basics for analytics workflows and scripting automation.',
    type: 'pdf',
    asset: 'introduction for python certificate.pdf',
    tags: ['Python Basics']
  },
  {
    id: 'intro-sql-analyticsvidhya',
    category: 'courses',
    title: 'Introduction to SQL',
    issuer: 'Analytics Vidhya',
    date: '2024',
    summary: 'Core SQL querying concepts for data analysis and reporting.',
    type: 'pdf',
    asset: 'introduction for sql certificate.pdf',
    tags: ['SQL Basics']
  },
  {
    id: 'naan-mudhalvan',
    category: 'courses',
    title: 'Persona Analytics Programme',
    issuer: 'Naan Mudhalvan',
    date: '2024',
    summary: 'Career development programme blending analytics, communication, and project execution.',
    type: 'pdf',
    asset: 'naan muthalvan.pdf',
    tags: ['Career', 'Analytics']
  },
  {
    id: 'python-data-science',
    category: 'courses',
    title: 'Python for Data Science',
    issuer: 'Great Learning',
    date: '2023',
    summary: 'Data science foundations using Python, NumPy, pandas, and visualisation libraries.',
    type: 'pdf',
    asset: 'pyyhon for data science certificate.pdf',
    tags: ['Python', 'Data Science']
  },
  {
    id: 'intro-genai',
    category: 'courses',
    title: 'Introduction to Generative AI',
    issuer: 'Analytics Vidhya',
    date: 'Sep 2024',
    summary: 'Overview of generative AI concepts, tooling, and responsible deployment strategies.',
    type: 'pdf',
    asset: 'Madesh M - 2024-09-20.pdf',
    tags: ['Generative AI']
  },
  {
    id: 'kaggle-python',
    category: 'achievements',
    title: 'Python Programming',
    issuer: 'Kaggle',
    date: '2024',
    summary: 'Competency badge earned through hands-on coding challenges and notebook-based projects.',
    type: 'image',
    asset: 'Madesh M - Python.png',
    tags: ['Kaggle', 'Python']
  },
  {
    id: 'kaggle-deep-learning',
    category: 'achievements',
    title: 'Intro to Deep Learning',
    issuer: 'Kaggle',
    date: '2024',
    summary: 'Badge completion covering convolutional networks, transfer learning, and evaluation.',
    type: 'image',
    asset: 'Madesh M - Intro to Deep Learning.png',
    tags: ['Deep Learning', 'Kaggle']
  },
  {
    id: 'kaggle-programming',
    category: 'achievements',
    title: 'Intro to Programming',
    issuer: 'Kaggle',
    date: '2024',
    summary: 'Problem-solving challenges on functions, loops, and debugging in Python.',
    type: 'image',
    asset: 'Madesh M - Intro to Programming.png',
    tags: ['Programming', 'Problem Solving']
  },
  {
    id: 'nauhri-anicat',
    category: 'achievements',
    title: 'AI NCAT Participation',
    issuer: 'Naukri Campus',
    date: 'May 2025',
    summary: 'Recognised for participating in the national AI competency assessment.',
    type: 'pdf',
    asset: 'naukri_campus_ai_ncat_participation_may_2025.pdf',
    tags: ['Assessment', 'AI Literacy']
  },
  {
    id: 'nvidia-dli',
    category: 'achievements',
    title: 'NVIDIA Deep Learning Institute',
    issuer: 'NVIDIA',
    date: '2024',
    summary: 'Completed accelerated computing modules on CUDA, deep learning, and GPU optimisation.',
    type: 'pdf',
    asset: 'My Learning _ NVIDIA.pdf',
    tags: ['CUDA', 'GPU', 'Deep Learning']
  },
  {
    id: 'tableau-tutorial',
    category: 'achievements',
    title: 'Tableau Data Visualisation Basics',
    issuer: 'Analytics Vidhya',
    date: '2024',
    summary: 'Certification for mastering Tableau storytelling techniques and dashboard composition.',
    type: 'pdf',
    asset: '5211013_Tableau_Data_Visualization_Basics_Tutorial_5010791-Ceritificate-1.pdf',
    tags: ['Tableau', 'Storytelling']
  },
  {
    id: 'tata-forage',
    category: 'achievements',
    title: 'Tata Group Data Analytics Virtual Experience',
    issuer: 'Forage | Tata Group',
    date: '2024',
    summary: 'Virtual internship simulating analytics delivery for corporate stakeholders.',
    type: 'pdf',
    asset: 'MyXvBcppsW2FkNYCX_Tata Group_Ekaco7cv27duELveq_1723285001506_completion_certificate.pdf',
    tags: ['Business Analytics', 'Storytelling']
  },
  {
    id: 'advanced-sql-badge',
    category: 'achievements',
    title: 'Advanced SQL Badge',
    issuer: 'Great Learning',
    date: '2023',
    summary: 'Advanced SQL projects focusing on optimisation, case studies, and analytics.',
    type: 'pdf',
    asset: 'certificate.pdf',
    tags: ['SQL', 'Projects']
  },
  {
    id: 'industrial-visit',
    category: 'achievements',
    title: 'Industrial Visit Insight',
    issuer: 'Kerala Tech Hub',
    date: '2024',
    summary: 'Industry immersion covering innovation labs, product showcases, and networking.',
    type: 'pdf',
    asset: 'cochin-iv-2024-certificate.pdf',
    tags: ['Industry Connect']
  },
  {
    id: 'space-outreach',
    category: 'achievements',
    title: 'Space Outreach Mentor',
    issuer: 'Space Kids India',
    date: '2024',
    summary: 'Recognised for delivering STEM mentorship workshops and outreach initiatives.',
    type: 'image',
    asset: 'WhatsApp Image 2024-04-24 at 08.55.09_36115d06.jpg',
    tags: ['STEM', 'Mentorship']
  },
  {
    id: 'tableau-excellence',
    category: 'achievements',
    title: 'Data Visualisation Excellence',
    issuer: 'Cognitive i IT Solutions',
    date: '2024',
    summary: 'Internal award for excellence in data storytelling and dashboard craftsmanship.',
    type: 'image',
    asset: 'Data Visualization with Tableau.jpg',
    tags: ['Tableau', 'Recognition']
  }
];

const sliderVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: 'easeOut' }
  },
  exit: (direction) => ({
    x: direction < 0 ? 80 : -80,
    opacity: 0,
    transition: { duration: 0.35, ease: 'easeIn' }
  })
};

const Certificates = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [showFullList, setShowFullList] = useState(false);

  const categoryStats = useMemo(() => {
    return Object.entries(CATEGORY_META).map(([id, meta]) => {
      const count = certificateItems.filter((item) => item.category === id).length;
      return { id, count, ...meta };
    });
  }, []);

  const filters = useMemo(() => {
    return [
      {
        id: 'all',
        label: 'All Credentials',
        count: certificateItems.length
      },
      ...categoryStats.map((stat) => ({
        id: stat.id,
        label: stat.label,
        count: stat.count
      }))
    ];
  }, [categoryStats]);

  const filteredCertificates = useMemo(() => {
    if (activeFilter === 'all') {
      return certificateItems;
    }
    return certificateItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  useEffect(() => {
    setCurrentIndex(0);
    setShowFullList(false);
  }, [activeFilter]);

  useEffect(() => {
    if (filteredCertificates.length < 2) return undefined;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % filteredCertificates.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [filteredCertificates]);

  const goTo = (index) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const goNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % filteredCertificates.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + filteredCertificates.length) % filteredCertificates.length);
  };

  const current = filteredCertificates[currentIndex];
  const totalCertificates = certificateItems.length;

  return (
    <section id="certificates" className="py-20 md:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-dark-900 dark:via-dark-900 dark:to-dark-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="space-y-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-200 text-sm font-medium">
            <Layers size={16} />
            Certifications
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Trusted Credentials & Professional Milestones
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A living library of internships, specialisations, and badges that demonstrate my commitment to
              continuous learning and applied AI excellence.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                label: 'Total Credentials',
                value: totalCertificates,
                description: 'Across internships, courses, and achievements.'
              },
              {
                icon: Briefcase,
                label: 'Internships Completed',
                value: categoryStats.find((c) => c.id === 'experience')?.count ?? 0,
                description: 'Industry programmes delivering real-world outcomes.'
              },
              {
                icon: BookOpen,
                label: 'Courses & Specialisations',
                value: categoryStats.find((c) => c.id === 'courses')?.count ?? 0,
                description: 'Structured learning journeys across analytics and AI.'
              }
            ].map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-3xl bg-white dark:bg-dark-900 border border-gray-200/60 dark:border-dark-700/60 shadow-lg shadow-primary-500/5 p-6 text-left space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-200">
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                      <p className="text-2xl font-semibold text-gray-900 dark:text-white">{stat.value}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-all border ${
                activeFilter === filter.id
                  ? 'bg-primary-600 border-primary-600 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-white dark:bg-dark-900 border-gray-200 dark:border-dark-700 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-800'
              }`}
            >
              {filter.label}
              <span className="ml-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-400">
                {filter.count}
              </span>
            </motion.button>
          ))}
        </div>

        {current && (
          <div className="space-y-10">
            <div className="relative">
              <div className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-tr from-primary-500 via-purple-500 to-sky-500 dark:opacity-30"></div>
              <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-dark-700 bg-white/90 dark:bg-dark-900/90 shadow-2xl shadow-primary-500/10 backdrop-blur-lg">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="p-8 lg:p-12 space-y-5">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-300">
                      {CATEGORY_META[current.category]?.label || 'Credential'}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white leading-snug">
                        {current.title}
                      </h3>
                      <p className="text-base text-gray-600 dark:text-gray-300">{current.summary}</p>
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-500 dark:text-gray-400">
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-dark-800">
                        <Sparkles size={14} />
                        {current.issuer}
                      </span>
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-dark-800">
                        <BookOpen size={14} />
                        {current.date}
                      </span>
                    </div>
                    {current.tags?.length ? (
                      <div className="flex flex-wrap gap-2">
                        {current.tags.map((tag) => (
                          <span
                            key={`${current.id}-${tag}`}
                            className="px-3 py-1 rounded-full text-xs font-medium bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    ) : null}
                    <div className="flex flex-wrap gap-4 pt-4">
                      <a
                        href={getCertificateUrl(current.asset)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-500 transition-colors"
                      >
                        <Eye size={16} />
                        View Credential
                      </a>
                      <a
                        href={getCertificateUrl(current.asset)}
                        download
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-200 font-medium hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors"
                      >
                        <Download size={16} />
                        Save Copy
                      </a>
                    </div>
                  </div>

                  <div className="relative bg-gray-50 dark:bg-dark-950 flex items-center justify-center p-10 overflow-hidden min-h-[420px]">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                      <motion.div
                        key={current.id}
                        custom={direction}
                        variants={sliderVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="absolute inset-0 w-full h-full flex items-center justify-center"
                      >
                        {current.type === 'image' ? (
                          <img
                            src={getCertificateUrl(current.asset)}
                            alt={current.title}
                            className="max-h-[420px] w-full object-contain rounded-2xl shadow-lg"
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-full max-w-2xl h-full flex items-center justify-center">
                            <div className="w-full h-[420px] rounded-2xl border border-gray-200 dark:border-dark-700 shadow-lg bg-white dark:bg-dark-900 overflow-hidden">
                              <object
                                data={`${getCertificateUrl(current.asset)}#view=FitH&scrollbar=0&toolbar=0`}
                                type="application/pdf"
                                className="w-full h-full"
                              >
                                <iframe
                                  src={`${getCertificateUrl(current.asset)}#view=FitH&scrollbar=0&toolbar=0`}
                                  title={`${current.title} certificate preview`}
                                  className="w-full h-full"
                                ></iframe>
                                <div className="flex flex-col items-center justify-center h-full gap-4 text-primary-600 dark:text-primary-200 p-6">
                                  <Award size={48} />
                                  <p className="text-sm text-center">
                                    Your browser can&#39;t preview this PDF inline. Use the buttons below to open or
                                    download the credential.
                                  </p>
                                </div>
                              </object>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                    {filteredCertificates.length > 1 && (
                      <>
                        <button
                          type="button"
                          onClick={goPrev}
                          className="absolute top-1/2 left-4 -translate-y-1/2 rounded-full bg-white/90 dark:bg-dark-800/90 border border-gray-200 dark:border-dark-600 p-2 text-gray-700 dark:text-gray-300 shadow-lg hover:bg-white dark:hover:bg-dark-700 transition"
                          aria-label="Previous certificate"
                        >
                          <ChevronLeft size={18} />
                        </button>
                        <button
                          type="button"
                          onClick={goNext}
                          className="absolute top-1/2 right-4 -translate-y-1/2 rounded-full bg-white/90 dark:bg-dark-800/90 border border-gray-200 dark:border-dark-600 p-2 text-gray-700 dark:text-gray-300 shadow-lg hover:bg-white dark:hover:bg-dark-700 transition"
                          aria-label="Next certificate"
                        >
                          <ChevronRight size={18} />
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {filteredCertificates.length > 1 && (
              <div className="flex flex-wrap justify-center gap-2">
                {filteredCertificates.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => goTo(idx)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      idx === currentIndex
                        ? 'bg-primary-600 scale-125'
                        : 'bg-gray-300 dark:bg-dark-700 hover:bg-primary-400'
                    }`}
                    aria-label={`Go to ${item.title}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        <div className="space-y-6 text-center">
          <p className="text-base text-gray-600 dark:text-gray-300">
            Want to dive deeper into every credential?
          </p>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setShowFullList((prev) => !prev)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-600 text-white font-medium hover:bg-primary-500 transition-colors"
          >
            {showFullList ? 'Hide Full Certificate List' : 'View Full Certificate Catalogue'}
          </motion.button>
        </div>

        <AnimatePresence initial={false}>
          {showFullList && (
            <motion.div
              key="full-certificate-grid"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="pt-10">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 min-w-[320px]">
                  {filteredCertificates.map((item) => {
                    const category = CATEGORY_META[item.category];
                    const CategoryIcon = category?.icon ?? Sparkles;
                    return (
                      <div
                        key={`grid-${item.id}`}
                        className="rounded-3xl border border-gray-200 dark:border-dark-700 bg-white dark:bg-dark-900 shadow-md hover:shadow-xl transition-all group"
                      >
                        <div
                          className={`rounded-t-3xl p-4 text-white bg-gradient-to-r ${
                            category?.accent ?? 'from-primary-500 to-primary-700'
                          } flex items-center gap-3`}
                        >
                          <CategoryIcon size={18} />
                          <span className="text-sm font-semibold">{category?.label ?? 'Credential'}</span>
                        </div>
                        <div className="p-5 space-y-3">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{item.issuer}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">{item.summary}</p>
                          {item.tags?.length ? (
                            <div className="flex flex-wrap gap-2 pt-1">
                              {item.tags.slice(0, 3).map((tag) => (
                                <span
                                  key={`${item.id}-grid-${tag}`}
                                  className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-dark-800 text-gray-600 dark:text-gray-300"
                                >
                                  {tag}
                                </span>
                              ))}
                              {item.tags.length > 3 && (
                                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-dark-800 text-gray-500 dark:text-gray-400">
                                  +{item.tags.length - 3}
                                </span>
                              )}
                            </div>
                          ) : null}
                          <div className="flex gap-3 pt-2">
                            <a
                              href={getCertificateUrl(item.asset)}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-primary-50 text-primary-700 dark:bg-primary-900/30 dark:text-primary-200 hover:bg-primary-100 dark:hover:bg-primary-900/50"
                            >
                              <Eye size={14} />
                              View
                            </a>
                            <a
                              href={getCertificateUrl(item.asset)}
                              download
                              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 dark:bg-dark-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700"
                            >
                              <Download size={14} />
                              Save
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificates;

