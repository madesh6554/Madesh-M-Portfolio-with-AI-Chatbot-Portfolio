import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'madesh6554@gmail.com',
      link: 'mailto:madesh6554@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Dharmapuri, Tamil Nadu',
      link: null
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 6374891755',
      link: 'tel:+916374891755'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/madesh6554', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/madesh-m-15037b273', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/ChoCoKingMadesh', label: 'Twitter' },
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
              Get In <span className="text-primary-600 dark:text-primary-400">Touch</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-2">
              Have a project in mind or want to collaborate? I'd love to hear from you. 
              Send me a message and I'll respond as soon as possible.
            </p>
          </motion.div>

          {/* Single Contact Details Block (full section) */}
          <div className="max-w-3xl mx-auto">
            <motion.div variants={itemVariants}>
              <div className="card space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Let's Connect
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  You can reach me directly using the details below. Feel free to email, call, or
                  connect with me on social platforms for opportunities, collaborations, or any questions.
                </p>

                <div className="grid gap-4 md:grid-cols-3">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center p-4 bg-gray-50 dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 shadow-sm"
                    >
                      <div className="mb-3">
                        <div className="w-11 h-11 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                          <info.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                        </div>
                      </div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {info.title}
                      </h3>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-gray-600 dark:text-gray-400 break-all">
                          {info.value}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 dark:border-dark-700 pt-4">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Also Connect On
                  </h3>
                  <div className="flex space-x-4">
                    {socialLinks.map(({ icon: Icon, href, label }) => (
                      <motion.a
                        key={label}
                        href={href}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 rounded-full transition-colors duration-200"
                        aria-label={label}
                      >
                        <Icon size={20} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="card max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm passionate about creating innovative solutions using AI and machine learning. 
                Whether you need a data scientist for your next project, want to collaborate on 
                research, or are looking for someone to help bring your AI vision to life, 
                I'm here to help. Let's discuss how we can work together to achieve your goals.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
