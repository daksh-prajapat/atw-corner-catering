'use client';

import { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { FiUsers, FiSmile, FiCheckCircle, FiAward } from 'react-icons/fi';

const stats = [
  { 
    label: 'Our Customers', 
    value: 2000, 
    suffix: '+', 
    icon: FiUsers, 
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-100',
    delay: 0 
  },
  { 
    label: 'Happy Clients', 
    value: 1700, 
    suffix: '+', 
    icon: FiSmile, 
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-100',
    delay: 0.1 
  },
  { 
    label: 'Projects Complete', 
    value: 2500, 
    suffix: '+', 
    icon: FiCheckCircle, 
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-100',
    delay: 0.2 
  },
  { 
    label: 'Years Experience', 
    value: 15, 
    suffix: '+', 
    icon: FiAward, 
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-100',
    delay: 0.3 
  },
];

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, type: 'spring', stiffness: 200 } 
    },
  };

  return (
    <section ref={sectionRef} className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-b from-white to-orange-50/30">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute top-10 left-10 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear', delay: 2 }}
            className="absolute bottom-10 right-10 w-80 h-80 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          />
        </div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-orange-500/10 to-red-500/10 text-orange-600 rounded-full text-sm font-semibold border border-orange-500/20">
            📊 Our Achievements
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
            By the{' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Numbers
            </span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isVisible ? { width: '80px' } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-3 rounded-full"
          />
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            15+ years of excellence in pure veg catering services
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.03 }}
              className={`relative ${stat.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden group`}
            >
              {/* Animated Gradient Border on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className="mb-4">
                <div className={`w-14 h-14 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Value with CountUp */}
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-1">
                {isVisible ? <CountUp end={stat.value} duration={2.5} /> : 0}{stat.suffix}
              </div>

              {/* Label */}
              <div className="text-sm md:text-base text-gray-600 font-medium">
                {stat.label}
              </div>

              {/* Animated Bottom Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ delay: 0.6, type: 'spring' }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md border border-gray-100">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 24 24">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <span className="font-semibold text-gray-800">Trusted by 5000+ Families</span>
            <span className="text-gray-500 text-sm">| Since 2010</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}