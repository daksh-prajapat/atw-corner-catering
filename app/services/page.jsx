'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiHeart, FiBriefcase, FiGift, FiUsers, FiStar, FiArrowRight, FiArrowLeft } from 'react-icons/fi';

const services = [
  { 
    slug: 'wedding-catering', 
    icon: FiHeart, 
    title: 'Wedding Catering', 
    description: 'Make your special day unforgettable with our exquisite pure veg wedding catering.',
    color: 'from-pink-500 to-rose-500',
    delay: 0,
  },
  { 
    slug: 'corporate-catering', 
    icon: FiBriefcase, 
    title: 'Corporate Events', 
    description: 'Professional pure veg catering for business occasions and conferences.',
    color: 'from-blue-500 to-cyan-500',
    delay: 0.1,
  },
  { 
    slug: 'birthday-catering', 
    icon: FiGift, 
    title: 'Birthday Parties', 
    description: 'Celebrate birthdays with delicious pure veg food that everyone will love.',
    color: 'from-green-500 to-emerald-500',
    delay: 0.2,
  },
  { 
    slug: 'engagement-catering', 
    icon: FiUsers, 
    title: 'Engagement Ceremony', 
    description: 'Make your engagement memorable with our exquisite pure veg catering services.',
    color: 'from-purple-500 to-pink-500',
    delay: 0.3,
  },
  { 
    slug: 'anniversary-catering', 
    icon: FiStar, 
    title: 'Anniversary Celebration', 
    description: 'Celebrate your milestone anniversary with our premium pure veg catering.',
    color: 'from-yellow-500 to-orange-500',
    delay: 0.4,
  },
];

export default function ServicesIndex() {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <div className="pt-32 pb-20 bg-gradient-to-b from-white to-orange-50/30">
      <div className="container-custom">
        {/* Back to Home Button */}
        <div className="mb-6">
          <Link href="/">
            <motion.div
              whileHover={{ x: -5 }}
              className="inline-flex items-center gap-2 text-orange-500 font-semibold cursor-pointer"
            >
              <FiArrowLeft /> Back to Home
            </motion.div>
          </Link>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-4 py-1.5 bg-gradient-to-r from-orange-500/10 to-red-500/10 text-orange-600 rounded-full text-sm font-semibold mb-4 border border-orange-500/20"
          >
            🍽️ Our Services 🍽️
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            What We{' '}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Offer
            </span>
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '80px' }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full mb-4"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Explore our premium pure veg catering services for all your special occasions
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer"
            >
              {/* Icon with Animated Gradient */}
              <div className="relative mb-4">
                <div className={`w-20 h-20 mx-auto bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300 group-hover:rotate-6`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                {/* Floating Badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <FiArrowRight className="text-white w-3 h-3" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-2 text-center group-hover:text-orange-500 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm mb-4 text-center">
                {service.description}
              </p>

              {/* View Details Link */}
              <Link href={`/services/${service.slug}`}>
                <div className="flex items-center justify-center gap-1 text-orange-500 font-semibold group-hover:gap-2 transition-all duration-300 cursor-pointer">
                  View Details 
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>

              {/* Animated Bottom Border */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-3/4 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <span>Need Custom Service?</span>
              <FiArrowRight className="group-hover:translate-x-1 transition" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}