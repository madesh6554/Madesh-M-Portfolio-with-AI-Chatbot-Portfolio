import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/madesh6554', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/madesh-m-15037b273', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/ChoCoKingMadesh', label: 'Twitter' },
    { icon: Mail, href: 'mailto:madesh6554@gmail.com', label: 'Email' },
  ];

  const portfolioLinks = [
    { name: 'Canva Portfolio', href: 'https://madesh6554-portfolio.my.canva.site/', external: true },
    { name: 'Tableau Public', href: 'https://public.tableau.com/app/profile/madesh.m7198/vizzes', external: true },
    { name: 'Kaggle Profile', href: 'https://www.kaggle.com/madesh6554', external: true },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-dark-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.h3
              className="text-2xl font-bold text-primary-400"
              whileHover={{ scale: 1.05 }}
            >
              Madesh M
            </motion.h3>
            <p className="text-gray-400 leading-relaxed">
              AI & ML Engineer | Data Scientist | Computer Vision Enthusiast
            </p>
            <p className="text-gray-400 text-sm">
              Passionate about creating intelligent solutions that make a difference.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>

            {/* Portfolio Links */}
            <div className="pt-4">
              <h5 className="text-md font-semibold text-white mb-2">Portfolio</h5>
              <ul className="space-y-2">
                {portfolioLinks.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      target={link.external ? "_blank" : "_self"}
                      rel={link.external ? "noopener noreferrer" : ""}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect With Me</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <a
                  href="mailto:madesh6554@gmail.com"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                >
                  madesh6554@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary-400 rounded-full"></div>
                </div>
                <span className="text-gray-400">
                  Dharmapuri, Tamil Nadu
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-gray-800 hover:bg-primary-600 rounded-full transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>© {currentYear} Madesh M. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.div>
              <span>and lots of ☕</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400 text-center sm:text-left">
              <span>Built with React & Tailwind CSS</span>
              <span>•</span>
              <span>Powered by AI & ML</span>
            </div>
          </div>
        </motion.div>

        {/* Future AI Chatbot Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 p-4 bg-gradient-to-r from-primary-600/20 to-primary-400/20 rounded-lg border border-primary-600/30"
        >
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <div>
              <h5 className="text-white font-semibold">Personal AI Assistant Available!</h5>
              <p className="text-gray-300 text-sm">
                Variant 2.0 Loading... ⏳. Stay tuned for timeline updates and more interactive features!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
