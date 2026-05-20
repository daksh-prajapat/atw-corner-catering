'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiMapPin, FiPhone, FiMail, FiSend, FiMessageCircle, 
  FiCheckCircle, FiArrowRight, FiGlobe, FiThumbsUp, FiClock 
} from 'react-icons/fi';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      alert('✅ Message sent! We will contact you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setStatus('');
    }, 1500);
  };

  const contactInfo = [
    { icon: FiPhone, title: 'Call Us', value: '+91 97178 23822', link: 'tel:+919717823822', delay: 0, color: 'from-blue-500 to-cyan-500' },
    { icon: FiPhone, title: 'Alternate', value: '+91 98914 98376', link: 'tel:+919891498376', delay: 0.1, color: 'from-blue-500 to-cyan-500' },
    { icon: FiMessageCircle, title: 'WhatsApp', value: 'Chat on WhatsApp', link: 'https://wa.me/919717823822', delay: 0.2, color: 'from-green-500 to-emerald-500' },
    { icon: FiMail, title: 'Email', value: 'atwcorner43@gmail.com', link: 'mailto:atwcorner43@gmail.com', delay: 0.3, color: 'from-purple-500 to-pink-500' },
    { icon: FiMapPin, title: 'Location', value: 'Delhi, India (Serving All India)', link: null, delay: 0.4, color: 'from-orange-500 to-red-500' },
  ];

  const stats = [
    { icon: FiGlobe, value: 'All India', label: 'Service Coverage', color: 'from-orange-500 to-red-500', delay: 0.5 },
    { icon: FiThumbsUp, value: '98%', label: 'Customer Satisfaction', color: 'from-green-500 to-emerald-500', delay: 0.6 },
    { icon: FiClock, value: 'Quick', label: 'Response Time', color: 'from-blue-500 to-cyan-500', delay: 0.7 },
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
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="pt-20 pb-16 bg-gradient-to-b from-white to-orange-50/30">
      {/* Hero Section */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-700 to-red-700">
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse animation-delay-2000" />
          </div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
            className="mb-4"
          >
            <FiMessageCircle className="w-12 h-12 text-orange-300 mx-auto" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3"
          >
            Get in <span className="text-orange-300">Touch</span>
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100px' }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full mb-4"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-base md:text-lg max-w-2xl"
          >
            We'd love to hear from you. Get in touch for bookings and inquiries
          </motion.p>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ x: 5, scale: 1.02 }}
                className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center shadow-md`}>
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} target="_blank" className="text-orange-600 font-medium hover:underline">
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-600">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
            
            {/* WhatsApp Big Button */}
            <motion.a
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -2 }}
              href="https://wa.me/919717823822"
              target="_blank"
              className="block text-center py-3.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 mt-4"
            >
              <FiMessageCircle className="w-5 h-5" />
              Chat on WhatsApp
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </motion.a>

            {/* Stats Section */}
            <div className="mt-8 pt-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">Why Choose Us?</h3>
              <div className="grid grid-cols-3 gap-3">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: stat.delay }}
                    whileHover={{ y: -5 }}
                    className="text-center p-3 bg-white rounded-xl shadow-md"
                  >
                    <div className={`w-10 h-10 mx-auto bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mb-2`}>
                      <stat.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-sm font-bold text-gray-800">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            animate="visible"
            className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
          >
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Send us a Message</h2>
              <p className="text-gray-500 text-sm mt-1">We'll get back to you as soon as possible</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name *"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                />
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address *"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                />
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number *"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300"
                />
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.2 }}>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your event / Message *"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 resize-none"
                />
              </motion.div>
              
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                  status === 'sending'
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-lg'
                }`}
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
            
            <div className="mt-6 pt-6 border-t border-gray-100 text-center">
              <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                <FiCheckCircle className="text-green-500 w-5 h-5" />
                <span>Usually responds within a few hours</span>
              </div>
              <p className="text-xs text-gray-400 mt-2">We respect your privacy. Your information is safe with us.</p>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center">Our Service Area</h3>
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&h=400&fit=crop"
                alt="India Map"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                <p className="text-sm font-semibold">📍 Serving Across India</p>
                <p className="text-xs opacity-80">Delhi NCR | Rajasthan | Uttar Pradesh | And More</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}