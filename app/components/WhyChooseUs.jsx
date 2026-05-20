'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiAward, FiShield, FiBriefcase, FiSmile, FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

const features = [
  {
    icon: FiAward,
    title: 'Experience Counts',
    desc: '15+ years of experience in catering. Premium food items with rich taste and hygiene.',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-100',
    hoverBg: 'group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-red-500',
    iconColor: 'text-orange-500',
    delay: 0,
  },
  {
    icon: FiShield,
    title: 'Quality Assurance',
    desc: 'Best quality of food and beverages with strict quality tests and experienced chefs.',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-100',
    hoverBg: 'group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-emerald-500',
    iconColor: 'text-green-500',
    delay: 0.1,
  },
  {
    icon: FiBriefcase,
    title: 'Event Management',
    desc: 'Passionate, professional, and experienced team to ensure your event is a huge success.',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-100',
    hoverBg: 'group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500',
    iconColor: 'text-blue-500',
    delay: 0.2,
  },
  {
    icon: FiSmile,
    title: '100% Satisfaction',
    desc: 'Client satisfaction is our true parameter of success.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-100',
    hoverBg: 'group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500',
    iconColor: 'text-purple-500',
    delay: 0.3,
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

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
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-orange-50 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 bg-gradient-to-r from-orange-500/10 to-red-500/10 text-orange-600 rounded-full text-sm font-semibold mb-4 border border-orange-500/20"
          >
            ✨ Why Choose Us ✨
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-2"
          >
            What Makes Us{' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Special
            </span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '80px' }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mt-4 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto mt-4"
          >
            Over 15 years of excellence in pure veg catering services
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden cursor-pointer"
            >
              {/* Animated Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Icon Container with 3D Effect */}
              <div className="relative mb-5">
                <div className={`w-20 h-20 mx-auto ${feature.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-md group-hover:shadow-xl`}>
                  <feature.icon className={`w-10 h-10 ${feature.iconColor} group-hover:text-white transition-all duration-300`} />
                </div>
                {/* Floating Badge Effect */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <FiArrowRight className="text-white w-3 h-3" />
                </div>
              </div>

              {/* Title with Gradient on Hover */}
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-red-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.desc}
              </p>

              {/* Animated Border Bottom */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-3/4 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Learn More About Us
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}