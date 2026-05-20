'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { FiMapPin, FiPhone, FiMail, FiMessageCircle, FiGithub, FiLinkedin, FiInstagram, FiHeart, FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, link: 'https://github.com/daksh-prajapat', label: 'GitHub', color: 'hover:text-gray-900' },
    { icon: FiLinkedin, link: 'https://www.linkedin.com/in/lokesh-prajapat-354352312', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: FiInstagram, link: 'https://instagram.com/lokeshprajapat', label: 'Instagram', color: 'hover:text-pink-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <footer className="relative bg-gradient-to-b from-white to-orange-50/50 border-t border-gray-100 pt-16 pb-8 overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 left-10 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, -30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'linear', delay: 2 }}
          className="absolute bottom-20 right-10 w-80 h-80 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: 'spring' }}
        whileHover={{ y: -5, scale: 1.1 }}
        className="fixed bottom-6 right-6 z-50 p-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <FiArrowUp className="w-5 h-5" />
      </motion.button>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-4"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">ATW</span>
                <span className="text-gray-800">-Corner</span>
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mt-2">
                100% Pure Vegetarian Catering Services in Delhi & All India.
                Making your events memorable with delicious food since 2010.
              </p>
            </motion.div>
            <motion.div variants={itemVariants} className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className={`p-2 bg-gray-100 rounded-lg text-gray-600 ${social.color} hover:bg-gray-200 transition-all duration-300`}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-gray-800 mb-4 relative inline-block">
                Quick Links
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
              </h4>
            </motion.div>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Menu', 'Gallery', 'Contact'].map((link, idx) => (
                <motion.li key={link} variants={itemVariants}>
                  <Link
                    href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-gray-500 hover:text-orange-500 transition-all duration-300 text-sm flex items-center gap-2 hover:translate-x-1"
                  >
                    <span className="w-1 h-1 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition" />
                    {link}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-gray-800 mb-4 relative inline-block">
                Our Services
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
              </h4>
            </motion.div>
            <ul className="space-y-2">
              {['Wedding Catering', 'Corporate Events', 'Birthday Parties', 'Engagement Ceremony', 'Anniversary Celebration'].map((service, idx) => (
                <motion.li key={service} variants={itemVariants}>
                  <Link
                    href="/services"
                    className="text-gray-500 hover:text-orange-500 transition-all duration-300 text-sm flex items-center gap-2 hover:translate-x-1"
                  >
                    {service}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-gray-800 mb-4 relative inline-block">
                Contact Info
                <div className="absolute -bottom-1 left-0 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
              </h4>
            </motion.div>
            <ul className="space-y-3 text-sm">
              <motion.li variants={itemVariants} className="flex items-start gap-3 text-gray-500 hover:text-gray-700 transition">
                <FiMapPin className="text-orange-500 w-5 h-5 mt-0.5" />
                <span>Delhi, India<br />(Serving All India)</span>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="tel:+919717823822" className="flex items-center gap-3 text-gray-500 hover:text-orange-500 transition group">
                  <FiPhone className="text-orange-500 w-4 h-4" />
                  <span className="group-hover:translate-x-1 transition">+91 97178 23822</span>
                </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="tel:+919891498376" className="flex items-center gap-3 text-gray-500 hover:text-orange-500 transition group">
                  <FiPhone className="text-orange-500 w-4 h-4" />
                  <span className="group-hover:translate-x-1 transition">+91 98914 98376</span>
                </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="https://wa.me/919717823822" target="_blank" className="flex items-center gap-3 text-gray-500 hover:text-green-500 transition group">
                  <FiMessageCircle className="text-green-500 w-4 h-4" />
                  <span className="group-hover:translate-x-1 transition">Chat on WhatsApp</span>
                </a>
              </motion.li>
              <motion.li variants={itemVariants}>
                <a href="mailto:atwcorner43@gmail.com" className="flex items-center gap-3 text-gray-500 hover:text-orange-500 transition group">
                  <FiMail className="text-orange-500 w-4 h-4" />
                  <span className="group-hover:translate-x-1 transition">atwcorner43@gmail.com</span>
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="border-t border-gray-200 mt-10 pt-6 text-center"
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} ATW-Corner. All rights reserved. | Pure Vegetarian
          </p>
          <p className="text-gray-400 text-xs mt-2 flex items-center justify-center gap-1">
            Built with 
            <FiHeart className="w-3 h-3 text-red-500 animate-pulse" /> 
            using Next.js & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
}