import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Award, Code, BarChart2 } from 'lucide-react';

const About = () => {
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

  const education = [
    {
      degree: "M.Sc. Data Science",
      institution: "Periyar University, Salem",
      year: "2023-2025",
      description: "Specialized in machine learning, statistical analysis, and data visualization",
      status: "Completed",
      icon: "🎓",
      degreeColor: "text-primary-700 dark:text-primary-400",
      institutionColor: "text-slate-700 dark:text-slate-300"
    },
    {
      degree: "B.Sc. Mathematics",
      institution: "Arignar Anna Govt Arts College, Namakkal",
      year: "2020-2023",
      description: "Strong foundation in mathematical concepts and analytical thinking",
      status: "Completed",
      icon: "📊",
      degreeColor: "text-primary-700 dark:text-primary-400",
      institutionColor: "text-slate-700 dark:text-slate-300"
    }
  ];

  const achievements = [
    "Built multiple machine learning models with 90%+ accuracy",
    "Developed computer vision applications using OpenCV and TensorFlow",
    "Created interactive data visualization dashboards using Tableau",
    "Contributed to open-source AI projects on GitHub"
  ];

  const interests = [
    "Machine Learning & Deep Learning",
    "Computer Vision & Image Processing",
    "Natural Language Processing",
    "Data Visualization & Analytics",
    "AI Ethics & Responsible AI"
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
              About <span className="text-primary-600 dark:text-primary-400">Me</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-2">
              Get to know more about my journey, education, and passion for AI & Data Science
            </p>
          </motion.div>

          {/* Bio Section */}
          <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                My Story
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  I'm an analytical and results-driven data professional based in Salem, Tamil Nadu, India. 
                  My journey in data science began with my strong foundation in Mathematics, which led me 
                  to pursue M.Sc. in Data Science at Periyar University. I discovered my passion for 
                  transforming raw data into actionable insights.
                </p>
                <p>
                  With hands-on experience in Python, SQL, and Excel, I specialize in building predictive 
                  models and AI-driven solutions. My mathematical background gives me a unique perspective 
                  on problem-solving and analytical thinking, making me effective at tackling complex 
                  data challenges.
                </p>
                <p>
                  Recently, I had the privilege of serving as an AI & Data Science Trainer under the Tamil Nadu 
                  Government's TNSDC Vetri Nichayam initiative, where I trained and mentored students in 
                  Artificial Intelligence, Machine Learning, and Data Science. This experience allowed me to 
                  combine my technical expertise with my passion for education, delivering structured technical 
                  sessions and hands-on workshops to empower the next generation of data professionals.
                </p>
                <p>
                  I'm passionate about leveraging artificial intelligence and machine learning to solve 
                  real-world problems. When I'm not analyzing data or training students, you can find me 
                  exploring new mathematical concepts, working on innovative projects, or continuously learning 
                  about the latest developments in AI and data science.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 p-1">
                  <div className="w-full h-full rounded-2xl bg-white dark:bg-dark-800 p-8 flex flex-col justify-center items-center">
                    <Code className="w-16 h-16 text-primary-600 dark:text-primary-400 mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      AI & ML Engineer
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-center">
                      Passionate about creating intelligent solutions
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants} className="space-y-20">
            {/* Header */}
            <div className="text-center space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 mb-6"
              >
                <span className="text-3xl">🎓</span>
              </motion.div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl font-thin text-gray-900 dark:text-white tracking-wide"
              >
                Education
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-500 dark:text-gray-400 text-xl font-light max-w-2xl mx-auto leading-relaxed"
              >
                Academic foundation in mathematics and data science
              </motion.p>
            </div>
            
          {/* Education Cards (premium glassmorphism) */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {education.map((item, idx) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 * idx }}
                viewport={{ once: true, amount: 0.4 }}
                className="group relative rounded-3xl border border-white/20 dark:border-white/10 bg-white/10 dark:bg-white/5 backdrop-blur-xl shadow-xl overflow-hidden"
              >
                {/* Decorative gradient orbs */}
                <div className="pointer-events-none absolute -top-6 -right-6 h-16 w-16 rounded-full bg-gradient-to-br from-blue-500/40 to-purple-500/40 blur-xl transition-opacity duration-500 group-hover:opacity-80" />
                <div className="pointer-events-none absolute -bottom-6 -left-6 h-14 w-14 rounded-full bg-gradient-to-br from-emerald-400/40 to-teal-400/40 blur-xl transition-opacity duration-500 group-hover:opacity-80" />

                <div className="relative p-7 md:p-9">
                  {/* Icon chip */}
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-2xl glass-elevate bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg">
                    {idx === 0 ? (
                      <GraduationCap className="w-6 h-6" />
                    ) : (
                      <BarChart2 className="w-6 h-6" />
                    )}
                  </div>

                  {/* Degree */}
                  <h3 className="mt-5 text-2xl md:text-3xl font-semibold tracking-tight">
                    <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">
                      {item.degree}
                    </span>
                  </h3>

                  {/* University + duration */}
                  <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <p className="text-gray-800 dark:text-gray-200 font-medium">
                      {item.institution || item.university}
                    </p>
                    <span className="text-sm text-gray-500/90 dark:text-gray-400/90">
                      {item.year || item.duration}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Hover beam */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-3xl" />
                </div>
              </motion.div>
            ))}
          </div>
            
            {/* Elegant Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1 }}
              className="flex items-center justify-center space-x-4 max-w-md mx-auto"
            >
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent flex-1"></div>
              <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent flex-1"></div>
            </motion.div>
          </motion.div>

          {/* Achievements & Interests */}
          <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-12">
            {/* Achievements */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
                <Award className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-3" />
                Key Achievements
              </h2>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-primary-600 dark:text-primary-400 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-600 dark:text-gray-400">
                      {achievement}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center">
                <Code className="w-8 h-8 text-primary-600 dark:text-primary-400 mr-3" />
                Areas of Interest
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 bg-gray-100 dark:bg-dark-700 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200"
                  >
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      {interest}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-dark-800 px-6 py-3 rounded-full">
              <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                Based in Salem, Tamil Nadu, India
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
