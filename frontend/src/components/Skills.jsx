import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { useTheme } from '../contexts/ThemeContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('programming');
  const { isDark } = useTheme();

  const skillsData = {
    programming: {
      title: 'Programming Languages & Core',
      skills: [
        { name: 'Python', level: 95, color: '#3776ab' },
        { name: 'JavaScript (ES6+)', level: 85, color: '#f7df1e' },
        { name: 'TypeScript (Basics)', level: 70, color: '#3178c6' },
        { name: 'SQL', level: 90, color: '#336791' },
      ]
    },
    ai_ml: {
      title: 'AI, ML & Data Science',
      skills: [
        { name: 'TensorFlow / Keras', level: 88, color: '#ff6f00' },
        { name: 'Scikit-Learn', level: 92, color: '#f7931e' },
        { name: 'LangChain / LangGraph', level: 80, color: '#2b6cb0' },
        { name: 'Vector DB (FAISS/Chroma)', level: 78, color: '#805ad5' },
        { name: 'OpenCV', level: 82, color: '#5c3ee8' },
        { name: 'Pandas', level: 95, color: '#150458' },
        { name: 'NumPy', level: 92, color: '#4d77cf' },
      ]
    },
    visualization: {
      title: 'Data Visualization',
      skills: [
        { name: 'Tableau', level: 88, color: '#e97627' },
        { name: 'Plotly', level: 82, color: '#3f4f75' },
        { name: 'Matplotlib', level: 86, color: '#11557c' },
        { name: 'Seaborn', level: 84, color: '#3776ab' },
      ]
    },
    tools: {
      title: 'Frameworks, Tools & Platforms',
      skills: [
        { name: 'React / Next.js', level: 85, color: '#61dafb' },
        { name: 'Tailwind CSS', level: 88, color: '#06b6d4' },
        { name: 'Flask / FastAPI', level: 86, color: '#000000' },
        { name: 'Streamlit', level: 90, color: '#ff4b4b' },
        { name: 'MySQL / SQL Server', level: 85, color: '#00758f' },
        { name: 'Git & GitHub', level: 88, color: '#f05032' },
        { name: 'Jupyter / Colab', level: 92, color: '#f37626' },
        { name: 'NVIDIA oneAPI / CUDA (Basics)', level: 65, color: '#76b900' },
        { name: 'MediaPipe / Three.js (Basics)', level: 60, color: '#7f9cf5' },
        { name: 'Whisper / TTS (ElevenLabs)', level: 70, color: '#22c55e' },
        { name: 'Node.js / Express / Firebase', level: 70, color: '#339933' },
      ]
    }
  };

  const categories = [
    { id: 'programming', name: 'Programming', icon: '💻' },
    { id: 'ai_ml', name: 'AI & ML', icon: '🤖' },
    { id: 'visualization', name: 'Visualization', icon: '📊' },
    { id: 'tools', name: 'Tools', icon: '🛠️' },
  ];

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

  const chartData = {
    labels: skillsData[activeCategory].skills.map(skill => skill.name),
    datasets: [
      {
        label: 'Proficiency Level',
        data: skillsData[activeCategory].skills.map(skill => skill.level),
        backgroundColor: skillsData[activeCategory].skills.map(skill => skill.color + '80'),
        borderColor: skillsData[activeCategory].skills.map(skill => skill.color),
        borderWidth: 2,
        borderRadius: 8,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: isDark ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleFont: {
          size: 14,
        },
        bodyFont: {
          size: 13,
        },
        callbacks: {
          label: function(context) {
            return `Proficiency: ${context.parsed.y}%`;
          }
        }
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          color: isDark ? '#d1d5db' : '#6b7280',
          font: {
            size: 11,
          },
        },
        grid: {
          color: isDark ? 'rgba(75, 85, 99, 0.3)' : '#e5e7eb',
        },
      },
      x: {
        ticks: {
          color: isDark ? '#d1d5db' : '#6b7280',
          font: {
            size: 11,
          },
          maxRotation: 45,
          minRotation: 45,
        },
        grid: {
          display: false,
        },
      },
    },
  };

  // Calculate actual skill distribution based on active category
  const calculateCategoryAverage = (categoryId) => {
    const skills = skillsData[categoryId].skills;
    const average = skills.reduce((sum, skill) => sum + skill.level, 0) / skills.length;
    return Math.round(average);
  };

  const doughnutData = {
    labels: ['Programming', 'AI & ML', 'Visualization', 'Tools'],
    datasets: [
      {
        data: [
          calculateCategoryAverage('programming'),
          calculateCategoryAverage('ai_ml'),
          calculateCategoryAverage('visualization'),
          calculateCategoryAverage('tools'),
        ],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',   // Blue for Programming
          'rgba(16, 185, 129, 0.8)',   // Green for AI & ML
          'rgba(245, 158, 11, 0.8)',   // Orange for Visualization
          'rgba(239, 68, 68, 0.8)',    // Red for Tools
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(239, 68, 68, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: isDark ? '#d1d5db' : '#6b7280',
          padding: 20,
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: isDark ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.8)',
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.parsed}%`;
          }
        }
      },
    },
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
              My <span className="text-primary-600 dark:text-primary-400">Skills</span>
            </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Technologies derived from my portfolio projects and verified certificates.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-dark-600'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Visualization */}
          <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-12">
            {/* Bar Chart */}
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {skillsData[activeCategory].title} - Proficiency Levels
              </h3>
              <div className="h-80 md:h-96">
                <Bar data={chartData} options={chartOptions} />
              </div>
            </div>

            {/* Doughnut Chart */}
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Overall Skill Distribution
              </h3>
              <div className="h-80 md:h-96 flex items-center justify-center">
                <Doughnut data={doughnutData} options={doughnutOptions} />
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants} className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
              Detailed Skills Breakdown
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(skillsData).map(([categoryId, categoryData]) => (
                <motion.div
                  key={categoryId}
                  whileHover={{ scale: 1.05 }}
                  className={`card ${
                    categoryId === 'tools' ? 'md:col-span-2 lg:col-span-3' : ''
                  }`}
                >
                  <h3
                    className={`text-xl font-bold text-gray-900 dark:text-white mb-4 ${
                      categoryId === 'tools' ? 'text-center' : ''
                    }`}
                  >
                    {categoryData.title}
                  </h3>
                  <div
                    className={
                      categoryId === 'tools'
                        ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'
                        : 'space-y-3'
                    }
                  >
                    {categoryData.skills.map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center gap-2">
                          <span className="text-gray-700 dark:text-gray-300 font-medium text-sm md:text-base truncate">
                            {skill.name}
                          </span>
                          <span className="text-primary-600 dark:text-primary-400 font-bold text-sm md:text-base whitespace-nowrap">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-3 shadow-inner">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="h-3 rounded-full shadow-sm"
                            style={{ backgroundColor: skill.color }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications & Learning */}
          <motion.div variants={itemVariants} className="card">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Continuous Learning
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Currently Learning
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Advanced Deep Learning with Transformers
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    MLOps and Model Deployment
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                    Cloud Computing (AWS/Azure)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Certifications
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    TensorFlow Developer Certificate
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    AWS Machine Learning Specialty
                  </li>
                  <li className="flex items-center text-gray-600 dark:text-gray-400">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Google Data Analytics Certificate
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
